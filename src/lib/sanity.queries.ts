import { client } from './sanity'

// Query para obtener todos los negocios
export const NEGOCIOS_ALL_QUERY = `*[_type == "negocio"] | order(order asc, _createdAt desc) {
  "id": _id,
  name,
  "slug": slug.current,
  municipio,
  categoria,
  description,
  address,
  telephone,
  "image": mainImage.asset->url,
  "gallery": gallery[].asset->url,
  tags,
  openingHours,
  mapEmbedUrl,
  priceRange,
  order,
  rating,
  reviews
}`

// Query para obtener negocios por municipio
export const NEGOCIOS_BY_MUNICIPIO_QUERY = `*[_type == "negocio" && municipio == $municipio] | order(order asc, _createdAt desc) {
  "id": _id,
  name,
  "slug": slug.current,
  municipio,
  categoria,
  description,
  address,
  telephone,
  "image": mainImage.asset->url,
  "gallery": gallery[].asset->url,
  tags,
  openingHours,
  mapEmbedUrl,
  priceRange,
  order,
  rating,
  reviews
}`

// Query para obtener negocios por categoría
export const NEGOCIOS_BY_CATEGORIA_QUERY = `*[_type == "negocio" && categoria == $categoria] | order(order asc, _createdAt desc) {
  "id": _id,
  name,
  "slug": slug.current,
  municipio,
  categoria,
  description,
  address,
  telephone,
  "image": mainImage.asset->url,
  "gallery": gallery[].asset->url,
  tags,
  openingHours,
  mapEmbedUrl,
  priceRange,
  order,
  rating,
  reviews
}`

// Query para obtener negocios por municipio y categoría
export const NEGOCIOS_BY_MUNICIPIO_CATEGORIA_QUERY = `*[_type == "negocio" && municipio == $municipio && categoria == $categoria] | order(order asc, _createdAt desc) {
  "id": _id,
  name,
  "slug": slug.current,
  municipio,
  categoria,
  description,
  address,
  telephone,
  "image": mainImage.asset->url,
  "gallery": gallery[].asset->url,
  tags,
  openingHours,
  mapEmbedUrl,
  priceRange,
  order,
  rating,
  reviews
}`

// Query para obtener un negocio por slug
export const NEGOCIO_BY_SLUG_QUERY = `*[_type == "negocio" && slug.current == $slug][0] {
  "id": _id,
  name,
  "slug": slug.current,
  municipio,
  categoria,
  description,
  address,
  telephone,
  "image": mainImage.asset->url,
  "gallery": gallery[].asset->url,
  tags,
  openingHours,
  mapEmbedUrl,
  priceRange,
  order,
  rating,
  reviews
}`

// Funciones para ejecutar las queries
export async function getAllNegocios() {
    return await client.fetch(NEGOCIOS_ALL_QUERY)
}

export async function getNegociosByMunicipio(municipio: string) {
    return await client.fetch(NEGOCIOS_BY_MUNICIPIO_QUERY, { municipio })
}

export async function getNegociosByCategoria(categoria: string) {
    return await client.fetch(NEGOCIOS_BY_CATEGORIA_QUERY, { categoria })
}

export async function getNegociosByMunicipioCategoria(municipio: string, categoria: string) {
    return await client.fetch(NEGOCIOS_BY_MUNICIPIO_CATEGORIA_QUERY, { municipio, categoria })
}

export async function getNegocioBySlug(slug: string) {
    return await client.fetch(NEGOCIO_BY_SLUG_QUERY, { slug })
}
