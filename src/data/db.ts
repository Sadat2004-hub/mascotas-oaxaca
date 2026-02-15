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
    ciudad: string;
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

export interface Ciudad {
    id: string;
    name: string;
    slug: string;
}

export const businesses: Business[] = [
    {
        id: '1',
        name: 'Hospital Veterinario de Oaxaca',
        slug: 'hospital-veterinario-de-oaxaca',
        ciudad: 'oaxaca',
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
        ciudad: 'oaxaca',
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
    }
];

export const ciudades: Ciudad[] = [
    { id: '1', name: 'Ciudad de Oaxaca', slug: 'oaxaca' },
    { id: '2', name: 'Puerto Escondido', slug: 'puerto-escondido' },
    { id: '3', name: 'Bahías de Huatulco', slug: 'huatulco' },
    { id: '4', name: 'Pinotepa Nacional', slug: 'pinotepa' },
    { id: '5', name: 'Tlacolula de Matamoros', slug: 'tlacolula' }
];
