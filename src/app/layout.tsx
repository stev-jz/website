
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ThemeProvider from "@/theme/theme-provider";
import ThemeToggle from "@/theme/theme-toggle";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Steven | Developer",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      {/* logo and stuff */}
      <head>
        <link rel="icon" href="/s logo.png" type="image/png" />
      </head>
      <body
        className={`
          ${inter.className}
          bg-[url('/van-skyline.png')]
          dark:bg-[url('/toronto-skyline.png')]
          bg-center
          h-screen
          bg-fixed
          w-full
          -z-10
        `}
      >

        {/* CONTENT */}
        
        <ThemeProvider>
          {children}
          <div className="fixed right-20 top-7.5 z-50"><ThemeToggle/></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
