import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { reviews, services } from "@/lib/data";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Ремонт авто в Витебске — СТО BIP-MOBILE | С 2015 года",
  description:
    "Ремонт легковых авто и микроавтобусов всех марок. Подвеска, двигатель, тормоза, ГРМ, масло. Гарантия на работы, прозрачные цены. Запишитесь онлайн!",
  keywords:
    "автосервис витебск, ремонт авто витебск, сто витебск, ремонт подвески, ремонт двигателя, замена масла, шиномонтаж, тормоза, ГРМ, BIP-MOBILE",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "BIP-MOBILE",
    title: "Автосервис BIP-MOBILE — ремонт авто всех марок в Витебске",
    description:
      "Профессиональный ремонт с 2015 года. 10+ лет опыта, гарантия на работы, прозрачные цены. Запишитесь на диагностику!",
    type: "website",
    locale: "ru_BY",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Автосервис BIP-MOBILE — ремонт авто всех марок в Витебске",
    description:
      "Профессиональный ремонт с 2015 года. 10+ лет опыта, гарантия на работы, прозрачные цены. Запишитесь на диагностику!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "BIP-MOBILE",
  description:
    "Станция технического обслуживания автомобилей. Ремонт легковых автомобилей и микроавтобусов всех марок.",
  url: SITE.url,
  telephone: "+375295990169",
  email: "lihomans@mail.ru",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Ломоносова 6, корп. 3",
    addressLocality: "Витебск",
    addressCountry: "BY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "55.179106",
    longitude: "30.182915",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  sameAs: ["https://www.instagram.com/bip.mobile"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: avgRating.toFixed(1),
    bestRating: "5",
    worstRating: "1",
    reviewCount: reviews.length.toString(),
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating.toString(),
      bestRating: "5",
    },
    reviewBody: r.text,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги автосервиса",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${jetBrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
