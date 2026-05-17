import type { Metadata } from "next";
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
    title: "Miss Floss | AI Receptionist for Dental Clinics",
    description:
      "24/7 AI voice receptionist that books appointments, answers calls, and handles patient inquiries for dental clinics across Canada.",
    type: "website",
    locale: "en_CA",
    siteName: "Miss Floss",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miss Floss | AI Receptionist for Dental Clinics",
    description: "24/7 AI voice receptionist built for Canadian dental clinics.",
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
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        <script dangerouslySetInnerHTML={{ __html: "window.scrollTo(0,0);" }} />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
