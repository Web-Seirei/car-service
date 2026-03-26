import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "Автосервис BIP-MOBILE в Витебске - ремонт автомобилей с гарантией",
  description:
    "СТО BIP-MOBILE - ремонт легковых автомобилей и микроавтобусов всех марок в Витебске. Тормоза, подвеска, двигатель, трансмиссия. Прозрачные цены, гарантия на работы. Запись по телефону +375 29 599-01-69.",
  openGraph: {
    title: "Автосервис BIP-MOBILE - ремонт авто в Витебске",
    description:
      "Ремонт легковых автомобилей и микроавтобусов всех марок. Прозрачные цены, гарантия, индивидуальный подход.",
    type: "website",
    locale: "ru_BY",
    url: "https://car-service-steel.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "BIP-MOBILE",
  description:
    "Станция технического обслуживания автомобилей. Ремонт легковых автомобилей и микроавтобусов всех марок.",
  url: "https://car-service-steel.vercel.app/",
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
