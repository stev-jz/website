
export default function MenuList(){
    return(
        <nav className="pl-[1vw] pt-[4.5vw] flex flex-col gap-6">
            <a href="#about" className="cursor-pointer w-fit group flex items-center gap-[1.2vw]">
                <span
                className="
                    inline-block
                    w-[3rem]
                    group-hover:w-[clamp(5rem,10cqw,8rem)]
                    border-t-2 border-current/20
                    group-hover:border-current/70 dark:group-hover:border-white/90
                    transition-all duration-300
                "
                />
                <span
                    className="
                    text-[clamp(0.8vw,2.6cqw,0.85vw)]
                    tracking-wider
                    font-bold
                    transition-colors duration-200
                    
                    dark:text-white/20 dark:group-hover:text-white/90 
                    group-hover:text-black/70 text-black/40 ">ABOUT</span>
            </a>
            <a href="#experience" className="cursor-pointer w-fit group flex items-center gap-[1.2vw]">
                <span
                className="
                    inline-block
                    w-[3rem]
                    group-hover:w-[clamp(5rem,10cqw,8rem)]
                    border-t-2 border-current/20
                    group-hover:border-current/70 dark:group-hover:border-white/90
                    transition-all duration-300
                "
                />
                <span
                    className="
                    text-[clamp(0.8vw,2.6cqw,0.85vw)]
                    tracking-wider
                    align-middle
                    font-bold
                    transition-colors duration-200
                    
                    dark:text-white/20 dark:group-hover:text-white/90 
                    group-hover:text-black/70 text-black/40 ">EXPERIENCE</span>
            </a>
            <a href="#projects" className="cursor-pointer w-fit group flex items-center gap-[1.2vw]">
                <span
                className="
                    inline-block
                    w-[3rem]
                    group-hover:w-[clamp(5rem,10cqw,8rem)]
                    border-t-2 border-current/20
                    group-hover:border-current/70 dark:group-hover:border-white/90
                    transition-all duration-300
                "
                />

                <span
                    className="
                    text-[clamp(0.8vw,2.6cqw,0.85vw)]
                    tracking-wider
                    align-middle
                    font-bold
                    transition-colors duration-200
                    
                    dark:text-white/20 dark:group-hover:text-white/90 
                    group-hover:text-black/70 text-black/40 ">PROJECTS</span>
            </a>
        
        </nav>
    );
}