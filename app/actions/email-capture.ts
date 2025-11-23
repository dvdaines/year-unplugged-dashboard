'use server';

export async function captureEmail(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email || !email.includes('@')) {
    return { success: false, error: 'Please enter a valid email address' };
  }

  const KIT_API_KEY = process.env.KIT_API_KEY;
  const KIT_FORM_ID = process.env.KIT_FORM_ID;

  if (!KIT_API_KEY || !KIT_FORM_ID) {
    console.error('ConvertKit API credentials not configured');
    return { success: false, error: 'Configuration error. Please try again later.' };
  }

  try {
    const params = new URLSearchParams({
      api_key: KIT_API_KEY,
      email: email.trim().toLowerCase(),
    });

    const response = await fetch(`https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('ConvertKit API error:', data);
      return { success: false, error: data.error || 'Something went wrong' };
    }

    return { success: true, message: 'Thanks – check your mail to confirm!' };
  } catch (error) {
    console.error('Error subscribing email to ConvertKit:', error);
    return { success: false, error: 'Network error – try again later' };
  }
}

