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
    <div className='container-type-inline w-full flex justify-center'>
      <Link href={props.link} target="_blank"
        className='
        group
        mb-16
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
        flex px-[clamp(1rem,3vw,2.5rem)] py-[clamp(1.5rem,4vw,3.5rem)] gap-[clamp(1rem,3vw,2.5rem)] items-stretch'
      >
        <div className="flex flex-col justify-center items-center h-full min-w-[4em]">
          <div className="flex-shrink-0">
            {props.projectImage && React.isValidElement(props.projectImage) && props.projectImage.type === 'img'
              ? (() => {
                  const imgEl = props.projectImage as React.ReactElement<any, any>;
                  return <img 
                    src={imgEl.props.src} 
                    alt={imgEl.props.alt || ''}
                    width={imgEl.props.width}
                    height={imgEl.props.height}
                    className="w-[clamp(2vh,4cqw,5vh)] h-auto rounded-md"
                    style={{ objectFit: 'cover' }}
                  />
                })()
              : props.projectImage}
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1 h-full">
          <div className="flex items-baseline justify-between mb-[0.5em]">
            <h1 className="transition-colors duration-100 ease-out dark:group-hover:text-blue-600 group-hover:text-blue-800 text-[clamp(0.9vh,3.2cqw,1.8vh)] font-semibold text-gray-900 dark:text-white flex items-center">
              {props.title}
              <span className="inline-block transform transition-all duration-200 ease-out rotate-315 opacity-55 text-[clamp(0.7vh,2.7cqw,1.4vh)] group-hover:opacity-90 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-800 dark:group-hover:text-blue-500 font-medium ml-1.5">-&gt;</span>
            </h1>
            <div className="text-[clamp(0.6vh,2cqw,1.1vh)] opacity-70 text-gray-800 dark:text-white">{props.date}</div>
          </div>
          <p className="dark:text-gray-300 text-gray-800 opacity-75 text-[clamp(0.7vh,2.4cqw,1.3vh)] mb-[0.8em]">{props.description}</p>
          <ul className="flex flex-wrap gap-2">
            {props.tags && props.tags.map(tag => (
              <li
                key={tag}
                className="inline-flex items-center px-3 py-1 text-[clamp(0.5vh,1.7cqw,0.9vh)] font-semibold rounded-full bg-blue-950 text-blue-500">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}
