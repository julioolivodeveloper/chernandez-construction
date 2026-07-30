import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "C Hernandez Construction | Licensed General Contractor – Ceres & Modesto, CA",
  description: "Licensed General Contractor (Lic. #1106454) specializing in Residential Framing, ADUs & Additions in Ceres, Modesto and the Central Valley. Call (209) 241-3765 for a free estimate.",
  keywords: "general contractor Ceres CA, residential framing Modesto, ADU construction Central Valley, room additions Ceres, C Hernandez Construction",
  openGraph: {
    title: "C Hernandez Construction | Licensed General Contractor",
    description: "Residential Framing, ADUs & Additions in Ceres and Modesto, CA. Lic. #1106454",
    type: "website",
    locale: "en_US",
    siteName: "C Hernandez Construction",
  },
  robots: {
    index: true,
    follow: true,
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
              "telephone": "(209) 241-3765",
              "url": "https://chernandezconstructionchg.com",
              "image": "https://chernandezconstructionchg.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ceres",
                "addressRegion": "CA",
                "postalCode": "95307",
                "addressCountry": "US"
              },
              "areaServed": [
                { "@type": "City", "name": "Ceres" },
                { "@type": "City", "name": "Modesto" },
                { "@type": "City", "name": "Turlock" },
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
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "license",
                "name": "California Contractor License",
                "identifier": "#1106454"
              },
              "sameAs": [
                "https://maps.app.goo.gl/z2UaDBrEoabbagax5"
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
