import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Doc } from "@/convex/_generated/dataModel";
import { Badge } from "./ui/badge";
import { Project } from "@/lib/utils";

export default function ProjectSection({ project }: { project: Project }) {
  return (
    <div className="grid px-12">
      <div className="relative aspect-video w-full">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="grid gap-12">
        <div className="grid grid-cols-2 py-12 text-3xl">
          <h3>{project.title}</h3>
          <h4 className="text-end text-gray-400">{project.place}</h4>
        </div>

        <div className="grid grid-cols-2">
          <div className="grid max-w-4xl text-3xl">
            <p>{project.description}</p>
          </div>

          <div className="grid gap-24 text-3xl">
            <div className="grid">
              {project.data.map((item) => (
                <div
                  className="grid grid-cols-2 border-b border-gray-300 py-12"
                  key={item.title}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3">
              {project.featureData.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <h3 className="text-7xl font-bold">{item.title}</h3>
                  <p className="text-2xl">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
