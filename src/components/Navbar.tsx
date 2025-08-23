"use client";
import ThemeToggle from "@/theme/theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] =
    useState<"about" | "experience" | "projects">("about");

  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const [bar, setBar] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  // Scroll -> active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const ids = ["about", "experience", "projects"] as const;
      const y = window.scrollY + 100;
      if (window.scrollY < 50) return setActiveSection("about");
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { offsetTop, offsetHeight } = el;
        if (y >= offsetTop && y < offsetTop + offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure underline
  useEffect(() => {
    const updateBar = () => {
      const c = linksRef.current;
      if (!c) return;
      const link = c.querySelector<HTMLAnchorElement>(`a[href="#${activeSection}"]`);
      if (!link) return;
      const cr = c.getBoundingClientRect();
      const lr = link.getBoundingClientRect();
      setBar({ left: lr.left - cr.left, width: lr.width });
    };
    updateBar();
    const onResize = () => updateBar();
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);
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
        group fixed w-full
        h-[clamp(56px,10dvh,72px)]   /* taller on landscape phones */
        z-10 overflow-hidden
        transition duration-300 ease-in-out
        hover:shadow-lg hover:dark:bg-black/20 hover:bg-gray-400/10 hover:opacity-90
        backdrop-blur-xl border-t border-t-white/30
        flex justify-between items-center
        px-5 sm:px-6
        /* smaller menu text on mobile/landscape */
        text-[clamp(12px,2.4vw,16px)] tracking-tight leading-none
        ${scrolled ? "shadow-lg dark:bg-black/30 bg-white/20 backdrop-blur-xl" : "bg-transparent"}
        block lg:hidden
      `}
    >
      {/* Logo — strictly contained */}
      <Link href="/" className="h-full flex items-center">
        <div className="h-[70%] max-h-9 aspect-square flex items-center justify-center">
          <Image
            src="/s logo.png"
            alt="Home"
            width={40}
            height={40}
            className="h-full w-auto max-h-full object-contain"
            priority
            sizes="(max-width: 1024px) 8vw, 4vw"
          />
        </div>
      </Link>

      {/* Links (underline is positioned relative to this) */}
      <div ref={linksRef} className="relative flex items-end gap-5 pb-1">
        <Link href="#about" className="tracking-tight">About</Link>
        <Link href="#experience" className="tracking-tight">Experience</Link>
        <Link href="#projects" className="tracking-tight">Projects</Link>
        <div
          className="absolute bottom-0 h-[2px] dark:bg-white/60 bg-black/60 transition-[left,width] duration-300 ease-out"
          style={{ left: `${bar.left}px`, width: `${bar.width}px` }}
        />
      </div>

      {/* Theme toggle — contained without needing a className prop */}
      <div className="h-full flex items-center">
        <div className="h-[70%] max-h-9 aspect-square grid place-items-center overflow-hidden
                        [&>*]:h-full [&>*]:w-full [&_svg]:h-full [&_svg]:w-full">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
