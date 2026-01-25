import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* LOGO VE VİZYON */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-4">
              <Image 
                src="/alfa-logo.png" 
                alt="Alfa Logo" 
                width={50} 
                height={50} 
                className="brightness-0 invert" 
              />
              <div className="flex flex-col">
                <span className="font-[1000] text-xl tracking-tighter italic uppercase">ALFA</span>
                <span className="text-[#8B1A1A] font-bold text-[8px] tracking-[0.2em] uppercase">EĞİTİM KURUMLARI</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-medium italic">
              "Başarıya giden yolda, disiplin ve güvenle yanınızdayız. Torbalı'nın geleceğini birlikte inşa ediyoruz."
            </p>
          </div>

          {/* HIZLI LİNKLER */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Hızlı Menü</h4>
            <ul className="space-y-4">
              {['Ana Sayfa', 'Hakkımızda', 'Kurslarımız', 'İletişim'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'İletişim' ? '/iletisim' : `/#${item.toLowerCase().replace('ı', 'i')}`}
                    className="text-gray-400 hover:text-[#8B1A1A] transition-colors text-sm font-bold flex items-center group"
                  >
                    <ArrowUpRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İLETİŞİM BİLGİLERİ */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">İletişim</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-[#8B1A1A]/20 transition-colors">
                  <MapPin className="text-[#8B1A1A] w-5 h-5" />
                </div>
                <span className="text-gray-400 text-sm font-medium">Tepeköy, 4505 Sokak No:9 <br /> Torbalı / İzmir</span>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-[#8B1A1A]/20 transition-colors">
                  <Phone className="text-[#8B1A1A] w-5 h-5" />
                </div>
                <span className="text-gray-400 text-sm font-black tracking-tighter">0501 085 20 35</span>
              </li>
            </ul>
          </div>

          {/* SOSYAL MEDYA */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Takip Edin</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#8B1A1A] transition-all hover:-translate-y-1 shadow-xl">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#8B1A1A] transition-all hover:-translate-y-1 shadow-xl">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-500 text-[10px] mt-8 font-bold leading-relaxed">
              En güncel duyurular ve başarı hikayeleri için bizi sosyal medyada takip edin.
            </p>
          </div>
        </div>

        {/* ALT ÇİZGİ VE TELİF HAKKI */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[11px] font-black uppercase tracking-widest italic">
            © 2026 ALFA EĞİTİM KURUMLARI. TÜM HAKLARI SAKLIDIR.
          </p>
          <div className="flex items-center space-x-2 text-gray-500 text-[10px] font-bold">
            <span>DESIGNED BY</span>
            <span className="text-white hover:text-[#8B1A1A] transition-colors cursor-pointer tracking-tighter">HALİL UYSAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;