"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
// import { Input } from "../ui/input";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { sendContactEmail, sendContactOnlyEmail } from "@/app/_actions";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { KlarheitMedium } from "@/utils/fonts";
import { toast } from "sonner";

export const FormSchema = z.object({
  email: z.string().email({ message: "Correo electrónico Inválido" }),
});

export function ContactFormOnlyEmail() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);
      const response = await sendContactOnlyEmail(data);
      if (response.success) {
        toast.success("Form sent successfully");
        form.reset();
      }
    } catch (error) {
      toast.error("Form not sent successfully");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`flex items-center rounded-full bg-black px-3 py-1.5 opacity-60 transition-opacity hover:opacity-100 lg:px-4`}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="h-fit space-y-0">
                <FormControl>
                  <Input
                    placeholder="Email"
                    className="h-fit resize-none border-none bg-transparent px-1 py-0 text-base leading-none text-white placeholder:text-sm placeholder:text-white autofill:bg-transparent focus:bg-transparent lg:text-lg"
                    disabled={isLoading}
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage className="pl-1 pt-2 text-xs" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="flex h-fit w-full items-center gap-2 rounded-full bg-white px-0 py-1.5 text-[#000000] hover:bg-[#F7F7F7] hover:text-[#000000] lg:w-fit lg:px-12 lg:py-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <p className={cn("text-sm", KlarheitMedium.className)}>
                Contact Us
              </p>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
