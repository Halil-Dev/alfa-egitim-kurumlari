"use client";
import { useState, useRef, useEffect } from 'react';
import { client } from '@/sanity/lib/client';

const Courses = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const whatsappNumber = "905010852035";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const query = `*[_type == "course"] | order(siralama asc)`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          setCourses(data);
        }
      } catch (error) {
        console.error("Kurslar çekilirken hata:", error);
      }
    };
    fetchCourses();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Ekran genişliğinin yarısı kadar kaydırarak daha yumuşak bir geçiş sağlıyoruz
      const scrollAmount = clientWidth / 2;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 lg:py-24 bg-gray-50 overflow-hidden" id="kurslar">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Başlık ve Oklar */}
        <div className="flex justify-between items-end mb-8 lg:mb-16">
          <div>
            <h2 className="text-[#8B1A1A] font-black text-[10px] lg:text-sm uppercase tracking-[0.2em] mb-2">Eğitim Programlarımız</h2>
            <h3 className="text-2xl lg:text-5xl font-[1000] text-black tracking-tighter uppercase leading-none">KURS SEÇ</h3>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')} 
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-black border border-gray-100 hover:bg-[#8B1A1A] hover:text-white transition-all"
            >
              ←
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-black border border-gray-100 hover:bg-[#8B1A1A] hover:text-white transition-all"
            >
              →
            </button>
          </div>
        </div>

        {/* Kaydırılabilir Alan */}
        <div 
          ref={scrollRef}
          className="flex gap-4 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10"
        >
          {courses.map((course: any, i: number) => (
            <div 
              key={course._id || i} 
              className="
                min-w-[85%]       /* Mobilde ekranın %85'i */
                md:min-w-[45%]    /* Tablette ekranın %45'i */
                lg:min-w-[30%]    /* Masaüstünde ekranın %30'u (böylece 3 kart yan yana sığar gibi durur) */
                snap-center bg-white p-6 lg:p-10 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-lg border border-gray-50 flex flex-col items-center text-center transition-all duration-300
              "
            >
              <span className="bg-[#8B1A1A]/5 text-[#8B1A1A] px-3 py-1 rounded-full text-[9px] lg:text-xs font-black uppercase mb-4 tracking-wider">
                {course.audience}
              </span>
              
              <h4 className="text-xl lg:text-2xl font-[1000] text-black mb-4 lg:mb-8 leading-tight uppercase">
                {course.name}
              </h4>
              
              <ul className="space-y-2 lg:space-y-4 mb-6 lg:mb-10 flex-grow text-gray-500 font-bold text-[11px] lg:text-base leading-snug">
                {course.features?.map((f: string, j: number) => (
                  <li key={j} className="flex items-center justify-center gap-1">
                    <span className="text-[#8B1A1A] opacity-50">•</span> {f}
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Merhaba, ${course.name} programınız hakkında bilgi alabilir miyim?`)}`}
                className="w-full bg-black text-white py-3.5 lg:py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] lg:text-xs text-center shadow-lg hover:bg-[#8B1A1A] transition-all"
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