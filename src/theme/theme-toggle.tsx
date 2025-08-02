"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeToggle(){
    const { theme, setTheme } = useTheme();
     const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

    
    const isDark = theme === "dark";
    
    return(
        <button
            onClick={() => setTheme(isDark ? "light" :"dark")}
            className="
                w-[12vw]
                h-[2vw]
                cursor-pointer
                items-center
                font-medium
                rounded-[15] 
                transition-all duration-300 ease-in-out
                border-t border-t-transparent
                dark:bg-white/5
                bg-[rgba(220,220,220,0.1)]
                backdrop-blur-xl

                shadow-[inset_0_0_0.5px_rgba(255,255,255,0.2),0_2px_10px_rgba(0,0,0,0.05)]
                
                
                hover:bg-white/20
                dark:hover:bg-white/6
                hover:opacity-200
                hover:shadow-[inset_0_0_0.5px_rgba(255,255,255,0.3),0_4px_14px_rgba(0,0,0,0.08)]
                hover:backdrop-blur-lg
                hover:border-t
                hover:border-t-white/30

                flex gap-10 justify-start p-6">
                {isDark ? "☀ Vancouver" : "⏾ Toronto"}
            </button>
    );
}

