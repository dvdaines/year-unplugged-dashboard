import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const THUMBNAIL = "/thumbnail.png"; // Recommended size: 1200x630 (in /public)

export const metadata: Metadata = {
  metadataBase: new URL("https://yearunplugged.com"),
  title: "Year Unplugged",
  description: "What happens to your health when you don't use screens for a year?",
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
    statusBarStyle: "black-translucent",
  },
  themeColor: "#000000",

  openGraph: {
    type: "website",
    url: "https://yearunplugged.com",
    title: "Year Unplugged",
    description: "What happens to your health when you don't use screens for a year?",
    images: [
      {
        url: THUMBNAIL,
        width: 1200,
        height: 630,
        alt: "Year Unplugged — one-year screen-free experiment",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@daviddorg",
    creator: "@daviddorg",
    title: "Year Unplugged",
    description: "What happens to your health when you don't use screens for a year?",
    images: [THUMBNAIL],
  },

  other: {
    "og:image": THUMBNAIL,
    "og:image:width": "1200",
    "og:image:height": "630",
    "twitter:image": THUMBNAIL,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
