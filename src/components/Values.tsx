const Values = () => {
  const values = [
    { title: "Vizyon", desc: "Hayalindeki üniversiteye giden yolda en güvenilir rehber olmak." },
    { title: "Misyon", desc: "Disiplin ve modern metotlarla başarıyı kalıcı kılmak." },
    { title: "Değerler", desc: "Dürüstlük ve öğrenci odaklı eğitim kalitesi." }
  ];

  return (
    <section className="py-12 lg:py-20 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-2 lg:px-6">
        
        {/* 3 SÜTUN YAN YANA - YAZILAR OKUNABİLİR */}
        <div className="grid grid-cols-3 gap-1.5 lg:gap-12">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="group min-h-[140px] lg:min-h-0 p-3 lg:p-10 rounded-2xl lg:rounded-[3rem] bg-gray-50 hover:bg-[#8B1A1A] transition-all duration-500 flex flex-col justify-center items-center text-center border border-gray-100/50"
            >
              {/* Başlık - Okunabilir Boyut */}
              <h4 className="text-[12px] lg:text-2xl font-[1000] mb-2 lg:mb-4 text-[#8B1A1A] group-hover:text-white uppercase tracking-tighter leading-none">
                {v.title}
              </h4>
              
              {/* Açıklama - 2-3 Satıra İzin Veren Boyut */}
              <p className="text-[10px] lg:text-lg text-gray-700 group-hover:text-white/95 font-bold leading-[1.3] lg:leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Values;