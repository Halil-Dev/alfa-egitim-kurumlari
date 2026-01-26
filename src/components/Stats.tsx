const stats = [
  { id: 1, label: 'YILLIK DENEYİM', value: '15+' },
  { id: 2, label: 'ÜNİVERSİTE BAŞARISI', value: '%98' },
  { id: 3, label: 'BUTİK KONTENJAN', value: '12 Kişi' },
  { id: 4, label: 'DENEME SINAVI', value: '60+' },
];

const Stats = () => {
  return (
    <section className="bg-[#8B1A1A] py-8 lg:py-14 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* grid-cols-2: Mobilde yan yana 2 tane, lg:grid-cols-4: Masaüstünde 4 tane */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-2 md:gap-x-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center justify-center text-center group"
            >
              {/* Sayı Alanı - Boyutlar küçültüldü */}
              <div className="relative mb-2 md:mb-4">
                <span className="text-3xl md:text-6xl font-[1000] text-white tracking-tighter block leading-none">
                  {stat.value}
                </span>
                {/* Alt çizgi - Mobilde inceltildi */}
                <div className="w-6 md:w-12 h-0.5 md:h-1 bg-white/40 mx-auto mt-2 md:mt-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
              
              {/* Açıklama Alanı - Font boyutu optimize edildi */}
              <p className="text-white/80 text-[9px] md:text-sm font-black tracking-[0.1em] md:tracking-[0.2em] uppercase max-w-[100px] md:max-w-[200px] leading-tight">
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