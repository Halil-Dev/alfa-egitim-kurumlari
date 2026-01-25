const announcement = {
  name: 'announcement',
  title: 'Duyurular',
  type: 'document',
  fields: [
    { name: 'title', title: 'Başlık', type: 'string' },
    { name: 'image', title: 'Görsel', type: 'image', options: { hotspot: true } },
    { name: 'date', title: 'Tarih', type: 'date' },
    { name: 'description', title: 'Açıklama', type: 'text' },
  ],
}
export default announcement