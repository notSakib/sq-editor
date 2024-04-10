import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRouteNameFromPath(path: string): string {
  // Remove the leading slash
  const cleanedPath = path.replace(/^\//, "");

  // Split the path by the hyphen or underscore delimiter
  const pathParts = cleanedPath.split(/-|_/);

  // Capitalize the first letter of each part
  const formattedParts = pathParts.map(
    (part) => part.charAt(0).toUpperCase() + part.slice(1)
  );

  // Join the parts with a space
  const formattedName = formattedParts.join(" ");

  return formattedName;
}

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};
