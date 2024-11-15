"use client";

import { type CarouselApi } from "@/components/ui/carousel";
import Home1 from '@/public/images/Portadas Home/Portadas Home (1).png'
import Home2 from '@/public/images/Portadas Home/Portadas Home (2).png'
import Home3 from '@/public/images/Portadas Home/Portadas Home (3).png'
import Home4 from '@/public/images/Portadas Home/Portadas Home (4).png'
import PG from "@/public/images/PG.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
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
            index < current ? "bg-white/50" : "bg-white/50"
          }`}
          key={index}
          value={progress[index]}
        />
      ))}
    </div>
  );
};

export function CarrouselComponent() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
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
    <div className="relative order-1 col-span-12 overflow-hidden rounded-2xl shadow-sm lg:order-2 lg:col-span-7">
      <Carousel setApi={setApi}>
        <CarouselContent className="">
          <CarouselItem>
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={Home1}
              alt=""
              className="aspect-[4/6] w-full object-cover object-center lg:aspect-square"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={Home2}
              alt=""
              className="aspect-[4/6] w-full object-cover object-center lg:aspect-square"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={Home3}
              alt=""
              className="aspect-[4/6] w-full object-cover object-center lg:aspect-square"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={Home4}
              alt=""
              className="aspect-[4/6] w-full object-cover object-center lg:aspect-square"
            />
          </CarouselItem>
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
