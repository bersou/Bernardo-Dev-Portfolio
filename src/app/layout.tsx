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
  title: "Bernardo | Qualidade & Dev Web",
  description: "Trabalhos de excelência em desenvolvimento web e qualidade industrial por Bernardo.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
     title: "Bernardo | Qualidade & Dev Web",
     description: "Trabalhos de excelência em desenvolvimento web e qualidade industrial por Bernardo.",
     images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bernardo | Qualidade & Dev Web",
    description: "Trabalhos de excelência em desenvolvimento web e qualidade industrial por Bernardo.",
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
