import type { Metadata } from "next";
import { Archivo, Sora } from "next/font/google";
import Header from "@/components/Header";
import FixedCta from "@/components/FixedCta";
import AdPopup from "@/components/AdPopup";
import { SITE } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.brandKo }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE.title,
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.schoolName} ${SITE.brandKo}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  icons: {
    icon: SITE.ogImage,
  },
  other: {
    "theme-color": "#0f1c18",
    "naver-site-verification": "ad5a237b95a1dc982c2fa4ea9285443b3927eb6c",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE.title,
  alternateName: [SITE.brandKo, SITE.brandEn, SITE.schoolName],
  description: SITE.description,
  image: SITE.ogImage,
  url: SITE.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    addressCountry: "KR",
    streetAddress: SITE.street,
  },
  areaServed: SITE.areaServed,
  keywords: SITE.keywords.join(","),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${sora.variable} ${archivo.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <FixedCta />
        {SITE.showPopup ? <AdPopup /> : null}
      </body>
    </html>
  );
}
