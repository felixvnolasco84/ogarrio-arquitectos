import Link from "next/link";
import ContactButton from "./ContactButton";

export default function Footer() {

  return (
    <div className="px-12 text-3xl">
      <div className="grid gap-12 border-t border-gray-400 py-24">
        <ContactButton /> 
        <div className="grid max-w-2xl gap-12">
          <p>
            Cda de Loma Bonita 33, Cuarto Piso Col. Lomas Altas Miguel Hidalgo
            CDMX 11950 México
          </p>
          <Link href="mailto:contact@ogarrio.mx" target="_blank">
            contact@ogarrio.mx
          </Link>
        </div>
      </div>
    </div>
  );
}