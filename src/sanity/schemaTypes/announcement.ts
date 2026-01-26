export default {
  name: 'announcement',
  title: 'Duyurular',
  type: 'document',
  fields: [
    { 
      name: 'title', 
      title: 'Duyuru Başlığı', 
      type: 'string' 
    },
    { 
      name: 'image', 
      title: 'Duyuru Görseli', 
      type: 'image',
      options: {
        hotspot: true // Görselin önemli kısmını seçmene yarar
      }
    },
    { 
      name: 'content', 
      title: 'Duyuru Metni', 
      type: 'text' 
    },
    { 
      name: 'date', 
      title: 'Tarih', 
      type: 'datetime',
      initialValue: (new Date()).toISOString() // Varsayılan olarak bugünü atar
    },
    { 
      name: 'isActive', 
      title: 'Yayında mı?', 
      type: 'boolean', 
      initialValue: true 
    },
  ]
}