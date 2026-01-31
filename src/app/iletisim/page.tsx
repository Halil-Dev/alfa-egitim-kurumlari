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
    <main className="min-h-screen bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* BAŞLIK ALANI */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block bg-[#8B1A1A]/5 px-4 py-1.5 rounded-full mb-4">
            <span className="text-[#8B1A1A] font-black text-[10px] md:text-xs uppercase tracking-[0.4em]">Ön Kayıt Formu</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-[1000] text-black mb-6 uppercase tracking-tighter leading-[0.9]">
            ALFA <br /><span className="text-[#8B1A1A]">EĞİTİM KURUMLARI</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-500 font-bold max-w-2xl mx-auto leading-relaxed italic px-4">
            "Başarıya giden yolda güvenilir adresiniz."
          </p>
        </div>

        {/* FORM TASARIMI */}
        <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-xl p-8 md:p-20 border border-gray-100 mb-16 md:mb-32 relative overflow-hidden">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 relative z-10">
            
            {[
              { label: "Öğrenci Ad Soyad", name: "ad_soyad", type: "text", placeholder: "Halil Yılmaz", pattern: /[^a-zA-ZğüşıöçĞÜŞİÖÇ ]/g },
              { label: "Veli Telefon", name: "telefon", type: "tel", placeholder: "05xx xxx xx xx", pattern: /[^0-9]/g, max: 11 }
            ].map((field) => (
              <div key={field.name} className="space-y-2 md:space-y-4">
                <label className="text-[10px] md:text-xs font-black text-black uppercase tracking-[0.2em] ml-2">{field.label}</label>
                <input 
                  required
                  type={field.type}
                  placeholder={field.placeholder}
                  maxLength={field.max}
                  value={(formData as any)[field.name]}
                  onInput={(e) => field.pattern && (e.currentTarget.value = e.currentTarget.value.replace(field.pattern, ''))}
                  onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                  className="w-full bg-gray-50 border-2 border-transparent rounded-2xl md:rounded-[2rem] px-6 py-4 md:px-8 md:py-5 focus:bg-white focus:border-[#8B1A1A] outline-none font-bold text-gray-900 transition-all text-sm md:text-base" 
                />
              </div>
            ))}

            <div className="space-y-2 md:space-y-4">
              <label className="text-[10px] md:text-xs font-black text-black uppercase tracking-[0.2em] ml-2">Sınıf Seviyesi</label>
              <select 
                required
                value={formData.sinif}
                onChange={(e) => setFormData({...formData, sinif: e.target.value})}
                className="w-full bg-gray-50 border-2 border-transparent rounded-2xl md:rounded-[2rem] px-6 py-4 md:px-8 md:py-5 focus:bg-white focus:border-[#8B1A1A] outline-none font-bold text-gray-900 text-sm md:text-base appearance-none cursor-pointer"
              >
                <option value="">Seçiniz</option>
                <option value="8. Sınıf">8. Sınıf (LGS)</option>
                <option value="YKS Hazırlık">YKS Hazırlık</option>
                <option value="Ara Sınıflar">Ara Sınıflar</option>
                <option value="Mezun">Mezun Grubu</option>
              </select>
            </div>

            <div className="space-y-2 md:space-y-4">
              <label className="text-[10px] md:text-xs font-black text-black uppercase tracking-[0.2em] ml-2">Mevcut Okulu</label>
              <input 
                type="text" 
                placeholder="Okul adını yazınız" 
                value={formData.okul}
                onChange={(e) => setFormData({...formData, okul: e.target.value})}
                className="w-full bg-gray-50 border-2 border-transparent rounded-2xl md:rounded-[2rem] px-6 py-4 md:px-8 md:py-5 focus:bg-white focus:border-[#8B1A1A] outline-none font-bold text-gray-900 text-sm md:text-base" 
              />
            </div>

            <div className="md:col-span-2 space-y-2 md:space-y-4">
              <label className="text-[10px] md:text-xs font-black text-black uppercase tracking-[0.2em] ml-2">Eklemek İstedikleriniz</label>
              <textarea 
                rows={3} 
                placeholder="Sormak istediğiniz sorular..." 
                value={formData.mesaj}
                onChange={(e) => setFormData({...formData, mesaj: e.target.value})}
                className="w-full bg-gray-50 border-2 border-transparent rounded-2xl md:rounded-[2.5rem] px-6 py-4 md:px-8 md:py-6 focus:bg-white focus:border-[#8B1A1A] outline-none font-bold text-gray-900 text-sm md:text-base resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 pt-4">
              <button 
                disabled={durum === "gonderiliyor"}
                className={`w-full py-5 md:py-8 rounded-2xl md:rounded-[2.5rem] font-black text-sm md:text-xl transition-all uppercase tracking-[0.2em]
                  ${durum === "gonderiliyor" ? "bg-gray-400" : "bg-black hover:bg-[#8B1A1A]"} text-white`}
              >
                {durum === "gonderiliyor" ? "GÖNDERİLİYOR..." : "BAŞVURUYU TAMAMLA"}
              </button>

              {durum === "basarili" && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-2xl text-center font-bold text-xs md:text-sm animate-pulse border border-green-100">
                  ✓ BAŞVURUNUZ BAŞARIYLA ALINDI!
                </div>
              )}
            </div>
          </form>
        </div>

        {/* ULAŞIM VE HARİTA - Bölünme Sorunu Burada Çözüldü */}
        <div className="bg-[#111827] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row items-stretch border border-white/5">
          
          <div className="flex-1 p-8 md:p-20 relative">
            <div className="relative z-10">
              <div className="inline-block bg-[#8B1A1A]/10 px-4 py-1.5 rounded-full mb-6">
                <h2 className="text-[#8B1A1A] font-black text-[10px] uppercase tracking-[0.3em]">ULAŞIM</h2>
              </div>
              
              <h3 className="text-white text-3xl md:text-7xl font-[1000] mb-8 md:mb-12 tracking-tighter uppercase leading-[0.9] italic">
                TORBALI'NIN <br /> <span className="text-[#8B1A1A]">MERKEZİNDEYİZ</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mb-10">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">📍</span>
                  <div>
                    <h4 className="text-[#8B1A1A] font-black text-[10px] uppercase tracking-widest mb-1">Adres</h4>
                    <p className="text-gray-300 font-bold text-sm md:text-xl leading-tight">Tepeköy, 4505 Sk. No:9 Torbalı</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">📞</span>
                  <div className="min-w-0"> {/* Taşmayı engellemek için */}
                    <h4 className="text-[#8B1A1A] font-black text-[10px] uppercase tracking-widest mb-1">Hızlı Hat</h4>
                    {/* 'whitespace-nowrap' ekleyerek numaranın bölünmesini engelledik */}
                    <p className="text-white font-[1000] text-lg md:text-3xl lg:text-4xl tracking-tighter whitespace-nowrap">
                      0501 085 20 35
                    </p>
                  </div>
                </div>
              </div>

              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=ALFA+EĞİTİM+KURUMLARI+%2Bplus&destination_place_id=ChIJ_WdD5I9buRQRAfEUpJTe7bc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center bg-[#8B1A1A] text-white px-8 py-4 md:px-12 md:py-7 rounded-2xl md:rounded-[2rem] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-white hover:text-black transition-all"
              >
                NAVİGASYONU BAŞLAT <span className="ml-2">↗</span>
              </a>
            </div>
          </div>

          <div className="flex-1 h-[300px] lg:h-auto relative grayscale opacity-80">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.4567!2d27.3621!3d38.1517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA5JzA2LjEiTiAyN8KwMjEnNDMuNiJF!5e0!3m2!1str!2str!4v1620000000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#8B1A1A] font-black text-[10px] tracking-[0.3em] uppercase italic opacity-60">
            Alfa Eğitim - Geleceği Birlikte Yazıyoruz
          </p>
        </div>
      </div>
    </main>
  );
};

export default IletisimPage;