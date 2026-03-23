import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://salinapapa.org"; 

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/niayasala`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // add other pages you have, e.g:
    // { url: `${baseUrl}/habari`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
  ];
}