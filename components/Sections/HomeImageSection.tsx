import AMENITIES from "@/public/AMENITIES.png";
import TERRAZA from "@/public/TERRAZA.png";
import Image from "next/image";

export default function HomeImageSection() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:gap-6">
      <Image src={AMENITIES} alt="" className="aspect-square" />
      <Image src={TERRAZA} alt="" className="aspect-square" />
    </div>
  );
}
