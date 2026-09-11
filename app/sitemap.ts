import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://smriti-midnight-studio.stutipandey2507.chatgpt.site",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
