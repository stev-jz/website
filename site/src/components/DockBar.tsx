"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";

export default function DockBar() {
  return (
    /* keep it fixed & layered above everything */
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]">
       <Dock
        iconSize={50}             // resting size
        iconMagnification={60}    // max grow size
        iconDistance={200}        // cursor proximity radius
        direction="middle"        // "top" | "middle" | "bottom"
      >
        <DockIcon className="bg-[#060010] text-white">
          <VscHome size={18} />
        </DockIcon>

        <DockIcon className="bg-[#060010] text-white">
          <VscArchive size={18} />
        </DockIcon>

        <DockIcon className="bg-[#060010] text-white">
          <VscAccount size={18} />
        </DockIcon>

        <DockIcon className="bg-[#060010] text-white">
          <VscSettingsGear size={18} />
        </DockIcon>
      </Dock>
    </div>
  );
}
