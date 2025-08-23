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
        
        lg:rounded-[15] 
        lg:border-t lg:border-t-white/50
        lg:backdrop-blur-xl
        lg:shadow-[inset_0_0_0.5px_rgba(255,255,255,0.4),0_2px_10px_rgba(0,0,0,0.05)]
        lg:bg-white/20
        lg:hover:bg-white/30
        lg:dark:bg-white/5
        lg:dark:hover:bg-white/10
        lg:hover:opacity-100
        lg:hover:shadow-[inset_0_0_0.5px_rgba(255,255,255,0.45),0_4px_14px_rgba(0,0,0,0.08)]
        lg:hover:backdrop-blur-lg
        lg:dark:border-t-white/30
        lg:px-4 lg:py-2 lg:sm:px-5 lg:sm:py-3 lg:md:px-6 lg:md:py-4
        lg:text-lg lg:sm:text-xl lg:md:text-2xl lg:lg:text-3xl
        
        max-lg:bg-transparent max-lg:border-none max-lg:shadow-none max-lg:backdrop-blur-none
        max-lg:hover:bg-transparent max-lg:hover:dark:bg-transparent
        max-lg:hover:border-none max-lg:hover:shadow-none max-lg:hover:backdrop-blur-none
        max-lg:h-[calc(100%-6px)] max-lg:max-h-[80%] max-lg:aspect-square max-lg:my-[3px]
        max-lg:text-[clamp(20px,5.5vw,30px)]
        
        ${isScrolled ? "opacity-60 hover:opacity-100" : "opacity-100"}
      `}
    >
{isDark ? (
  // Sun (filled center + rounded thick rays)
  <svg
    viewBox="0 0 24 24"
    className="lg:h-6 lg:w-6 max-lg:h-[clamp(20px,5.5vw,30px)] max-lg:w-[clamp(20px,5.5vw,30px)]"
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
  className="inline-block leading-none lg:text-[24px] max-lg:text-[clamp(20px,5.5vw,30px)]"
  aria-hidden="true"
>
  ⏾
</span>
)}

    </button>
  );
}



