import React from 'react';

const HomeMap = () => {
  return (
    <section id="iletisim" className="bg-white py-12 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-alfa-koyu rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch border border-white/10">
          
          {/* Sol Taraf: Bilgi Alanı */}
          <div className="flex-1 p-8 md:p-20 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-32 h-32 bg-alfa-bordo/20 blur-[80px] -z-0"></div>
            
            <div className="relative z-10">
              <div className="inline-block bg-alfa-bordo/10 px-4 py-1.5 rounded-full mb-6">
                <h2 className="text-alfa-bordo font-black text-[10px] uppercase tracking-[0.3em]">Ulaşım</h2>
              </div>
              
              <h3 className="text-white text-3xl md:text-7xl font-[1000] mb-8 md:mb-10 tracking-tighter uppercase leading-[0.9]">
                TORBALI'NIN <br /> 
                <span className="text-alfa-bordo">MERKEZİNDEYİZ</span>
              </h3>
              
              {/* Bilgiler Bölümü */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 mb-10">
                {/* Adres */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl group-hover:bg-alfa-bordo transition-colors shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="text-alfa-bordo font-black text-[10px] uppercase tracking-widest mb-1">Adres</h4>
                    <p className="text-gray-300 font-bold text-sm md:text-lg lg:text-xl leading-tight">
                      Tepeköy, 4505 Sk. No:9 <br className="hidden lg:block" /> Torbalı / İzmir
                    </p>
                  </div>
                </div>

                {/* Telefon - Bölünmeyi Engelleyen Kısım */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl group-hover:bg-alfa-bordo transition-colors shrink-0">
                    📞
                  </div>
                  <div className="min-w-0"> {/* Taşmaları önlemek için min-w-0 */}
                    <h4 className="text-alfa-bordo font-black text-[10px] uppercase tracking-widest mb-1">Telefon</h4>
                    <a 
                      href="tel:+905010852035" 
                      className="text-white font-[1000] text-lg md:text-2xl lg:text-3xl tracking-tighter hover:text-alfa-bordo transition-colors whitespace-nowrap"
                    >
                      0501 085 20 35
                    </a>
                  </div>
                </div>
              </div>

              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=ALFA+EĞİTİM+KURUMLARI+%2Bplus&destination_place_id=ChIJ_WdD5I9buRQRAfEUpJTe7bc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center bg-alfa-bordo text-white px-8 py-4 md:px-12 md:py-6 rounded-2xl font-black text-center uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-white hover:text-black transition-all shadow-xl active:scale-95"
              >
                YOL TARİFİ AL <span className="ml-2 text-lg">↗</span>
              </a>
            </div>
          </div>

          {/* Sağ Taraf: Harita */}
          <div className="flex-1 h-[300px] lg:h-auto relative grayscale opacity-70 hover:grayscale-0 transition-all duration-1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.4567!2d27.3621!3d38.1517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA5JzA2LjEiTiAyN8KwMjEnNDMuNiJF!5e0!3m2!1str!2str!4v1620000000000" // Gerçek embed kodunu buraya koy
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeMap;