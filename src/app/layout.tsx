import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Steven | Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/s logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <div className="bg-[url('/toronto-skyline.png')] bg-center h-screen w-full -z-10">
          <div className="z-10">{children} </div>
        </div>
        
        
        
      </body>
    </html>
  );
}
