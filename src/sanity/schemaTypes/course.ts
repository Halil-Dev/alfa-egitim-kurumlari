export default {
  name: 'course',
  title: 'Kurslarımız',
  type: 'document',
  fields: [
    { name: 'name', title: 'Kurs Adı', type: 'string' },
    { name: 'audience', title: 'Hedef Kitle', type: 'string' },
    { name: 'features', title: 'Özellikler', type: 'array', of: [{ type: 'string' }] },
    { name: 'order', title: 'Sıralama', type: 'number' }, // Sitede hangi kurs önce görünsün?
  ]
}