"use client";

import RightPanel from "@/components/RightPanel";
import Sidebar from "@/components/Sidebar";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";

// Loading skeleton component
function SidebarSkeleton() {
  return (
    <div className="h-screen w-full animate-pulse">
      <div className="pt-[14vh] px-4 space-y-4">
        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        <div className="flex gap-4 mt-8">
          {[1,2,3,4].map(i => (
            <div key={i} className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RightPanelSkeleton() {
  return <div className="h-screen w-full animate-pulse bg-black/5 dark:bg-white/5 rounded-md" />;
}

export default function Home() {

  const [leftWidth, setLeftWidth] = useState(45);
  const [isLg, setIsLg] = useState(false)
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLg(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);

  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isLg) return;
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
  }, [isLg, leftWidth]);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div style = {isLg ? { width: `${leftWidth}%`} : {width: "100%"}} className="lg:overflow-hidden overflow-visible select-none transition-all duration-75 max-lg:px-4">
        <Suspense fallback={<SidebarSkeleton/>}>
          <Sidebar/>
        </Suspense>
      </div>

      <div onMouseDown={handleMouseDown} className="
        hidden
        lg:block
        self-center
        group
        z-50
        md:w-[3px]
        px-4
        h-[80%]
        transition-all duration-300
        rounded-full
        bg-transparent
        select-none 
        cursor-ew-resize">
        <div className='w-[1.5px] group-hover:w-[2px] h-full z-60 rounded-full select-none 
        cursor-ew-resize transition-all duration-300 dark:bg-gray-500/60 bg-gray-500/30 group-hover:bg-gray-600/50 dark:group-hover:bg-gray-400/70'></div>
      </div>

      <div draggable={false} className="h-auto lg:overflow-auto lg:flex-1 select-none max-lg:px-4">
        <Suspense fallback={<RightPanelSkeleton/>}><RightPanel/></Suspense>
      </div>
      
    </div>
  );
}