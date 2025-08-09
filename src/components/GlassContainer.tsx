'use client';
import React from 'react';
import Link from 'next/link';

type GlassContainerProps = {
  date?: string;
  title?: string;
  description?: string;
  link: string;
  tags?: string[];
}

export default function GlassContainer(props: GlassContainerProps)
{
  return (
    <div className='container-type-inline w-full flex justify-center'>
      <Link href={props.link} target="_blank"
        className='
        group
        mb-3
        rounded-[15] 
        transition duration-300 ease-in-out
        w-full
        h-[clamp(9rem,20cqw,24rem)]

        border-t dark:border-t-white/20 border-t-white/40
        dark:bg-white/4
        bg-gray-400/10
        backdrop-blur-md
        shadow-[0_10px_20px_rgba(0,0,0,0.25)]
      

        dark:hover:bg-white/8
        hover:bg-white/15
        hover:opacity-200
        dark:hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)]
        hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)]
        dark:hover:backdrop-blur-md
        hover:backdrop-blur-lg
        hover:border-t-white-45
        dark:hover:border-t-white/35

        flex gap-10 justify-start p-6'>
        <div className=" flex gap-10 justify-start">
          <div className="mr-8 text-sm opacity-70 text-black dark:text-white">
            {props.date}
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="transition-colors duration-100 ease-out dark:group-hover:text-blue-600 group-hover:text-blue-800 text-xl font-semibold text-black dark:text-white">
              {props.title}
              <div className="
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
                ml-1.5
              ">
              -&gt;
              </div>
              </h1>
            <p className="dark:text-gray-300 text-black opacity-55">{props.description}</p>
            <ul className="flex">
              { props.tags && props.tags.map(tag => 
              <li 
              key={ tag }
              className="mr-1.5 inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-blue-950 text-blue-500">
                {tag}</li>)}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}
