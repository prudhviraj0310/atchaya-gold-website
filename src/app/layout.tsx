import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atchaya Gold Company | Sell Gold at Best Price in Tamil Nadu | Instant Payment",
  description:
    "Sell your gold at the best market rate with instant payment. Trusted gold buyers in Panruti, Cuddalore, Neyveli, Thanjavur, Villupuram & more. Certified testing, transparent pricing, 8 branches across Tamil Nadu.",
  keywords: [
    "sell gold near me",
    "gold buyers Tamil Nadu",
    "best gold rate today",
    "instant gold payment",
    "gold buyer Panruti",
    "gold buyer Cuddalore",
    "sell gold online",
    "gold rate today",
  ],
  openGraph: {
    title: "Atchaya Gold Company | Best Gold Buyers in Tamil Nadu",
    description:
      "Get the best price for your gold with instant payment. 8 branches across Tamil Nadu. Certified testing & transparent pricing.",
    type: "website",
    locale: "en_IN",
    siteName: "Atchaya Gold Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atchaya Gold Company | Sell Gold at Best Price",
    description: "Trusted gold buyers in Tamil Nadu. Instant payment, certified testing, 8 branches.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#D4AF37",
  },
};

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Atchaya Gold Company",
  description: "Trusted gold buying company in Tamil Nadu offering best market rates with instant payment.",
  email: "contact@atchayagoldcompany.com",
  telephone: "+919585395856",
  url: "https://atchayagoldcompany.com",
  areaServed: "Tamil Nadu, India",
  priceRange: "₹₹₹",
  image: "/images/logo.png",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
