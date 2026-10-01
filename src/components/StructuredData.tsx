import { site, services, reasons } from "@/content/site";

export function StructuredData() {
  const { phone, email, address } = site.contact;

  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": ["MedicalBusiness", "MedicalClinic"],
        "@id": `${site.url}/#organization`,
        name: site.legalName,
        alternateName: site.name,
        slogan: site.tagline,
        url: site.url,
        logo: `${site.url}/icon.svg`,
        image: `${site.url}/opengraph-image`,
        description: site.description,
        medicalSpecialty: "Psychiatric",
        ...(phone && { telephone: phone }),
        ...(email && { email }),
        ...(address && { address }),
        availableService: [
          ...services.map((s) => ({
            "@type": "MedicalTherapy",
            name: s.title,
            description: s.intro ?? s.items.join(", "),
          })),
          {
            "@type": "MedicalTherapy",
            name: "Online Psychological Consultation",
            description: "Online counselling, therapy and consultation sessions.",
          },
        ],
        knowsAbout: services.flatMap((s) => s.items),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Psychological Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title },
          })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: site.title,
        description: site.description,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#organization` },
        mainEntity: {
          "@type": "ItemList",
          name: "Why Divyottam",
          itemListElement: reasons.map((r, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: r.title,
            description: r.text,
          })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
      }}
    />
  );
}
