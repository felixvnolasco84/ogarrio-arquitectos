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

      <div className="grid lg:gap-4 2xl:gap-12">
        <div className="grid gap-1 py-4 text-2xl lg:grid-cols-2 lg:gap-0 lg:py-8 lg:text-3xl 2xl:py-12">
          <h3>{project.title}</h3>
          <h4 className="text-[#A3A3A3] lg:text-end">{project.place}</h4>
        </div>

        <div className="grid gap-4 lg:gap-12 xl:grid-cols-2">
          <div className="grid max-w-4xl text-2xl lg:text-3xl">
            <p>{project.description}</p>
          </div>

          <div className="grid gap-12 text-xl lg:gap-24 lg:text-3xl">
            <div className="grid">
              {project.data.map((item) => (
                <div
                  className="grid grid-cols-2 border-b border-gray-300 py-4 lg:py-12"
                  key={item.title}
                >
                  <h3>{item.title}</h3>
                  <p className={MazzardL_Medium.className}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 justify-center justify-items-center gap-4 lg:justify-items-center lg:gap-0 xl:justify-items-start">
              {project.featureData.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <h3 className="text-center text-4xl font-bold lg:text-left lg:text-7xl">
                    {item.title}
                  </h3>
                  <p className="text-center text-lg lg:text-2xl">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
