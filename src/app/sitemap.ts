import { businesses, ciudades } from '@/data/db';
import { categories } from '@/data/categories';
import { MetadataRoute } from 'next';

const BASE_URL = 'https://mascotasoaxaca.com';

export default function sitemap(): MetadataRoute.Sitemap {
    // Static routes
    const staticRoutes = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
    ];

    // City routes (Dynamic city pages)
    const cityRoutes = ciudades.map((c) => ({
        url: `${BASE_URL}/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Category and Subcategory in city routes
    const categoryRoutes: any[] = [];
    for (const city of ciudades) {
        for (const cat of categories) {
            // Main category
            categoryRoutes.push({
                url: `${BASE_URL}/${city.slug}/${cat.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.7,
            });
            // Subcategories
            for (const sub of cat.subcategories) {
                categoryRoutes.push({
                    url: `${BASE_URL}/${city.slug}/${sub.slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'weekly' as const,
                    priority: 0.65,
                });
            }
        }
    }

    // Business detail routes (Directly under root)
    const businessRoutes = businesses.map((b) => ({
        url: `${BASE_URL}/${b.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...cityRoutes, ...categoryRoutes, ...businessRoutes];
}
