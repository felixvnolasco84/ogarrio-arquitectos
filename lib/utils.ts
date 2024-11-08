import { type ClassValue, clsx } from "clsx";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

import Amatepec1 from "@/public/images/Amatepec/Amatepec (1).png";
import Amatepec2 from "@/public/images/Amatepec/Amatepec (2).png";
import Amatepec3 from "@/public/images/Amatepec/Amatepec (3).png";

import CabodelSol1 from "@/public/images/Cabo del Sol - CHK Arquitectura/Cabo del Sol - CHK Arquitectura (1).png";
import CabodelSol2 from "@/public/images/Cabo del Sol - CHK Arquitectura/Cabo del Sol - CHK Arquitectura (2).png";
import CabodelSol3 from "@/public/images/Cabo del Sol - CHK Arquitectura/Cabo del Sol - CHK Arquitectura (3).png";
import CabodelSol4 from "@/public/images/Cabo del Sol - CHK Arquitectura/Cabo del Sol - CHK Arquitectura (4).png";
import CabodelSol5 from "@/public/images/Cabo del Sol - CHK Arquitectura/Cabo del Sol - CHK Arquitectura (5).png";
import CabodelSol6 from "@/public/images/Cabo del Sol - CHK Arquitectura/Cabo del Sol - CHK Arquitectura (6).png";

import CasaEscota1 from "@/public/images/Casa Escota/Casa Escota (1).png";
import CasaEscota2 from "@/public/images/Casa Escota/Casa Escota (2).png";
import CasaEscota3 from "@/public/images/Casa Escota/Casa Escota (3).png";
import CasaEscota4 from "@/public/images/Casa Escota/Casa Escota (4).png";

import CasaMilCumbres1 from "@/public/images/Casa Mil Cumbres - CHK Arquitectura/Casa Mil Cumbres - CHK Arquitectura (1).png";
import CasaMilCumbres2 from "@/public/images/Casa Mil Cumbres - CHK Arquitectura/Casa Mil Cumbres - CHK Arquitectura (2).png";
import CasaMilCumbres3 from "@/public/images/Casa Mil Cumbres - CHK Arquitectura/Casa Mil Cumbres - CHK Arquitectura (3).png";
import CasaMilCumbres4 from "@/public/images/Casa Mil Cumbres - CHK Arquitectura/Casa Mil Cumbres - CHK Arquitectura (4).png";
import CasaMilCumbres5 from "@/public/images/Casa Mil Cumbres - CHK Arquitectura/Casa Mil Cumbres - CHK Arquitectura (5).png";
import CasaMilCumbres6 from "@/public/images/Casa Mil Cumbres - CHK Arquitectura/Casa Mil Cumbres - CHK Arquitectura (6).png";
import CasaMilCumbres7 from "@/public/images/Casa Mil Cumbres - CHK Arquitectura/Casa Mil Cumbres - CHK Arquitectura (7).png";
import CasaMilCumbres8 from "@/public/images/Casa Mil Cumbres - CHK Arquitectura/Casa Mil Cumbres - CHK Arquitectura (8).png";

import CasaOL1 from "@/public/images/Casa OL/Casa OL (1).png";
import CasaOL2 from "@/public/images/Casa OL/Casa OL (2).png";
import CasaOL3 from "@/public/images/Casa OL/Casa OL (3).png";
import CasaOL4 from "@/public/images/Casa OL/Casa OL (4).png";

import CostaPalmas1 from "@/public/images/Costa Palmas -  CHK Arquitectura/Costa Palmas -  CHK Arquitectura (1).png";
import CostaPalmas2 from "@/public/images/Costa Palmas -  CHK Arquitectura/Costa Palmas -  CHK Arquitectura (2).png";
import CostaPalmas3 from "@/public/images/Costa Palmas -  CHK Arquitectura/Costa Palmas -  CHK Arquitectura (3).png";
import CostaPalmas4 from "@/public/images/Costa Palmas -  CHK Arquitectura/Costa Palmas -  CHK Arquitectura (4).png";

import LA2601 from "@/public/images/LA260 y LA207/LA260 y LA207 (1).png";
import LA2602 from "@/public/images/LA260 y LA207/LA260 y LA207 (2).png";
import LA2603 from "@/public/images/LA260 y LA207/LA260 y LA207 (3).png";
import LA2604 from "@/public/images/LA260 y LA207/LA260 y LA207 (4).png";

import MesaDeGallos1 from "@/public/images/Mesa de Gallos - CHK Arquitectura/Mesa de Gallos - CHK Arquitectura (1).png";
import MesaDeGallos2 from "@/public/images/Mesa de Gallos - CHK Arquitectura/Mesa de Gallos - CHK Arquitectura (2).png";
import MesaDeGallos3 from "@/public/images/Mesa de Gallos - CHK Arquitectura/Mesa de Gallos - CHK Arquitectura (3).png";

