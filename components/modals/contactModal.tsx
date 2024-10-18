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
      <DialogContent className="h-svw w-svw max-w-none py-12">
        <Card className="border-none shadow-none">
          <CardHeader className="spacey-y-4 space-y-4 px-4 lg:space-y-12 lg:px-12">
            <Image src={Logo} alt={""} width={280} />
            <CardTitle
              className={`text-2xl text-[#BABABB] lg:text-4xl ${MazzardM_Medium.className}`}
            >
              CONTACT US
            </CardTitle>
          </CardHeader>
          <CardContent className="my-auto lg:px-12">
            <ContactForm />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
