import { Rajdhani, Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from '@/components/layout/LayoutWrapper';

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
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
