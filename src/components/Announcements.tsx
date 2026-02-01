"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const Announcements = () => {
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const query = `*[_type == "announcement"] | order(date desc) {
        _id,
        title,
        date,
        content, 
        image
      }`;
      const data = await client.fetch(query);
      setAnnouncements(data);
    };
    fetchAnnouncements();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (!announcements || announcements.length === 0) return null;

  return (
    <section className="py-12 lg:py-24 bg-gray-50 overflow-hidden" id="duyurular" aria-labelledby="announcements-title">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Başlık ve Oklar */}
        <div className="flex justify-between items-end mb-8 lg:mb-16">
          <div>
            <h2 className="text-[#8B1A1A] font-black text-[10px] lg:text-sm uppercase tracking-[0.2em] mb-2">Güncel</h2>
            <h3 id="announcements-title" className="text-2xl lg:text-5xl font-[1000] text-black tracking-tighter uppercase leading-none">
              ETKİNLİK & DUYURU
            </h3>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')} 
              aria-label="Önceki duyuruları gör"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-black border border-gray-100 hover:bg-[#8B1A1A] hover:text-white transition-all focus:ring-2 focus:ring-[#8B1A1A] outline-none"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button 
              onClick={() => scroll('right')} 
              aria-label="Sonraki duyuruları gör"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-black border border-gray-100 hover:bg-[#8B1A1A] hover:text-white transition-all focus:ring-2 focus:ring-[#8B1A1A] outline-none"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Kaydırılabilir Alan */}
        <div 
          ref={scrollRef}
          className="flex gap-4 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10 -mx-4 px-4"
        >
          {announcements.map((item: any) => (
            <article 
              key={item._id} 
              className="
                min-w-[85%] md:min-w-[45%] lg:min-w-[32%]
                snap-center bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-50 flex flex-col group hover:shadow-2xl transition-all duration-500
              "
            >
              {/* Görsel Alanı */}
              <div className="relative w-full h-48 md:h-64 overflow-hidden shrink-0">
                {item.image ? (
                  <Image 
                    src={urlFor(item.image).url()} 
                    alt={`${item.title} - Alfa Eğitim Duyuru Görseli`} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold uppercase text-xs">Görsel Yok</div>
                )}
                
                {item.date && (
                  <div className="absolute top-4 left-4 z-10 bg-[#8B1A1A] text-white px-3 py-1.5 rounded-xl font-black text-[10px] uppercase shadow-md">
                    <time dateTime={new Date(item.date).toISOString()}>
                      {new Date(item.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })}
                    </time>
                  </div>
                )}
              </div>

              {/* Metin Alanı */}
              <div className="p-6 md:p-10 flex flex-col flex-grow justify-between">
                <div className="mb-6">
                  <h4 className="text-lg md:text-2xl font-black text-black mb-3 leading-tight uppercase tracking-tighter line-clamp-2 italic">
                    {item.title}
                  </h4>
                  {/* Kontrast için text-gray-500 -> text-gray-600 yapıldı */}
                  <p className="text-gray-600 text-[12px] md:text-base font-bold leading-relaxed line-clamp-3">
                    {item.content}
                  </p>
                </div>
                
                <Link 
                  href={`/duyuru/${item._id}`} 
                  aria-label={`${item.title} duyurusu detaylarını incele`}
                  className="w-full bg-black text-white py-4 md:py-5 rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-[0.2em] text-center hover:bg-[#8B1A1A] transition-all shadow-lg active:scale-95 outline-none focus:ring-2 focus:ring-black"
                >
                  DETAYLARI İNCELE ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;