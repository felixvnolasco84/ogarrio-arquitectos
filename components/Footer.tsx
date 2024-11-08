import Link from "next/link";
import Logo from "@/public/images/Logo_Black_Text.png";
// import ContactButton from "./ContactButton";
import { cn } from "@/lib/utils";
import { KlarheitLight } from "@/utils/fonts";
import ContactForm from "./Forms/ContactForm";
import Image from "next/image";
import { Dialog } from "./ui/dialog";
import { FooterContactForm } from "./FooterContactForm";

export default function Footer() {
  return (
    // <div className="px-4 text-lg lg:px-12 lg:text-3xl">
    //   <div className="grid gap-6 border-t border-gray-400 py-16 lg:gap-12 lg:py-24">
    //     <ContactButton />
    //     <div className="grid gap-6 lg:max-w-lg lg:gap-12">
    //       <p>
    //         Cda de Loma Bonita 33, Cuarto Piso Col. Lomas Altas Miguel Hidalgo
    //         CDMX 11950 México
    //       </p>
    //       <Link href="mailto:contacto@ogarrioarquitectos.com" target="_blank">
    //         contacto@ogarrioarquitectos.com
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <footer className="container mb-4 rounded-lg shadow-sm">
      <div className="text-custom-black grid rounded-lg bg-[#F7F7F7] px-12 py-16">
        <div className="container grid grid-cols-1 justify-between gap-24 lg:gap-32">
          <div className="grid gap-6 lg:gap-12">
            <div className="flex flex-col items-center gap-2 lg:items-start lg:gap-4">
              <h3
                className={cn("text-lg lg:text-3xl", KlarheitLight.className)}
              >
                Contact Us Now
              </h3>
              <p className="w-full max-w-2xl text-xl">
                Schedule a consultation with our expert team today and let us
                help you bring your dream project to life. Whether you’re
                planning a luxury home or a commercial development, we’re here
                to guide you every step of the way.
              </p>
            </div>
            <FooterContactForm />
          </div>

          {/* <Dialog>
            <ContactForm />
          </Dialog> */}

          <div className="flex w-full flex-col items-start gap-4 lg:text-base xl:text-lg">
            <Link href={"/"}>
              <Image alt="image of Amphitryon logo" src={Logo} width={210} />
            </Link>
            <p className="text-sm">
              Cda de Loma Bonita 33, Cuarto Piso, Col. Lomas Altas, Miguel
              Hidalgo CDMX 11950, México
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
