import Sidebar from '@/components/SideBar'
import DockBar from "@/components/DockBar";
import { Dock, DockIcon } from "@/components/magicui/dock";


export default function home() {
  return (
    <div className = 'grid md:grid-cols-2 grid-cols-1 min-h-screen'>
      <DockBar></DockBar>

      {/* left panel */}
      <div className="md:sticky top-0">
        <Sidebar></Sidebar>
      </div>


      {/* right panel*/}
      <div className = "overflow-y-auto h-screen">RIGHT PANEL </div>
    </div>
  );
}
