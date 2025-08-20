"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeToggle(){
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const rightPanel = document.getElementById('right-panel');
    if (!rightPanel) return;

    const handleScroll = () => {
      setIsScrolled(rightPanel.scrollTop > 10);
    };

    rightPanel.addEventListener('scroll', handleScroll);
    return () => rightPanel.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  if (!mounted) return null; 

    
    const isDark = theme === "dark";
    
    return(
        <button
            onClick={() => setTheme(isDark ? "light" :"dark")}
            className={`
                py-3
                cursor-pointer
                items-center
                text-4xl
                rounded-[15] 
                transition-all duration-300 ease-in-out
                border-t border-t-white/50
                backdrop-blur-xl

                shadow-[inset_0_0_0.5px_rgba(255,255,255,0.4),0_2px_10px_rgba(0,0,0,0.05)]
                
                
                bg-white/13
                hover:bg-white/20
                dark:bg-white/5
                dark:hover:bg-white/7
                hover:opacity-100
                hover:shadow-[inset_0_0_0.5px_rgba(255,255,255,0.45),0_4px_14px_rgba(0,0,0,0.08)]
                hover:backdrop-blur-lg
                hover:border-t
                dark:border-t-white/30

                flex gap-10 justify-start p-6
                
                ${isScrolled ? 'opacity-60 hover:opacity-100' : 'opacity-100'}
            `}>
                {isDark ? "☀" : "⏾"}
            </button>
    );
}

