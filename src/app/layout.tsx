import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Mobil cihazlarda kusursuz görünüm için
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#8B1A1A", // Android bildirim çubuğu rengi
};

export const metadata: Metadata = {
  title: {
    default: "Alfa Eğitim Kurumları | Torbalı'nın En Güçlü Eğitim Kadrosu",
    template: "%s | Alfa Eğitim Kurumları"
  },
  description: "Torbalı Alfa Eğitim Kurumları ile LGS, YKS ve ara sınıf destek programlarında başarıyı yakalayın. Uzman eğitmen kadromuzla geleceği birlikte inşa ediyoruz.",
  keywords: ["Torbalı kurs", "LGS hazırlık", "YKS hazırlık", "Alfa Eğitim", "Torbalı etüt merkezi", "özel ders Torbalı"],
  metadataBase: new URL('https://www.torbalialfaegitim.com'), // Buraya gerçek site adresini yazmalısın
  
  // Sosyal Medya Paylaşımları İçin (Open Graph)
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.torbalialfaegitim.com",
    siteName: "Alfa Eğitim Kurumları",
    title: "Alfa Eğitim Kurumları | Başarıyı Şansa Bırakmayın",
    description: "Torbalı'da uzman kadro ile sınavlara hazırlık.",
    images: [
      {
        url: "/alfa-logo.png", // Paylaşıldığında görünecek resim
        width: 1200,
        height: 630,
        alt: "Alfa Eğitim Kurumları Logo"
      }
    ]
  },

  // İkonlar
  icons: {
    icon: "/alfa-logo.png",
    shortcut: "/alfa-logo.png",
    apple: "/alfa-logo.png",
  },

  // Arama Motoru Botları Ayarı
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white flex flex-col min-h-screen`}>
        <Navbar />
        
        <main className="flex-grow overflow-x-hidden pt-[navbar-yuksekligi]"> 
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}