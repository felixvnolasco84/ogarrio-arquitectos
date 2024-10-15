import React from "react";
import LOGO from "@/public/svg/Logo.svg";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useContactModal } from "@/hooks/contactModal";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
} from "../ui/card";
import ContactForm from "../Forms/ContactForm";
import Image from "next/image";

export default function ContactModal() {
  const isOpen = useContactModal((state) => state.isOpen);
  const onClose = useContactModal((state) => state.onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-svw w-svw max-w-none p-0">
        <Card className="border-none shadow-none">
          <CardHeader className="px-12">
            <h4 className="mb-12 text-4xl 2xl:mb-24">OGARRIO ARQUITECTOS</h4>
            <CardTitle className="text-4xl text-gray-400">CONTACT US</CardTitle>
          </CardHeader>
          <CardContent className="my-auto px-12">
            <ContactForm />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
