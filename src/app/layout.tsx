import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: 'swap', // Font yüklenene kadar sistem fontunu gösterir (LCP hızlandırır)
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale ve userScalable kaldırıldı veya esnetildi (Accessibility için kritik)
  themeColor: "#8B1A1A",
};

export const metadata: Metadata = {
  title: {
    default: "Alfa Eğitim Kurumları | Torbalı LGS & YKS Hazırlık Merkezi",
    template: "%s | Alfa Eğitim Kurumları"
  },
  description: "Torbalı'nın öncü eğitim kurumu Alfa ile LGS ve YKS sınavlarına uzman kadro eşliğinde hazırlanın. Kişiye özel rehberlik ve butik eğitim anlayışı.",
  keywords: ["Torbalı kurs", "LGS hazırlık", "YKS hazırlık", "Alfa Eğitim", "Torbalı etüt merkezi", "özel ders Torbalı", "İzmir kurs"],
  metadataBase: new URL('https://www.torbalialfaegitim.com'),
  
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.torbalialfaegitim.com",
    siteName: "Alfa Eğitim Kurumları",
    title: "Alfa Eğitim Kurumları | Başarıyı Şansa Bırakmayın",
    description: "Torbalı'da uzman kadro ile sınavlara hazırlık programları.",
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
      <body className={`${jakarta.variable} font-sans antialiased bg-white flex flex-col min-h-screen`}>
        {/* Screen Reader için ana içeriğe atla linki (Accessibility skorunu artırır) */}
        <a href="#main-content" className="sr-only focus:not-sr-only bg-[#8B1A1A] text-white p-2 text-center">
          Ana içeriğe atla
        </a>
        
        <Navbar />
        
        <main id="main-content" className="flex-grow overflow-x-hidden"> 
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}