import { Project } from "@/app/page";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { projects } from "@/lib/utils";
import { useQuery } from "convex/react";
import Link from "next/link";
import React from "react";
import ProjectCard from "./ProjectCard";

export default function RecomendationProjects({
  currentProject,
}: {
  currentProject: Doc<"project">;
}) {
  const recommendedProjects = useQuery(api.project.recommendedProjects, {
    category: currentProject.category,
    currentProjectSlug: currentProject.slug,
  });

  if (!recommendedProjects) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-span-12 space-y-4">
      <h3 className="text-2xl font-bold">Conoce Más Proyectos</h3>
      {recommendedProjects.length > 0 && (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {recommendedProjects.slice(0, 20).map((project) => (
              <CarouselItem
                key={project.slug}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
      {recommendedProjects.length === 0 && (
        <Card className="rounded-lg bg-gray-100 shadow">
          <CardContent className="flex items-center justify-center p-6">
            <span className="text-3xl font-semibold">
              No hay proyectos recomendados
            </span>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
