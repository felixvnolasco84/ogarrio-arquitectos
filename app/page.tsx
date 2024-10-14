"use client";

import { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/utils";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

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

export interface Project {
  name: string;
  image: string;
  description: string;
  product: string;
  servicio: string;
  category: string;
  ubicacion: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
}

export default function Home() {
  const projects = useQuery(api.project.getAll);

  if (!projects) {
    return <div>Loading...</div>;
  }

  return (
    <main className="relative flex flex-col gap-10 py-4 lg:gap-20">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
