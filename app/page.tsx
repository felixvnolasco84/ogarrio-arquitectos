"use client";

import AboutSection from "@/components/AboutSection";
import { projects } from "@/lib/utils";
import ProjectSection from "@/components/ProjectSection";
import HeroSection from "@/components/HeroSection";
import CTAContactSection from "@/components/Sections/CTAContactSection";
import HomeImageSection from "@/components/Sections/HomeImageSection";

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

// const projects = [
//   {
//     heroImage: CDMXHEROIMAGE,
//     title: "LARENA CAMPESTRE SAN JOSÉ",
//     place: "LOS CABOS",
//     description:
//       "We are a family-owned arquitecture firm based in México City. Since 2003, we have been committed to delivering timeless, quality developments that epitomize comfort and functionality.",
//     data: [
//       {
//         title: "Status",
//         description: "Completed",
//       },
//       {
//         title: "Address",
//         description: "Campestre San José",
//       },
//       {
//         title: "Project Completion",
//         description: "2023",
//       },
//       {
//         title: "Unit Types",
//         description: "4-bed, 3.5-baths",
//       },
//     ],
//     featureData: [
//       {
//         title: "1",
//         description: "Floor(s)",
//       },
//       {
//         title: "270",
//         description: "Unit Sizes in SQM",
//       },
//       {
//         title: "3",
//         description: "Units",
//       },
//     ],
//   },
//   {
//     heroImage: LOSCABOSIMAGE,
//     title: "LARENA CAMPESTRE SAN JOSÉ",
//     place: "LOS CABOS",
//     description:
//       "We are a family-owned arquitecture firm based in México City. Since 2003, we have been committed to delivering timeless, quality developments that epitomize comfort and functionality.",
//     data: [
//       {
//         title: "Status",
//         description: "Completed",
//       },
//       {
//         title: "Address",
//         description: "Campestre San José",
//       },
//       {
//         title: "Project Completion",
//         description: "2023",
//       },
//       {
//         title: "Unit Types",
//         description: "4-bed, 3.5-baths",
//       },
//     ],
//     featureData: [
//       {
//         title: "1",
//         description: "Floor(s)",
//       },
//       {
//         title: "270",
//         description: "Unit Sizes in SQM",
//       },
//       {
//         title: "3",
//         description: "Units",
//       },
//     ],
//   },
// ];

export default function Home() {
  return (
    <main className="container relative flex flex-col gap-24 pb-24 pt-4">
      <HeroSection />
      <div className="grid">
        <AboutSection />
        <ProjectSection projects={projects} />
      </div>
      <CTAContactSection />
      <HomeImageSection />
    </main>
  );
}
