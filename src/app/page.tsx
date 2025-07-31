import Sidebar from '@/components/Sidebar'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import GlassContainer from '@/components/GlassContainer';
import ExperienceSection from '@/app/Experience/page';
import Image from 'next/image';
import RightPanel from '@/components/RightPanel';

export default function home() {
  return (
    <div className = 'grid md:grid-cols-[7.8fr_9fr] grid-cols-1 min-h-screen'>
      {/* left panel */}
      <div className="md:sticky top-0 z-999">
        <Sidebar></Sidebar>
      </div>


      {/* right panel*/}
      <div className = "z-10 overflow-y-auto h-screen">
        <RightPanel></RightPanel>

      </div>
    </div>
  );
}
