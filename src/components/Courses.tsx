"use client";
import { useState, useRef, useEffect } from 'react';
import { client } from '@/sanity/lib/client';

const Courses = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const whatsappNumber = "905010852035";

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
    <section className="py-12 lg:py-24 bg-gray-50 overflow-hidden" id="kurslar">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-8 lg:mb-16">
          <div>
            <h2 className="text-[#8B1A1A] font-black text-[10px] lg:text-sm uppercase tracking-[0.2em] mb-2">Eğitim Programlarımız</h2>
            <h3 className="text-2xl lg:text-5xl font-[1000] text-black tracking-tighter uppercase text-left leading-none">KURS SEÇ</h3>
          </div>
          
          <div className="flex gap-2 lg:hidden mb-1">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-black active:bg-[#8B1A1A] active:text-white transition-all border border-gray-100"
            >
              ←
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-black active:bg-[#8B1A1A] active:text-white transition-all border border-gray-100"
            >
              →
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
        >
          {courses.map((course: any, i: number) => (
            <div 
              key={i} 
              className="min-w-[80%] sm:min-w-[350px] lg:min-w-0 snap-center bg-white p-6 lg:p-12 rounded-[2.5rem] lg:rounded-[4rem] shadow-lg border border-gray-50 flex flex-col items-center text-center"
            >
              <span className="bg-[#8B1A1A]/5 text-[#8B1A1A] px-3 py-1 rounded-full text-[9px] lg:text-xs font-black uppercase mb-4 tracking-wider">{course.audience}</span>
              <h4 className="text-xl lg:text-3xl font-[1000] text-black mb-4 lg:mb-8 leading-tight uppercase">{course.name}</h4>
              
              <ul className="space-y-2 lg:space-y-4 mb-6 lg:mb-10 flex-grow text-gray-500 font-bold text-[11px] lg:text-base leading-snug">
                {course.features.map((f: string, j: number) => (
                  <li key={j} className="flex items-center justify-center gap-1">
                    <span className="text-[#8B1A1A] opacity-50">•</span> {f}
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Merhaba, ${course.name} programınız hakkında detaylı bilgi alabilir miyim?`)}`}
                className="w-full bg-black text-white py-3.5 lg:py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] lg:text-xs text-center shadow-lg active:scale-95 transition-transform"
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