import Link from 'next/link';
import Menu from '@/components/MenuList'
import Iconlist from '@/components/IconList'

export default function Sidebar(){
    return(
        <aside className="md:px-40 h-screen flex flex-col">
            <div className='pt-20'>
                <Link href = '/' className="text-[55px] text-white font-bold tracking-tight">
                Steven Zhang
                </Link>
                <h2 className="text-white text-[20px] font-[500] pb-3">Studying <Link href="https://www.ece.utoronto.ca/" target="_blank" className="relative inline-block
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:w-0 after:h-[2px] after:bg-gray-300
                    after:transition-[width] after:duration-300
                    hover:after:w-full "
                >Computer Engineering @ UofT</Link></h2>


                <div className="mt-20 mb-40"><Menu></Menu></div>
            </div>
            <Iconlist></Iconlist>

        </aside>
    )
}