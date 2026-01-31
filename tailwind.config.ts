import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Layout.tsx'te tanımladığımız değişkeni buraya bağlıyoruz
        sans: ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // İsimlendirmeyi standartlaştırdık
        'alfa-bordo': '#8B1A1A',
        'alfa-koyu': '#111827',
        // Senin kullandığın isimle de erişebilmen için:
        alfaBordo: '#8B1A1A',
      },
      // Eğer çok kalın fontlar kullanıyorsan 1000 ağırlığını buraya tanımlayabiliriz
      fontWeight: {
        'extra-black': '1000',
      }
    },
  },
  plugins: [],
};
export default config;