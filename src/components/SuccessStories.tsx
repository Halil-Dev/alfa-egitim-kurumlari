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
    <section className="py-16 lg:py-24 bg-[#8B1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-3xl lg:text-5xl font-[1000] text-white tracking-tighter uppercase italic leading-tight">
              SİZİN BAŞARINIZ <br className="hidden lg:block" /> BİZİM HİKAYEMİZ
            </h3>
          </div>

          {/* Navigasyon Butonları */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#8B1A1A] transition-all"
            >
              ←
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#8B1A1A] transition-all"
            >
              →
            </button>
          </div>
        </div>

        {/* Kaydırılabilir Alan */}
        <div 
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        >
          {stories.map((s, i) => (
            <div 
              key={i} 
              className="min-w-[90%] sm:min-w-[350px] lg:min-w-0 snap-center bg-white/10 backdrop-blur-md p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-white/20 flex flex-col h-full"
            >
              <div className="text-white text-5xl font-serif mb-4 opacity-30">“</div>
              <p className="text-white/90 font-bold text-base lg:text-lg mb-8 leading-relaxed italic flex-grow">
                {s.comment}
              </p>
              <div className="border-t border-white/20 pt-6 mt-auto">
                <div className="text-white font-black uppercase tracking-widest text-sm lg:text-base">
                  {s.name}
                </div>
                <div className="text-[#FBBF24] font-black text-[10px] lg:text-xs uppercase mt-1">
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