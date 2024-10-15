import Link from "next/link";
import ContactButton from "./ContactButton";

export default function Footer() {
  return (
    <div className="px-4 text-lg lg:px-12 lg:text-3xl">
      <div className="grid gap-6 border-t border-gray-400 py-12 lg:gap-12 lg:py-24">
        <ContactButton />
        <div className="grid gap-6 lg:max-w-lg lg:gap-12">
          <p>
            Cda de Loma Bonita 33, Cuarto Piso Col. Lomas Altas Miguel Hidalgo
            CDMX 11950 México
          </p>
          <Link href="mailto:contacto@ogarrioarquitectos.com" target="_blank">
            contacto@ogarrioarquitectos.com
          </Link>
        </div>
      </div>
    </div>
  );
}
