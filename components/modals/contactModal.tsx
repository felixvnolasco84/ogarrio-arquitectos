import React from "react";
import { MazzardM_Medium } from "@/utils/fonts";
import Logo from "@/public/images/Logo_Black_Text.png";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useContactModal } from "@/hooks/contactModal";
import { Card, CardTitle, CardHeader, CardContent } from "../ui/card";
import ContactForm from "../Forms/ContactForm";
import Image from "next/image";

export default function ContactModal() {
  const isOpen = useContactModal((state) => state.isOpen);
  const onClose = useContactModal((state) => state.onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-svw w-svw max-w-none">
        <Card className="overflow-y-scroll border-none shadow-none">
          <CardHeader className="space-y-4 px-0 py-0 lg:space-y-12 lg:py-4 xl:px-12">
            <Image className="hidden lg:block" src={Logo} alt={""} width={280} />
            <Image className="block lg:hidden" src={Logo} alt={""} width={210} />
            <CardTitle
              className={`text-2xl text-[#BABABB] lg:text-4xl ${MazzardM_Medium.className}`}
            >
              CONTACT US
            </CardTitle>
          </CardHeader>
          <CardContent className="my-auto px-0 xl:px-12">
            <ContactForm />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
