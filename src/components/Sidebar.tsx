import Link from 'next/link';
import IconList from '@/components/Iconlist'

export default function Sidebar(){
    return(
        <aside className="md:px-[8.3vw] fixed h-screen flex flex-col">
            <div className='pt-[8vw]'>
                <p className="text-[4.5vw] opacity-85 dark:text-white font-bold tracking-tighter">
                Hi, I&apos;m Steven👋
                </p>
                <h2 className="opacity-85 tracking-tight dark:text-white text-[1.3vw] font-[475] -mt-2.5">
                    Studying <Link href="https://www.ece.utoronto.ca/" target="_blank" 
                    className="relative inline-block
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:w-0 after:h-[1.75px] dark:after:bg-gray-300 after:bg-black
                    after:transition-[width] after:duration-300
                    hover:after:w-full
                    "
                    > ECE at the University of Toronto</Link>
                </h2>
            </div>
            <div className="flex gap-[1vw] mt-[1.5vw]">
                <button 
                className="

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
                
            ">
                Resume</button>
                <Link
                href="/"
                target="_blank"
                className="
                    inline-flex items-end w-[10vw] h-[2.3vw]
                    text-[1.2vw] dark:font-extralight font-light
                    relative
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:w-0 after:h-[0.5px] after:transition-[width] after:duration-300
                    after:bg-black dark:after:bg-gray-300
                    hover:after:w-full"
                >
                More about me -&gt;
                </Link>

                
            </div>
            
        
            <div className="fixed ml-[1vw] mt-[39.5vw]"><IconList></IconList></div>
        </aside>
        
    )
}