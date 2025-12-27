import Link from 'next/link';
import IconList from '@/components/Iconlist'
import ThemeToggle from '@/theme/theme-toggle'

export default function Sidebar(){
    return(
        <aside className="max-lg:text-center lg:pl-[8.3vw] lg:h-screen flex flex-col lg:justify-between">
            <div className='container-type-inline lg:pt-[9vw] max-lg:pt-[calc(env(safe-area-inset-top)+14vh)]'>
                <p className="lg:text-[clamp(4vw,13cqw,4.8vw)] max-lg:text-[clamp(28px,7.5vw,40px)] opacity-85 text-black/85 dark:text-white font-bold tracking-tighter">
                  Steven Zhang
                </p>
                <h2 className="lg:text-[clamp(1.1vw,3.7cqw,1.3vw)] max-lg:text-[clamp(14px,3.8vw,20px)] opacity-80 tracking-tight dark:text-white font-[475] lg:mt-0.5 max-lg:mt-1">
                    <Link href="https://www.ece.utoronto.ca/" target="_blank" 
                    className="relative inline-block
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:w-0 after:h-[1.75px] dark:after:bg-gray-300 after:bg-black
                    after:transition-[width] after:duration-300
                    hover:after:w-full
                    "> Computer Engineering at University of Toronto</Link>
                </h2>
                
                {/* Social Icons - Right under headline */}
                <div className="lg:mt-4">
                  <IconList />
                </div>
            </div>
            
            {/* Theme Toggle - Bottom left on desktop */}
            <div className="lg:pl-0 lg:pb-8 max-lg:hidden">
              <ThemeToggle />
            </div>
        </aside>
        
    )
}