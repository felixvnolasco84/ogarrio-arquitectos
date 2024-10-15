"use client";

import ContactModal from "@/components/modals/contactModal";
import SuccessContactModal from "@/components/modals/successContactModal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ContactModal />
      <SuccessContactModal />
    </>
  );
};
