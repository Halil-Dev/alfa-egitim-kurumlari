import Image from 'next/image';

const About = () => {
  return (
    <section id="hakkimizda" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Sol Taraf: Görsel Alanı */}
          <div className="relative w-full lg:w-1/2 min-h-[500px] flex items-center justify-center">
            {/* Dekoratif Arka Plan */}
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#8B1A1A]/5 rounded-[4rem] -z-0"></div>
            
            <div className="relative h-[600px] w-full rounded-[4rem] overflow-hidden shadow-2xl z-10 border-[12px] border-white">
              <Image 
                src="/about-image.jpg" 
                alt="Alfa Eğitim Kurumları Eğitim Ortamı"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Tecrübe Rozeti */}
            <div className="absolute bottom-12 -right-6 z-20 bg-[#8B1A1A] text-white p-8 rounded-[2.5rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="text-5xl font-black mb-1 leading-none">15+</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.25em] leading-tight opacity-90">Yıllık Eğitim<br/>Tecrübesi</div>
            </div>
          </div>

          {/* Sağ Taraf: Metin Alanı */}
          <div className="w-full lg:w-1/2 pt-12 lg:pt-0">
            <div className="inline-block bg-[#8B1A1A]/5 px-8 py-3 rounded-full mb-10">
              <h2 className="text-[#8B1A1A] font-black text-xs uppercase tracking-[0.5em]">Biz Kimiz?</h2>
            </div>
            
            <h3 className="text-6xl md:text-8xl font-[1000] text-black tracking-tighter leading-[1.05] mb-12 uppercase">
              TORBALI'NIN <br />EĞİTİMDEKİ <br />
              <span className="text-[#8B1A1A] relative">
                ALFA'SI
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-[#8B1A1A]/10 -z-10"></span>
              </span>
            </h3>
            
            <p className="text-2xl text-gray-600 font-bold leading-[1.8] mb-14">
              Alfa Eğitim Kurumları olarak, sadece bir dershane değil, her öğrencinin potansiyelini keşfettiği bir başarı merkeziyiz. 
              Modern eğitim anlayışımız ve disiplinli çalışma prensibimizle Torbalı'da eğitime yön veriyoruz.
            </p>
            
            {/* Özellikler: Alt kısımdaki butonlar kalktığı için burası artık bölümün sonu */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-16">
              {[
                { title: "Birebir Çözüm", desc: "Özel Soru Saatleri" },
                { title: "Uzman Kadro", desc: "Tecrübeli Hocalar" },
                { title: "Dijital Takip", desc: "Veli Bilgilendirme" },
                { title: "Modern Yayın", desc: "Yeni Nesil Sorular" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="w-8 h-8 rounded-full border-2 border-[#8B1A1A] flex items-center justify-center group-hover:bg-[#8B1A1A] transition-all shrink-0">
                    <div className="w-2 h-2 bg-[#8B1A1A] rounded-full group-hover:bg-white"></div>
                  </div>
                  <div>
                    <h4 className="font-black text-black uppercase text-base tracking-widest mb-1.5">{item.title}</h4>
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">{item.desc}</p>
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