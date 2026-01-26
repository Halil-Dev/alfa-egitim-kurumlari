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
        {/* grid-cols-2: Mobilde yan yana 2 tane
            sm:grid-cols-2: Tabletlerde 2 tane
            lg:grid-cols-4: Masaüstünde 4 tane yan yana
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 md:gap-x-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center justify-center text-center group"
            >
              {/* Sayı Alanı */}
              <div className="relative mb-3 md:mb-4">
                <span className="text-4xl md:text-7xl font-[1000] text-white tracking-tighter block leading-none">
                  {stat.value}
                </span>
                {/* Alt çizgi */}
                <div className="w-8 md:w-12 h-1 bg-white/40 mx-auto mt-3 md:mt-4 rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
              
              {/* Açıklama Alanı */}
              <p className="text-white/90 text-[10px] md:text-base font-black tracking-[0.15em] md:tracking-[0.25em] uppercase max-w-[120px] md:max-w-[150px] leading-tight">
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