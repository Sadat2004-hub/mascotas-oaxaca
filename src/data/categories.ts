export interface Subcategory {
    title: string;
    slug: string;
    filter?: string;
}

export interface Category {
    id: string;
    title: string;
    slug: string;
    icon: string;
    subcategories: Subcategory[];
}

export const categories: Category[] = [
    {
        id: 'salud-bienestar',
        title: 'Salud y Bienestar',
        slug: 'salud-y-bienestar',
        icon: 'HeartPulse',
        subcategories: [
            { title: 'Veterinarias', slug: 'veterinarias', filter: 'urgencias-24h' },
            { title: 'Fisioterapia y Rehabilitación', slug: 'fisioterapia' },
            { title: 'Esterilización y Campañas', slug: 'esterilizacion' }
        ]
    },
    {
        id: 'higiene-belleza',
        title: 'Higiene y Belleza',
        slug: 'higiene-y-belleza',
        icon: 'Sparkles',
        subcategories: [
            { title: 'Estéticas Caninas y Felinas', slug: 'esteticas-grooming' },
            { title: 'Spas para Mascotas', slug: 'spas' }
        ]
    },
    {
        id: 'servicios',
        title: 'Servicios Profesionales',
        slug: 'servicios',
        icon: 'Briefcase',
        subcategories: [
            { title: 'Paseadores de Perros', slug: 'paseadores' },
            { title: 'Entrenadores y Etólogos', slug: 'entrenamiento' },
            { title: 'Hoteles y Guarderías', slug: 'hoteles-guarderias' },
            { title: 'Incineración y Funerarios', slug: 'servicios-funerarios' }
        ]
    },
    {
        id: 'compras',
        title: 'Compras',
        slug: 'compras',
        icon: 'ShoppingBag',
        subcategories: [
            { title: 'Accesorios y Alimento', slug: 'tiendas-accesorios' },
            { title: 'Pastelerías para Mascotas', slug: 'pastelerias' }
        ]
    },
    {
        id: 'pet-friendly',
        title: 'Mundo Pet-Friendly',
        slug: 'pet-friendly',
        icon: 'MapPin',
        subcategories: [
            { title: 'Restaurantes y Cafeterías', slug: 'restaurantes' },
            { title: 'Hoteles Pet-Friendly', slug: 'hoteles-humanos' },
            { title: 'Parques y Zonas de Paseo', slug: 'parques' }
        ]
    },
    {
        id: 'adopciones',
        title: 'Adopciones',
        slug: 'adopciones',
        icon: 'HomeHeart',
        subcategories: [
            { title: 'Perros en Adopción', slug: 'perros' },
            { title: 'Gatos en Adopción', slug: 'gatos' },
            { title: 'Refugios y Asociaciones', slug: 'refugios' }
        ]
    }
];
