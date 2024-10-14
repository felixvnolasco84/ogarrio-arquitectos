import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Doc } from "@/convex/_generated/dataModel";
import { Badge } from "./ui/badge";

export default function ProjectCard({ project }: { project: Doc<"project"> }) {
  return (
    <Link href={`/${project.category}/${project._id}`}>
      <Card className="flex flex-col gap-4 overflow-hidden rounded-lg border-2 border-gray-200 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="h-64 w-full overflow-hidden">
            <Image
              src={
                project.heroImage ||
                "https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={project.name}
              width={400}
              height={800}
              className="w-full object-cover object-center"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">{project.name}</h3>
            <Link href={`/${project.category}`}>
              <Badge className="w-fit">{project.category}</Badge>
            </Link>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
