const Values = () => {
  const values = [
    { title: "Vizyonumuz", desc: "Torbalı'da her öğrencinin hayalindeki üniversiteye giden yolda en güvenilir rehber olmak." },
    { title: "Misyonumuz", desc: "Bireysel farklılıkları temel alarak, disiplin ve modern eğitim metotlarıyla başarıyı kalıcı kılmak." },
    { title: "Değerlerimiz", desc: "Dürüstlük, şeffaflık ve öğrenci odaklı yaklaşımımızla eğitimde kaliteyi temsil ediyoruz." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <div key={i} className="group p-10 rounded-[3rem] bg-gray-50 hover:bg-[#8B1A1A] transition-all duration-500">
              <h4 className="text-2xl font-black mb-4 text-black group-hover:text-white uppercase tracking-tighter">{v.title}</h4>
              <p className="text-gray-600 group-hover:text-white/80 font-bold leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Values;