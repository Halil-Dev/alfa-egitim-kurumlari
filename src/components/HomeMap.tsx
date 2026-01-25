import React from 'react';

const HomeMap = () => {
  return (
    // id="iletisim" navigasyonun ve "Ön Kayıt" butonunun buraya kaymasını sağlar
    <section id="iletisim" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-alfa-koyu rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row items-stretch border border-white/10">
          
          {/* Sol Taraf: Bilgi Alanı */}
          <div className="flex-1 p-12 md:p-20 flex flex-col justify-center relative">
            {/* Dekoratif Arka Plan Işığı */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-alfa-bordo/20 blur-[80px] -z-0"></div>
            
            <div className="relative z-10">
              <div className="inline-block bg-alfa-bordo/10 px-6 py-2 rounded-full mb-8">
                <h2 className="text-alfa-bordo font-black text-xs uppercase tracking-[0.5em]">Ulaşım</h2>
              </div>
              
              <h3 className="text-white text-5xl md:text-7xl font-[1000] mb-10 tracking-tighter uppercase leading-[0.9]">
                TORBALI'NIN <br /> 
                <span className="text-alfa-bordo">MERKEZİNDEYİZ</span>
              </h3>
              
              <div className="space-y-10 mb-12">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl group-hover:bg-alfa-bordo transition-colors">
                    📍
                  </div>
                  <div>
                    <h4 className="text-alfa-bordo font-black text-xs uppercase tracking-widest mb-2">Adres</h4>
                    <p className="text-gray-300 font-bold text-xl leading-relaxed">
                      Tepeköy, 4505 Sokak No:9 <br /> 
                      Daire:1, Torbalı / İzmir
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl group-hover:bg-alfa-bordo transition-colors">
                    📞
                  </div>
                  <div>
                    <h4 className="text-alfa-bordo font-black text-xs uppercase tracking-widest mb-2">Telefon</h4>
                    <p className="text-white font-[1000] text-3xl tracking-tighter hover:text-alfa-bordo transition-colors">
                      0501 085 20 35
                    </p>
                  </div>
                </div>
              </div>

              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Tepeköy,4505+Sokak+No:9+Daire:1,Torbalı/İzmir" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-alfa-bordo text-white px-12 py-6 rounded-2xl font-black text-center uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all shadow-2xl shadow-alfa-bordo/20 active:scale-95"
              >
                YOL TARİFİ AL <span className="ml-3 text-lg">↗</span>
              </a>
            </div>
          </div>

          {/* Sağ Taraf: Harita */}
          <div className="flex-1 min-h-[500px] lg:min-h-full relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
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
      </div>
    </section>
  );
};

export default HomeMap;