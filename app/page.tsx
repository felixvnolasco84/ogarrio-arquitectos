"use client";

import { Metadata } from "next";
import CDMXHEROIMAGE from "@/public/images/CCSJ_CAM04_AMENITIES_post.png";
import LOSCABOSIMAGE from "@/public/images/CCSJ_CAM05_TERRAZA_post.png";
import ProjectCard from "@/components/ProjectCard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import HeroCarrousel from "@/components/HeroCarrousel";
import AboutSection from "@/components/AboutSection";
import { Project } from "@/lib/utils";
import ProjectSection from "@/components/ProjectSection";

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: "Lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, soluta?",
//     alternates: {
//       canonical: ``,
//     },
//   };
// }

const projects = [
  {
    heroImage: CDMXHEROIMAGE,
    title: "LARENA CAMPESTRE SAN JOSÉ",
    place: "LOS CABOS",
    description:
      "We are a family-owned arquitecture firm based in México City. Since 2003, we have been committed to delivering timeless, quality developments that epitomize comfort and functionality.",
    data: [
      {
        title: "Status",
        description: "Completed",
      },
      {
        title: "Address",
        description: "Campestre San José",
      },
      {
        title: "Project Completion",
        description: "2023",
      },
      {
        title: "Unit Types",
        description: "4-bed, 3.5-baths",
      },
    ],
    featureData: [
      {
        title: "1",
        description: "Floor(s)",
      },
      {
        title: "270",
        description: "Unit Sizes in SQM",
      },
      {
        title: "3",
        description: "Units",
      },
    ],
  },
  {
    heroImage: LOSCABOSIMAGE,
    title: "LARENA CAMPESTRE SAN JOSÉ",
    place: "LOS CABOS",
    description:
      "We are a family-owned arquitecture firm based in México City. Since 2003, we have been committed to delivering timeless, quality developments that epitomize comfort and functionality.",
    data: [
      {
        title: "Status",
        description: "Completed",
      },
      {
        title: "Address",
        description: "Campestre San José",
      },
      {
        title: "Project Completion",
        description: "2023",
      },
      {
        title: "Unit Types",
        description: "4-bed, 3.5-baths",
      },
    ],
    featureData: [
      {
        title: "1",
        description: "Floor(s)",
      },
      {
        title: "270",
        description: "Unit Sizes in SQM",
      },
      {
        title: "3",
        description: "Units",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="relative flex flex-col gap-10 pb-12 lg:gap-20 lg:pb-24">
      <HeroCarrousel />
      <AboutSection />

      {projects.map((project, index) => (
        <ProjectSection key={index} project={project} />
      ))}
      
    </main>
  );
}
