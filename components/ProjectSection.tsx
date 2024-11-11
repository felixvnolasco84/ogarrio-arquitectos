import Image from "next/image";
import React from "react";
import { ProjectShowcase } from "@/lib/utils";
import {
  MazzardM_Medium,
  MazzardM_Light
} from "@/utils/fonts";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
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
              className={`${MazzardM_Medium.className} text-2xl font-normal`}
              title={project.title}
            />
            <CardDescription
              className={`${MazzardM_Light.className} text-xl font-normal text-[#7C7C7C]`}
            >
              {project.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
    // <div className="grid px-4 text-[#28282D] lg:px-12">
    //   <div className="relative aspect-video w-full">
    //     <Image
    //       src={project.heroImage}
    //       alt={project.title}
    //       fill
    //       className="object-cover object-center"
    //     />
    //   </div>

    //   <div className="grid gap-2 lg:gap-4 2xl:gap-12">
    //     <div className="grid gap-1 py-4 text-2xl lg:grid-cols-2 lg:gap-0 lg:py-8 lg:text-3xl 2xl:py-12">
    //       <h3>{project.title}</h3>
    //       <h4 className="text-base text-[#A3A3A3] lg:text-end lg:text-3xl">
    //         {project.place}
    //       </h4>
    //     </div>

    //     <div className="grid gap-8 lg:gap-12 xl:grid-cols-2">
    //       <div className="grid max-w-3xl text-2xl lg:text-3xl">
    //         <p>{project.description}</p>
    //       </div>

    //       <div className="grid gap-16 text-xl lg:gap-24 lg:text-3xl">
    //         <div className="grid space-y-4 lg:space-y-12">
    //           {project.data.map((item) => (
    //             <div
    //               className="grid grid-cols-2 border-b border-gray-300 pb-4 last:border-b-0 lg:grid-cols-3 lg:pb-12"
    //               key={item.title}
    //             >
    //               <h3>{item.title}</h3>
    //               <p className={MazzardL_Medium.className}>
    //                 {item.description}
    //               </p>
    //             </div>
    //           ))}
    //         </div>
    //         <div className="grid grid-cols-3 justify-center justify-items-center gap-4 lg:justify-items-center lg:gap-0">
    //           <div
    //             key={project.featureData[0].title}
    //             className="flex w-full flex-col gap-2"
    //           >
    //             <h3
    //               className={`text-center text-4xl font-bold lg:text-left lg:text-7xl ${MazzardM_Medium.className}`}
    //             >
    //               {project.featureData[0].title}
    //             </h3>
    //             <p className="text-center text-lg lg:text-left lg:text-2xl">
    //               {project.featureData[0].description}
    //             </p>
    //           </div>
    //           <div
    //             key={project.featureData[1].title}
    //             className="flex w-full flex-col gap-2"
    //           >
    //             <h3
    //               className={`text-center text-4xl font-bold lg:text-center lg:text-7xl ${MazzardM_Medium.className}`}
    //             >
    //               {project.featureData[1].title}
    //             </h3>
    //             <p className="text-center text-lg lg:text-2xl">
    //               {project.featureData[1].description}
    //             </p>
    //           </div>
    //           <div
    //             key={project.featureData[2].title}
    //             className="flex w-full flex-col gap-2"
    //           >
    //             <h3
    //               className={`text-center text-4xl font-bold lg:text-end lg:text-7xl ${MazzardM_Medium.className}`}
    //             >
    //               {project.featureData[2].title}
    //             </h3>
    //             <p className="text-center text-lg lg:text-end lg:text-2xl">
    //               {project.featureData[2].description}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
