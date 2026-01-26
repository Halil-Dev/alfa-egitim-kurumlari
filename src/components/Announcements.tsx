import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

async function getAnnouncements() {
  // Query içindeki description alanını content ile değiştirdik
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
    <section className="py-12 md:py-20 bg-gray-50" id="duyurular">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-[#8B1A1A] font-black text-[10px] md:text-sm uppercase tracking-[0.3em] mb-2">Güncel</h2>
          <h3 className="text-3xl md:text-5xl font-[1000] text-black tracking-tighter uppercase">ETKİNLİK & DUYURU</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {announcements.map((item: any) => (
            <div 
              key={item._id} 
              className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col sm:flex-row items-stretch group hover:shadow-xl transition-all duration-500"
            >
              <div className="relative w-full sm:w-2/5 h-56 sm:h-auto overflow-hidden shrink-0">
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
                  <div className="absolute top-3 left-3 z-10 bg-[#8B1A1A] text-white px-3 py-1 rounded-lg font-bold text-[10px]">
                    {new Date(item.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })}
                  </div>
                )}
              </div>

              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg md:text-xl font-black text-black mb-3 leading-tight uppercase tracking-tight">
                    {item.title}
                  </h4>
                  {/* Burada item.description yerine item.content kullanıyoruz */}
                  <p className="text-gray-600 text-xs md:text-sm font-bold mb-6 leading-relaxed line-clamp-3">
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