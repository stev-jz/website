import Sidebar from '@/components/SideBar'
import DockBar from "@/components/DockBar";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';


export default function home() {
  return (
    <BackgroundGradientAnimation className="-z-999">
      <div className = 'grid md:grid-cols-2 grid-cols-1 min-h-screen'>
        <DockBar></DockBar>
        {/* left panel */}
        <div className="md:sticky top-0 z-999">
          <Sidebar></Sidebar>
        </div>


        {/* right panel*/}
        <div className = "overflow-y-auto h-screen">RIGHT PANEL </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
