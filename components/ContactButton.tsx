"use client"

import React from "react";
import { Button } from "./ui/button";
import { useContactModal } from "@/hooks/contactModal";

export default function ContactButton() {
  const contactModal = useContactModal();
  return (
    <Button
      onClick={() => contactModal.onOpen()}
      className="w-fit rounded-none"
      size={"lg"}
      variant={"ghost"}
    >
      CONTACT US
    </Button>
  );
}
