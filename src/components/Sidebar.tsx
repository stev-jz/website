import Link from 'next/link';
import IconList from '@/components/Iconlist'
import MenuList from './Menu';

export default function Sidebar(){
    return(
        <aside className="max-lg:text-center lg:pl-[8.3vw] lg:h-screen flex flex-col">
            <div className='container-type-inline lg:pt-[7vw] max-lg:pt-[calc(env(safe-area-inset-top)+14vh)]'>
                <p className="lg:text-[clamp(3.6vw,12cqw,4.33vw)] max-lg:text-[clamp(28px,7.5vw,40px)] opacity-85 text-black/85 dark:text-white font-bold tracking-tighter">
                Steven Zhang
                </p>
                <h2 className="lg:text-[clamp(1.1vw,3.7cqw,1.3vw)] max-lg:text-[clamp(14px,3.8vw,20px)] opacity-80 tracking-tight dark:text-white font-[475] lg:-mt-2.5 max-lg:mt-1">
                    <Link href="https://www.ece.utoronto.ca/" target="_blank" 
                    className="relative inline-block
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:w-0 after:h-[1.75px] dark:after:bg-gray-300 after:bg-black
                    after:transition-[width] after:duration-300
                    hover:after:w-full
                    "> Computer Engineering at University of Toronto</Link>
                </h2>
                <MenuList></MenuList>
            </div>
            <div className="flex gap-[2vw] mt-[1.5vw]">
                <button 
                className="
                hidden
                w-[10vw]
                h-[3vw]
                cursor-pointer
                items-center
                font-semibold 
                tracking-tight
                text-[1.2vw]
                rounded-[11] 
                transition duration-300 ease-in-out

                border-t dark:border-t-white/20 border-t-white/40
                dark:bg-white/4
                bg-gray-600/15
                backdrop-blur-md
                shadow-[0_10px_20px_rgba(0,0,0,0.2)]
                

                dark:hover:bg-white/8
                hover:bg-gray-600/15
                hover:opacity-200
                dark:hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)]
                hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)]
                dark:hover:backdrop-blur-md
                hover:backdrop-blur-lg
                hover:border-t-white-45
                dark:hover:border-t-white/35
                
            ">Resume</button>
                {/* <Link
                href="/"
                className="
                    
                    inline-flex items-end w-[7.8vw] h-[2.55vw]
                    text-[1.25vw] font-semibold
                    relative
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:w-0 after:h-[1.15px] after:transition-[width] after:duration-300
                    after:bg-black dark:after:bg-gray-300
                    hover:after:w-full"
                >About me -&gt;</Link>*/}
                

                
            </div>
            <IconList/>
        </aside>
        
    )
}