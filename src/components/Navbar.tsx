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
                hover:shadow-lg hover:dark:bg-black/20 hover:bg-gray-400/10 hover:opacity-90
                backdrop-blur-xl
                border-t border-t-white/30
                flex gap-10 justify-center items-center p-6
                text-[1vw]
                ${scrolled ? "shadow-lg dark:bg-black/20 bg-gray-400/10 opacity-90" : "opacity-30 bg-transparent"}
                `}
                >
                <Link href='/'>
                    <Image src="/s logo.png" alt="Home" width={40} height={40}/>
                </Link>
                <Link href="/">Home</Link>
                <Link href="/experience">Experience</Link>
                <Link href="/projects">Projects</Link>
                <ThemeToggle></ThemeToggle>
        </nav>
    );
}