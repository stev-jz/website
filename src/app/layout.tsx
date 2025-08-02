import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ThemeProvider from "@/theme/theme-provider";
import Navbar from "@/components/Navbar";

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
          bg-[url('/van-skyline-2.png')]
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
          <Navbar></Navbar>
            <div className="flex">
                <Sidebar/>
                <div className="relative left-1/2">{children}</div>
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
