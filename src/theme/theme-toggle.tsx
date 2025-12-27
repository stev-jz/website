"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const rightPanel = document.getElementById("right-panel");
    if (!rightPanel) return;

    const handleScroll = () => {
      setIsScrolled(rightPanel.scrollTop > 10);
    };

    rightPanel.addEventListener("scroll", handleScroll);
    return () => rightPanel.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        cursor-pointer
        transition-all duration-300 ease-in-out
        flex items-center justify-center
        
        lg:rounded-xl
        lg:border-t lg:border-t-white/40
        lg:backdrop-blur-xl
        lg:shadow-[0_4px_15px_rgba(0,0,0,0.15)]
        lg:bg-white/15
        lg:hover:bg-white/25
        lg:dark:bg-white/8
        lg:dark:hover:bg-white/15
        lg:dark:border-t-white/25
        lg:px-3 lg:py-2
        
        max-lg:bg-transparent max-lg:border-none max-lg:shadow-none max-lg:backdrop-blur-none
        max-lg:hover:bg-transparent max-lg:hover:dark:bg-transparent
        max-lg:hover:border-none max-lg:hover:shadow-none max-lg:hover:backdrop-blur-none
        max-lg:h-[calc(100%-6px)] max-lg:max-h-[80%] max-lg:aspect-square max-lg:my-[3px]
        max-lg:text-[clamp(20px,5.5vw,30px)]
        
        ${isScrolled ? "opacity-80 hover:opacity-100" : ""}
      `}
    >
{isDark ? (
  // Sun (filled center + rounded thick rays)
  <svg
    viewBox="0 0 24 24"
    className="lg:h-5 lg:w-5 max-lg:h-[clamp(20px,5.5vw,30px)] max-lg:w-[clamp(20px,5.5vw,30px)]"
    aria-hidden="true"
  >
    {/* filled disc */}
    <circle cx="12" cy="12" r="5" fill="currentColor" />
    {/* rounded rays */}
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.5v2.5M12 19v2.5M4.5 12H2M22 12h-2.5" />
      <path d="M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" />
    </g>
  </svg>
) : (
<span
  className="inline-block leading-none lg:text-[20px] max-lg:text-[clamp(20px,5.5vw,30px)]"
  aria-hidden="true"
>
  ⏾
</span>
)}

    </button>
  );
}



