"use client";

import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { Doc } from "@/convex/_generated/dataModel";

export default function ContactForm() {
  const FormSchema = z.object({
    title: z.string().min(1, { message: "Por favor ingresa un título" }),
    email: z.string().email({ message: "Por favor ingresa un email válido" }),
    message: z.string().min(1, { message: "Por favor ingresa un mensaje" }),
    projectTypes: z
      .string()
      .min(1, { message: "Por favor ingresa un tipo de proyecto" }),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      email: "",
      message: "",
      projectTypes: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);
    } catch (error: any) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-4">
            <div className="grid w-full items-center gap-1.5">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormControl>
                      <Input
                        placeholder="jhon@doe.com"
                        className="resize-none bg-transparent py-0"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                BACK
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading} variant={"default"}>
              {isLoading ? (
                <Loader className="h-4 w-4 animate-spin" />
              ) : (
                "SEND"
              )}
            </Button>
          </DialogFooter>
        </div>
      </form>
    </Form>
  );
}
