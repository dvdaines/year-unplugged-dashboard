// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Inter } from "next/font/google";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
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

const THUMBNAIL = "/thumbnail.PNG";

export const metadata: Metadata = {
  metadataBase: new URL("https://yearunplugged.com"),
  title: "Year Unplugged: 1 year, 0 screens, 100s of biomarkers",
  description: "1 year, 0 screens, 100s of biomarkers",
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
    title: "Year Unplugged: 1 year, 0 screens, 100s of biomarkers",
    capable: true,
    statusBarStyle: "default",
  },
  themeColor: "#F6F1E8",
  openGraph: {
    type: "website",
    url: "https://yearunplugged.com",
    title: "Year Unplugged: 1 year, 0 screens, 100s of biomarkers",
    description: "1 year, 0 screens, 100s of biomarkers",
    images: [{ url: THUMBNAIL, width: 1200, height: 630, alt: "Year Unplugged" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@daviddorg",
    creator: "@daviddorg",
    title: "Year Unplugged: 1 year, 0 screens, 100s of biomarkers",
    description: "1 year, 0 screens, 100s of biomarkers",
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