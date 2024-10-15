import Image from "next/image";
import React from "react";
import { Project } from "@/lib/utils";
import { MazzardL_Medium } from "@/utils/fonts";

export default function ProjectSection({ project }: { project: Project }) {
  return (
    <div className="grid px-4 text-[#28282D] lg:px-12">
      <div className="relative aspect-video w-full">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="grid lg:gap-12">
        <div className="grid py-4 text-3xl lg:grid-cols-2 lg:py-12">
          <h3>{project.title}</h3>
          <h4 className="text-[#A3A3A3] lg:text-end">{project.place}</h4>
        </div>

        <div className="grid lg:grid-cols-2">
          <div className="grid max-w-4xl text-3xl">
            <p>{project.description}</p>
          </div>

          <div className="grid gap-12 text-3xl lg:gap-24">
            <div className="grid">
              {project.data.map((item) => (
                <div
                  className="grid grid-cols-2 border-b border-gray-300 py-12"
                  key={item.title}
                >
                  <h3>{item.title}</h3>
                  <p className={MazzardL_Medium.className}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid justify-center justify-items-center gap-4 lg:grid-cols-3 lg:justify-items-start lg:gap-0">
              {project.featureData.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <h3 className="text-center text-7xl font-bold lg:text-left">{item.title}</h3>
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
