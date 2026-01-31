import type { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('İçerik Yönetimi')
    .items([
      // Site Genel Ayarlarını Singleton (Tekil) yapıyoruz
      S.listItem()
        .title('Site Genel Ayarları')
        .id('settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
            .title('Site Genel Ayarları')
        ),
      S.divider(),
      // Diğer şemaları buraya ekliyoruz
      ...S.documentTypeListItems().filter(
        (listItem) => !['settings'].includes(listItem.getId()!)
      ),
    ])