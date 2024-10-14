import { Project } from "@/app/page";
import { type ClassValue, clsx } from "clsx";
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

export const projects: Project[] = [
  {
    name: "Hospital Angeles",
    category: "hospitales",
    product: "Vidrio insulado Sunglas, cancelería modular,",
    servicio: "Suministro e instalación de cancelería y vidrio",
    ubicacion:
      "C. Bernardino del Razo 21, Ensueño, 76178 Santiago de Querétaro, Qro",
    image:
      "https://images.pexels.com/photos/18936031/pexels-photo-18936031/free-photo-of-restaurante-de-barbacoa-coreana.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      " Hospital Angeles, C. Bernardino del Razo 21, Ensueño, 76178 Santiago de Querétaro, Qro",
    slug: "hospital-angeles",
    metaTitle: "Hospital Angeles",
    metaDescription:
      "Hospital Angeles, C. Bernardino del Razo 21, Ensueño, 76178 Santiago de Querétaro, Qro",
  },
];
