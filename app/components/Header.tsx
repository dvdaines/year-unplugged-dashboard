import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
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
    </div>
  );
}

export default function Header() {
  return (
    <header className="mb-8">
      {/* Top utility bar (styled like your other panels) */}
      <div className="mb-6 border border-[rgba(30,27,22,0.08)] rounded-lg px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Email Updates */}
          {/* <Link
            href="#email-updates"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-ink hover:text-ink transition-colors"
            aria-label="Jump to email updates signup"
          >
            <Mail size={16} className="opacity-80" />
            <span>Emails</span>
          </Link> */}

          {/* Right: Follow along + icons */}
          <div className="flex items-center gap-3">
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
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/yu-mark.svg"
            width={40}
            height={40}
            alt="Year Unplugged logo"
            className="inline-block select-none"
            priority
          />
          <h1 className="font-display text-[34px] leading-tight sm:text-[42px] tracking-[-0.01em] whitespace-nowrap">
            Year Unplugged
          </h1>
        </Link>

        <p className="text-base sm:text-xl text-muted-ink font-medium text-right sm:text-left whitespace-nowrap">
          <i>1 year, 0 screens, 100s of biomarkers</i>
        </p>
      </div>
    </header>
  );
}
