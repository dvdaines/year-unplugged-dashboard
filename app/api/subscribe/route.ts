import { NextRequest, NextResponse } from 'next/server';

// Helper: Fetch wrapper that throws on non-2xx
async function kitFetch(input: string, init?: RequestInit) {
  const res = await fetch(input, init);
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Kit API error ${res.status}: ${err}`);
  }
  return res.json();
}

// Verify Turnstile token
async function verifyTurnstileToken(token: string, remoteip?: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY not configured');
    return false;
  }

  try {
    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', token);
    if (remoteip) {
      formData.append('remoteip', remoteip);
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    // 1. Parse & validate
    const body = await req.json();
    const { email, turnstileToken } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 });
    }

    // 2. Verify Turnstile token
    if (!turnstileToken || typeof turnstileToken !== 'string') {
      return NextResponse.json({ error: 'Verification required' }, { status: 400 });
    }

    const remoteip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || undefined;
    const isValidToken = await verifyTurnstileToken(turnstileToken, remoteip);

    if (!isValidToken) {
      return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 400 });
    }

    // 2. Load env vars
    const apiKey = process.env.KIT_API_KEY; // Renamed for clarity
    const formId = process.env.KIT_FORM_ID;

    if (!apiKey || !formId) {
      console.error('Kit env vars missing');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // 3. Create subscriber (V4 uses 'email_address')
    await kitFetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers: {
        'X-Kit-Api-Key': apiKey, // V4 auth header
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email_address: email }), // 'email_address' key
    });

    // No need for subscriberId—V4 form add uses email_address directly (but create first to ensure existence)
    // 4. Add to form (endpoint: /subscribers, body: email_address)
    await kitFetch(`https://api.kit.com/v4/forms/${formId}/subscribers`, {
      method: 'POST',
      headers: {
        'X-Kit-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        // Optional: referrer: 'your-website.com' (for tracking)
      }),
    });

    return NextResponse.json({ success: true, message: 'Check your inbox to confirm! (check spam folder)' });
  } catch (err: unknown) {
    console.error('Subscribe error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json(
      { error: errorMessage.includes('Kit API') ? 'Subscription service unavailable' : 'Something went wrong' },
      { status: 500 }
    );
  }
}

