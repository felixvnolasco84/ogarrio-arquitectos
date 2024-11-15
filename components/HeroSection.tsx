import { CarrouselComponent } from "./CarrouselComponent";
import Logo from "@/public/svg/Logo_SVG.svg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="grid items-start gap-4 lg:mb-24 lg:grid-cols-12">
      <div className="order-2 col-span-12 grid gap-y-4 pt-4 lg:order-1 lg:col-span-5">
        <Image className="hidden lg:block" src={Logo} alt="Logo" width={382} />
        <Image className="block lg:hidden" src={Logo} alt="Logo" width={225} />
        <p className="text-xl lg:max-w-lg lg:text-[22px] 2xl:text-2xl"> 
          We are a family-owned arquitecture firm based in México City. Since
          2003, we have been committed to delivering timeless, quality
          developments that epitomize comfort and functionality.
        </p>
      </div>
      <CarrouselComponent />
    </div>
  );
}
