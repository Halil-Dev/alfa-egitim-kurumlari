export default {
  name: 'hero',
  title: 'Hero Alanı (Afiş)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Kayıt Başlığı (Admin Paneli İçin)',
      type: 'string',
      description: 'Bu alan sadece panelde hangi afiş olduğunu anlamanız içindir.'
    },
    {
      name: 'badgeText',
      title: 'Rozet Metni',
      type: 'string',
      initialValue: '2026 KAYIT DÖNEMİ BAŞLADI',
      description: 'Resmin üzerindeki küçük kırmızı kutucukta yazan yazı.'
    },
    {
      name: 'mainImage',
      title: 'Büyük Afiş Görseli',
      type: 'image',
      options: {
        hotspot: true // Resmin mobilde hangi kısmının görüneceğini seçebilirsin
      },
      validation: (Rule: any) => Rule.required() // Resim yüklemeyi zorunlu kıldık
    },
    {
      name: 'isActive',
      title: 'Bu Afişi Yayınla',
      type: 'boolean',
      initialValue: true
    }
  ]
}