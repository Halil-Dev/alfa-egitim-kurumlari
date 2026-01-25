const Courses = () => {
  const courses = [
    { name: "LGS Hazırlık", audience: "7. ve 8. Sınıf", features: ["Haftalık 16 Saat Ders", "Birebir Rehberlik", "Yeni Nesil Soru Çözümü"] },
    { name: "YKS Hazırlık", audience: "11, 12 ve Mezun", features: ["TYT-AYT Odaklı", "Haftalık Seri Denemeler", "Gece Kütüphanesi Etüdü"] },
    { name: "Ara Sınıf Destek", audience: "9. ve 10. Sınıf", features: ["Okul Yazılı Hazırlık", "Temel Oluşturma", "Analitik Düşünme"] }
  ];

  return (
    <section className="py-24 bg-gray-50" id="kurslar">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#8B1A1A] font-black text-sm uppercase tracking-[0.3em] mb-4">Eğitim Programlarımız</h2>
          <h3 className="text-5xl font-[1000] text-black tracking-tighter uppercase">KENDİNE UYGUN KURSU SEÇ</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div key={i} className="bg-white p-12 rounded-[4rem] shadow-xl border border-gray-100 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <span className="bg-[#8B1A1A]/10 text-[#8B1A1A] px-4 py-1 rounded-full text-xs font-black uppercase mb-6">{course.audience}</span>
              <h4 className="text-3xl font-[1000] text-black mb-8 leading-none uppercase">{course.name}</h4>
              <ul className="space-y-4 mb-10 flex-grow text-gray-500 font-bold">
                {course.features.map((f, j) => <li key={j}>• {f}</li>)}
              </ul>
              <button className="w-full bg-black text-white py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#8B1A1A] transition-all">Detaylı Bilgi</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Courses;