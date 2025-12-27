'use client';
import { useState, useEffect, useRef, RefObject } from 'react';

/**
 * Hook that samples the background behind an element and determines
 * if text should be light or dark for optimal visibility.
 * Returns 'light' if background is dark (use white text)
 * Returns 'dark' if background is light (use dark text)
 */
export function useBackgroundContrast(elementRef: RefObject<HTMLElement | null>): 'light' | 'dark' {
  const [textMode, setTextMode] = useState<'light' | 'dark'>('light');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sampleBackground = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      
      // Create a canvas to capture the background
      if (!canvasRef.current) {
        canvasRef.current = document.createElement('canvas');
      }
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      // Sample a region behind the element
      const sampleWidth = Math.min(rect.width, 200);
      const sampleHeight = Math.min(rect.height, 200);
      canvas.width = sampleWidth;
      canvas.height = sampleHeight;

      // Get computed background color of the body/parent elements
      let bgColor = getComputedStyle(document.body).backgroundColor;
      
      // Try to sample from the fixed background element
      const bgElement = document.querySelector('[aria-hidden="true"]');
      if (bgElement) {
        const bgStyle = getComputedStyle(bgElement);
        // Check if there's a background image
        if (bgStyle.backgroundImage && bgStyle.backgroundImage !== 'none') {
          // For background images, we'll check the theme instead
          const isDarkMode = document.documentElement.classList.contains('dark');
          setTextMode(isDarkMode ? 'light' : 'dark');
          return;
        }
        if (bgStyle.backgroundColor && bgStyle.backgroundColor !== 'rgba(0, 0, 0, 0)') {
          bgColor = bgStyle.backgroundColor;
        }
      }

      // Parse the background color
      const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        const r = parseInt(match[1]);
        const g = parseInt(match[2]);
        const b = parseInt(match[3]);
        
        // Calculate relative luminance (WCAG formula)
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        // If luminance > 0.5, background is light, use dark text
        setTextMode(luminance > 0.5 ? 'dark' : 'light');
      } else {
        // Fallback: check if dark mode is enabled
        const isDarkMode = document.documentElement.classList.contains('dark');
        setTextMode(isDarkMode ? 'light' : 'dark');
      }
    };

    // Initial sample
    sampleBackground();

    // Re-sample on theme changes
    const observer = new MutationObserver(() => {
      sampleBackground();
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Re-sample on resize
    window.addEventListener('resize', sampleBackground);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', sampleBackground);
    };
  }, [elementRef]);

  return textMode;
}

