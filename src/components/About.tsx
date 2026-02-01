import Image from 'next/image';

const About = () => {
  return (
    <section id="hakkimizda" className="py-20 lg:py-32 bg-white overflow-hidden relative" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          
          {/* Sol Taraf: Görsel Alanı */}
          <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[500px] flex items-center justify-center">
            {/* Dekoratif Arka Plan */}
            <div className="absolute -bottom-5 -left-5 w-40 h-40 lg:w-80 lg:h-80 bg-[#8B1A1A]/5 rounded-[2rem] lg:rounded-[4rem] -z-0" aria-hidden="true"></div>
            
            {/* Görsel Çerçevesi */}
            <div className="relative h-[350px] lg:h-[600px] w-full rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl z-10 border-[8px] lg:border-[12px] border-white">
              <Image 
                src="/about-image.jpg" 
                alt="Alfa Eğitim Kurumları Modern Eğitim Ortamı ve Sınıfları"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Tecrübe Rozeti */}
            <div className="absolute bottom-6 -right-2 lg:bottom-12 lg:-right-6 z-20 bg-[#8B1A1A] text-white p-4 lg:p-8 rounded-[1.5rem] lg:rounded-[2.5rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="text-2xl lg:text-5xl font-black mb-1 leading-none">15+</div>
              <div className="text-[8px] lg:text-[11px] font-bold uppercase tracking-[0.15em] lg:tracking-[0.25em] leading-tight opacity-95">Yıllık Eğitim<br/>Tecrübesi</div>
            </div>
          </div>

          {/* Sağ Taraf: Metin Alanı */}
          <div className="w-full lg:w-1/2 pt-4 lg:pt-0">
            <div className="inline-block bg-[#8B1A1A]/5 px-6 py-2 lg:px-8 lg:py-3 rounded-full mb-6 lg:mb-10">
              <h2 className="text-[#8B1A1A] font-black text-[10px] lg:text-xs uppercase tracking-[0.5em]">Biz Kimiz?</h2>
            </div>
            
            <h3 id="about-heading" className="text-4xl md:text-8xl font-[1000] text-black tracking-tighter leading-[1.05] mb-8 lg:mb-12 uppercase">
              TORBALI'NIN <br />EĞİTİMDEKİ <br />
              <span className="text-[#8B1A1A] relative">
                ALFA'SI
                <span className="absolute -bottom-1 left-0 w-full h-2 lg:h-4 bg-[#8B1A1A]/10 -z-10" aria-hidden="true"></span>
              </span>
            </h3>
            
            {/* Ana metin kontrastı text-gray-600 olarak korundu (Lighthouse için uygundur) */}
            <p className="text-lg lg:text-2xl text-gray-700 font-bold leading-relaxed lg:leading-[1.8] mb-10 lg:mb-14">
              Alfa Eğitim Kurumları olarak, her öğrencinin potansiyelini keşfettiği bir başarı merkeziyiz. 
              Modern eğitim anlayışımızla Torbalı'da eğitime yön veriyoruz.
            </p>
            
            {/* Özellikler Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-y-8 gap-x-4 lg:gap-x-16">
              {[
                { title: "Birebir Çözüm", desc: "Özel Soru Saatleri" },
                { title: "Uzman Kadro", desc: "Tecrübeli Hocalar" },
                { title: "Dijital Takip", desc: "Veli Bilgilendirme" },
                { title: "Modern Yayın", desc: "Yeni Nesil Sorular" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 lg:gap-6 group">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-[#8B1A1A] flex items-center justify-center group-hover:bg-[#8B1A1A] transition-all shrink-0" aria-hidden="true">
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#8B1A1A] rounded-full group-hover:bg-white"></div>
                  </div>
                  <div>
                    <h4 className="font-black text-black uppercase text-[10px] lg:text-base tracking-widest mb-1 lg:mb-1.5">{item.title}</h4>
                    {/* Kontrast için text-gray-400 -> text-gray-600 yapıldı (KRİTİK DÜZELTME) */}
                    <p className="text-gray-600 font-bold text-[8px] lg:text-xs uppercase tracking-wider">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;