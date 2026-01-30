import { businesses, municipios } from '@/data/db';
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

    // Municipality routes
    const municipalityRoutes = municipios.map((m) => ({
        url: `${BASE_URL}/${m.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Category and Subcategory in municipality routes
    const categoryRoutes: any[] = [];
    for (const muni of municipios) {
        for (const cat of categories) {
            // Main category
            categoryRoutes.push({
                url: `${BASE_URL}/${muni.slug}/${cat.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.7,
            });
            // Subcategories
            for (const sub of cat.subcategories) {
                categoryRoutes.push({
                    url: `${BASE_URL}/${muni.slug}/${sub.slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'weekly' as const,
                    priority: 0.65,
                });
            }
        }
    }

    // Business detail routes
    const businessRoutes = businesses.map((b) => ({
        url: `${BASE_URL}/${b.municipio}/${b.categoria}/${b.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...municipalityRoutes, ...categoryRoutes, ...businessRoutes];
}
