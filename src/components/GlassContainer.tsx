'use client';
import React from 'react';
import Link from 'next/link';

type GlassContainerProps = {
  date?: string;
  title?: string;
  description?: string;
  link: string;
  tags?: string[];
  projectImage?: React.ReactNode;
}

export default function GlassContainer(props: GlassContainerProps)
{
  return (
    <div className='container-type-inline'>
      <Link href={props.link} target="_blank"
        className='
        group
        pt-3
        pb-3.5
        w-full
        flex px-[clamp(1rem,3vw,2.5rem)] gap-[clamp(1rem,3vw,2.5rem)]

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
        '>
        <div className='flex items-center'>
          <div className="size-[clamp(8vh,9cqw,12vh)] rounded-lg overflow-hidden">
            {props.projectImage}
          </div>
        </div>

        <div className="flex flex-col justify-center flex-1 h-full">
          <div className="flex flex-col items-baseline justify-between mb-[0.5em]">
            <div className="text-[clamp(0.6vh,1.6cqw,1.5vh)] opacity-70 py-2 text-gray-800 dark:text-white">{props.date}</div>
            <h1 className="transition-colors duration-100 ease-out dark:group-hover:text-blue-600 group-hover:text-blue-700 text-[clamp(1.4vh,2.4cqw,2.3vh)] font-[500] text-gray-900 dark:text-white flex items-center">
              {props.title}
              <span className="inline-block transform transition-all duration-200 ease-out rotate-315 opacity-55 text-[clamp(0.7vh,2cqw,2vh)] group-hover:opacity-90 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-800 dark:group-hover:text-blue-500 font-medium ml-1.5">-&gt;</span>
            </h1>
            
            
          </div>
          <p className="dark:text-gray-300 py-1 text-gray-800 opacity-75 text-[clamp(0.7vh,2.2cqw,2vh)] mb-[0.8em] ">{props.description}</p>
          <ul className="flex flex-wrap gap-2">
            {props.tags && props.tags.map(tag => (
              <li
                key={tag}
                className="inline-flex items-center px-3 py-1 text-[1.5vh] font-semibold rounded-full bg-blue-950 text-blue-500">
                {tag}
              </li>
            ))}
          </ul>
          
        </div>
      </Link>
    </div>
  );
}