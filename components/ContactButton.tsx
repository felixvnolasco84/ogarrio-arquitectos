"use client";

import React from "react";
import { MazzardM_Medium } from "@/utils/fonts";
import { useContactModal } from "@/hooks/contactModal";

export default function ContactButton() {
  const contactModal = useContactModal();
  return (
    <h3
      onClick={() => contactModal.onOpen()}
      className={`w-fit cursor-pointer rounded-none text-3xl text-[#BABABB] lg:text-5xl ${MazzardM_Medium.className}`}
    >
      CONTACT US
    </h3>
  );
}
