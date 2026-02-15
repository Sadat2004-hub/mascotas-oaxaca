import { defineField, defineType } from 'sanity'

export const negocioType = defineType({
    name: 'negocio',
    title: 'Negocios',
    type: 'document',
    fields: [
        defineField({
            name: 'order',
            title: 'Orden de aparición',
            description: 'Número para ordenar (ej. 1 para aparecer primero, 2 segundo...)',
            type: 'number',
            initialValue: 100,
        }),
        defineField({
            name: 'name',
            title: 'Nombre del Negocio',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'municipio',
            title: 'Municipio',
            type: 'string',
            options: {
                list: [
                    { title: 'Oaxaca de Juárez', value: 'oaxaca-centro' },
                    { title: 'Santa Cruz Xoxocotlán', value: 'xoxocotlan' },
                    { title: 'Santa Lucía del Camino', value: 'santa-lucia' },
                    { title: 'San Sebastián Tutla', value: 'san-sebastian' },
                    { title: 'Santa María del Tule', value: 'el-tule' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'categorias',
            title: 'Categorías',
            description: 'Selecciona todas las categorías que apliquen (ej. Veterinaria y Estética)',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    // Salud y Bienestar
                    { title: '🏥 Veterinarias', value: 'veterinarias' },
                    { title: '💆 Fisioterapia y Rehabilitación', value: 'fisioterapia' },
                    { title: '💉 Esterilización y Campañas', value: 'esterilizacion' },

                    // Higiene y Belleza
                    { title: '✂️ Estéticas Caninas y Felinas', value: 'esteticas-grooming' },
                    { title: '🛁 Spas para Mascotas', value: 'spas' },

                    // Servicios Profesionales
                    { title: '🐕 Paseadores de Perros', value: 'paseadores' },
                    { title: '🎓 Entrenadores y Etólogos', value: 'entrenamiento' },
                    { title: '🏨 Hoteles y Guarderías', value: 'hoteles-guarderias' },
                    { title: '🕊️ Incineración y Funerarios', value: 'servicios-funerarios' },

                    // Compras
                    { title: '🛍️ Accesorios y Alimento', value: 'tiendas-accesorios' },
                    { title: '🎂 Pastelerías para Mascotas', value: 'pastelerias' },

                    // Pet-Friendly
                    { title: '🍽️ Restaurantes y Cafeterías', value: 'restaurantes' },
                    { title: '🏨 Hoteles Pet-Friendly', value: 'hoteles-humanos' },
                    { title: '🌳 Parques y Zonas de Paseo', value: 'parques' },

                    // Adopciones
                    { title: '🐶 Perros en Adopción', value: 'perros' },
                    { title: '🐱 Gatos en Adopción', value: 'gatos' },
                    { title: '🏠 Refugios y Asociaciones', value: 'refugios' },
                ],
            },
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'address',
            title: 'Dirección Completa',
            type: 'string',
        }),
        defineField({
            name: 'mapEmbedUrl',
            title: 'URL de Google Maps (Iframe)',
            description: 'Copia el src del iframe de Google Maps (Share -> Embed Map)',
            type: 'string',
        }),
        defineField({
            name: 'telephone',
            title: 'Teléfono / WhatsApp',
            description: 'Escribir el número con código de país sin el símbolo +, ej: 529511234567',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Imagen Principal',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'gallery',
            title: 'Galería de Imágenes',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        }),
        defineField({
            name: 'tags',
            title: 'Etiquetas / Servicios',
            description: 'Ej: urgencias-24h, cirugia, rayos-x, hospitalizacion',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'openingHours',
            title: 'Horarios de Apertura',
            type: 'array',
            of: [
                {
                    type: 'object',
                    title: 'Horario',
                    fields: [
                        { name: 'days', title: 'Días', type: 'string', description: 'Ej. Lunes a Viernes' },
                        { name: 'hours', title: 'Horario', type: 'string', description: 'Ej. 06:00 - 22:00' }
                    ]
                }
            ]
        }),
        defineField({
            name: 'priceRange',
            title: 'Rango de Precios',
            type: 'string',
            options: {
                list: [
                    { title: '$ - Económico', value: '$' },
                    { title: '$$ - Moderado', value: '$$' },
                    { title: '$$$ - Premium', value: '$$$' },
                ],
            },
        }),
        defineField({
            name: 'rating',
            title: 'Calificación',
            description: 'Calificación de 1 a 5 (ej. 4.9)',
            type: 'number',
            initialValue: 4.5,
            validation: (Rule) => Rule.min(1).max(5),
        }),
        defineField({
            name: 'reviews',
            title: 'Reseñas',
            type: 'array',
            of: [
                {
                    type: 'object',
                    title: 'Reseña',
                    fields: [
                        { name: 'user', title: 'Usuario', type: 'string' },
                        { name: 'rating', title: 'Calificación', type: 'number', validation: (Rule) => Rule.min(1).max(5) },
                        { name: 'comment', title: 'Comentario', type: 'text' },
                        { name: 'date', title: 'Fecha', type: 'date' },
                    ]
                }
            ]
        }),
    ],
})
