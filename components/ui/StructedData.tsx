export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    name: "Mtandao wa Sala wa Baba Mtakatifu Tanzania",
    url: "https://salinapapa.org",           // ✅ add your domain
    logo: "https://salinapapa.org/logo.png", // ✅ helps Google show your logo
    description: "...",                       // ✅ short description in Swahili
    inLanguage: "sw",                         // ✅ tells crawlers it's Swahili
    sameAs: [                                 // ✅ social/external profiles
      "https://www.facebook.com/...",
      "https://www.popesprayer.va"
    ],
    contactPoint: {                           // optional but useful
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@salinapapa.org"
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Pontifical Prayer Network",
      url: "https://www.popesprayer.va"
    },
    areaServed: "Tanzania"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}