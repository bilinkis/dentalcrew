import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.dentalcrew.com.ar"),
  title: "Dental Crew | Odontología en Caballito",
  description:
    "Clínica dental en Caballito. Implantes Straumann, CEREC en el día, blanqueamiento Philips Zoom y ortodoncia transparente. Pedí tu turno por WhatsApp.",
  themeColor: "#0d6efd",
  alternates: { canonical: "https://www.dentalcrew.com.ar/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Dental Crew",
    title: "Dental Crew | Odontología en Caballito",
    description:
      "Implantes, CEREC en el día, blanqueamiento Philips Zoom y ortodoncia transparente.",
    url: "https://www.dentalcrew.com.ar/",
    images: [{ url: "/img/og-cover.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Crew | Odontología en Caballito",
    description: "Tratamientos de última generación. Pedí tu turno.",
    images: ["/img/og-cover.png"],
  },
  robots: { index: true, follow: true, maxImagePreview: "large" },
  icons: { icon: "/img/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dental Crew",
    url: "https://www.dentalcrew.com.ar/",
    image: "https://www.dentalcrew.com.ar/img/og-cover.png",
    telephone: "+54 11 7079-2121",
    address: {
      "@type": "PostalAddress",
      streetAddress: "República de Indonesia 73",
      addressLocality: "Caballito",
      addressRegion: "CABA",
      addressCountry: "AR",
    },
    openingHours: "Mo-Fr 09:00-19:30",
    sameAs: ["https://wa.me/541144720286"],
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://stackpath.bootstrapcdn.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&family=Raleway:wght@600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <Script id="json-ld" type="application/ld+json">
          {JSON.stringify(ld)}
        </Script>
        <Script id="shapo-embed" src="https://cdn.shapo.io/js/embed.js" strategy="lazyOnload" />
        <Script id="hide-undefined" strategy="afterInteractive">
          {`(function(){function h(){document.querySelectorAll('.undefined:not(.star-rating)').forEach(el=>{el.style.setProperty('display','none','important');el.setAttribute('aria-hidden','true');});}h();const mo=new MutationObserver(h);mo.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class','style']});window.addEventListener('load',h);}())`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
