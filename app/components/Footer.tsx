import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-[rgba(30,27,22,0.08)]">
        <h3 className="font-display text-xl mb-3 text-center">Follow Along</h3>
      <div className="flex items-center justify-center gap-6">
        <Link
          href="https://x.com/daviddorg"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-opacity"
          aria-label="X / Twitter"
        >
          <Image
            src="/x-logo.svg"
            width={25}
            height={25}
            alt="X logo"
          />
        </Link>

        <Link
          href="https://www.youtube.com/@daviddorg"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-opacity"
          aria-label="YouTube"
        >
          <Image
            src="/youtube-logo.svg"
            width={32}
            height={32}
            alt="YouTube logo"
          />
        </Link>

        <Link
          href="https://www.tiktok.com/@daviddorg"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-opacity"
          aria-label="TikTok"
        >
          <Image
            src="/tiktok-logo.svg"
            width={30}
            height={30}
            alt="TikTok logo"
          />
        </Link>
      </div>
    </footer>
  );
}
