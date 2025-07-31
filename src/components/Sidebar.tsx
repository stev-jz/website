import Link from 'next/link';
import IconList from '@/components/Iconlist'
import GlassContainer from './GlassContainer';

export default function Sidebar(){
    return(
        <aside className="md:px-[8vw] h-screen flex flex-col">
            <div className='pt-[7vw]'>
                <Link href = '/' className="text-[4vw] opacity-85 text-white font-bold tracking-tighter">
                Hi, I'm Steven👋
                </Link>
                <h2 className="opacity-85 tracking-tight text-white text-[1.2vw] font-[475] -mt-2.5">
                    Studying <Link href="https://www.ece.utoronto.ca/" target="_blank" 
                    className="relative inline-block
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:w-0 after:h-[2px] after:bg-gray-300
                    after:transition-[width] after:duration-300
                    hover:after:w-full "
                    > ECE at the University of Toronto</Link>
                </h2>
            </div>
            <div className="pt-[1vw]"><IconList></IconList></div>

        </aside>
    )
}