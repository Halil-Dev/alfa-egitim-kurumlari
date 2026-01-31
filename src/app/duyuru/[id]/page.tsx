import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';

const builder = imageUrlBuilder(client);
function urlFor(source: any) { return builder.image(source); }

export default async function DuyuruDetay({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Query'yi güncelledik: Hem 'content' hem 'description' gelebilecek şekilde sağlama alıyoruz
  const query = `*[_type == "announcement" && _id == $id][0]{
    _id,
    title,
    image,
    content,
    description,
    date
  }`;
  const post = await client.fetch(query, { id });

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Duyuru bulunamadı.</h1>
        <Link href="/" className="text-[#8B1A1A] underline mt-4 inline-block font-black">ANA SAYFAYA DÖN</Link>
      </div>
    );
  }

  const WHATSAPP_NUMBER = "905010852035"; 
  const message = encodeURIComponent(`Merhaba, "${post.title}" duyurunuz hakkında detaylı bilgi alabilir miyim?`);

  // Hangi alan doluysa onu kullan (Sanity'deki field name hangisiyse)
  const mainContent = post.content || post.description;

  return (
    <main className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-gray-500 hover:text-[#8B1A1A] transition-colors font-bold uppercase text-xs tracking-widest">
           <span>←</span> Geri Dön
        </Link>

        <h1 className="text-4xl md:text-6xl font-[1000] text-black mb-8 uppercase tracking-tighter leading-[0.9]">
          {post.title}
        </h1>
        
        {post.image && (
          <div className="relative h-[300px] md:h-[500px] w-full mb-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
            <Image src={urlFor(post.image).url()} alt={post.title} fill className="object-cover" priority />
          </div>
        )}

        {/* İçerik Kutusu */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm mb-12">
          {mainContent ? (
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium whitespace-pre-wrap">
              {mainContent}
            </p>
          ) : (
            <p className="text-gray-400 italic font-bold">Bu duyuru için henüz detaylı içerik eklenmemiş.</p>
          )}
        </div>

        {/* Canlı WhatsApp Butonu */}
        <div className="text-center bg-[#f0fff4] p-8 md:p-12 rounded-[3rem] border-2 border-dashed border-[#25D366]">
          <h3 className="text-2xl font-black mb-2">Aklınıza takılan bir şey mi var?</h3>
          <p className="text-gray-600 mb-8 font-bold">Hemen eğitim danışmanımızla iletişime geçin.</p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#25D366] text-white px-8 py-5 md:px-12 md:py-6 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform shadow-2xl text-sm md:text-base"
          >
            <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            BİLGİ ALMAK İÇİN YAZIN
          </a>
        </div>
      </div>
    </main>
  );
}