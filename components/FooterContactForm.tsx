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
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { sendContactEmail } from "@/app/_actions";
import { Input } from "@/components/ui/input";
import { KlarheitExtraLight } from "@/utils/fonts";
import { toast } from "sonner";

export const FormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "You need to provide a name with at least 2 characters.",
    })
    .max(160, {
      message: "The name is too long, please provide a shorter name.",
    }),
  email: z.string().email({ message: "Invalid email" }),
});

export function FooterContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);
      const response = await sendContactEmail(data);
      // const response = await fetch("/api/customers", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      // });
      if (response.success) {
        toast.success("Form sent successfully");
        form.reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Form not sent successfully");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`flex flex-col items-start gap-2 rounded-2xl lg:flex-row`}
        >
          <div className="flex w-full flex-col gap-2 rounded-md bg-transparent lg:w-fit lg:flex-row">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-0 rounded-md bg-[#DEDEDE] shadow-sm">
                  <FormControl>
                    <Input
                      placeholder="Nombre"
                      className={`resize-none bg-transparent px-3 py-2 text-base placeholder:text-sm lg:text-lg placeholder:${KlarheitExtraLight.className} ring-offset-0 ring-offset-transparent focus-visible:ring-transparent`}
                      disabled={isLoading}
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage className="p-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-0 rounded-md bg-[#DEDEDE] shadow-sm">
                  <FormControl>
                    <Input
                      placeholder="Correo"
                      className={`resize-none bg-transparent px-3 py-2 text-base placeholder:text-sm lg:text-lg placeholder:${KlarheitExtraLight.className} ring-offset-0 ring-offset-transparent focus-visible:ring-transparent`}
                      disabled={isLoading}
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage className="p-2" />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="h-fit w-full bg-black hover:bg-transparent lg:w-fit"
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="h-6 w-6" /> : "Send"}
          </Button>
        </form>
      </Form>
    </>
  );
}
