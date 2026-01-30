import { Category, Subcategory, categories } from './categories';

type FindResult =
    | { type: 'category'; data: Category }
    | { type: 'subcategory'; data: Subcategory; parent: Category };

export function findCategoryBySlug(slug: string): FindResult | null {
    for (const cat of categories) {
        if (cat.slug === slug) {
            return { type: 'category', data: cat };
        }
        const sub = cat.subcategories.find(s => s.slug === slug);
        if (sub) {
            return { type: 'subcategory', data: sub, parent: cat };
        }
    }
    return null;
}

export function getAllCategorySlugs() {
    const slugs: string[] = [];
    for (const cat of categories) {
        slugs.push(cat.slug);
        for (const sub of cat.subcategories) {
            slugs.push(sub.slug);
        }
    }
    return slugs;
}
