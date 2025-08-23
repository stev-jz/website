
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ThemeProvider from "@/theme/theme-provider";
import ThemeToggle from "@/theme/theme-toggle";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Steven | Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/s logo.png" type="image/png" />
        <link rel="preload" href="/pfp.png" as="image" type="image/png" />
        <link rel="preload" href="/s logo.png" as="image" type="image/png" />
        <link rel="preload" href="/van-skyline.png" as="image" type="image/png" media="(prefers-color-scheme: light)" />
        <link rel="preload" href="/toronto-skyline.png" as="image" type="image/png" media="(prefers-color-scheme: dark)" />
      </head>

      <body
        className={`
          ${inter.className}
          relative
          min-h-[100dvh]   /* better mobile vh */
          w-full
          overflow-x-hidden
        `}
      >
        {/* FIXED background layer (works on iOS/Android) */}
        <div
          aria-hidden="true"
          className={`
            pointer-events-none
            fixed inset-0 -z-10
            bg-center
            bg-repeat
            max-lg:bg-[length:auto_100dvh]
            bg-[length:70%_auto]
            bg-[url('/van-skyline.png')]
            dark:bg-[url('/toronto-skyline.png')]
          `}
        />

        {/* CONTENT */}
        <ThemeProvider>
          <Navbar />
          {children}
          <div className="fixed right-20 top-7.5 z-50 hidden lg:block">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

