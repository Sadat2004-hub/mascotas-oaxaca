import { type SchemaTypeDefinition } from 'sanity'
import { negocioType } from './negocio'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [negocioType],
}
