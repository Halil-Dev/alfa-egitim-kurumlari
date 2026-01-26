"use client"; // Etkileşim için gerekli
import { useState, useRef, useEffect } from 'react';
import { client } from '@/sanity/lib/client';

const Courses = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const whatsappNumber = "905010852035";

  // Veriyi Client-side'da çekiyoruz (veya props olarak alabilirsin)
  useEffect(() => {
    const fetchCourses = async () => {
      const query = `*[_type == "course"] | order(order asc)`;
      const data = await client.fetch(query);
      if (data.length > 0) setCourses(data);
      else {
        setCourses([
          { name: "LGS Hazırlık", audience: "7. ve 8. Sınıf", features: ["Haftalık 16 Saat Ders", "Birebir Rehberlik", "Yeni Nesil Soru Çözümü"] },
          { name: "YKS Hazırlık", audience: "11, 12 ve Mezun", features: ["TYT-AYT Odaklı", "Haftalık Seri Denemeler", "Gece Kütüphanesi Etüdü"] },
          { name: "Ara Sınıf Destek", audience: "9. ve 10. Sınıf", features: ["Okul Yazılı Hazırlık", "Temel Oluşturma", "Analitik Düşünme"] }
        ]);
      }
    };
    fetchCourses();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden" id="kurslar">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10 lg:mb-16">
          <div>
            <h2 className="text-[#8B1A1A] font-black text-[10px] lg:text-sm uppercase tracking-[0.3em] mb-4">Eğitim Programlarımız</h2>
            <h3 className="text-3xl lg:text-5xl font-[1000] text-black tracking-tighter uppercase text-left">KENDİNE UYGUN KURSU SEÇ</h3>
          </div>
          
          {/* BUTONLAR (Sadece Mobilde/Tablette Görünür) */}
          <div className="flex gap-2 lg:hidden mb-1">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-black hover:bg-[#8B1A1A] hover:text-white transition-all"
            >
              ←
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-black hover:bg-[#8B1A1A] hover:text-white transition-all"
            >
              →
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        >
          {courses.map((course: any, i: number) => (
            <div 
              key={i} 
              className="min-w-[90%] sm:min-w-[400px] lg:min-w-0 snap-center bg-white p-8 lg:p-12 rounded-[3rem] lg:rounded-[4rem] shadow-xl border border-gray-100 flex flex-col items-center text-center"
            >
              <span className="bg-[#8B1A1A]/10 text-[#8B1A1A] px-4 py-1 rounded-full text-[10px] lg:text-xs font-black uppercase mb-6">{course.audience}</span>
              <h4 className="text-2xl lg:text-3xl font-[1000] text-black mb-6 lg:mb-8 leading-none uppercase">{course.name}</h4>
              
              <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-10 flex-grow text-gray-500 font-bold text-sm lg:text-base">
                {course.features.map((f: string, j: number) => (
                  <li key={j}>• {f}</li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Merhaba, ${course.name} programınız hakkında detaylı bilgi alabilir miyim?`)}`}
                className="w-full bg-black text-white py-4 lg:py-5 rounded-full font-black uppercase tracking-widest text-[10px] lg:text-xs text-center"
              >
                Detaylı Bilgi
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;