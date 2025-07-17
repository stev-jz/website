import Sidebar from '@/components/Sidebar'
export default function Home() {
  return (
    <div className = 'grid md:grid-cols-2 grid-cols-1 min-h-screen'>
      
      {/* left panel */}
      <div className="sticky top-0">
        <Sidebar></Sidebar>
      </div>

      {/* right panel*/}
      <div className = "overflow-y-auto h-screen">RIGHT PANEL </div>
    </div>
  );
}
