import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

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
     title: "Industrial Web Systems Developer | Portfolio",
     description: "Engenharia de software voltada para eficiência industrial e automação de sistemas críticos.",
     url: "https://landpagedev.netlify.app",
     siteName: "Industrial Web Systems Developer",
     images: [
       { 
         url: "https://landpagedev.netlify.app/og-industrial-final.png", 
         width: 1200, 
         height: 630,
         alt: "Industrial Web Systems Developer - Professional Tech Portfolio",
         type: "image/png",
       }
     ],
     locale: "pt_BR",
     type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Web Systems Developer | Portfolio",
    description: "Engenharia de software voltada para eficiência industrial e automação de sistemas críticos.",
    images: ["/og-industrial-final.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${mono.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
