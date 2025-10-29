import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ClientProviders from "./client-providers";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Venkateshwara CNC - Premium Wooden Art & CNC Services',
  description: 'Transform your space with handcrafted wooden masterpieces. Premium CNC services for doors, wall art & custom designs. Request a free quote today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet" />
        <meta property="og:title" content="Venkateshwara CNC - Premium Wooden Art & CNC Services" />
        <meta property="og:description" content="Transform your space with handcrafted wooden masterpieces. Premium CNC services for doors, wall art & custom designs." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/hero-bg.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@venkateshwaracnc" />
        <meta name="twitter:image" content="/hero-bg.jpg" />
      </head>
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
