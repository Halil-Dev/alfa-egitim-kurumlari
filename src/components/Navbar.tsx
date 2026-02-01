"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { client, urlFor } from '@/sanity/lib/client';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const query = `*[_type == "settings"][0]{logo}`;
        const data = await client.fetch(query);
        if (data?.logo) {
          setLogoUrl(urlFor(data.logo).url());
        }
      } catch (error) {
        console.error("Logo çekilirken hata oluştu:", error);
      }
    };
    fetchLogo();
  }, []);

  const handleLogoOrHomeClick = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        router.push('/', { scroll: false }); 
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm" aria-label="Ana Navigasyon">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
        
        {/* Logo Alanı */}
        <Link 
          href="/" 
          onClick={handleLogoOrHomeClick}
          className="flex items-center gap-3 md:gap-5 transition-transform hover:scale-[1.02] active:scale-95 z-[70]"
          title="Alfa Eğitim Kurumları Ana Sayfa"
        >
          <div className="relative h-10 w-10 md:h-14 md:w-14 shrink-0">
            <Image 
              src={logoUrl || "/alfa-logo.png"} 
              alt="Alfa Eğitim Kurumları Logosu" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="h-8 md:h-10 w-[1px] bg-gray-200" aria-hidden="true"></div>
          <div className="flex flex-col justify-center text-black">
            <span className="font-[1000] text-lg md:text-xl tracking-tighter leading-none uppercase italic">ALFA</span>
            <span className="text-[#8B1A1A] font-black text-[7px] md:text-[9px] tracking-[0.2em] uppercase leading-none mt-1 whitespace-nowrap">
              EĞİTİM KURUMLARI
            </span>
          </div>
        </Link>
        
        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center space-x-12">
          <Link href="/" onClick={handleLogoOrHomeClick} className="text-black font-black hover:text-[#8B1A1A] transition-colors text-xs uppercase tracking-[0.2em]">Ana Sayfa</Link>
          <a href="/#hakkimizda" className="text-black font-black hover:text-[#8B1A1A] transition-colors text-xs uppercase tracking-[0.2em]">Hakkımızda</a>
          <a href="/#kurslar" className="text-black font-black hover:text-[#8B1A1A] transition-colors text-xs uppercase tracking-[0.2em]">Kurslarımız</a>
          <Link href="/iletisim" className="bg-[#8B1A1A] text-white px-10 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] shadow-xl shadow-[#8B1A1A]/20 hover:bg-black transition-all transform hover:-translate-y-1 active:scale-95">
            ÖN KAYIT
          </Link>
        </div>

        {/* Mobil Menü Butonu */}
        <div className="md:hidden z-[70]">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 bg-gray-50 rounded-xl text-black hover:bg-gray-100 transition-colors"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>
      </div>

      {/* --- ANİMASYONLU MOBİL PANEL --- */}
      <div className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${isOpen ? "visible" : "invisible pointer-events-none"}`} aria-hidden={!isOpen}>
        {/* Kararan Arka Plan */}
        <div 
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sağdan Gelen Menü Paneli */}
        <div className={`absolute top-0 right-0 w-[80%] h-full bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0,0.67,0)] ${isOpen ? "translate-x-0" : "translate-x-full"}`} role="dialog" aria-modal="true">
          <div className="flex flex-col h-full p-10 pt-32 space-y-8">
            <Link 
              href="/" 
              onClick={handleLogoOrHomeClick} 
              className={`text-black font-black text-xl uppercase tracking-tighter transition-all duration-700 delay-100 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              Ana Sayfa
            </Link>
            <a 
              href="/#hakkimizda" 
              onClick={() => setIsOpen(false)} 
              className={`text-black font-black text-xl uppercase tracking-tighter transition-all duration-700 delay-200 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              Hakkımızda
            </a>
            <a 
              href="/#kurslar" 
              onClick={() => setIsOpen(false)} 
              className={`text-black font-black text-xl uppercase tracking-tighter transition-all duration-700 delay-300 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              Kurslarımız
            </a>
            <div className={`pt-6 transition-all duration-700 delay-400 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
              <Link 
                href="/iletisim" 
                onClick={() => setIsOpen(false)} 
                className="block bg-[#8B1A1A] text-white text-center py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-lg shadow-[#8B1A1A]/20"
              >
                ÖN KAYIT
              </Link>
            </div>

            <div className="absolute bottom-10 left-10">
               <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">Alfa Eğitim Kurumları</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;