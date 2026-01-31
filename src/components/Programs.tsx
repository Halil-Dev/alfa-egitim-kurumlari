const programs = [
  { 
    title: "LGS Hazırlık", 
    desc: "8. sınıf öğrencilerine özel yeni nesil soru çözümleri, haftalık deneme sınavları ve yoğunlaştırılmış kamp programı ile hedeflediğiniz liseye hazırlıyoruz.", 
    icon: "📚",
    tag: "Lise Giriş"
  },
  { 
    title: "TYT - AYT", 
    desc: "Üniversite sınav maratonunda eksiksiz konu anlatımı, profesyonel rehberlik desteği ve Türkiye geneli denemelerle başarınızı tescilliyoruz.", 
    icon: "🎓",
    tag: "Üniversite Hazırlık"
  },
  { 
    title: "Ara Sınıflar", 
    desc: "9, 10 ve 11. sınıflar için okul başarısını artırmaya yönelik butik eğitim, yazılı hazırlık çalışmaları ve temel oluşturma dersleri.", 
    icon: "✍️",
    tag: "Okul Takviye"
  },
];

const Programs = () => {
  return (
    // id="kurslar" navigasyonun bu noktaya kaymasını sağlar
    <section id="kurslar" className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-20">
          <div className="inline-block bg-[#8B1A1A]/5 px-6 py-2 rounded-full mb-6">
            <span className="text-[#8B1A1A] font-black text-xs uppercase tracking-[0.4em]">Eğitimde Mükemmellik</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-[1000] text-black tracking-tighter uppercase leading-none mb-8">
            EĞİTİM <span className="text-[#8B1A1A]">PROGRAMLARIMIZ</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 font-medium leading-relaxed">
            Her öğrencinin ihtiyacına uygun, başarı odaklı ve disiplinli çalışma modellerimizle geleceği birlikte inşa ediyoruz.
          </p>
        </div>

        {/* Kartlar Izgarası */}
        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((p, i) => (
            <div 
              key={i} 
              className="group p-10 rounded-[3rem] border border-gray-100 bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Kart Üstü Süsleme */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B1A1A]/5 rounded-bl-[5rem] -mr-10 -mt-10 transition-transform group-hover:scale-110" />

              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="text-5xl">{p.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#8B1A1A] bg-[#8B1A1A]/5 px-3 py-1 rounded-lg">
                    {p.tag}
                  </span>
                </div>
                
                <h3 className="text-3xl font-[1000] mb-6 text-black group-hover:text-[#8B1A1A] transition-colors uppercase tracking-tighter">
                  {p.title}
                </h3>
                
                {/* leading-relaxed ve font-medium ile metin ferahlatıldı */}
                <p className="text-gray-500 font-medium leading-[1.8] mb-10 text-lg">
                  {p.desc}
                </p>
              </div>
              
              {/* WhatsApp Bilgi Al Butonu */}
              <a 
                href={`https://wa.me/905010852035?text=${encodeURIComponent(p.title + " hakkında bilgi almak istiyorum.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-5 bg-black text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#8B1A1A] transition-all duration-300 shadow-lg hover:shadow-[#8B1A1A]/30 gap-3"
              >
                BİLGİ AL <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;