import PlayaBlanca1 from "@/public/images/Playa Blanca/Playa Blanca (1).png";
import PlayaBlanca2 from "@/public/images/Playa Blanca/Playa Blanca (2).png";
import PlayaBlanca3 from "@/public/images/Playa Blanca/Playa Blanca (3).png";
import PlayaBlanca4 from "@/public/images/Playa Blanca/Playa Blanca (4).png";

import PuertaCortes1 from "@/public/images/Puerta Cortés - CHK Arquitectura/Puerta Cortés - CHK Arquitectura (1).png";
import PuertaCortes2 from "@/public/images/Puerta Cortés - CHK Arquitectura/Puerta Cortés - CHK Arquitectura (2).png";
import PuertaCortes3 from "@/public/images/Puerta Cortés - CHK Arquitectura/Puerta Cortés - CHK Arquitectura (3).png";
import PuertaCortes4 from "@/public/images/Puerta Cortés - CHK Arquitectura/Puerta Cortés - CHK Arquitectura (4).png";
import PuertaCortes5 from "@/public/images/Puerta Cortés - CHK Arquitectura/Puerta Cortés - CHK Arquitectura (5).png";

import RanchoAcatitlan1 from "@/public/images/Rancho Acatitlán -  CHK Arquitectura/Rancho Acatitlán -  CHK Arquitectura (1).png";
import RanchoAcatitlan2 from "@/public/images/Rancho Acatitlán -  CHK Arquitectura/Rancho Acatitlán -  CHK Arquitectura (2).png";
import RanchoAcatitlan3 from "@/public/images/Rancho Acatitlán -  CHK Arquitectura/Rancho Acatitlán -  CHK Arquitectura (3).png";
import RanchoAcatitlan4 from "@/public/images/Rancho Acatitlán -  CHK Arquitectura/Rancho Acatitlán -  CHK Arquitectura (4).png";

import SV1 from "@/public/images/SV C3/SV C3 (1).png";
import SV2 from "@/public/images/SV C3/SV C3 (2).png";
import SV3 from "@/public/images/SV C3/SV C3 (3).png";
import SV4 from "@/public/images/SV C3/SV C3 (4).png";

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

export type ProjectShowcase = {
  title: string;
  description: string;
  carrousel: StaticImageData[];
};

export const projects: ProjectShowcase[] = [
  {
    title: "Amatepec",
    description: "",
    carrousel: [Amatepec1, Amatepec2, Amatepec3],
  },
  {
    title: "Cabo del Sol - CHK Arquitectura",
    description: "CHK Arquitectura",
    carrousel: [
      CabodelSol1,
      CabodelSol2,
      CabodelSol3,
      CabodelSol4,
      CabodelSol5,
      CabodelSol6,
    ],
  },
  {
    title: "Casa Escota",
    description: "",
    carrousel: [CasaEscota1, CasaEscota2, CasaEscota3, CasaEscota4],
  },
  {
    title: "Casa Mil Cumbres",
    description: "CHK Arquitectura",
    carrousel: [
      CasaMilCumbres1,
      CasaMilCumbres2,
      CasaMilCumbres3,
      CasaMilCumbres4,
      CasaMilCumbres5,
      CasaMilCumbres6,
      CasaMilCumbres7,
      CasaMilCumbres8,
    ],
  },
  {
    title: "Casa OL",
    description: "",
    carrousel: [CasaOL1, CasaOL2, CasaOL3, CasaOL4],
  },
  {
    title: "Costa Palmas",
    description: "CHK Arquitectura",
    carrousel: [CostaPalmas1, CostaPalmas2, CostaPalmas3, CostaPalmas4],
  },
  {
    title: "LA260 y LA207",
    description: "",
    carrousel: [LA2601, LA2602, LA2603, LA2604],
  },
  {
    title: "Mesa de Gallos",
    description: "CHK Arquitectura",
    carrousel: [MesaDeGallos1, MesaDeGallos2, MesaDeGallos3],
  },
  {
    title: "Playa Blanca",
    description: "",
    carrousel: [PlayaBlanca1, PlayaBlanca2, PlayaBlanca3, PlayaBlanca4],
  },
  {
    title: "Puerta Cortés",
    description: "CHK Arquitectura",
    carrousel: [
      PuertaCortes1,
      PuertaCortes2,
      PuertaCortes3,
      PuertaCortes4,
      PuertaCortes5,
    ],
  },
  {
    title: "Rancho Acatitlán",
    description: "CHK Arquitectura",
    carrousel: [
      RanchoAcatitlan1,
      RanchoAcatitlan2,
      RanchoAcatitlan3,
      RanchoAcatitlan4,
    ],
  },
  {
    title: "SV C3",
    description: "",
    carrousel: [SV1, SV2, SV3, SV4],
  },
];
