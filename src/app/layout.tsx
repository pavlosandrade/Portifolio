import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});



export const metadata: Metadata = {
  title: "Pavlos Kallidis de Andrade | Desenvolvedor Front-End & .NET",
  description: "Portfólio de Pavlos Kallidis de Andrade. Desenvolvedor especialista em Front-End (React, Next.js) e arquiteturas corporativas (.NET, C#).",
  keywords: [
    "Pavlos Kallidis de Andrade", "Pavlos Andrade", "Desenvolvedor Front-End", 
    "Desenvolvedor .NET", "Engenheiro de Software", "React", "Next.js", 
    "TypeScript", "JavaScript", "C#", "Portfólio Web", "Brasil"
  ],
  authors: [{ name: "Pavlos Kallidis de Andrade", url: "https://pavlosandrade.github.io/Portifolio/" }],
  creator: "Pavlos Kallidis de Andrade",
  metadataBase: new URL("https://pavlosandrade.github.io/Portifolio/"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://pavlosandrade.github.io/Portifolio/",
    title: "Pavlos Kallidis de Andrade | Desenvolvedor Front-End",
    description: "Especialista em Front-End (React, Next.js) e arquiteturas corporativas (.NET, C#). Conheça meu trabalho.",
    siteName: "Pavlos Andrade Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Imagem que será compartilhada (1200x630)
        width: 1200,
        height: 630,
        alt: "Pavlos Kallidis de Andrade - Portfólio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavlos Kallidis de Andrade | Desenvolvedor Front-End",
    description: "Especialista em Front-End (React, Next.js) e arquiteturas corporativas (.NET, C#).",
    images: ["/og-image.jpg"],
  },
  other: {
    // Geo tags para ajudar IAs locais e SEO regional
    "geo.region": "BR",
    "geo.placename": "Brasil",
    "geo.position": "-14.2350;-51.9253",
    "ICBM": "-14.2350, -51.9253"
  },
  alternates: {
    canonical: "https://pavlosandrade.github.io/Portifolio/",
  },
  verification: {
    google: "M3arvZvhm12sXkhgqz0C0DBvmOfBW1UBnQjivakv_oA",
  }
};

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import { profileData, skillsData, experienceData } from "@/services/data";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Coletando todas as habilidades em um array simples para o 'knowsAbout'
  const allSkills = skillsData.flatMap(category => category.items.map(item => item.name));
  
  // Pegando a empresa atual
  const currentCompany = experienceData[0]?.company || "Freelancer";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://pavlosandrade.github.io/Portifolio/#website",
        "url": "https://pavlosandrade.github.io/Portifolio/",
        "name": "Pavlos Kallidis de Andrade - Portfólio",
        "description": "Portfólio de Pavlos Kallidis de Andrade. Desenvolvedor especialista em Front-End (React, Next.js) e arquiteturas corporativas (.NET, C#).",
        "publisher": {
          "@id": "https://pavlosandrade.github.io/Portifolio/#person"
        },
        "inLanguage": "pt-BR"
      },
      {
        "@type": "ProfilePage",
        "@id": "https://pavlosandrade.github.io/Portifolio/#profile",
        "url": "https://pavlosandrade.github.io/Portifolio/",
        "name": "Pavlos Kallidis de Andrade - Portfólio",
        "isPartOf": {
          "@id": "https://pavlosandrade.github.io/Portifolio/#website"
        },
        "about": {
          "@id": "https://pavlosandrade.github.io/Portifolio/#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://pavlosandrade.github.io/Portifolio/#person",
        "name": profileData.name,
        "jobTitle": profileData.role,
        "description": profileData.about,
        "url": "https://pavlosandrade.github.io/Portifolio/",
        "email": profileData.email,
        "telephone": profileData.phone,
        "sameAs": Object.values(profileData.links),
        "worksFor": {
          "@type": "Organization",
          "name": currentCompany
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ribeirão Preto",
          "addressRegion": "SP",
          "addressCountry": "BR"
        },
        "knowsAbout": allSkills
      }
    ]
  };

  return (
    <html lang="pt-BR" className={urbanist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
