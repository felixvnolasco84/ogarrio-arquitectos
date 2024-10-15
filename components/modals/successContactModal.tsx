import React from "react";
import Logo from "@/public/images/Logo_Black_Text.png";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { useContactModal } from "@/hooks/contactModal";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useSucessContactModal } from "@/hooks/successContactModal";

export default function SuccessContactModal() {
  const isOpen = useSucessContactModal((state) => state.isOpen);
  const onClose = useSucessContactModal((state) => state.onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-svw grid w-svw max-w-none items-center justify-center p-0">
        <Card className="border-none shadow-none">
          <CardHeader>
            <div className="h-fit p-12">
              <Image src={Logo} alt={""} width={280} />
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="h-fit bg-white p-0 text-6xl text-black/40 transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
              Thank you for your interest! We will be in touch soon with more
              information.
            </h3>
          </CardContent>

          <CardFooter>
            <DialogFooter className="flex flex-col gap-8">
              <Button
                className="h-fit cursor-not-allowed bg-white p-0 text-6xl text-black/60 transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
                type="submit"
                disabled={true}
                variant={"default"}
              >
                SEND
              </Button>
              <DialogClose asChild>
                <Button
                  className="h-fit bg-white p-0 text-6xl text-black/40 transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
                  type="button"
                  variant="default"
                >
                  BACK
                </Button>
              </DialogClose>
            </DialogFooter>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
