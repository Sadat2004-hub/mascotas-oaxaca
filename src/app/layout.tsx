import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mascotasoaxaca.com'),
  title: "Mascotas Oaxaca | El Directorio para tu Mejor Amigo",
  description: "Encuentra las mejores veterinarias, estéticas y servicios para mascotas en Oaxaca. El directorio más completo y confiable.",
  keywords: "veterinarias oaxaca, mascotas oaxaca, servicios mascotas oaxaca, perros oaxaca",
  openGraph: {
    title: "Mascotas Oaxaca | El Directorio para tu Mejor Amigo",
    description: "Encuentra las mejores veterinarias, estéticas y servicios para mascotas en Oaxaca.",
    url: "https://mascotasoaxaca.com",
    siteName: "Mascotas Oaxaca",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased bg-gray-50 text-gray-900`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
