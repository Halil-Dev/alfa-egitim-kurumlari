import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const heroStats = [
    { label: "Özel Yayınlar", value: "Yeni Nesil" },
  ];

  return (
    <section className="relative pt-12 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          
          {/* Sol Metin */}
          <div className="flex-1 text-center lg:text-left w-full">
            
            {/* Rozet */}
            <div className="inline-block bg-[#8B1A1A] px-6 py-2 rounded-xl mb-8 shadow-lg shadow-red-900/20">
              <span className="text-white text-xs md:text-sm font-black tracking-[0.15em] uppercase">
                2026 KAYIT DÖNEMİ BAŞLADI
              </span>
            </div>
            
            {/* Ana Başlık */}
            <h1 className="text-5xl md:text-6xl lg:text-[82px] font-[1000] text-black leading-[0.95] tracking-[-0.04em] mb-10">
              GELECEĞİ <br />
              <span className="text-[#8B1A1A]">ALFA EĞİTİM KURUMLARI</span> <br />
              İLE İNŞA EDİN
            </h1>
            
            {/* Açıklama Metni */}
            <p className="text-xl md:text-2xl text-black font-bold leading-relaxed max-w-xl mb-12 opacity-90 mx-auto lg:mx-0">
              Sınav maratonunda Torbalı'nın en güçlü kadrosuyla yanınızdayız. 
              <span className="block mt-2 text-[#8B1A1A]">Başarıyı şansa bırakmayın.</span>
            </p>
            
            {/* Butonlar */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-16">
              <a 
                href="https://wa.me/905010852035" 
                target="_blank"
                className="bg-[#8B1A1A] text-white px-12 py-5 rounded-2xl font-[900] text-xl hover:bg-black transition-all text-center shadow-2xl shadow-red-900/30 uppercase tracking-tighter"
              >
                WHATSAPP BİLGİ AL
              </a>
              
              <Link 
                href="/iletisim" 
                className="bg-black text-white px-12 py-5 rounded-2xl font-[900] text-xl hover:bg-[#8B1A1A] transition-all text-center uppercase tracking-tighter"
              >
                ÖN KAYIT FORMU
              </Link>
            </div>

            {/* HERO STATS - İşte Burayı Mobilde Ortalanacak Şekilde Ekledim */}
            <div className="flex flex-row items-start justify-center lg:justify-start gap-8 md:gap-12 border-t border-gray-100 pt-10">
              {heroStats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl md:text-4xl font-[1000] text-black leading-none mb-2">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest text-center lg:text-left leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Afiş */}
          <div className="flex-1 relative w-full max-w-[480px]">
            <div className="absolute inset-0 bg-[#8B1A1A]/10 blur-[120px] -z-10 rounded-full"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] border-[12px] border-white transform lg:rotate-2 hover:rotate-0 transition-all duration-500">
              <Image 
                src="/afis.jpg" 
                alt="Deneme Sınavı Afişi" 
                width={500} 
                height={700} 
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;