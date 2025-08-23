"use client";
import ThemeToggle from "@/theme/theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<"about" | "experience" | "projects">("about");

  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const [bar, setBar] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  // Scroll -> which section is active
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["about", "experience", "projects"] as const;
      const scrollPosition = window.scrollY + 100; // offset for navbar

      if (window.scrollY < 50) {
        setActiveSection("about");
        return;
      }
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { offsetTop, offsetHeight } = el;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute underline position/width from the active link
  useEffect(() => {
    const updateBar = () => {
      const container = linksRef.current;
      if (!container) return;

      const link = container.querySelector<HTMLAnchorElement>(`a[href="#${activeSection}"]`);
      if (!link) return;

      const cRect = container.getBoundingClientRect();
      const lRect = link.getBoundingClientRect();

      setBar({
        left: lRect.left - cRect.left,
        width: lRect.width,
      });
    };

    // run now, after fonts/layout, and on resize
    updateBar();
    const onResize = () => updateBar();
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);

    // small delay to catch late font swaps
    const raf = requestAnimationFrame(updateBar);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
      cancelAnimationFrame(raf);
    };
  }, [activeSection]);

  return (
    <nav
      ref={navRef}
      className={`
        group fixed w-full h-[8vh] z-10
        transition duration-300 ease-in-out
        hover:shadow-lg hover:dark:bg-black/20 hover:bg-gray-400/10 hover:opacity-90
        backdrop-blur-xl border-t border-t-white/30
        flex justify-between items-center px-8
        text-[clamp(14px,3.5vw,18px)] tracking-tight
        ${scrolled ? "shadow-lg dark:bg-black/30 bg-white/20 backdrop-blur-xl" : "bg-transparent"}
        block lg:hidden
      `}
    >
      <Link href="/" className="flex items-center">
        <Image 
          src="/s logo.png" 
          alt="Home" 
          width={25} 
          height={25} 
          className="h-[70%] w-auto" 
          priority
          sizes="(max-width: 1024px) 8vw, 4vw"
        />
      </Link>

      {/* Links container is relative so the underline can position against it */}
      <div ref={linksRef} className="relative flex items-center gap-6 pb-2 pt-1">
        <Link href="#about" className="tracking-tight">About</Link>
        <Link href="#experience" className="tracking-tight">Experience</Link>
        <Link href="#projects" className="tracking-tight">Projects</Link>

        {/* Animated underline bar (now measured, not hard-coded) */}
        <div
          className="absolute bottom-0 h-[2px] dark:bg-white/60 bg-black/60 transition-[left,width] duration-300 ease-out"
          style={{ left: `${bar.left}px`, width: `${bar.width}px` }}
        />
      </div>

      <ThemeToggle />
    </nav>
  );
}
