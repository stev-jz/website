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
    <div className="container-type-inline max-lg:w-[80vw] max-lg:mx-auto">
      {/* Entire card toggles description */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls={descId}
        className={`
          cursor-pointer
          group relative w-full text-left
          pt-4 pb-[max(2.2vh,14px)]           /* a bit taller when collapsed */
          flex px-[clamp(1rem,3vw,2.5rem)] gap-[clamp(1rem,3vw,2.5rem)]
          rounded-[15]
          transition duration-300 ease-in-out
          border-t dark:border-t-white/20 border-t-white/40
          dark:bg-white/4 bg-gray-400/15 backdrop-blur-xl
          shadow-[0_10px_20px_rgba(0,0,0,0.25)]
          dark:hover:bg-white/8 hover:bg-white/17 hover:opacity-200
          dark:hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)]
          hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)]
          dark:hover:backdrop-blur-md hover:backdrop-blur-2xl
          hover:border-t-white-45 dark:hover:border-t-white/35
          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60
        `}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="lg:size-[clamp(8vh,9cqw,12vh)] max-lg:size-[clamp(28px,9vw,40px)] max-lg:shrink-0 rounded-lg overflow-hidden">
            {props.projectImage}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 h-full min-w-0 flex flex-col justify-center">
          <div className="flex flex-col items-start justify-between mb-[0.5em] gap-1">
            <div className="lg:text-[clamp(0.6vh,1.9cqw,1.6vh)] max-lg:text-[clamp(10px,2.5vw,14px)] opacity-70 py-2 text-gray-800 dark:text-white">
              {props.date}
            </div>

            {/* Title + chevron (chevron only on hover desktop; always on mobile) */}
            <h1
              className="
                transition-colors duration-300 ease-in-out
                text-gray-900 dark:text-white
                group-hover:text-blue-700 dark:group-hover:text-blue-600
                lg:text-[clamp(1.4vh,2.4cqw,2.3vh)] max-lg:text-[clamp(1px,2.6vw,18px)]
                font-[500]
              "
            >
              <span
                className="
                  inline-flex items-center min-w-0
                  max-lg:whitespace-nowrap max-lg:overflow-visible
                  lg:truncate lg:overflow-hidden
                "
              >
                <span className="min-w-0">{props.title}</span>

                {props.description && (
                  <span
                    className="
                      align-middle ml-1 inline-flex items-center justify-center
                      opacity-0 group-hover:opacity-100 max-lg:opacity-100
                      transition-opacity duration-300
                    "
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-4 w-4 flex-shrink-0 transition-transform duration-300 ease-out ${open ? 'rotate-90' : 'rotate-0'}`}
                      fill="none"
                      stroke="currentColor"   /* matches title color */
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </span>
                )}
              </span>
            </h1>
          </div>

          {/* Collapsible description with link emoji at the end */}
          {props.description && (
            <div
              id={descId}
              className={`
                grid transition-all duration-300 ease-out
                ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
              `}
            >
              <div className="overflow-hidden">
                <p className="dark:text-gray-300 py-1 text-gray-800 opacity-75 lg:text-[clamp(0.7vh,2.2cqw,2vh)] max-lg:text-[clamp(8px,2.5vw,14px)] mb-[0.8em]">
                  {props.description}
                  {/* link emoji at the end; underline on hover; same font size; doesn't toggle card */}
                  <a
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="ml-2 align-baseline text-current hover:underline underline-offset-2 transition duration-300"
                    aria-label="Open external link"
                    title={props.link}
                  >
                    🔗
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* Tags */}
          <ul className="flex flex-wrap lg:gap-2 max-lg:gap-1.5 max-lg:mt-2">
            {props.tags?.map((tag) => (
              <li
                key={tag}
                className="inline-flex items-center lg:px-3 lg:py-1 lg:text-[clamp(8px,2.5vw,13px)] max-lg:text-[1.8vw] max-lg:leading-tight max-lg:px-2.5 max-lg:py-1 font-semibold rounded-full bg-blue-950 text-blue-500"
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
