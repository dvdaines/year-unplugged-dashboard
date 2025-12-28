import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-16 pt-8 border-t border-[rgba(30,27,22,0.08)]">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-ink">
          <Link href="/disclaimer" className="hover:text-ink transition-colors">
            Disclaimer
          </Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-ink transition-colors">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-ink transition-colors">
            Terms of Use
          </Link>
        </div>
        <p className="text-sm text-muted-ink">
          © {currentYear} Year Unplugged. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
