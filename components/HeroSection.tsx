import { cn } from "@/lib/utils";
import { CarrouselComponent } from "./CarrouselComponent";
import { MazzardM_SemiBold } from "@/utils/fonts";

export default function HeroSection() {
  return (
    <div className="grid items-start gap-4 lg:mb-24 lg:grid-cols-12">
      <div className="order-2 col-span-12 grid gap-y-4 pt-4 lg:order-1 lg:col-span-5">
        <h1
          className={cn(
            "h-fit text-3xl font-bold",
            MazzardM_SemiBold.className
          )}
        >
          ogarrio arquitectos
        </h1>
        <p className="text-xl lg:max-w-lg lg:text-2xl">
          We are a family-owned arquitecture firm based in México City. Since
          2003, we have been committed to delivering timeless, quality
          developments that epitomize comfort and functionality.
        </p>
      </div>
      <CarrouselComponent />
    </div>
  );
}
