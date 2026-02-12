export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    name: "Mtandao wa Sala wa Baba Mtakatifu Tanzania",
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
