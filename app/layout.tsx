import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Chatbot from "./components/chatbot";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* ✅ GOOGLE ANALYTICS (FORMA CORRECTA) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HC9Z6L2EC3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HC9Z6L2EC3');
          `}
        </Script>

        <Toaster position="top-center" reverseOrder={false} />

        {children}

        <Chatbot />

      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Daniel Fandiño | Desarrollador Web",
  description: "Soy desarrollador web con experiencia en Java, React, micro frontends y Spring Boot.",
  openGraph: {
    title: "Daniel Fandiño | Desarrollador Web",
    description: "Portafolio profesional con proyectos, habilidades y contacto.",
    url: "https://landing-daniel.vercel.app",
    siteName: "Daniel Fandiño",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Daniel Fandiño | Desarrollador Web",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Fandiño | Desarrollador Web",
    description: "Portafolio profesional con proyectos, habilidades y contacto.",
    images: ["/preview.png"],
  },
};
