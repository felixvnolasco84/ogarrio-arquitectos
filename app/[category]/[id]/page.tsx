"use client";

import ContactBackground from "@/public/images/placeImage.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BoxesIcon,
  Facebook,
  Instagram,
  Linkedin,
  LucideIcon,
  Map,
  UsersIcon,
  Workflow,
  Youtube,
} from "lucide-react";
import { siteConfig } from "@/app/config/site";
import Link from "next/link";
import RecomendationProjects from "@/components/RecomendationProjects";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: { id: Id<"project"> };
  searchParams: { [key: string]: string | string[] | undefined };
};

function SocialInfoCard({
  title,
  href,
}: {
  icon: LucideIcon;
  title: string;
  href: string;
}) {
  return (
    <Link href={href} target="_blank">
      <div className="group flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200 transition-all duration-300 group-hover:bg-primary/90">
          {title === "LinkedIn" ? (
            <Linkedin className="h-6 w-6 text-black group-hover:text-white" />
          ) : title === "Youtube" ? (
            <Youtube className="h-6 w-6 text-black group-hover:text-white" />
          ) : title === "Instagram" ? (
            <Instagram className="h-6 w-6 text-black group-hover:text-white" />
          ) : title === "Facebook" ? (
            <Facebook className="h-6 w-6 text-black group-hover:text-white" />
          ) : null}
        </div>
        <div className="grid">
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const slug = params.slug;
//   const project = projects.find((project) => project.slug === slug);

//   return {
//     title: project?.metaTitle,
//     description: project?.metaDescription,
//     alternates: {
//       canonical: `https://www.amphitryon.mx/${slug}`,
//     },
//   };
// }

export default function PlacePage({ params }: Props) {
  const projectId = params.id;

  const project = useQuery(api.project.getById, {
    projectId: projectId,
  });

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <Script
        id="venue-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(place.jsonLd),
        }}
      /> */}
      <div className="mb-12 grid grid-cols-12 gap-4">
        <div className="col-span-12 space-y-2 rounded-md xl:col-span-8">
          <div className="relative aspect-video h-full w-full overflow-hidden rounded-md xl:aspect-auto">
            <Image
              // src={project.heroImage}
              src={
                "https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              className="object-cover object-center shadow-lg"
              fill
              alt=""
            />
          </div>
        </div>
        <div className="col-span-12 flex flex-col gap-4 xl:col-span-4">
          <Card className="rounded-lg bg-gray-100 shadow">
            <CardHeader className="border-b pb-4">
              <CardTitle className="text-left">Detalles</CardTitle>
              <CardDescription className="text-sm text-gray-500">
                Conoce los detalles del proyecto
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid space-y-3">
                <div className="group flex items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 group-hover:bg-primary/90">
                    <UsersIcon className="h-6 w-6 text-black group-hover:text-white" />
                  </div>
                  <div className="grid">
                    <h3>PROYECTO</h3>
                    <span className="max-w-[300px]">{project.name}</span>
                  </div>
                </div>
                <div className="group flex items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 group-hover:bg-primary/90">
                    <BoxesIcon className="h-6 w-6 text-black group-hover:text-white" />
                  </div>
                  <div className="grid">
                    <h3>PRODUCTO</h3>
                    <span className="max-w-[300px]">{project.product}</span>
                  </div>
                </div>
                <div className="group flex items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 group-hover:bg-primary/90">
                    <Workflow className="h-6 w-6 text-black group-hover:text-white" />
                  </div>
                  <div className="grid">
                    <h3>SERVICIO</h3>
                    <span className="max-w-[300px]">{project.service}</span>
                  </div>
                </div>
                <div className="group flex items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 group-hover:bg-primary/90">
                    <Map className="h-6 w-6 text-black group-hover:text-white" />
                  </div>
                  <div className="grid">
                    <h3>UBICACION</h3>
                    <span className="max-w-[300px]">{project.location}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-5">
              <Button className="w-full">Contactar</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-4 xl:col-span-8">
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <Link href={`/${project.category}`}>
          <Badge className="w-fit">{project.category}</Badge>
          </Link>
          <div className="grid grid-cols-3 gap-4">
            <Image
              className="aspect-square rounded-md object-cover object-center shadow-sm"
              src={
                "https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              width={400}
              height={400}
            />
            <Image
              className="aspect-square rounded-md object-cover object-center shadow-sm"
              src={
                "https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              width={400}
              height={400}
            />
            <Image
              className="aspect-square rounded-md object-cover object-center shadow-sm"
              src={
                "https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              width={400}
              height={400}
            />
            <Image
              className="aspect-square rounded-md object-cover object-center shadow-sm"
              src={
                "https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              width={400}
              height={400}
            />
            <Image
              className="aspect-square rounded-md object-cover object-center shadow-sm"
              src={
                "https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              width={400}
              height={400}
            />
            <Image
              className="aspect-square rounded-md object-cover object-center shadow-sm"
              src={
                "https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="grid h-fit gap-4 xl:col-span-4">
          <Card className="rounded-lg bg-gray-100 shadow">
            <CardHeader className="border-b pb-4">
              <CardTitle className="text-left">Redes Sociales</CardTitle>
              <CardDescription className="text-sm text-gray-500">
                Conoce nuestras redes sociales
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 pt-4">
              {siteConfig.links.map((link) => (
                <SocialInfoCard
                  key={link.href}
                  title={link.label}
                  href={link.href}
                  icon={link.icon}
                />
              ))}
            </CardContent>
          </Card>
          <Card className="relative h-96 rounded-lg bg-gray-100 shadow">
            <Image
              className="absolute left-0 top-0 h-full w-full object-cover opacity-100"
              src={ContactBackground}
              alt={siteConfig.name}
            />

            <CardHeader className="relative z-50 border-none">
              <CardTitle className="rounded-md bg-primary p-2 text-left text-4xl font-bold uppercase text-white">
                ¿Tienes un proyecto en mente?
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-50 pt-4">
              <Button className="w-full">Contáctanos</Button>
            </CardContent>
          </Card>
        </div>
        <div className="xl:col-span-8"></div>
        <div className="col-span-4"></div>
        <RecomendationProjects currentProject={project} />
      </div>
    </>
  );
}
