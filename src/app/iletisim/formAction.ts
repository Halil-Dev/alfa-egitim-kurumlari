"use server"

// Formdan gelecek verilerin tipini tanımlayalım (TypeScript hatasını önler)
interface FormData {
  ad_soyad: string;
  telefon: string;
  sinif: string;
  okul: string;
  mesaj?: string;
}

export async function submitFormAction(formData: FormData) {
  // NEXT_PUBLIC_ olmadığı için bu değer sadece sunucuda okunur, tarayıcıda gizlidir.
  const API_URL = process.env.SHEETDB_API_URL;
  
  if (!API_URL) {
    console.error("KRİTİK HATA: .env.local dosyasında SHEETDB_API_URL tanımlı değil!");
    return { success: false, message: "Sunucu yapılandırma hatası." };
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // Next.js'e bu isteği cache'lememesini söylüyoruz (her zaman taze gönderim)
      cache: 'no-store', 
      body: JSON.stringify({ data: [formData] })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("SheetDB Hatası:", errorText);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("Form gönderimi sırasında ağ hatası oluştu:", error);
    return { success: false };
  }
}