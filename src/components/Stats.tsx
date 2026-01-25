const stats = [
  { id: 1, label: 'YILLIK DENEYİM', value: '15+' },
  { id: 2, label: 'ÜNİVERSİTE BAŞARISI', value: '%98' },
  { id: 3, label: 'BUTİK KONTENJAN', value: '12 Kişi' },
  { id: 4, label: 'DENEME SINAVI', value: '60+' },
];

const Stats = () => {
  return (
    <section className="bg-[#8B1A1A] py-16 lg:py-24 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid yapısını tam merkezleme için güncelledik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center justify-center text-center group"
            >
              {/* Sayı Alanı - Altındaki metinle tam hizalı */}
              <div className="relative mb-4">
                <span className="text-6xl md:text-7xl font-[1000] text-white tracking-tighter block leading-none">
                  {stat.value}
                </span>
                {/* Alt çizgi - Tam merkezde ve orantılı */}
                <div className="w-12 h-1.5 bg-white/40 mx-auto mt-4 rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
              
              {/* Açıklama Alanı - Sayının tam altına ortalı */}
              <p className="text-white/90 text-sm md:text-base font-black tracking-[0.25em] uppercase max-w-[150px] leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;