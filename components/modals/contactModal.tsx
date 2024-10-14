import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useContactModal } from "@/hooks/contactModal";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
} from "../ui/card";
import ContactForm from "../Forms/ContactForm";

export default function ContactModal() {
  const isOpen = useContactModal((state) => state.isOpen);
  const onClose = useContactModal((state) => state.onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0">
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle>CONTACT US</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
