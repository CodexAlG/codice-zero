import { Rajdhani, Inter } from "next/font/google";
import "./globals.css";
import Sidebar from '@/components/layout/Sidebar';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const techFont = Rajdhani({
  variable: "--font-tech",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${techFont.variable} antialiased`}
      >
        <div className="flex h-screen bg-gray-950 text-white relative z-10">
          <Sidebar />
          <main className="flex-1 overflow-y-auto relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
