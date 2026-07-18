import type { Metadata } from "next";
import { Anton, Oswald, Barlow } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Movimiento del Bate",
  description: "Defensa Legítima - Antioquia de Pie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${anton.variable} ${oswald.variable} ${barlow.variable}`}>
      <body>
        <div className="frame">{children}</div>
      </body>
    </html>
  );
}
