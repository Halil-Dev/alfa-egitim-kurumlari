export default {
  name: 'settings',
  title: 'Site Genel Ayarları',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Başlığı',
      type: 'string',
      description: 'Tarayıcı sekmesinde görünen isim',
    },
    {
      name: 'logo',
      title: 'Ana Logo',
      type: 'image',
      description: 'Navbar ve Footer için ana logo',
      options: { hotspot: true },
    },
    {
      name: 'whiteLogo',
      title: 'Beyaz Logo (Opsiyonel)',
      type: 'image',
      description: 'Koyu zeminlerde kullanılacak beyaz logo',
      options: { hotspot: true },
    },
    {
      name: 'contactInfo',
      title: 'İletişim Bilgileri',
      type: 'object',
      fields: [
        { name: 'phone', title: 'Telefon', type: 'string' },
        { name: 'whatsapp', title: 'WhatsApp Hattı', type: 'string', description: '905xxxxxxxxx formatında' },
        { name: 'address', title: 'Adres', type: 'text' },
        { name: 'email', title: 'E-posta', type: 'string' },
      ]
    },
    {
      name: 'socialMedia',
      title: 'Sosyal Medya Linkleri',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
      ]
    }
  ],
}