import { Business } from '@/data/db';

interface Props {
    business: Business;
    municipio: string;
    categoria: string;
}

export default function StructuredData({ business, municipio, categoria }: Props) {
    const schemaType = categoria.toLowerCase().includes('veterinaria') ? 'VeterinaryCare' : 'LocalBusiness';

    const schema = {
        '@context': 'https://schema.org',
        '@type': schemaType,
        name: business.name,
        image: business.image || '',
        telephone: business.telephone,
        address: {
            '@type': 'PostalAddress',
            streetAddress: business.address,
            addressLocality: municipio,
            addressRegion: 'Oaxaca',
            addressCountry: 'MX',
        },
        aggregateRating: (business.reviews && business.reviews.length > 0) ? {
            '@type': 'AggregateRating',
            ratingValue: business.rating,
            reviewCount: business.reviews.length,
        } : undefined,
        priceRange: business.priceRange,
        description: business.description,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
