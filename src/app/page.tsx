"use client";

import RightPanel from "@/components/RightPanel";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/theme/theme-toggle";
import { useCallback, useRef, useState } from "react";

export default function Home() {

  const [leftWidth, setLeftWidth] = useState(45);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(0)

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    startXRef.current = e.clientX
    startWidthRef.current = leftWidth;
    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!draggingRef.current) return;
      const currentX = moveEvent.clientX;
      const deltaX = currentX - startXRef.current
      const deltaPct = (deltaX/window.innerWidth) * 100
      const newWidth = startWidthRef.current + deltaPct;
      setLeftWidth(Math.min(53, Math.max(37, newWidth)));

    }
    const onMouseUp = () => {
      draggingRef.current = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp)
  }, [leftWidth]);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div style = {{ width: `${leftWidth}%`}} className="overflow-hidden select-none transiton-all duration-75">
        <Sidebar/>
      </div>
<div
  className="
    relative group
    self-center
    hidden md:block
    h-[80%]
  "
  role="separator"
  aria-orientation="vertical"
>
  {/* Functional, invisible hit zone */}
  <div
    className="
      absolute top-0 left-1/2 -translate-x-1/2
      w-6 h-full
      cursor-ew-resize
      bg-transparent
    "
    onMouseDown={handleMouseDown}
  />

  {/* Decorative visible bar */}
  <div
    className="
      relative
      md:w-[3px] h-full rounded-full
      transition-colors
      dark:bg-gray-500 bg-gray-600/40
      group-hover:bg-gray-800/60 dark:group-hover:bg-gray-300
    "
  />
</div>
  

      <div draggable={false} className="overflow-auto flex-1 select-none">
        <RightPanel/>
      </div>
      
    </div>
  );
}