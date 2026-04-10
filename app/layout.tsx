import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Chatbot from "./components/chatbot";
import { GoogleAnalytics } from '@next/third-parties/google'

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics gaId="G-HC9Z6L2EC3" />
    
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
