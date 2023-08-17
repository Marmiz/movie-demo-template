import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toSnakeCase(str: string) {
  return str.replace(" ", "_").toLowerCase();
}

export function toAvatarInitials(name: string) {
  const [firstName, lastName] = name.split(" ");
  return `${firstName[0]}${lastName[0]}`;
}
