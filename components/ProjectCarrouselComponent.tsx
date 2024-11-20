"use client";

import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface PositionIndicatorProps {
  current: number;
  count: number;
  progress: number[];
  api?: CarouselApi;
}

const PositionIndicator: React.FC<PositionIndicatorProps> = ({
  current,
  count,
  progress,
  api,
}) => {
  return (
    <div className="absolute bottom-0 left-0 flex w-full cursor-pointer justify-center p-4">
      {Array.from({ length: count }).map((_, index) => (
        <Progress
          onClick={() => {
            api?.scrollTo(index);
          }}
          className={`w-full h-1 mx-1 rounded-full ${
            index < current ? "bg-white" : "bg-white/50"
          }`}
          key={index}
          value={progress[index]}
        />
      ))}
    </div>
  );
};

export function ProjectCarrouselComponent({
  images,
}: {
  images: StaticImageData[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState<number[]>([]);
  
  useEffect(() => {
    if (!api) {
      return;
    }

    const itemCount = api.scrollSnapList().length;
    setCount(itemCount);
    setCurrent(api.selectedScrollSnap());
    setProgress(Array(itemCount).fill(0));

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        const selectedIndex = api.selectedScrollSnap();

        // Llenar al 100% todos los progress bars anteriores al seleccionado
        for (let i = 0; i < selectedIndex; i++) {
          newProgress[i] = 100;
        }

        // Reiniciar el progreso del item actual
        newProgress[selectedIndex] = 0;

        // Reiniciar el progreso de todos los items después del seleccionado
        for (let i = selectedIndex + 1; i < newProgress.length; i++) {
          newProgress[i] = 0;
        }

        return newProgress;
      });
    });
  }, [api]);

  useEffect(() => {
    if (autoplay && api) {
      const id = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = [...prevProgress];
          const currentIndex = api.selectedScrollSnap();
          if (newProgress[currentIndex] >= 100) {
            if (currentIndex === count - 1) {
              api.scrollTo(0); // Regresar a la primera diapositiva
            } else {
              api.scrollNext();
            }
            newProgress[currentIndex] = 0;
          } else {
            newProgress[currentIndex] += 1;
          }
          return newProgress;
        });
      }, 50); // Incrementa el progreso cada 50ms (5 segundos para llegar a 100)
      setIntervalId(id);
    } else if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoplay, api, count]);

  return (
    <div className="relative col-span-6 overflow-hidden rounded-2xl shadow-sm">
      <Carousel
        setApi={setApi}
        onMouseEnter={() => setAutoplay(true)}
        onMouseLeave={() => {
          setAutoplay(false)
          
        }}
      >
        <CarouselContent className="">
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                src={image}
                alt=""
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="aspect-[3/4] w-full object-cover object-center lg:aspect-[3/2]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <PositionIndicator
        current={current}
        count={count}
        progress={progress}
        api={api}
      />
    </div>
  );
}
