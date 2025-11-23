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

export async function POST(req: NextRequest) {
  try {
    // 1. Parse & validate
    const body = await req.json();
    const { email } = body; // Client sends 'email'

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 });
    }

    // 2. Load env vars
    const apiKey = process.env.KIT_API_KEY; // Renamed for clarity
    const formId = process.env.KIT_FORM_ID;

    if (!apiKey || !formId) {
      console.error('Kit env vars missing');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // 3. Create subscriber (V4 uses 'email_address')
    const subscriberRes = await kitFetch('https://api.kit.com/v4/subscribers', {
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
  } catch (err: any) {
    console.error('Subscribe error:', err);
    return NextResponse.json(
      { error: err.message?.includes('Kit API') ? 'Subscription service unavailable' : 'Something went wrong' },
      { status: 500 }
    );
  }
}

