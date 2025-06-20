"use client";

import Image from "next/image";
import BlurText from "@/components/BlurText";
import AuroraBg from "@/components/AuroraBg";
import Dock from "@/components/Dock";
import {VscHome, VscArchive, VscAccount, VscSettingsGear} from "react-icons/vsc";
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};




export default function Home() {
    const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];
  return (
    <main className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AuroraBg
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={0.7}
          speed={0.7}
        />
      </div>
      <div className="flex items-center gap-0">
        <BlurText
          text="Steven Zhang"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-6xl mb-8 font-mono"
        />
        <Dock 
          items={items}
          panelHeight={80}
          baseItemSize={60}
          magnification={75}/>


      </div>
      <div className="h-screen bg-gray-100">

      </div>
        
      
    </main>

  );
}
