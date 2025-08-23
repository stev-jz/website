'use client';
import React, { useState, useId } from 'react';

type GlassContainerProps = {
  date?: string;
  title?: string;
  description?: string;
  link: string;
  tags?: string[];
  projectImage?: React.ReactNode;
};

export default function GlassContainer(props: GlassContainerProps) {
  const [open, setOpen] = useState(false);
  const descId = useId();

  return (
    <div className="container-type-inline max-lg:w-[90vw] max-lg:mx-auto max-lg:px-4">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls={descId}
        className={`
          cursor-pointer
          group relative w-full text-left
          pt-4 pb-[max(2.2vh,14px)]
          flex items-center
          px-[clamp(1rem,3vw,2.5rem)] gap-[clamp(1rem,3vw,2.5rem)]
          rounded-[15] overflow-hidden
          transition duration-300 ease-in-out
          border-t dark:border-t-white/20 border-t-white/40
          dark:bg-white/4 bg-gray-400/15 backdrop-blur-xl
          shadow-[0_10px_20px_rgba(0,0,0,0.25)]
          dark:hover:bg-white/8 hover:bg-white/17
          dark:hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)]
          hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)]
          dark:hover:backdrop-blur-md hover:backdrop-blur-2xl
          hover:border-t-white-45 dark:hover:border-t-white/35
          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60
        `}
      >
        {/* Icon */}
        <div className="grid place-items-center">
          <div className="
            lg:size-[clamp(8vh,9cqw,12vh)]
            max-lg:size-[clamp(28px,9vw,40px)]
            shrink-0 rounded-lg overflow-hidden
            [&>*]:h-full [&>*]:w-full
            [&_img]:block [&_img]:h-full [&_img]:w-full [&_img]:object-contain
          ">
            {props.projectImage}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div
  className="
    py-2 opacity-70 text-gray-800 dark:text-white leading-tight
    lg:text-[clamp(0.6vh,1.9cqw,1.6vh)]
    max-lg:text-[clamp(7px,1.9vw,11px)]  // was clamp(10px,2.2vw,12px)
  "
>
  {props.date}
</div>

          <div className="w-full flex items-start gap-2 mb-[0.5em]">
          <h1
  className="
    flex-1 min-w-0 break-words text-balance leading-snug
    text-gray-900 dark:text-white
    group-hover:text-blue-700 dark:group-hover:text-blue-600
    transition-colors duration-300 ease-in-out
    lg:text-[clamp(1.4vh,2.4cqw,2.3vh)]
    max-lg:text-[clamp(9px,2.6vw,15px)]  // was clamp(12px,3.2vw,16px)
    font-[500]
  "
>
  {props.title}
</h1>

            {props.description && (
              <span
                className="
                  ml-1 shrink-0 inline-flex items-center justify-center
                  opacity-0 group-hover:opacity-100 max-lg:opacity-100
                  transition-opacity duration-300 text-inherit
                "
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className={`h-4 w-4 transition-transform duration-300 ease-out ${open ? 'rotate-90' : 'rotate-0'}`}
                  fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </span>
            )}
          </div>

          {props.description && (
            <div id={descId} className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <p className="
                  mb-[0.8em] py-1 leading-relaxed break-words
                  text-gray-800 dark:text-gray-300 opacity-75
                  lg:text-[clamp(0.7vh,2.2cqw,2vh)]
                  max-lg:text-[clamp(7px,2.4vw,14px)]
                ">
                  {props.description}
                  {'\u00A0'}
                  <a
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="
                      inline-flex items-center align-baseline whitespace-nowrap
                      text-black dark:text-white
                      hover:text-blue-600 dark:hover:text-blue-400
                      transition-colors duration-300
                      group
                    "
                    aria-label="Open external link"
                    title={props.link}
                  >
                    <svg viewBox="0 0 16 16" className="size-[1em] mx-[0.3em] fill-current translate-y-[0.08em]">
                      <path d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z"/>
                      <path d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z"/>
                      <path d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z"/>
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          )}

          <ul className="flex flex-wrap lg:gap-2 max-lg:gap-1.5 max-lg:mt-2">
            {props.tags?.map(tag => (
              <li
                key={tag}
                className="inline-flex items-center lg:px-3 lg:py-1 lg:text-[clamp(8px,2.3vw,11px)]
                           max-lg:text-[1.2vw] max-lg:leading-tight max-lg:px-2.5 max-lg:py-1
                           font-semibold rounded-full bg-blue-950 text-blue-500"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </button>
    </div>
  );
}
