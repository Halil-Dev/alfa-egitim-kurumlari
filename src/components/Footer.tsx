"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { client, urlFor } from '@/sanity/lib/client';

const Footer = () => {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const query = `*[_type == "settings"][0]`;
        const data = await client.fetch(query);
        setSettings(data);
      } catch (error) {
        console.error("Footer ayarları çekilemedi:", error);
      }
    };
    fetchSettings();
  }, []);

  const navigationLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/#hakkimizda' },
    { name: 'Kurslarımız', path: '/#kurslar' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  const footerLogo = settings?.logo ? urlFor(settings.logo).url() : "/alfa-logo.png";

  return (
    <footer className="bg-[#111827] text-white pt-6 md:pt-12 pb-3 border-t border-white/5" aria-label="Site Sonu Navigasyonu">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ÜST KISIM */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 mb-6 md:mb-10">
          
          {/* LOGO BÖLÜMÜ */}
          <div className="col-span-2 lg:col-span-1 space-y-1.5">
            <Link href="/" className="flex items-center space-x-2" title="Alfa Eğitim Ana Sayfa">
              <Image 
                src={footerLogo} 
                alt="Alfa Eğitim Kurumları" 
                width={32} 
                height={32} 
                className="w-6 h-6 md:w-8 md:h-8 object-contain" 
              />
              <div className="flex flex-col">
                <span className="font-black text-sm md:text-base tracking-tighter italic uppercase leading-none text-white">ALFA</span>
                <span className="text-[#8B1A1A] font-bold text-[5px] md:text-[6px] tracking-[0.2em] uppercase">EĞİTİM KURUMLARI</span>
              </div>
            </Link>
            <p className="text-gray-300 text-[8px] md:text-[10px] leading-tight font-medium italic opacity-90">
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
                    className="text-gray-300 hover:text-[#8B1A1A] transition-colors text-[9px] md:text-xs font-bold uppercase tracking-tighter"
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
                <span className="text-gray-200 text-[8px] md:text-xs font-medium leading-none">
                   {settings?.contactInfo?.address || "Torbalı / İzmir"}
                </span>
                <MapPin className="text-[#8B1A1A] w-2.5 h-2.5 shrink-0" aria-hidden="true" />
              </li>
              <li className="flex items-center justify-end lg:justify-start space-x-1.5">
                <a 
                  href={`tel:${settings?.contactInfo?.phone}`} 
                  className="text-gray-200 hover:text-[#8B1A1A] text-[8px] md:text-xs font-black tracking-tighter transition-colors"
                  aria-label={`Bizi arayın: ${settings?.contactInfo?.phone || "0501 085 20 35"}`}
                >
                   {settings?.contactInfo?.phone || "0501 085 20 35"}
                </a>
                <Phone className="text-[#8B1A1A] w-2.5 h-2.5 shrink-0" aria-hidden="true" />
              </li>
            </ul>
          </div>
        </div>

        {/* SOSYAL MEDYA */}
        <div className="flex flex-col items-center py-4 border-t border-white/5 space-y-2.5">
          <h4 className="text-white font-black text-[7px] md:text-[9px] uppercase tracking-[0.3em] opacity-80">Takip Edin</h4>
          <div className="flex space-x-3">
            <a 
              href={settings?.socialMedia?.instagram || "#"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-6 h-6 bg-white/5 rounded-md flex items-center justify-center hover:bg-[#8B1A1A] transition-all outline-none focus:ring-1 focus:ring-white"
              aria-label="Alfa Eğitim Kurumları Instagram Sayfası"
            >
              <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a 
              href={settings?.socialMedia?.facebook || "#"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-6 h-6 bg-white/5 rounded-md flex items-center justify-center hover:bg-[#8B1A1A] transition-all outline-none focus:ring-1 focus:ring-white"
              aria-label="Alfa Eğitim Kurumları Facebook Sayfası"
            >
              <Facebook className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ALT KISIM */}
        <div className="pt-2.5 border-t border-white/5 flex flex-row justify-between items-center">
          <p className="text-gray-300 text-[6px] md:text-[8px] font-black uppercase tracking-widest italic opacity-80">
            © 2026 {settings?.title?.toUpperCase() || "ALFA EĞİTİM KURUMLARI"}. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center space-x-1 text-gray-300 text-[6px] font-bold opacity-80">
            <span>BY</span>
            <span className="text-white font-black uppercase tracking-tighter">Halil Uysal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;