import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "@/components/cookie-banner";
import PreconnectHints from "@/components/preconnect-hints";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Miss Floss | AI Receptionist for Dental Clinics in Canada",
  description:
    "Miss Floss is an AI voice receptionist that answers every call, books appointments, and handles patient inquiries 24/7 — built for dental clinics in Toronto, the GTA, and across Canada.",
  keywords: [
    "AI receptionist for dental clinics",
    "dental AI receptionist",
    "dental office virtual receptionist",
    "AI dental office assistant",
    "dental clinic answering service",
    "AI voice receptionist Canada",
    "dental receptionist Toronto",
    "GTA dental clinic automation",
    "AI dental booking system",
    "dental front desk automation",
  ],
  openGraph: {
    title: "Miss Floss | AI Receptionist for Dental Clinics in Canada",
    description:
      "The average dental clinic misses 35% of inbound calls. Miss Floss answers every call, books every appointment, 24/7.",
    url: "https://missfloss.ai",
    siteName: "Miss Floss",
    images: [
      {
        url: "https://missfloss.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Miss Floss AI Receptionist for Dental Clinics",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miss Floss | AI Receptionist for Dental Clinics",
    description:
      "Never miss a call. Never lose a patient. Miss Floss runs your front desk 24/7.",
    images: ["https://missfloss.ai/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Miss Floss",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI voice receptionist for dental clinics. Books appointments, answers calls 24/7, sends SMS confirmations, and handles patient inquiries automatically.",
    offers: { "@type": "Offer", priceCurrency: "CAD" },
    provider: {
      "@type": "Organization",
      name: "Miss Floss",
      areaServed: ["Toronto", "Greater Toronto Area", "Canada"],
    },
  };

  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-B3Y0XESKEW" strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-B3Y0XESKEW');
      `}</Script>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased overflow-x-hidden">
        <script dangerouslySetInnerHTML={{ __html: "window.scrollTo(0,0);" }} />
        <PreconnectHints />
        {children}
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
