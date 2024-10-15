import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image, { StaticImageData } from "next/image";

import CDMXHEROIMAGE from "@/public/images/CCSJ_CAM05_TERRAZA_post.png";
import LOSCABOSHEROIMAGE from "@/public/images/CCSJ_CAM04_AMENITIES_post.png";

import LOGO from "@/public/svg/Logo.svg";
import { useEffect, useState } from "react";

interface PositionIndicatorProps {
  current: number;
  count: number;
  api: CarouselApi;
}

const PositionIndicator: React.FC<PositionIndicatorProps> = ({
  api,
  current,
  count,
}) => {
  return (
    <div className="absolute bottom-0 right-0 z-50 hidden cursor-pointer justify-center p-12 lg:flex">
      <div className="flex items-center gap-x-12 text-white/90">
        <span onClick={() => api?.scrollTo(current - 1)}>PREV</span>

        <div className="flex gap-1">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              onClick={() => {
                api?.scrollTo(index);
              }}
              className={`w-16 h-1 rounded-full ${
                index < current ? "bg-white/50" : "bg-white"
              }`}
            ></div>
          ))}
        </div>
        <span onClick={() => api?.scrollTo(current + 1)}>NEXT</span>
      </div>
    </div>
  );
};

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
    const itemCount = api.scrollSnapList().length;
    setCount(itemCount);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
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
      setApi={setApi}
      opts={{
        align: "start",
      }}
      className="relative w-full bg-black"
    >
      <CarouselContent>
        {heroItems.map((item) => (
          <CarouselItem key={item.title}>
            <Card className="h- relative w-svw rounded-none p-0 lg:aspect-video xl:aspect-auto xl:h-svh">
              <div className="absolute bottom-0 left-0 z-50 h-svh w-svw bg-black/20" />
              <CardHeader className="absolute left-0 right-0 top-0 z-40 flex w-fit flex-col items-center justify-center p-6 lg:p-12">
                {/* <h1>OGARRIO ARQUITECTOS</h1> */}
                <Image src={LOGO} alt={item.title} width={280} />
              </CardHeader>
              <CardContent className="h-svh w-svw p-0">
                <div className="flex h-svh w-svw flex-col items-center justify-center">
                  <Image
                    src={item.image.src}
                    alt={item.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <CardFooter className="absolute bottom-0 left-0 right-0 z-50 flex w-fit flex-col items-start justify-start bg-transparent p-6 text-white lg:p-12">
                  <p className="text-2xl">{item.place}</p>
                  <h2 className="text-4xl font-bold">{item.title}</h2>
                </CardFooter>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <PositionIndicator count={count} current={current} api={api} />
      {/* <CarouselPrevious />
        <CarouselNext /> */}
      {/* <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div> */}
    </Carousel>
  );
}
