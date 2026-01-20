'use client';
import React from 'react';
import Link from 'next/link';

export type ProjectContainerProps = {
  title: string;
  description: string;
  link: string;
  tags: string[];
  projectImage: React.ReactNode;
}

export default function ProjectContainer(props: ProjectContainerProps)
{
  return (
    <div className="w-full max-lg:w-[60vw] max-lg:min-w-[320px] max-lg:mx-auto h-full">
      <Link href={props.link} target="_blank"
        className='
        w-full
        h-full
      group
      mb-3
        rounded-[15]
        transition duration-300 ease-in-out
        border-t dark:border-t-white/20 border-t-white/40
        dark:bg-white/4
        bg-gray-400/15
        backdrop-blur-xl
        shadow-[0_10px_20px_rgba(0,0,0,0.25)]
        dark:hover:bg-white/8
        hover:bg-white/17
        hover:opacity-200
        dark:hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)]
        hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)]
        dark:hover:backdrop-blur-md
        hover:backdrop-blur-2xl
        hover:border-t-white-45
        dark:hover:border-t-white/35

      flex flex-col'>
        <div className="flex justify-center items-center rounded-t-[15px] overflow-hidden">
          {props.projectImage}
        </div>
        <div className="flex flex-col justify-between mt-4 p-6 flex-1">
          <div className="flex flex-col gap-y-5">
            <h1 className="
              transition-colors duration-100 ease-out 
              dark:group-hover:text-blue-600 
              group-hover:text-blue-800 
              lg:text-xl max-lg:text-[clamp(16px,4vw,22px)] font-semibold text-black dark:text-white">
              {props.title} <span className="
                inline-block
                transform
                transition-all duration-200 ease-out
                rotate-315
                opacity-55
                text-[17px]
                group-hover:opacity-90
                group-hover:translate-x-1
                group-hover:-translate-y-1
                group-hover:text-blue-800
                dark:group-hover:text-blue-500
                font-medium
              ">
              -&gt;
              </span>
            </h1>
            <p className="dark:text-gray-300 text-black lg:text-[clamp(0.6vh,2vw,1.8vh)] max-lg:text-[clamp(10px,2.5vw,14px)] opacity-55">{props.description}</p>
          </div>
          
          <ul className="flex flex-wrap lg:gap-2 max-lg:gap-1.5 max-lg:mt-2 mt-auto">
            { props.tags && props.tags.map(tag => 
            <li 
            key={ tag }
            className="inline-flex items-center lg:px-2.5 lg:py-0.5 lg:text-[clamp(7px,2vw,10px)]
                           max-lg:text-[1.7vw] max-lg:leading-tight max-lg:px-2.5 max-lg:py-0.5 font-semibold rounded-full bg-blue-950 text-blue-500 whitespace-nowrap">
              {tag}</li>)}
          </ul>
        </div>
      </Link>
    </div>
  );
}
