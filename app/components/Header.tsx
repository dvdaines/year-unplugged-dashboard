import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-4 mb-8">
      
      {/* Clickable logo + title */}
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
    </header>
  );
}
