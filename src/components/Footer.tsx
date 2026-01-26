import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/#hakkimizda' },
    { name: 'Kurslarımız', path: '/#kurslar' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    // Paddingleri (pt-6 pb-3) minimuma indirdik, dikey alan daraldı
    <footer className="bg-[#111827] text-white pt-6 md:pt-12 pb-3 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ÜST KISIM: Logo, Menü ve İletişim Yan Yana */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 mb-6 md:mb-10">
          
          {/* LOGO BÖLÜMÜ */}
          <div className="col-span-2 lg:col-span-1 space-y-1.5">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/alfa-logo.png" 
                alt="Alfa Logo" 
                width={24} 
                height={24} 
                className="w-6 h-6 md:w-8 md:h-8" 
              />
              <div className="flex flex-col">
                <span className="font-black text-sm md:text-base tracking-tighter italic uppercase leading-none">ALFA</span>
                <span className="text-[#8B1A1A] font-bold text-[5px] md:text-[6px] tracking-[0.2em] uppercase">EĞİTİM KURUMLARI</span>
              </div>
            </Link>
            <p className="text-gray-400 text-[8px] md:text-[10px] leading-tight font-medium italic opacity-70">
              "Disiplin ve güvenle yanınızdayız."
            </p>
          </div>

          {/* MENÜ */}
          <div className="col-span-1">
            <h4 className="text-white font-black text-[8px] md:text-xs uppercase tracking-[0.2em] mb-2.5">Menü</h4>
            <ul className="space-y-1.5">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="text-gray-400 hover:text-[#8B1A1A] transition-colors text-[9px] md:text-xs font-bold uppercase tracking-tighter"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İLETİŞİM */}
          <div className="col-span-1 text-right lg:text-left">
            <h4 className="text-white font-black text-[8px] md:text-xs uppercase tracking-[0.2em] mb-2.5">İletişim</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-end lg:justify-start space-x-1.5">
                <span className="text-gray-400 text-[8px] md:text-xs font-medium leading-none">Torbalı / İzmir</span>
                <MapPin className="text-[#8B1A1A] w-2.5 h-2.5 shrink-0" />
              </li>
              <li className="flex items-center justify-end lg:justify-start space-x-1.5">
                <a href="tel:+905010852035" className="text-gray-400 text-[8px] md:text-xs font-black tracking-tighter">
                  0501 085 20 35
                </a>
                <Phone className="text-[#8B1A1A] w-2.5 h-2.5 shrink-0" />
              </li>
            </ul>
          </div>
        </div>

        {/* ORTA KISIM: Takip Edin (Sosyal Medya) - İletişimin Altına İndi */}
        <div className="flex flex-col items-center py-4 border-t border-white/5 space-y-2.5">
          <h4 className="text-white font-black text-[7px] md:text-[9px] uppercase tracking-[0.3em] opacity-50">Takip Edin</h4>
          <div className="flex space-x-3">
            <a href="https://www.instagram.com/torbalialfa/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-white/5 rounded-md flex items-center justify-center hover:bg-[#8B1A1A] transition-all">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.facebook.com/p/Alfa-E%C4%9Fitim-Kurumlar%C4%B1-plus-100090747663629/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-white/5 rounded-md flex items-center justify-center hover:bg-[#8B1A1A] transition-all">
              <Facebook className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ALT KISIM: Telif Hakları */}
        <div className="pt-2.5 border-t border-white/5 flex flex-row justify-between items-center opacity-40">
          <p className="text-gray-500 text-[6px] md:text-[8px] font-black uppercase tracking-widest italic">
            © 2026 ALFA EĞİTİM KURUMLARI. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center space-x-1 text-gray-500 text-[6px] font-bold">
            <span>BY</span>
            <span className="text-white font-black uppercase">Halil Uysal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;