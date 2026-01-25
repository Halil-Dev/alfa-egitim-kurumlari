import HomeMap from '@/components/HomeMap';
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import WhatsApp from "@/components/WhatsApp";
import Announcements from "@/components/Announcements";
import About from "@/components/About";
import Values from "@/components/Values"; 
import Courses from "@/components/Courses"; 
import SuccessStories from "@/components/SuccessStories";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Karşılama Alanı */}
      <Hero />
      
      {/* 2. İstatistik Şeridi (Başarı Rakamları) */}
      <Stats />

      {/* 3. KURUMSAL: Hakkımızda Ana Bölüm */}
      <About />
      
      {/* 4. VİZYON & DEĞERLER (Hakkımızda'nın devamı niteliğinde) */}
      <Values />

      {/* 5. EĞİTİM: Kurslarımız / Program Detayları */}
      <Courses />

      {/* 6. SOSYAL KANIT: Başarı Hikayelerimiz (Öğrenci Yorumları) */}
      <SuccessStories />

      {/* 7. GÜNCEL: Etkinlikler ve Duyurular (Sanity Canlı) */}
      <Announcements />
      
      {/* 8. ÖZET: Neden Biz? */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Neden Alfa Eğitim Kurumları?</h2>
          <div className="w-24 h-1.5 bg-[#8B1A1A] mx-auto mb-16 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border-t-8 border-[#8B1A1A] transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="font-black text-2xl mb-4 text-gray-800">Uzman Kadro</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Torbalı'nın en tecrübeli öğretmen kadrosuyla, her öğrencinin öğrenme hızına uygun birebir rehberlik.
              </p>
            </div>

            <div className="p-10 bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border-t-8 border-[#8B1A1A] transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="font-black text-2xl mb-4 text-gray-800">Modern Yayınlar</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Yeni nesil sınav sistemine %100 uyumlu, piyasanın en kaliteli yayınları ve özel ders notları.
              </p>
            </div>

            <div className="p-10 bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border-t-8 border-[#8B1A1A] transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="font-black text-2xl mb-4 text-gray-800">Gerçek Provalar</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Haftalık düzenli deneme sınavları ve Türkiye geneli sıralama analizleri ile sınav stresine son.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LOKASYON: Harita ve Adres */}
      <HomeMap />

      {/* 10. İLETİŞİM: WhatsApp Butonu */}
      <WhatsApp />
    </main>
  );
}