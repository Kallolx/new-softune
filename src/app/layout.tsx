import type { Metadata, Viewport } from "next";
import "./globals.css";
import { dmSans, chakraPetch } from "./components/ui/fonts";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://softune.com'), // Replace with your actual domain
  title: {
    default: "Softune - Simplify Your Music Experience",
    template: "%s | Softune"
  },
  description: "Softune helps you organize, discover, and enjoy your music collection like never before. Professional music management, web design, and digital marketing services.",
  keywords: [
    "music management",
    "web design",
    "digital marketing",
    "SEO services",
    "social media marketing",
    "content creation",
    "web hosting",
    "professional videography",
    "photography services"
  ],
  authors: [{ name: "Softune Team" }],
  creator: "Softune",
  publisher: "Softune",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#000000'
      }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://softune.com',
    siteName: 'Softune',
    title: 'Softune - Simplify Your Music Experience',
    description: 'Professional music management, web design, and digital marketing services. Transform your digital presence with Softune.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Softune - Professional Digital Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softune - Simplify Your Music Experience',
    description: 'Professional music management, web design, and digital marketing services. Transform your digital presence with Softune.',
    images: ['/twitter-image.jpg'],
    creator: '@softune',
    site: '@softune',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://softune.com',
    languages: {
      'en-US': 'https://softune.com',
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      </head>
      <body className={`${dmSans.variable} ${chakraPetch.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
