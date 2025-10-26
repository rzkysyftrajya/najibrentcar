const SchemaOrg = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "NJRC Rental Mobil Jakarta",
    description: "Sewa mobil harian, bulanan, dan event di Jakarta. Armada lengkap, harga terjangkau, layanan 24 jam.",
    url: "https://njrc-rental.vercel.app",
    telephone: "+6281234567890",
    email: "info@njrc-rental.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya Jakarta No. 123",
      addressLocality: "Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      postalCode: "12345",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2608,
      longitude: 106.7818,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "Rp 300.000 - Rp 2.500.000",
    image: "https://njrc-rental.vercel.app/og-image.jpg",
    sameAs: [
      "https://facebook.com/njrc-rental",
      "https://instagram.com/njrc-rental",
      "https://twitter.com/njrc-rental",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaOrg;
