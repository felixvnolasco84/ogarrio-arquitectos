"use client";

import ProjectCard from "@/components/ProjectCard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

export default function Page({ params }: { params: { category: string } }) {
  const categoryProjects = useQuery(api.project.getByCategory, {
    category: params.category,
  });

  if (!categoryProjects) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-10">
      <h1 className="text-3xl font-bold uppercase">{params.category}</h1>
      <div className="grid grid-cols-3 gap-4">
        {categoryProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
