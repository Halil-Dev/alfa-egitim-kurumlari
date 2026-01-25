"use client";
import React, { useState } from 'react';
import { submitFormAction } from "@/app/iletisim/formAction";

const IletisimPage = () => {
  const [formData, setFormData] = useState({
    ad_soyad: '',
    telefon: '',
    sinif: '',
    okul: '',
    mesaj: ''
  });

  const [durum, setDurum] = useState<"bekliyor" | "gonderiliyor" | "basarili" | "hata">("bekliyor");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Küçük bir güvenlik kontrolü: Telefon 10 haneden az olmasın
    if (formData.telefon.length < 10) {
      alert("Lütfen geçerli bir telefon numarası giriniz (Örn: 05xxxxxxxxx)");
      return;
    }

    setDurum("gonderiliyor");

    try {
      const result = await submitFormAction(formData);

      if (result.success) {
        setDurum("basarili");
        setFormData({ ad_soyad: '', telefon: '', sinif: '', okul: '', mesaj: '' });
        setTimeout(() => setDurum("bekliyor"), 5000);
      } else {
        setDurum("hata");
      }
    } catch (error) {
      console.error("Gönderim hatası:", error);
      setDurum("hata");
    }
  };

  return (
    <main className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* BAŞLIK ALANI */}
        <div className="text-center mb-20">
          <div className="inline-block bg-[#8B1A1A]/5 px-6 py-2 rounded-full mb-6">
            <span className="text-[#8B1A1A] font-black text-xs uppercase tracking-[0.4em]">Ön Kayıt Formu</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-[1000] text-black mb-8 uppercase tracking-tighter leading-[0.9]">
            ALFA <br /><span className="text-[#8B1A1A]">EĞİTİM KURUMLARI</span>
          </h1>
          <p className="text-2xl text-gray-500 font-bold max-w-2xl mx-auto leading-relaxed italic">
            "Başarıya giden yolda güvenilir adresiniz."
          </p>
        </div>

        {/* FORM TASARIMI */}
        <div className="bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] p-10 md:p-20 border border-gray-100 mb-32 relative overflow-hidden">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            
            {/* AD SOYAD - Sadece Harf Kısıtlaması */}
            <div className="space-y-4">
              <label className="text-xs font-black text-black uppercase tracking-[0.3em] ml-2">Öğrenci Ad Soyad</label>
              <input 
                required
                type="text" 
                placeholder="Örn: Halil Yılmaz" 
                value={formData.ad_soyad}
                // JavaScript ile sayıları ve özel karakterleri anında temizler
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ ]/g, '');
                }}
                onChange={(e) => setFormData({...formData, ad_soyad: e.target.value})}
                className="w-full bg-gray-50 border-2 border-transparent rounded-[2rem] px-8 py-5 focus:bg-white focus:border-[#8B1A1A] outline-none font-bold text-gray-900 transition-all shadow-inner" 
              />
            </div>

            {/* TELEFON - Sadece Sayı Kısıtlaması */}
            <div className="space-y-4">
              <label className="text-xs font-black text-black uppercase tracking-[0.3em] ml-2">Veli Telefon</label>
              <input 
                required
                type="tel" 
                placeholder="05xx xxx xx xx" 
                maxLength={11}
                value={formData.telefon}
                // Sadece rakamları kabul eder, harf girilirse anında siler
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                }}
                onChange={(e) => setFormData({...formData, telefon: e.target.value})}
                className="w-full bg-gray-50 border-2 border-transparent rounded-[2rem] px-8 py-5 focus:bg-white focus:border-[#8B1A1A] outline-none font-bold text-gray-900 transition-all shadow-inner" 
              />
            </div>

            <div className="space-y-4">
              <label className="text-xs font-black text-black uppercase tracking-[0.3em] ml-2">Sınıf Seviyesi</label>
              <select 
                required
                value={formData.sinif}
                onChange={(e) => setFormData({...formData, sinif: e.target.value})}
                className="w-full bg-gray-50 border-2 border-transparent rounded-[2rem] px-8 py-5 focus:bg-white focus:border-[#8B1A1A] outline-none font-bold text-gray-900 cursor-pointer appearance-none shadow-inner"
              >
                <option value="">Seçiniz</option>
                <option value="8. Sınıf">8. Sınıf (LGS)</option>
                <option value="YKS Hazırlık">YKS Hazırlık</option>
                <option value="Ara Sınıflar">Ara Sınıflar</option>
                <option value="Mezun">Mezun Grubu</option>
              </select>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-black text-black uppercase tracking-[0.3em] ml-2">Mevcut Okulu</label>
              <input 
                type="text" 
                placeholder="Okul adını yazınız" 
                value={formData.okul}
                onChange={(e) => setFormData({...formData, okul: e.target.value})}
                className="w-full bg-gray-50 border-2 border-transparent rounded-[2rem] px-8 py-5 focus:bg-white focus:border-[#8B1A1A] outline-none font-bold text-gray-900 transition-all shadow-inner" 
              />
            </div>

            <div className="md:col-span-2 space-y-4">
              <label className="text-xs font-black text-black uppercase tracking-[0.3em] ml-2">Eklemek İstedikleriniz</label>
              <textarea 
                rows={4} 
                placeholder="Sormak istediğiniz sorular..." 
                value={formData.mesaj}
                onChange={(e) => setFormData({...formData, mesaj: e.target.value})}
                className="w-full bg-gray-50 border-2 border-transparent rounded-[2.5rem] px-8 py-6 focus:bg-white focus:border-[#8B1A1A] outline-none font-bold text-gray-900 resize-none transition-all shadow-inner"
              ></textarea>
            </div>

            <div className="md:col-span-2 pt-6">
              <button 
                disabled={durum === "gonderiliyor"}
                className={`w-full py-8 rounded-[2.5rem] font-black text-xl shadow-2xl transition-all active:scale-[0.98] uppercase tracking-[0.3em]
                  ${durum === "gonderiliyor" ? "bg-gray-400" : "bg-black hover:bg-[#8B1A1A] hover:shadow-[#8B1A1A]/40"} text-white`}
              >
                {durum === "gonderiliyor" ? "GÖNDERİLİYOR..." : "BAŞVURUYU TAMAMLA"}
              </button>

              {durum === "basarili" && (
                <div className="mt-8 p-6 bg-green-50 text-green-700 rounded-3xl text-center font-black border-2 border-green-100 animate-pulse">
                  ✓ BAŞVURUNUZ BAŞARIYLA ALINDI! EN KISA SÜREDE DÖNÜŞ YAPACAĞIZ.
                </div>
              )}
            </div>
          </form>
        </div>

        {/* ULAŞIM ALANI AYNI KALDI */}
        <div className="bg-[#111827] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] flex flex-col lg:flex-row items-stretch border border-white/5">
          
          <div className="flex-1 p-12 md:p-20 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#8B1A1A]/20 blur-[80px] -z-0"></div>
            
            <div className="relative z-10">
              <div className="inline-block bg-[#8B1A1A]/10 px-6 py-2 rounded-full mb-8">
                <h2 className="text-[#8B1A1A] font-black text-xs uppercase tracking-[0.5em]">ULAŞIM</h2>
              </div>
              
              <h3 className="text-white text-5xl md:text-7xl font-[1000] mb-12 tracking-tighter uppercase leading-[0.9] italic">
                TORBALI'NIN <br /> 
                <span className="text-[#8B1A1A]">MERKEZİNDEYİZ</span>
              </h3>
              
              <div className="space-y-10 mb-14">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl group-hover:bg-[#8B1A1A] transition-all duration-500">
                    📍
                  </div>
                  <div>
                    <h4 className="text-[#8B1A1A] font-black text-xs uppercase tracking-widest mb-2">Adresimiz</h4>
                    <p className="text-gray-300 font-bold text-xl leading-relaxed">
                      Tepeköy, 4505 Sokak No:9 <br /> 
                      Daire:1, Torbalı / İzmir
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl group-hover:bg-[#8B1A1A] transition-all duration-500">
                    📞
                  </div>
                  <div>
                    <h4 className="text-[#8B1A1A] font-black text-xs uppercase tracking-widest mb-2">Hızlı Hattımız</h4>
                    <p className="text-white font-[1000] text-4xl tracking-tighter hover:text-[#8B1A1A] transition-colors">
                      0501 085 20 35
                    </p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#8B1A1A] text-white px-12 py-7 rounded-[2rem] font-black text-center uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all shadow-2xl shadow-[#8B1A1A]/20 group"
              >
                NAVİGASYONU BAŞLAT <span className="ml-3 text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </div>
          </div>

          <div className="flex-1 min-h-[500px] lg:min-h-full relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.4567!2d27.3621!3d38.1517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA5JzA2LjEiTiAyN8KwMjEnNDMuNiJF!5e0!3m2!1str!2str!4v1620000000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

        {/* BORDO ALT YAZI */}
        <div className="mt-20 text-center">
          <p className="text-[#8B1A1A] font-black text-xs tracking-[0.5em] uppercase italic opacity-80">
            Alfa Eğitim Kurumları - Geleceğin Başarı Hikayelerini Birlikte Yazıyoruz
          </p>
        </div>
      </div>
    </main>
  );
};

export default IletisimPage;