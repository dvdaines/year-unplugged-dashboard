// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});
const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const THUMBNAIL = "/thumbnail.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://yearunplugged.com"),
  title: "Year Unplugged — Prospective Year-Long Digital-Abstinence Study",
  description:
    "A prospective, year-long digital-abstinence study with dense physiologic and behavioral phenotyping—aiming to create the most comprehensive dataset to date on the health effects of eliminating screens for one year.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    title: "Year Unplugged",
    capable: true,
    statusBarStyle: "default",
  },
  themeColor: "#F6F1E8",
  openGraph: {
    type: "website",
    url: "https://yearunplugged.com",
    title: "Year Unplugged — Prospective Year-Long Digital-Abstinence Study",
    description:
      "Dense physiologic & behavioral phenotyping of a year without screens.",
    images: [{ url: THUMBNAIL, width: 1200, height: 630, alt: "Year Unplugged" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@daviddorg",
    creator: "@daviddorg",
    title: "Year Unplugged — Prospective Year-Long Digital-Abstinence Study",
    description:
      "Dense physiologic & behavioral phenotyping of a year without screens.",
    images: [THUMBNAIL],
  },
  other: {
    "og:image": THUMBNAIL,
    "og:image:width": "1200",
    "og:image:height": "630",
    "twitter:image": THUMBNAIL,
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F6F1E8",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-cream">
      <body className={`${display.variable} ${sans.variable} antialiased bg-cream text-ink`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}