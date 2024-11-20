import React from "react";
import { ProjectShowcase } from "@/lib/utils";
import { MazzardM_Medium, MazzardM_Light } from "@/utils/fonts";
import { Card, CardDescription, CardHeader } from "./ui/card";
import CardTitle from "./CardTitle";
import { ProjectCarrouselComponent } from "./ProjectCarrouselComponent";

export default function ProjectSection({
  projects,
}: {
  projects: ProjectShowcase[];
}) {
  
  return (
    <div className="order-1 grid gap-4 lg:order-2 lg:grid-cols-2">
      {projects.map((project, index) => (
        <Card key={index}>
          <ProjectCarrouselComponent images={project.carrousel} />
          <CardHeader className="space-y-0 pl-0">
            <CardTitle
              className={`${MazzardM_Medium.className} font-normal`}
              title={project.title}
            />
            <CardDescription
              className={`${MazzardM_Light.className}  font-normal text-[#7C7C7C]`}
            >
              {project.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
