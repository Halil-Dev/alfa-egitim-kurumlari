import { FaWhatsapp } from 'react-icons/fa'; // Önce: npm install react-icons

const WhatsApp = () => {
  return (
    <a 
      href="https://wa.me/905444100368" // BURAYA KENDİ NUMARANI YAZ
      target="_blank"
      className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
    >
      <span className="absolute -top-12 right-0 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">
        Sorun var mı? 👋
      </span>
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.557-5.332 11.892-11.893 11.892-1.99 0-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.591 5.472 0 9.921-4.446 9.921-9.917 0-2.651-1.032-5.147-2.907-7.022-1.875-1.875-4.37-2.907-7.022-2.907-5.472 0-9.921 4.446-9.921 9.917 0 2.136.572 3.841 1.662 5.731l-.999 3.647 3.95-.74z"/></svg>
    </a>
  );
};

export default WhatsApp;