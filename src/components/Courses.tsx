const Courses = () => {
  const courses = [
    { name: "LGS Hazırlık", audience: "7. ve 8. Sınıf", features: ["Haftalık 16 Saat Ders", "Birebir Rehberlik", "Yeni Nesil Soru Çözümü"] },
    { name: "YKS Hazırlık", audience: "11, 12 ve Mezun", features: ["TYT-AYT Odaklı", "Haftalık Seri Denemeler", "Gece Kütüphanesi Etüdü"] },
    { name: "Ara Sınıf Destek", audience: "9. ve 10. Sınıf", features: ["Okul Yazılı Hazırlık", "Temel Oluşturma", "Analitik Düşünme"] }
  ];

  // WhatsApp numaran ve mesaj şablonun
  const whatsappNumber = "905010852035";

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
              
              {/* WHATSAPP YÖNLENDİRMELİ BUTON */}
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Merhaba, ${course.name} programınız hakkında detaylı bilgi alabilir miyim?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black text-white py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#25D366] transition-all flex items-center justify-center gap-2 group"
              >
                <svg 
                  className="w-4 h-4 fill-current group-hover:animate-bounce" 
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                Detaylı Bilgi
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;