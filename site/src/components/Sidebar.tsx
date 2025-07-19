import Link from 'next/link';
import Menu from '@/components/MenuList'
import Iconlist from '@/components/IconList'
import GlassContainer from './GlassContainer';

export default function Sidebar(){
    return(
        <aside className="md:px-40 h-screen flex flex-col">
            <div className='pt-20'>
                <Link href = '/' className="text-[53px] opacity-85 text-white font-bold tracking-tighter">
                Steven Zhang
                </Link>
                <h2 className="opacity-85 tracking-tight text-white text-[20px] font-[475] -mt-2.5">
                    Software Engineer</h2>
                <h3 className="opacity-55 text-white text-sm/6 text-[17px] font-[360] py-5">Based in Toronto, ON. Studying 
                <Link href="https://www.ece.utoronto.ca/" target="_blank" className="relative inline-block
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:w-0 after:h-[2px] after:bg-gray-300
                    after:transition-[width] after:duration-300
                    hover:after:w-full "
                >Computer Engineering @ UofT.</Link></h3>

                <Menu></Menu>
                
            </div>
            <div className="mt-50"><Iconlist></Iconlist></div>

        </aside>
    )
}