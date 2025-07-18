// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind + conditional class strings */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
