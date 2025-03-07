import type { Metadata } from "next";
import "./globals.css";
import { dmSans, chakraPetch } from "./components/ui/fonts";
import CookieConsent from "./components/CookieConsent";

export const metadata: Metadata = {
  title: "SofTune - Simplify Your Music Experience",
  description: "SofTune helps you organize, discover, and enjoy your music collection like never before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${chakraPetch.variable} antialiased`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
