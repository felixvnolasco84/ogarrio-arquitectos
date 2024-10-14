import { type ClassValue, clsx } from "clsx";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

type Price = {
  type: string;
  price: number;
};

export type PricePlace = {
  day: string;
  type: Price[];
};

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export type Project = {
  heroImage: StaticImageData;
  title: string;
  place: string;
  description: string;
  data: { title: string; description: string }[];
  featureData: { title: string; description: string }[];
};
