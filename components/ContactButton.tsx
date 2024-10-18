"use client";

import React from "react";
import { Button } from "./ui/button";
import { useContactModal } from "@/hooks/contactModal";

export default function ContactButton() {
  const contactModal = useContactModal();
  return (
    <h3
      onClick={() => contactModal.onOpen()}
      className="w-fit cursor-pointer rounded-none text-3xl text-gray-400 lg:text-5xl"
    >
      CONTACT US
    </h3>
  );
}
