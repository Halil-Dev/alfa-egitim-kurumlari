import HomeMap from '@/components/HomeMap';
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Announcements from "@/components/Announcements";
import About from "@/components/About";
import Values from "@/components/Values"; 
import Courses from "@/components/Courses"; 
import SuccessStories from "@/components/SuccessStories";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Karşılama Alanı - Butonlar yan yana yapıldı */}
      <Hero />
      
      {/* 2. İstatistik Şeridi - Boyutlar küçültüldü */}
      <Stats />

      {/* 3. KURUMSAL: Hakkımızda - Madde yapısı 2x2 yapıldı */}
      <About />
      
      {/* 4. VİZYON & DEĞERLER - 3 parça yan yana getirildi */}
      <Values />

      {/* 5. EĞİTİM: Kurslarımız - Butonlu slider yapıldı */}
      <Courses />

      {/* 6. SOSYAL KANIT: Başarı Hikayeleri - Slider yapıldı */}
      <SuccessStories />

      {/* 7. GÜNCEL: Etkinlikler ve Duyurular - Yatay kart yapıldı */}
      <Announcements />
      
      {/* 8. ÖZET: Neden Biz? - MOBİL OPTİMİZASYONU YAPILDI */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-2 uppercase tracking-tighter">
            Neden Alfa Eğitim KURUMLARI?
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-[#8B1A1A] mx-auto mb-10 md:mb-16 rounded-full"></div>
          
          {/* Mobilde 3 kutu yan yana (küçük), Masaüstünde 3 kutu geniş */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 px-2">
            {[
              { 
                title: "Uzman Kadro", 
                desc: "Torbalı'nın en tecrübeli öğretmenleriyle birebir rehberlik." 
              },
              { 
                title: "Modern Yayınlar", 
                desc: "Yeni nesil sınav sistemine %100 uyumlu kaliteli kaynaklar." 
              },
              { 
                title: "Gerçek Provalar", 
                desc: "Haftalık denemeler ve Türkiye geneli sıralama analizleri." 
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-6 md:p-10 bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl border-t-4 md:border-t-8 border-[#8B1A1A] transition-all duration-300 flex flex-col items-center justify-center text-center"
              >
                <h3 className="font-black text-sm md:text-2xl mb-2 md:mb-4 text-gray-800 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[11px] md:text-base leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LOKASYON: Harita ve Adres - Kompakt yapıldı */}
      <HomeMap />

      {/* 10. İLETİŞİM: WhatsApp Butonu */}
      <WhatsApp />
    </main>
  );
}