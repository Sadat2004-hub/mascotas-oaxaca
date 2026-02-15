import { client } from './sanity'

// Query para obtener todos los negocios
export const NEGOCIOS_ALL_QUERY = `*[_type == "negocio"] | order(order asc, _createdAt desc) {
  "id": _id,
  name,
  "slug": slug.current,
  ciudad,
  categorias,
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

// Query para obtener negocios por ciudad
export const NEGOCIOS_BY_CIUDAD_QUERY = `*[_type == "negocio" && ciudad == $ciudad] | order(order asc, _createdAt desc) {
  "id": _id,
  name,
  "slug": slug.current,
  ciudad,
  categorias,
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
export const NEGOCIOS_BY_CATEGORIA_QUERY = `*[_type == "negocio" && $categoria in categorias] | order(order asc, _createdAt desc) {
  "id": _id,
  name,
  "slug": slug.current,
  ciudad,
  categorias,
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

// Query para obtener negocios por ciudad y categoría
export const NEGOCIOS_BY_CIUDAD_CATEGORIA_QUERY = `*[_type == "negocio" && ciudad == $ciudad && $categoria in categorias] | order(order asc, _createdAt desc) {
  "id": _id,
  name,
  "slug": slug.current,
  ciudad,
  categorias,
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
  ciudad,
  categorias,
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

export async function getNegociosByCiudad(ciudad: string) {
  return await client.fetch(NEGOCIOS_BY_CIUDAD_QUERY, { ciudad })
}

export async function getNegociosByCategoria(categoria: string) {
  return await client.fetch(NEGOCIOS_BY_CATEGORIA_QUERY, { categoria })
}

export async function getNegociosByCiudadCategoria(ciudad: string, categoria: string) {
  return await client.fetch(NEGOCIOS_BY_CIUDAD_CATEGORIA_QUERY, { ciudad, categoria })
}

export async function getNegocioBySlug(slug: string) {
  return await client.fetch(NEGOCIO_BY_SLUG_QUERY, { slug })
}
