import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata, Viewport } from "next"; // Viewport tipini ekledik
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

// iOS'ta otomatik zoom ve kaymaları engellemek için viewport ayarı
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Kullanıcının istemsizce zoom yapmasını engeller (iOS formu bozmasın diye)
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Torbalı Alfa Eğitim Kurumları | Başarıya Giden Yol",
  description: "Torbalı'nın öncü eğitim kurumu Alfa Eğitim Kurumları ile sınavlara hazırlıkta fark yaratın.",
  icons: {
    icon: "/alfa-logo.png",
    shortcut: "/alfa-logo.png",
    apple: "/alfa-logo.png",
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
        
        {/* flex-grow sayesinde içerik az olsa bile footer hep en altta kalır */}
        <main className="flex-grow overflow-x-hidden"> 
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}