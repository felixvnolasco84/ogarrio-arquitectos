import { CarrouselComponent } from "./CarrouselComponent";

export default function HeroSection() {
  return (
    <div className="grid items-start gap-4 lg:grid-cols-12">
      <div className="order-2 col-span-6 grid gap-y-4 pt-4 lg:order-1">
        <h1 className="h-fit text-3xl font-bold">ogarrio arquitectos</h1>
        <p className="max-w-lg text-2xl">
          We are a family-owned arquitecture firm based in México City. Since
          2003, we have been committed to delivering timeless, quality
          developments that epitomize comfort and functionality.
        </p>
      </div>
      <CarrouselComponent />
    </div>
  );
}
