import Image from "next/image";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="
          lg:pt-[9vw] 
          container-type-inline 
          lg:w-auto 
          w-[90%] 
          flex flex-col lg:flex-row 
          items-center lg:items-start 
          justify-center lg:justify-between 
          mx-auto
        "
      >
        <div
          className="rounded-full lg:size-[clamp(10vw,20cqw,30vw)] max-lg:size-[30vw] flex items-center justify-center 
            border-t dark:border-t-white/30 border-t-white/50 dark:bg-white/4 bg-gray-600/15
            backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.35)] lg:mb-0 max-lg:mb-4"
        >
          <Image
            alt="pfp"
            priority
            src="/pfp.png"
            width={200}
            height={200}
            sizes="(max-width: 1024px) 30vw, 20vw"
            className="size-[90%] rounded-full object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>

        <div className="flex-1 flex items-center justify-center lg:justify-end w-full lg:w-[clamp(22vw,44cqw,33vw)] max-lg:w-[85%]">
          <div className="max-lg:bg-gray-400/15 max-lg:dark:bg-white/4 max-lg:backdrop-blur-xl max-lg:rounded-[15px] max-lg:p-6 max-lg:border-t max-lg:border-t-white/40 max-lg:dark:border-t-white/20 max-lg:shadow-[0_10px_20px_rgba(0,0,0,0.25)]">
            <p className="tracking-tighter lg:ml-[2vw] lg:text-[clamp(0.8vw,2.5cqw,1.3vw)] max-lg:text-[clamp(12px,3vw,18px)] leading-relaxed max-lg:mb-[clamp(4px,1.5vh,8px)] opacity-80 text-center text-gray-900 dark:text-white">
            I&apos;m a computer engineering student at the University of Toronto
            and originally from Vancouver. I like building full-stack apps
            and software tools for my personal use. Currently, I am a
            frontend developer for EWB, UofT Chapter and was recently a SWE Intern at Skynet
            Systems Ltd. When I&apos;m not coding, I like to stay physcially
            active! Playing basketball, hiking trails, and going gymming are my
            hobbies.
            </p>
          </div>
        </div>
      </section>

      <div className="container-type-inline mx-auto mt-[2vw] dark:h-[1.5px] h-[2px] bg-gradient-to-r from-transparent via-gray-700/30 dark:via-white/25 to-transparent" />

      <button 
        onClick={() => {
          document.getElementById('experience')?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}
        className="flex flex-col items-center lg:mt-[30vh] max-lg:mt-[clamp(12px,6vh,32px)] bg-transparent border-none p-0 m-0 cursor-pointer mx-auto group"
      >
        <p className="dark:text-white/70 dark:opacity-60 text-gray-900/60 lg:text-xl max-lg:text-[clamp(12px,3vw,16px)] tracking-tight mb-2 group-hover:opacity-50 transition-opacity duration-100">
          See more
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lg:size-[8vh] max-lg:size-[clamp(20px,7vw,36px)] dark:opacity-60 dark:text-white/70 text-gray-900/60 animate-bounce group-hover:opacity-50 transition-opacity duration-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </>
  );
}
