export default function sitemap() {
  const baseUrl = "https://sclinic-cuaxay1999.vercel.app/";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pricing-page`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact-page`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/view-news-detail`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/chain`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/profile`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/account`,
      lastModified: new Date(),
    },
  ];
}
