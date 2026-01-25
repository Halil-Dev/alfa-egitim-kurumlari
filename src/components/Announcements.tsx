import Image from 'next/image';
import Link from 'next/link'; // Link eklendi
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
    description,
    image
  }`;
  
  const data = await client.fetch(query);
  return data;
}

const Announcements = async () => {
  const announcements = await getAnnouncements();

  if (!announcements || announcements.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[#8B1A1A] font-black text-sm uppercase tracking-[0.3em] mb-2">Güncel</h2>
            <h3 className="text-4xl md:text-5xl font-[1000] text-black tracking-tighter uppercase">ETKİNLİK & DUYURU</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((item: any) => (
            <div key={item._id} className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 group hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                {item.date && (
                  <div className="absolute top-4 left-4 z-10 bg-[#8B1A1A] text-white px-4 py-1 rounded-lg font-bold text-sm">
                    {new Date(item.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                )}
                
                {item.image ? (
                  <Image 
                    src={urlFor(item.image).url()} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">Görsel Yok</div>
                )}
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-black text-black mb-4 leading-tight">{item.title}</h4>
                <p className="text-gray-600 font-bold mb-6 line-clamp-2">{item.description}</p>
                
                {/* Buton yerine Link kullanıyoruz */}
                <Link 
                  href={`/duyuru/${item._id}`} 
                  className="text-[#8B1A1A] font-black uppercase text-sm tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  DETAYLARI GÖR <span>→</span>
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