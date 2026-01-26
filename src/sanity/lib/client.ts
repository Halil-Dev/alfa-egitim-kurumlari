import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url' // Resimler için bu kütüphaneyi kurmuş olmalısın
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Geliştirme aşamasında false yapalım ki anlık görelim
})

// Sanity resim linklerini oluşturmak için yardımcı fonksiyon
const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)