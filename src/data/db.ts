export interface Review {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
}

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
    tags: string[];
    priceRange: string;
}

export interface Municipio {
    id: string;
    name: string;
    slug: string;
}

export const businesses: Business[] = [
    {
        id: '1',
        name: 'Hospital Veterinario de Oaxaca',
        slug: 'hospital-veterinario-de-oaxaca',
        municipio: 'oaxaca-centro',
        categoria: 'veterinarias',
        description: 'Especialistas en cirugía, medicina interna y urgencias 24 horas. Contamos con tecnología de vanguardia para la salud de tu mascota.',
        address: 'Calle de los Libres 123, Centro Histórico, Oaxaca',
        telephone: '+52 951 123 4567',
        image: '/images/businesses/veterinaria-hospital.jpg',
        rating: 4.9,
        reviews: [
            { id: 'r1', user: 'María G.', rating: 5, comment: 'Excelente atención, salvaron a mi perrito en una emergencia nocturna.', date: '2024-01-15' },
            { id: 'r2', user: 'Carlos M.', rating: 4, comment: 'Muy profesionales, aunque a veces hay que esperar un poco.', date: '2024-01-10' }
        ],
        tags: ['urgencias-24h', 'cirugia', 'rayos-x', 'hospitalizacion'],
        priceRange: '$$$'
    },
    {
        id: '2',
        name: 'Grooming Oaxaca Loft',
        slug: 'grooming-oaxaca-loft',
        municipio: 'oaxaca-centro',
        categoria: 'esteticas-grooming',
        description: 'Estética canina profesional y spa. Cortes de raza, baño medicado y masajes relajantes para tu mejor amigo.',
        address: 'Av. Juárez 456, Santa María del Tule, Oaxaca',
        telephone: '+52 951 987 6543',
        image: '/images/businesses/grooming-loft.jpg',
        rating: 4.8,
        reviews: [
            { id: 'r3', user: 'Ana P.', rating: 5, comment: 'El mejor corte que le han hecho a mi Poodle. Muy cuidadosos.', date: '2024-01-12' }
        ],
        tags: ['estetica-canina', 'spa', 'accesorios'],
        priceRange: '$$'
    },
    {
        id: '3',
        name: 'Café de las Mascotas',
        slug: 'cafe-de-las-mascotas',
        municipio: 'oaxaca-centro',
        categoria: 'pet-friendly',
        description: 'El primer café 100% pet-friendly en Oaxaca. Menú especial para humanos y snacks naturales para mascotas.',
        address: 'Reforma 789, Jalatlaco, Oaxaca',
        telephone: '+52 951 456 7890',
        image: '/images/businesses/pet-friendly-cafe.jpg',
        rating: 4.7,
        reviews: [
            { id: 'r4', user: 'Lucía R.', rating: 5, comment: 'Lugar encantador, mi perro ama sus galletas de avena.', date: '2024-01-08' }
        ],
        tags: ['restaurante', 'desayunos', 'wifi', 'snacks-mascotas'],
        priceRange: '$$'
    }
];

export const municipios: Municipio[] = [
    { id: '1', name: 'Oaxaca de Juárez', slug: 'oaxaca-centro' },
    { id: '2', name: 'Santa Cruz Xoxocotlán', slug: 'xoxocotlan' },
    { id: '3', name: 'Santa Lucía del Camino', slug: 'santa-lucia' },
    { id: '4', name: 'San Sebastián Tutla', slug: 'san-sebastian' },
    { id: '5', name: 'Santa María del Tule', slug: 'el-tule' }
];
