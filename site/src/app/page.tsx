import Sidebar from '@/components/SideBar'
export default function Home() {
  return (
    <div className = 'grid md:grid-cols-2 grid-cols-1 min-h-screen'>
      
      {/* left panel */}
      <div className="md:sticky top-0">
        <Sidebar></Sidebar>
      </div>

      {/* right panel*/}
      <div className = "overflow-y-auto h-screen">RIGHT PANEL </div>
    </div>
  );
}
