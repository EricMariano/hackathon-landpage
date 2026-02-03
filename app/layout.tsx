import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, IM_Fell_French_Canon } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const imFellFrenchCanon = IM_Fell_French_Canon({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-fell",
});

export const metadata: Metadata = {
  title: "Hackathon 2026 | Construa o Futuro",
  description: "Participe do maior evento de inovação e tecnologia do ano. 48 horas de desenvolvimento intenso, prêmios e networking com os melhores profissionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} dark`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${imFellFrenchCanon.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
