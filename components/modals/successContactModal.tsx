import React from "react";
import Logo from "@/public/images/Logo_Black_Text.png";
import { MazzardM_Medium } from "@/utils/fonts";
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
      <DialogContent
        className={`h-svw grid w-svw max-w-none  p-0 ${MazzardM_Medium.className}`}
      >
        <Card className="flex flex-col justify-between border-none shadow-none lg:p-12">
          <CardHeader>
            <div className="h-fit">
              <Image src={Logo} alt={""} width={280} />
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="h-fit bg-white p-0 text-3xl text-[#BABABB] transition-all duration-300 ease-in-out lg:text-4xl 2xl:text-6xl">
              Thank you for your interest! <br /> We will be in touch soon with
              more information.
            </h3>
          </CardContent>

          <CardFooter>
            <DialogFooter className="flex flex-row gap-4 lg:flex-col lg:gap-8">
              <Button
                className="h-fit cursor-not-allowed bg-white p-0 text-3xl text-gray-300/80 transition-all duration-300 ease-in-out hover:bg-white hover:text-black lg:text-4xl 2xl:text-6xl"
                type="submit"
                disabled={true}
                variant={"default"}
              >
                SEND
              </Button>
              <DialogClose asChild>
                <Button
                  className="h-fit bg-white p-0 text-3xl text-[#BABABB] transition-all duration-300 ease-in-out hover:bg-white hover:text-black lg:text-4xl 2xl:text-6xl"
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
