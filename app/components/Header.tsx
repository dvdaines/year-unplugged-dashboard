'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import EmailSubscriptionModal from './email-subscription-modal';

function SocialIcons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* X */}
      <Link
        href="https://x.com/daviddorg"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-70 hover:opacity-100 transition-opacity"
        aria-label="X / Twitter"
      >
        <Image src="/x-logo.svg" width={22} height={22} alt="X logo" />
      </Link>

      {/* TikTok */}
      <Link
        href="https://www.tiktok.com/@daviddorg"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-70 hover:opacity-100 transition-opacity"
        aria-label="TikTok"
      >
        <Image src="/tiktok-logo.svg" width={26} height={26} alt="TikTok logo" />
      </Link>

      {/* YouTube */}
      <Link
        href="https://www.youtube.com/@daviddorg"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-70 hover:opacity-100 transition-opacity"
        aria-label="YouTube"
      >
        <Image src="/youtube-logo.svg" width={28} height={28} alt="YouTube logo" />
      </Link>
    </div>
  );
}

export default function Header() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!isEmailModalOpen) return;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [isEmailModalOpen]);

  return (
    <header className="mb-8">
      {/* Top utility bar */}
      <div className="mb-6 border border-[rgba(30,27,22,0.08)] rounded-lg px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Left: Email Updates */}
          <button
            onClick={() => setIsEmailModalOpen(true)}
            type="button"
            aria-label="Subscribe to email updates"
            className="inline-flex items-center gap-2 cursor-pointer"
          >
            {/* Text: styled like “Follow:” */}
            <span className="text-sm text-muted-ink whitespace-nowrap">
              Updates:
            </span>

            {/* Icon: same behavior as social icons */}
            <span className="opacity-70 hover:opacity-100 transition-opacity">
              <Image
                src="/email-logo.svg"
                width={30}
                height={30}
                alt="Email icon"
              />
            </span>
          </button>

          {/* Right: Follow + social icons */}
          <div className="ml-auto flex items-center gap-3">
            <span className="text-sm text-muted-ink whitespace-nowrap">
              Follow:
            </span>
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* Main header content */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity"
        >
          <Image
            src="/logo.svg"
            width={300}
            height={75}
            alt="Year Unplugged"
            className="inline-block select-none"
            priority
          />
        </Link>

        <p className="text-base sm:text-xl text-muted-ink font-medium text-right sm:text-left whitespace-nowrap">
          <i>1 year, 0 screens, 100s of biomarkers</i>
        </p>
      </div>

      {isEmailModalOpen && (
        <EmailSubscriptionModal onClose={() => setIsEmailModalOpen(false)} />
      )}
    </header>
  );
}
