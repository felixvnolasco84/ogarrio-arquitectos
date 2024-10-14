import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image, { StaticImageData } from "next/image";

import CDMXHEROIMAGE from "@/public/images/CCSJ_CAM05_TERRAZA_post.png";
import LOSCABOSHEROIMAGE from "@/public/images/CCSJ_CAM04_AMENITIES_post.png";

import LOGO from "@/public/svg/Logo.svg";
import { useEffect, useState } from "react";

type HeroItem = {
  title: string;
  place: string;
  image: StaticImageData;
};

export default function HeroCarrousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const heroItems: HeroItem[] = [
    {
      title: "LARENA CAMPESTRE SAN JOSÉ",
      place: "LOS CABOS",
      image: LOSCABOSHEROIMAGE,
    },
    {
      title: "MIRADOR",
      place: "CIUDAD DE MÉXICO",
      image: CDMXHEROIMAGE,
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="relative w-full bg-black"
    >
      <CarouselContent>
        {heroItems.map((item) => (
          <CarouselItem key={item.title}>
            <Card className="relative w-svw rounded-none p-0 lg:aspect-video xl:aspect-auto xl:h-svh">
              <div className="absolute bottom-0 left-0 z-50 h-svh w-svw bg-black/20" />
              <CardHeader className="absolute left-0 right-0 top-0 z-40 flex w-fit flex-col items-center justify-center p-12">
                {/* <h1>OGARRIO ARQUITECTOS</h1> */}
                <Image src={LOGO} alt={item.title} width={280} />
              </CardHeader>
              <CardContent className="h-svh w-svw p-0">
                <div className="flex h-svh w-svw flex-col items-center justify-center">
                  <Image src={item.image.src} alt={item.title} fill className="object-cover object-center" />
                </div>
                <CardFooter className="absolute bottom-0 left-0 right-0 z-50 flex w-fit flex-col items-start justify-start bg-transparent p-12 text-white">
                  <p className="text-2xl">{item.place}</p>
                  <h2 className="text-4xl font-bold">{item.title}</h2>
                </CardFooter>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute bottom-0 right-0 p-12">
        <CarouselPrevious />
        <CarouselNext />
        {/* <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div> */}
      </div>
    </Carousel>
  );
}
