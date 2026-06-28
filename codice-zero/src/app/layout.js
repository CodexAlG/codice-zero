import { Orbitron, Oxanium } from "next/font/google";
import "./globals.css";
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageWarningModal from "@/components/ui/LanguageWarningModal";
import { Analytics } from '@vercel/analytics/next';

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${oxanium.variable} antialiased`}
      >
        <LanguageProvider>
          <LanguageWarningModal />
          <LayoutWrapper>{children}</LayoutWrapper>
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
