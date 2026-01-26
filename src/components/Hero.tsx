import Link from 'next/link';
import Image from 'next/image';
import { client, urlFor } from '@/sanity/lib/client';

async function getHeroData() {
  const query = `*[_type == "hero" && isActive == true][0]`;
  const data = await client.fetch(query);
  return data;
}

const Hero = async () => {
  const heroData = await getHeroData();

  const badgeText = heroData?.badgeText || "2026 KAYIT DÖNEMİ BAŞLADI";
  const mainImage = heroData?.mainImage 
    ? urlFor(heroData.mainImage).url() 
    : "/afis.jpg";

  const heroStats = [
    { label: "Özel Yayınlar", value: "Yeni Nesil" },
  ];

  return (
    <section className="relative pt-6 md:pt-12 pb-16 lg:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          
          {/* Sol Metin Alanı */}
          <div className="flex-1 text-center lg:text-left w-full order-2 lg:order-1">
            
            {/* Rozet - Mobilde daha kibar */}
            <div className="inline-block bg-[#8B1A1A] px-4 py-1.5 md:px-6 md:py-2 rounded-lg md:rounded-xl mb-6 md:mb-8 shadow-lg shadow-red-900/20">
              <span className="text-white text-[10px] md:text-sm font-black tracking-[0.15em] uppercase">
                {badgeText}
              </span>
            </div>
            
            {/* Ana Başlık - Mobilde boyutları optimize edildi */}
            <h1 className="text-3xl md:text-6xl lg:text-[82px] font-[1000] text-black leading-[1.1] lg:leading-[0.95] tracking-tight md:tracking-[-0.04em] mb-6 md:mb-10 uppercase">
              GELECEĞİ <br />
              <span className="text-[#8B1A1A]">ALFA EĞİTİM</span> <br className="hidden md:block" />
              İLE İNŞA EDİN
            </h1>
            
            {/* Açıklama Metni */}
            <p className="text-base md:text-2xl text-black font-bold leading-relaxed max-w-xl mb-8 md:mb-12 opacity-90 mx-auto lg:mx-0 px-2 md:px-0 italic">
              Sınav maratonunda Torbalı'nın en güçlü kadrosuyla yanınızdayız. 
              <span className="block md:inline text-[#8B1A1A]"> Başarıyı şansa bırakmayın.</span>
            </p>
            
            {/* BUTONLAR - MOBİLDE YAN YANA (ROW) */}
            <div className="flex flex-row gap-3 justify-center lg:justify-start mb-10 md:mb-16">
              <a 
                href="https://wa.me/905010852035" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-none bg-[#8B1A1A] text-white px-4 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-[11px] md:text-xl hover:bg-black transition-all text-center shadow-xl shadow-red-900/20 uppercase tracking-tighter flex items-center justify-center"
              >
                WHATSAPP BİLGİ
              </a>
              
              <Link 
                href="/iletisim" 
                className="flex-1 lg:flex-none bg-black text-white px-4 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-[11px] md:text-xl hover:bg-[#8B1A1A] transition-all text-center uppercase tracking-tighter flex items-center justify-center"
              >
                ÖN KAYIT FORMU
              </Link>
            </div>

            {/* HERO STATS */}
            <div className="flex flex-row items-start justify-center lg:justify-start gap-8 md:gap-12 border-t border-gray-100 pt-8">
              {heroStats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl md:text-4xl font-[1000] text-black leading-none mb-2">
                    {stat.value}
                  </span>
                  <span className="text-[9px] md:text-xs font-black text-gray-400 uppercase tracking-widest text-center lg:text-left leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Afiş - Mobilde daha az yer kaplaması için küçültüldü */}
          <div className="flex-1 relative w-full max-w-[320px] md:max-w-[480px] order-1 lg:order-2">
            <div className="absolute inset-0 bg-[#8B1A1A]/10 blur-[80px] md:blur-[120px] -z-10 rounded-full"></div>
            
            <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white transform lg:rotate-2">
              <Image 
                src={mainImage} 
                alt="Alfa Eğitim Afiş" 
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