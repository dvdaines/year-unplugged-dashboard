'use client';

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    turnstile: {
      render: (element: HTMLElement | string, options: {
        sitekey: string;
        callback?: (token: string) => void;
        'error-callback'?: () => void;
        'expired-callback'?: () => void;
      }) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

interface EmailSubscriptionModalProps {
  onClose: () => void;
}

export default function EmailSubscriptionModal({ onClose }: EmailSubscriptionModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<'' | 'success' | 'error'>('');
  const [msgText, setMsgText] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);

  // Get Turnstile site key from environment (client-side)
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

  useEffect(() => {
    // Render Turnstile widget when script is loaded
    if (turnstileLoaded && turnstileContainerRef.current && turnstileSiteKey && window.turnstile) {
      try {
        const widgetId = window.turnstile.render(turnstileContainerRef.current, {
          sitekey: turnstileSiteKey,
          callback: (token: string) => {
            setTurnstileToken(token);
          },
          'error-callback': () => {
            setTurnstileToken(null);
          },
          'expired-callback': () => {
            setTurnstileToken(null);
          },
        });
        turnstileWidgetIdRef.current = widgetId;
      } catch (error) {
        console.error('Turnstile render error:', error);
      }
    }

    return () => {
      // Cleanup Turnstile widget
      if (turnstileWidgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(turnstileWidgetIdRef.current);
        } catch (error) {
          console.error('Turnstile cleanup error:', error);
        }
      }
    };
  }, [turnstileLoaded, turnstileSiteKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      setMessage('error');
      setMsgText('Please complete the verification');
      return;
    }

    setIsSubmitting(true);
    setMessage('');
    setMsgText('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, turnstileToken }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('success');
        setMsgText(data.message || 'Thanks – check your mail to confirm! (check spam folder)');
        setEmail('');
        // Reset Turnstile
        if (turnstileWidgetIdRef.current && window.turnstile) {
          window.turnstile.reset(turnstileWidgetIdRef.current);
        }
        setTurnstileToken(null);
      } else {
        setMessage('error');
        setMsgText(data.error || 'Something went wrong');
        // Reset Turnstile on error
        if (turnstileWidgetIdRef.current && window.turnstile) {
          window.turnstile.reset(turnstileWidgetIdRef.current);
        }
        setTurnstileToken(null);
      }
    } catch {
      setMessage('error');
      setMsgText('Network error – try again later');
      // Reset Turnstile on error
      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetIdRef.current);
      }
      setTurnstileToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        onLoad={() => setTurnstileLoaded(true)}
        strategy="lazyOnload"
      />
      
      <div className="fixed inset-0 z-50" onClick={onClose}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[rgba(237,230,218,0.72)] backdrop-blur-[2px]" />

        {/* Centering wrapper */}
        <div className="relative flex min-h-dvh items-center justify-center p-4 sm:p-6">
          {/* Panel */}
          <div
            className="w-full max-w-md bg-panel border border-[rgba(30,27,22,0.08)] rounded-lg shadow-sm overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-[rgba(30,27,22,0.08)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl">Email Updates</h2>
                  <p className="text-sm text-muted-ink mt-1">
                    Get notified when new updates are published
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="btn inline-flex items-center justify-center bg-panel border border-[rgba(30,27,22,0.08)] hover:bg-[rgba(237,230,218,0.8)] transition-colors shadow-sm cursor-pointer text-sm px-3 py-1.5 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 rounded-lg border border-[rgba(30,27,22,0.08)] bg-white/60 backdrop-blur-sm text-base text-ink placeholder:text-muted-ink focus:outline-none focus:ring-2 focus:ring-[rgba(47,42,37,0.25)] focus:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Turnstile widget */}
                {turnstileSiteKey && (
                  <div className="flex justify-center">
                    <div ref={turnstileContainerRef} />
                  </div>
                )}

                {message && (
                  <p
                    className={`text-sm text-center ${
                      message === 'success' ? 'text-ink' : 'text-red-600'
                    }`}
                  >
                    {msgText}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !turnstileToken}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing…' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

