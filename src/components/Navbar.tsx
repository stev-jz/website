"use client";
import ThemeToggle from "@/theme/theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Navbar(){
    const [scrolled, setScrolled] = useState(false);
      useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return(
        <nav 
            className={`
                group
                w-full
                fixed
                h-[5vw]
                z-10
                transition duration-300 ease-in-out
                backdrop-blur-xl
                border-t border-t-white/30
                flex gap-10 justify-center items-center p-6
                ${scrolled ? "shadow-md dark:bg-black/20 bg-gray-600/15" : "bg-transparent"}
                `}
                >
                <Link href='/'>
                    <Image src="/s logo.png" alt="Home" width={40} height={40}/>
                </Link>
                <Link href="/">Home</Link>
                <Link href="/Experience">Experience</Link>
                <Link href="/Projects">Projects</Link>
                <ThemeToggle></ThemeToggle>
        </nav>
    );
}