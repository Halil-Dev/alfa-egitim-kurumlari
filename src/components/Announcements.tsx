import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

async function getAnnouncements() {
  const query = `*[_type == "announcement"] | order(date desc) {
    _id,
    title,
    date,
    content, 
    image
  }`;
  const data = await client.fetch(query);
  return data;
}

const Announcements = async () => {
  const announcements = await getAnnouncements();

  if (!announcements || announcements.length === 0) return null;

  return (
    <section className="py-10 md:py-20 bg-gray-50" id="duyurular">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Başlık Alanı - Mobilde font küçültüldü */}
        <div className="mb-6 md:mb-10 text-center md:text-left">
          <h2 className="text-[#8B1A1A] font-black text-[10px] md:text-sm uppercase tracking-[0.2em] mb-1">Güncel</h2>
          <h3 className="text-2xl md:text-5xl font-[1000] text-black tracking-tighter uppercase leading-none">ETKİNLİK & DUYURU</h3>
        </div>

        {/* Duyuru Listesi - Kartlar daha dar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {announcements.map((item: any) => (
            <div 
              key={item._id} 
              className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col sm:flex-row items-stretch group hover:shadow-md transition-all duration-500"
            >
              {/* Görsel Alanı - Mobilde yükseklik h-44'e çekildi */}
              <div className="relative w-full sm:w-2/5 h-44 sm:h-auto overflow-hidden shrink-0">
                {item.image ? (
                  <Image 
                    src={urlFor(item.image).url()} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">Görsel Yok</div>
                )}
                
                {item.date && (
                  <div className="absolute top-2 left-2 z-10 bg-[#8B1A1A] text-white px-2 py-0.5 rounded-md font-bold text-[9px]">
                    {new Date(item.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })}
                  </div>
                )}
              </div>

              {/* Metin Alanı - Padding ve fontlar daraltıldı */}
              <div className="flex-1 p-5 md:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-base md:text-xl font-black text-black mb-2 leading-tight uppercase tracking-tight line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-[11px] md:text-sm font-bold mb-4 leading-snug line-clamp-2">
                    {item.content}
                  </p>
                </div>
                
                <Link 
                  href={`/duyuru/${item._id}`} 
                  className="text-[#8B1A1A] font-black uppercase text-[10px] md:text-xs tracking-widest flex items-center gap-2 group/link mt-auto"
                >
                  DETAYLARI GÖR 
                  <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Announcements;