'use client';
import React, { useState, useId } from 'react';

type CompactExperienceItemProps = {
  date?: string;
  title: React.ReactNode;
  description?: string;
  link: string;
  tags?: string[];
  projectImage?: React.ReactNode;
  textMode?: 'light' | 'dark';
};

export default function CompactExperienceItem(props: CompactExperienceItemProps) {
  const [open, setOpen] = useState(false);
  const descId = useId();
  
  // Dynamic colors based on text mode (light = white text for dark bg, dark = dark text for light bg)
  const isLight = props.textMode === 'light';
  
  const textPrimary = isLight ? 'text-white' : 'text-gray-900';
  const textSecondary = isLight ? 'text-gray-200' : 'text-gray-800';
  const textMuted = isLight ? 'text-white/80' : 'text-gray-700';
  const hoverBg = isLight ? 'hover:bg-white/10' : 'hover:bg-black/5';
  const hoverText = isLight ? 'group-hover:text-blue-400' : 'group-hover:text-blue-700';
  const textShadow = isLight ? 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]' : 'drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]';

  return (
    <button
      type="button"
      onClick={() => setOpen(v => !v)}
      aria-expanded={open}
      aria-controls={descId}
      className={`
        cursor-pointer
        group relative w-full text-left
        py-2 px-2
        flex items-start gap-2
        rounded-xl overflow-hidden
        transition-all duration-200 ease-out
        ${hoverBg}
        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60
      `}
    >
      {/* Icon */}
      <div className="shrink-0">
        <div className="
          size-10
          rounded-lg overflow-hidden
          [&>*]:h-full [&>*]:w-full
          [&_img]:block [&_img]:h-full [&_img]:w-full [&_img]:object-contain
        ">
          {props.projectImage}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2">
          <div className="flex-1 min-w-0">
            <h3 className={`
              w-full break-words
              text-sm font-normal
              ${textPrimary}
              ${hoverText}
              ${textShadow}
              transition-colors duration-200
            `}>
              {props.title}
            </h3>
            
            {props.date && (
              <div className="mt-0.5">
                <span className={`text-[11px] font-normal ${textMuted} ${textShadow} transition-colors duration-200`}>
                  {props.date}
                </span>
              </div>
            )}
          </div>
          
          {props.description && (
            <span className={`shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-0.5 ${textPrimary}`}>
              <svg
                viewBox="0 0 24 24"
                className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-90' : 'rotate-0'}`}
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </span>
          )}
        </div>

        {/* Expandable description */}
        {props.description && (
          <div 
            id={descId} 
            className={`
              grid transition-all duration-200 ease-out 
              ${open ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}
            `}
          >
            <div className="overflow-hidden">
              <p className={`text-[11px] leading-relaxed ${textSecondary} ${textShadow} mb-2 transition-colors duration-200`}>
                {props.description}
                {' '}
                <a
                  href={props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center text-blue-500 hover:text-blue-400 hover:underline"
                >
                  <svg viewBox="0 0 16 16" className="size-2.5 ml-0.5 fill-current">
                    <path d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z"/>
                    <path d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z"/>
                    <path d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z"/>
                  </svg>
                </a>
              </p>
              
              {props.tags && props.tags.length > 0 && (
                <ul className="flex flex-wrap gap-1.5">
                  {props.tags.map(tag => (
                    <li
                      key={tag}
                      className="text-[10px] px-2 py-0.5 font-medium rounded-full bg-blue-950 text-blue-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </button>
  );
}
