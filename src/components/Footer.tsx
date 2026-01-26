import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/#hakkimizda' },
    { name: 'Kurslarımız', path: '/#kurslar' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <footer className="bg-[#111827] text-white pt-12 md:pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* MOBİLDE AKILLI GRID: Logo tam genişlik, Menü ve İletişim yan yana */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 mb-12 md:mb-16">
          
          {/* LOGO VE VİZYON - Mobilde tam genişlik kaplar */}
          <div className="col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/alfa-logo.png" 
                alt="Alfa Logo" 
                width={40} 
                height={40} 
                className="w-10 h-10 md:w-[50px] md:h-[50px]" 
              />
              <div className="flex flex-col">
                <span className="font-[1000] text-lg md:text-xl tracking-tighter italic uppercase leading-none">ALFA</span>
                <span className="text-[#8B1A1A] font-bold text-[7px] md:text-[8px] tracking-[0.2em] uppercase">EĞİTİM KURUMLARI</span>
              </div>
            </Link>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium italic pr-4">
              "Başarıya giden yolda disiplin ve güvenle yanınızdayız."
            </p>
          </div>

          {/* HIZLI LİNKLER - Mobilde Yan Yana durur */}
          <div className="col-span-1">
            <h4 className="text-white font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mb-6 md:mb-8">Menü</h4>
            <ul className="space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="text-gray-400 hover:text-[#8B1A1A] transition-colors text-xs md:text-sm font-bold flex items-center group"
                  >
                    <ArrowUpRight className="w-3 h-3 mr-1.5 opacity-0 lg:group-hover:opacity-100 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İLETİŞİM - Mobilde Hızlı Menü ile yan yana durur */}
          <div className="col-span-1">
            <h4 className="text-white font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mb-6 md:mb-8">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="text-[#8B1A1A] w-4 h-4 shrink-0" />
                <span className="text-gray-400 text-[10px] md:text-sm font-medium leading-tight">Tepeköy, 4505 Sk. <br/> Torbalı / İzmir</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="text-[#8B1A1A] w-4 h-4 shrink-0" />
                <a href="tel:+905010852035" className="text-gray-400 text-[10px] md:text-sm font-black tracking-tighter">
                  0501 085 20 35
                </a>
              </li>
            </ul>
          </div>

          {/* SOSYAL MEDYA - Mobilde tam genişlik veya sağa yaslı */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mb-6 md:mb-8">Takip Edin</h4>
            <div className="flex space-x-3 mb-6">
              <a href="https://www.instagram.com/torbalialfa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#8B1A1A] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/p/Alfa-E%C4%9Fitim-Kurumlar%C4%B1-plus-100090747663629/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#8B1A1A] transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <p className="text-gray-500 text-[9px] font-bold leading-tight opacity-60">
              Güncel duyurular için bizi takipte kalın.
            </p>
          </div>
        </div>

        {/* ALT ÇİZGİ VE TELİF HAKKI */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[9px] md:text-[11px] font-black uppercase tracking-widest italic">
            © 2026 ALFA EĞİTİM. TÜM HAKLARI SAKLIDIR.
          </p>
          <div className="flex items-center space-x-2 text-gray-500 text-[9px] font-bold">
            <span>DESIGNED BY</span>
            <span className="text-white hover:text-[#8B1A1A] transition-colors tracking-tighter">HALİL UYSAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;