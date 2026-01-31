import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Font değiştirildi
import "./globals.css";

// Projenin karakterini yansıtan ana font
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Kalınlıklar eklendi
  variable: "--font-jakarta",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#8B1A1A",
};

export const metadata: Metadata = {
  title: {
    default: "Alfa Eğitim Kurumları | Torbalı'nın En Güçlü Eğitim Kadrosu",
    template: "%s | Alfa Eğitim Kurumları"
  },
  description: "Torbalı Alfa Eğitim Kurumları ile LGS, YKS ve ara sınıf destek programlarında başarıyı yakalayın. Uzman eğitmen kadromuzla geleceği birlikte inşa ediyoruz.",
  keywords: ["Torbalı kurs", "LGS hazırlık", "YKS hazırlık", "Alfa Eğitim", "Torbalı etüt merkezi", "özel ders Torbalı"],
  metadataBase: new URL('https://www.torbalialfaegitim.com'),
  
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.torbalialfaegitim.com",
    siteName: "Alfa Eğitim Kurumları",
    title: "Alfa Eğitim Kurumları | Başarıyı Şansa Bırakmayın",
    description: "Torbalı'da uzman kadro ile sınavlara hazırlık.",
    images: [
      {
        url: "/alfa-logo.png",
        width: 1200,
        height: 630,
        alt: "Alfa Eğitim Kurumları Logo"
      }
    ]
  },

  icons: {
    icon: "/alfa-logo.png",
    shortcut: "/alfa-logo.png",
    apple: "/alfa-logo.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased bg-white flex flex-col min-h-screen`}>
        <Navbar />
        
        {/* 'pt' kısmını Navbar'ın yüksekliğine göre (h-24 olduğu için 6rem) ayarladım */}
        <main className="flex-grow overflow-x-hidden"> 
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}