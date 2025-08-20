'use client';
import React from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';

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
    <Link href={props.link} target="_blank"
      className='
      w-full
      group
      mb-3
      rounded-[15] 
      transition duration-300 ease-in-out

      border-t dark:border-t-white/20 border-t-white/40
      dark:bg-white/4
      bg-gray-600/15
      backdrop-blur-md
      shadow-[0_10px_20px_rgba(0,0,0,0.25)]
      dark:hover:bg-white/8
      hover:bg-gray-600/15
      hover:opacity-200
      dark:hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)]
      hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)]
      dark:hover:backdrop-blur-md
      hover:backdrop-blur-lg
      hover:border-t-white-45
      dark:hover:border-t-white/35

      flex flex-col p-6'>
        {props.projectImage}
        <div className="flex flex-col gap-y-5 mt-4">
          <h1 className="
            transition-colors duration-100 ease-out 
            dark:group-hover:text-blue-600 
            group-hover:text-blue-800 
            text-xl font-semibold text-black dark:text-white">
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
            ">
            -&gt;
            </div>
            </h1>
          <p className="dark:text-gray-300 text-black opacity-55">{props.description}</p>
          <ul className="flex flex-wrap gap-2">
            { props.tags && props.tags.map(tag => 
            <li 
            key={ tag }
            className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-blue-950 text-blue-500 whitespace-nowrap">
              {tag}</li>)}
          </ul>
        </div>
    </Link>
  );
}
