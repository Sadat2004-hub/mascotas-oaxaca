import { categories, Category, Subcategory } from '@/data/categories';

export interface CategoryResult {
    type: 'category' | 'subcategory';
    data: Category | Subcategory;
    parent?: Category;
}

export function findCategoryBySlug(slug: string): CategoryResult | null {
    // Buscar en categorías principales
    const category = categories.find(c => c.slug === slug);
    if (category) {
        return { type: 'category', data: category };
    }

    // Buscar en subcategorías
    for (const cat of categories) {
        const subcategory = cat.subcategories.find(s => s.slug === slug);
        if (subcategory) {
            return { type: 'subcategory', data: subcategory, parent: cat };
        }
    }

    return null;
}
