import ACCESO from "@/public/CCSJ_CAM01_ACCESO.png";
import AMENITIES from "@/public/AMENITIES.png";
import Image from "next/image";

export default function HomeImageSection() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:gap-6">
      <Image src={ACCESO} alt="" className="aspect-square" />
      <Image src={AMENITIES} alt="" className="aspect-square" />
    </div>
  );
}
