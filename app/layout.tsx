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

export const metadata: Metadata = {
  metadataBase: new URL("https://davidd.org"),
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
    url: "https://davidd.org",
    title: "Year Unplugged",
    description:
      "What happens to your health when you don't use screens for a year?",
    images: [{ url: "/preview.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@daviddorg",
    creator: "@daviddorg",
    title: "Year Unplugged",
    description:
      "What happens to your health when you don't use screens for a year?",
    images: ["/preview.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
