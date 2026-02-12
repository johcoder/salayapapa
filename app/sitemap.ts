import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://salinapapa.or.tz",
      priority: 1,
    },
    {
      url: "https://salinapapa.or.tz/niayasala",
      priority: 0.8,
    },
  ];
}
