export interface Business {
    id: string;
    name: string;
    slug: string;
    municipio: string;
    categoria: string;
    description: string;
    address: string;
    telephone: string;
    image: string;
    rating: number;
    reviews: Review[];
    priceRange: string;
    tags: string[];
}

export interface Review {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
}

export interface Municipio {
    id: string;
    name: string;
    slug: string;
}

export const municipios: Municipio[] = [
    { id: '1', name: 'Oaxaca Centro', slug: 'oaxaca-centro' },
    { id: '2', name: 'Santa Cruz Xoxocotlán', slug: 'xoxocotlan' },
    { id: '3', name: 'Santa Lucía del Camino', slug: 'santa-lucia' },
    { id: '4', name: 'San Sebastián Tutla', slug: 'san-sebastian-tutla' },
    { id: '5', name: 'Tlacolula de Matamoros', slug: 'tlacolula' },
];

export const businesses: Business[] = [
    {
        id: '1',
        name: 'Hospital Veterinario Dogtor',
        slug: 'hospital-veterinario-dogtor',
        municipio: 'oaxaca-centro',
        categoria: 'veterinarias',
        description: 'Atención especializada para tus mascotas las 24 horas del día. Contamos con quirófano, laboratorio y rayos X para diagnósticos precisos.',
        address: 'Calle de los Libres 405, Centro, 68000 Oaxaca de Juárez, Oax.',
        telephone: '+529511234567',
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800',
        rating: 4.8,
        priceRange: '$$',
        tags: ['urgencias', 'cirugía', 'vacunas', 'farmacia'],
        reviews: [
            { id: 'r1', user: 'Juan Pérez', rating: 5, comment: 'Excelente atención, salvaron a mi perrito.', date: '2023-10-15' },
            { id: 'r2', user: 'Maria G.', rating: 4, comment: 'Muy profesionales aunque un poco caro.', date: '2023-11-02' }
        ]
    },
    {
        id: '2',
        name: 'Grooming Oaxaca Loft',
        slug: 'grooming-oaxaca-loft',
        municipio: 'oaxaca-centro',
        categoria: 'esteticas-grooming',
        description: 'El mejor spa para tu mejor amigo. Cortes de raza, baño medicado y spa relajante.',
        address: 'Av. Juárez 802, Centro, 68000 Oaxaca de Juárez, Oax.',
        telephone: '+529519876543',
        image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
        rating: 4.5,
        priceRange: '$',
        tags: ['corte de pelo', 'spa', 'limpieza dental'],
        reviews: []
    },
    {
        id: '3',
        name: 'Clínica Veterinaria Xoxo',
        slug: 'clinica-veterinaria-xoxo',
        municipio: 'xoxocotlan',
        categoria: 'veterinarias',
        description: 'Servicio veterinario integral en el corazón de Xoxocotlán. Vacunas, desparasitación y consultas generales.',
        address: 'Calle Porfirio Díaz 12, Santa Cruz Xoxocotlán, Oax.',
        telephone: '+529515551234',
        image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800',
        rating: 4.2,
        priceRange: '$',
        tags: ['vacaunas', 'desparasitación', 'consultas'],
        reviews: []
    }
];
