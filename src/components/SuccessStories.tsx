const SuccessStories = () => {
  const stories = [
    { name: "Ece Yılmaz", result: "Torbalı Fen Lisesi", comment: "Birebir soru çözüm saatleri sayesinde eksiklerimi çok hızlı kapattım." },
    { name: "Mert Demir", result: "Ege Üniversitesi Tıp", comment: "Disiplinli deneme sınavı takvimi sınav stresimi yenmemi sağladı." },
    { name: "Halil Uysal", result: "yazılım Mühendisliği", comment: "Alfa Eğitim Kurumları benim için bir dershaneden çok aile ortamıydı." }
  ];

  return (
    <section className="py-24 bg-[#8B1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-[1000] text-white tracking-tighter uppercase italic">SİZİN BAŞARINIZ BİZİM HİKAYEMİZ</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stories.map((s, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20">
              <div className="text-white text-5xl font-serif mb-6 opacity-30">“</div>
              <p className="text-white/90 font-bold text-lg mb-8 leading-relaxed italic">{s.comment}</p>
              <div className="border-t border-white/20 pt-6">
                <div className="text-white font-black uppercase tracking-widest">{s.name}</div>
                <div className="text-[#FBBF24] font-black text-xs uppercase mt-1">{s.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SuccessStories;