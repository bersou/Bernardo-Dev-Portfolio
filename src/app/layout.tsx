import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://landpagedev.netlify.app"),
  title: "Bernardo | Dev Web",
  description: "Eficiência industrial através de web Sistem por Bernardo.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
     title: "Bernardo | Dev Web",
     description: "Eficiência industrial através de web Sistem por Bernardo.",
     url: "https://landpagedev.netlify.app",
     siteName: "Bernardo | Dev Web",
     images: [
       { 
         url: "https://landpagedev.netlify.app/og-image.png", 
         width: 1200, 
         height: 630,
         alt: "Bernardo Dev Web Portfolio - Industrial Efficiency",
         type: "image/png",
       }
     ],
     locale: "pt_BR",
     type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bernardo | Dev Web",
    description: "Eficiência industrial através de web Sistem por Bernardo.",
    images: ["/og-image.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
