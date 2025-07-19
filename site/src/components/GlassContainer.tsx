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
    <Link href={props.link} target="_blank"
      className='
      max-w-168
      group
      mb-3
      opacity-50
      rounded-[9] 
      transition duration-100 ease-in-out
      border-t border-t-transparent

      hover:bg-white/6
      hover:opacity-200
      hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)]
      hover:backdrop-blur-md
      hover:border-t
      hover:border-t-white/30

      flex gap-10 justify-start p-6'>
      <div className=" flex gap-10 justify-start">
        <div className="mr-8 text-[12.5px] tracking-tight font-[500] opacity-70 text-white">
          {props.date}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="transition-colors duration-100 ease-out group-hover:text-blue-500 text-l text-white">
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
              group-hover:text-blue-500
              font-medium
              ml-1.5
            ">
            -&gt;
            </div>
            </h1>
          <p className="text-[14px] text-white opacity-65">{props.description}</p>
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
  );
}
