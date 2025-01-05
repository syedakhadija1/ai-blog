import { type ClassValue } from "clsx";

export const fadeIn = (delay: number = 0): ClassValue => 
  `animate-in fade-in duration-700 delay-${delay}`;

export const slideUp = (delay: number = 0): ClassValue => 
  `animate-in slide-in-from-bottom-4 duration-700 delay-${delay}`;

export const slideInLeft = (delay: number = 0): ClassValue => 
  `animate-in slide-in-from-left-4 duration-700 delay-${delay}`;

export const scaleUp = (delay: number = 0): ClassValue => 
  `animate-in zoom-in duration-700 delay-${delay}`;