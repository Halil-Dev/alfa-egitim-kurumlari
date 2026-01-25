"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Bunu ekledik

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Router'ı tanımladık

  const handleLogoOrHomeClick = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/') {
        e.preventDefault();
        
        // 1. Pürüzsüz yukarı kaydır
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // 2. Next.js router kullanarak URL'yi temizle (Hata veren yer burasıydı)
        // 'scroll: false' diyerek sayfanın zıplamasını engelliyoruz
        router.push('/', { scroll: false }); 
        
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        
        {/* Logo Alanı */}
        <Link 
          href="/" 
          onClick={handleLogoOrHomeClick}
          className="flex items-center space-x-5 transition-transform hover:scale-[1.02] active:scale-95"
        >
          <Image 
            src="/alfa-logo.png" 
            alt="Alfa Eğitim Kurumları" 
            width={180} 
            height={60} 
            className="object-contain h-12 md:h-14 w-auto"
            priority
          />
          <div className="hidden md:block h-10 w-[1px] bg-gray-200"></div>
          <div className="hidden md:flex flex-col justify-center text-black">
            <span className="font-[1000] text-xl tracking-tighter leading-none uppercase italic">ALFA</span>
            <span className="text-[#8B1A1A] font-black text-[9px] tracking-[0.2em] uppercase leading-none mt-1 whitespace-nowrap">
              EĞİTİM KURUMLARI
            </span>
          </div>
        </Link>
        
        {/* Masaüstü Menü Linkleri */}
        <div className="hidden md:flex items-center space-x-12">
          <Link 
            href="/" 
            onClick={handleLogoOrHomeClick}
            className="text-black font-black hover:text-[#8B1A1A] transition-colors text-xs uppercase tracking-[0.2em]"
          >
            Ana Sayfa
          </Link>
          
          <a 
            href="/#hakkimizda" 
            className="text-black font-black hover:text-[#8B1A1A] transition-colors text-xs uppercase tracking-[0.2em]"
          >
            Hakkımızda
          </a>
          
          <a 
            href="/#kurslar" 
            className="text-black font-black hover:text-[#8B1A1A] transition-colors text-xs uppercase tracking-[0.2em]"
          >
            Kurslarımız
          </a>
          
          <Link 
            href="/iletisim" 
            className="bg-[#8B1A1A] text-white px-10 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] shadow-xl shadow-[#8B1A1A]/20 hover:bg-black transition-all transform hover:-translate-y-1 active:scale-95"
          >
            ÖN KAYIT
          </Link>
        </div>

        {/* Mobil Menü Butonu */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 bg-gray-50 rounded-2xl text-black hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobil Menü Paneli - Mükemmel Görünüm */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-8 space-y-6 shadow-xl animate-in slide-in-from-top duration-300">
          <Link href="/" onClick={handleLogoOrHomeClick} className="block text-black font-black text-xs uppercase tracking-widest">Ana Sayfa</Link>
          <a href="/#hakkimizda" onClick={() => setIsOpen(false)} className="block text-black font-black text-xs uppercase tracking-widest">Hakkımızda</a>
          <a href="/#kurslar" onClick={() => setIsOpen(false)} className="block text-black font-black text-xs uppercase tracking-widest">Kurslarımız</a>
          <Link href="/iletisim" onClick={() => setIsOpen(false)} className="block bg-[#8B1A1A] text-white text-center py-4 rounded-xl font-black text-xs uppercase tracking-widest">ÖN KAYIT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;