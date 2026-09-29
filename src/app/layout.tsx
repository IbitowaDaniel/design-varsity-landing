import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionConfig } from "framer-motion";

import localFont from 'next/font/local'

// Configure the local variable font
const sora = localFont({
  src: './fonts/Sora-VariableFont_wght.ttf', 
  // '100 900' tells Next.js this single file handles all weights from 100 to 900
  weight: '100 900', 
  style: 'normal',
  display: 'swap',
  variable: '--font-sora', // Useful if you are using Tailwind CSS
})

const inter = localFont({
  src: './fonts/Inter-VariableFont_opsz,wght.ttf', // Match your exact file name
  weight: '100 900', // Inter variable supports the full weight range
  style: 'normal',
  display: 'swap',
  variable: '--font-inter', // Maps directly to your layout's `${inter.variable}`
})


export const metadata: Metadata = {
  title: "Design Varsity Africa",
  description: "Learn how to design Websites, Apps & Dashboards like a pro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} scroll-smooth`}>
      <body>
        <Navbar />
        <MotionConfig reducedMotion="user">
          <main>{children}</main>
        </MotionConfig>
        <Footer />
      </body>
    </html>
  );
}