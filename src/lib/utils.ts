import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generatePercentage(current: number, total: number): number {
  if (total === 0) {
    return 0;
  }
  const percentage = (current / total) * 100;
  return percentage;
}
