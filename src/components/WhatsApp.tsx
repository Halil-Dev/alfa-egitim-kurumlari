import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  return (
    <a 
      href="https://wa.me/905444100368" 
      target="_blank"
      rel="noopener noreferrer"
      // bottom-24 yaparak mobilde footer'ın (mavi alanın) üzerine binmesini engelledik
      className="fixed bottom-20 right-6 md:bottom-8 md:right-8 z-[999] bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group"
    >
      {/* İpucu Baloncuğu - Mobilde daha küçük ve daha yukarıda */}
      <span className="absolute -top-10 right-0 bg-white text-gray-800 text-[10px] md:text-xs font-black px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity border border-gray-100">
        Sorun var mı? 👋
      </span>

      {/* WhatsApp Logosu - SVG yerine react-icons kullanımı daha temiz durur */}
      <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
};

export default WhatsApp;