import { type SchemaTypeDefinition } from 'sanity'
import settings from './settings'
import announcement from './announcement'
import course from './course'
import hero from './hero'



export const schema: { types: SchemaTypeDefinition[] } = {
  // Tüm şemalarımızı buraya ekliyoruz ki Sanity Studio bunları görsün
  types: [settings, announcement, course, hero],
}