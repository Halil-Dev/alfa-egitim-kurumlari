"use client";
import { useRef } from 'react';

const SuccessStories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const stories = [
    { name: "Ece Yılmaz", result: "Torbalı Fen Lisesi", comment: "Birebir soru çözüm saatleri sayesinde eksiklerimi çok hızlı kapattım." },
    { name: "Mert Demir", result: "Ege Üniversitesi Tıp", comment: "Disiplinli deneme sınavı takvimi sınav stresimi yenmemi sağladı." },
    { name: "Halil Uysal", result: "Yazılım Mühendisliği", comment: "Alfa Eğitim Kurumları benim için bir dershaneden çok aile ortamıydı." }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 lg:py-24 bg-[#8B1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 lg:mb-12 gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl lg:text-5xl font-[1000] text-white tracking-tighter uppercase italic leading-tight">
              SİZİN BAŞARINIZ <br className="hidden lg:block" /> BİZİM HİKAYEMİZ
            </h3>
          </div>

          {/* Navigasyon Butonları - Mobilde biraz daha küçük */}
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white active:bg-white active:text-[#8B1A1A] transition-all"
            >
              ←
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white active:bg-white active:text-[#8B1A1A] transition-all"
            >
              →
            </button>
          </div>
        </div>

        {/* Kaydırılabilir Alan - Kart genişliği %80'e çekildi */}
        <div 
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6"
        >
          {stories.map((s, i) => (
            <div 
              key={i} 
              className="min-w-[80%] sm:min-w-[320px] lg:min-w-0 snap-center bg-white/5 backdrop-blur-sm p-6 lg:p-10 rounded-[2rem] lg:rounded-[3rem] border border-white/10 flex flex-col h-full"
            >
              <div className="text-white text-4xl font-serif mb-2 opacity-30">“</div>
              <p className="text-white/90 font-bold text-sm lg:text-lg mb-6 leading-relaxed italic flex-grow">
                {s.comment}
              </p>
              <div className="border-t border-white/10 pt-4 mt-auto">
                <div className="text-white font-black uppercase tracking-widest text-[11px] lg:text-base">
                  {s.name}
                </div>
                <div className="text-[#FBBF24] font-black text-[9px] lg:text-xs uppercase mt-0.5">
                  {s.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;