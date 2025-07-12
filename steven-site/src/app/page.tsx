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
      <div className="flex items-center justify-center h-screen">
    <h1 className="text-center text-4xl font-bold">Hi, I'm Steven.</h1>
</div>

    </main>

  );
}
