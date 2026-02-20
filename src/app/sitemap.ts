import type { MetadataRoute } from "next";
import { BRANCHES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://atchayagoldcompany.com";

    const branchPages = BRANCHES.map((branch) => ({
        url: `${baseUrl}/branches/${branch.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...branchPages,
    ];
}
