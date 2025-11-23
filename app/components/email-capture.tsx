'use client';

import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<'' | 'success' | 'error'>('');
  const [msgText, setMsgText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setMsgText('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('success');
        setMsgText(data.message || 'Thanks – check your mail to confirm! (check spam folder)');
        setEmail('');
      } else {
        setMessage('error');
        setMsgText(data.error || 'Something went wrong');
      }
    } catch {
      setMessage('error');
      setMsgText('Network error – try again later');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email goes here"
          required
          disabled={isSubmitting}
          className="px-4 py-2.5 rounded-full border border-[rgba(30,27,22,0.08)] bg-white/60 backdrop-blur-sm text-base text-ink placeholder:text-muted-ink focus:outline-none focus:ring-2 focus:ring-[rgba(47,42,37,0.25)] focus:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed min-w-0 sm:min-w-[280px]"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending…' : 'Sign up'}
        </button>
      </div>
      {message && (
        <p className={`mt-3 text-sm text-center ${message === 'success' ? 'text-ink' : 'text-red-600'}`}>
          {msgText}
        </p>
      )}
    </form>
  );
}

