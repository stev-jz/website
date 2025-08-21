

export default function About(){
    return(
        <>
        <section id="about" className="pt-[9vw] container-type-inline flex">
            <div className="rounded-full size-[clamp(10vw,20cqw,30vw)] flex items-center justify-center 
                border-t dark:border-t-white/30 border-t-white/50 dark:bg-white/4 bg-gray-600/15
                backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.35)]">
                <img src="/pfp.png" className="size-[90%] rounded-full"></img>
            </div>
            <div className="flex-1 flex items-center justify-end w-[clamp(22vw,44cqw,33vw)]">
                <p className="tracking-tighter ml-[2vw] text-[clamp(0.8vw,2.5cqw,1.3vw)] opacity-60 text-center">
                    I&apos;m a computer engineering student at the University of Toronto and originally from Vancouver. 
                    I like building full-stack apps, websites, and other tools for my personal use. Currently, I am a frontend developer 
                    for EWB, UofT Chapter and a SWE Intern at Skynet Systems Ltd. When I&apos;m not coding, 
                    I like to stay physcially active! Playing basketball, hiking trails, and going gymming are my hobbies.
                </p>
                
            </div>
        </section>
        <div className="container-type-inline mx-auto mt-[2vw] dark:h-[1.5px] h-[2px] bg-gradient-to-r from-transparent via-gray-700/30 dark:via-white/25 to-transparent" />
    <div className="flex flex-col items-center mt-[30vh]">
      <p className="dark:text-white/70 dark:opacity-60 text-gray-900/60 text-xl tracking-tight mb-2">See more</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-[8vh] dark:opacity-60 dark:text-white/70 text-gray-900/60 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

      </>
        
    );
}