import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chernandezconstructionchg.com'),
  title: {
    default: "C Hernandez Construction | Licensed General Contractor – Ceres & Modesto, CA",
    template: "%s | C Hernandez Construction",
  },
  description: "Licensed General Contractor (Lic. #1106454) specializing in Residential Framing, ADUs & Additions in Ceres, Modesto and the Central Valley. Call (209) 241-3765 for a free estimate.",
  keywords: "general contractor Ceres CA, residential framing Modesto, ADU construction Central Valley, room additions Ceres, C Hernandez Construction, licensed contractor Stanislaus County",
  authors: [{ name: 'C Hernandez Construction', url: 'https://www.chernandezconstructionchg.com' }],
  creator: 'C Hernandez Construction',
  openGraph: {
    title: "C Hernandez Construction | Licensed General Contractor – Ceres, CA",
    description: "Residential Framing, ADUs & Additions in Ceres, Modesto, Turlock and the Central Valley. Lic. #1106454 · (209) 241-3765.",
    type: "website",
    locale: "en_US",
    siteName: "C Hernandez Construction",
    url: 'https://www.chernandezconstructionchg.com',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'C Hernandez Construction – Licensed General Contractor in Ceres, CA',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "C Hernandez Construction | Licensed Contractor – Ceres, CA",
    description: "ADUs, Framing & Additions in the Central Valley. Lic. #1106454.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://www.chernandezconstructionchg.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              "name": "C Hernandez Construction",
              "legalName": "C Hernandez Construction",
              "telephone": "+12092413765",
              "url": "https://www.chernandezconstructionchg.com",
              "image": "https://www.chernandezconstructionchg.com/og-image.jpg",
              "logo": "https://www.chernandezconstructionchg.com/logo.png",
              "description": "Licensed General Contractor (Lic. #1106454) specializing in ADU construction, residential framing, room additions, and remodeling in Ceres, Modesto, Turlock, Stockton, Tracy, and the Central Valley.",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ceres, CA",
                "addressLocality": "Ceres",
                "addressRegion": "CA",
                "postalCode": "95307",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 37.5949,
                "longitude": -120.9577
              },
              "areaServed": [
                { "@type": "City", "name": "Ceres", "sameAs": "https://en.wikipedia.org/wiki/Ceres,_California" },
                { "@type": "City", "name": "Modesto", "sameAs": "https://en.wikipedia.org/wiki/Modesto,_California" },
                { "@type": "City", "name": "Turlock", "sameAs": "https://en.wikipedia.org/wiki/Turlock,_California" },
                { "@type": "City", "name": "Stockton", "sameAs": "https://en.wikipedia.org/wiki/Stockton,_California" },
                { "@type": "City", "name": "Tracy", "sameAs": "https://en.wikipedia.org/wiki/Tracy,_California" },
                { "@type": "City", "name": "Manteca", "sameAs": "https://en.wikipedia.org/wiki/Manteca,_California" },
                { "@type": "City", "name": "Salida" },
                { "@type": "City", "name": "Riverbank" },
                { "@type": "City", "name": "Patterson" }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "07:00",
                  "closes": "18:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "9",
                "bestRating": "5",
                "worstRating": "1"
              },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "license",
                "name": "California Contractor License",
                "identifier": "1106454",
                "recognizedBy": { "@type": "Organization", "name": "California Contractors State License Board" }
              },
              "knowsAbout": ["ADU Construction", "Residential Framing", "Room Additions", "General Contracting", "Roofing", "Drywall", "Remodeling", "New Construction"],
              "sameAs": [
                "https://maps.app.goo.gl/z2UaDBrEoabbagax5",
                "https://www.buildzoom.com/contractor/c-hernandez-construction"
              ]
            })
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
