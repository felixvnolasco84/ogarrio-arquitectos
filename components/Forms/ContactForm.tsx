"use client";

import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { useSucessContactModal } from "@/hooks/successContactModal";

export default function ContactForm() {
  const sucessContactModal = useSucessContactModal();

  const interest: string[] = [
    "Design",
    "Construction & Design",
    "Development Project",
  ];

  const FormSchema = z.object({
    title: z.string().min(1, { message: "Please add add a name " }),
    email: z.string().email({ message: "Please add a valid email " }),
    message: z.string().min(1, { message: "Please add a message " }),
    projectTypes: z.enum(
      ["Design", "Construction & Design", "Development Project"],
      {
        required_error: "Please add a project type",
      }
    ),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      email: "",
      message: "",
      projectTypes: "Design",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);
      if (success) {
        sucessContactModal.onOpen();
      }
    } catch (error: any) {
    } finally {
      setIsLoading(false);
    }
  }

  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid justify-items-start border-b border-b-gray-400 pb-4 lg:gap-2 lg:pb-12">
          <div className="grid gap-2 text-3xl lg:max-w-7xl lg:gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="grid grid-cols-2 items-end gap-4 border-b border-b-gray-400 py-4 lg:py-12 lg:pb-12 lg:pt-8">
                  <FormLabel className="text-xl lg:text-2xl">NAME</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="NAME"
                      className="mt-0 h-8 resize-none rounded-none border-none bg-transparent py-0 text-lg shadow-none placeholder:text-gray-400 focus-visible:ring-transparent lg:text-2xl"
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

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid grid-cols-2 items-end gap-4 border-b border-b-gray-400 py-4 lg:py-12 lg:pb-12 lg:pt-8">
                  <FormLabel className="text-xl lg:text-2xl">EMAIL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="name@gmail.com"
                      className="mt-0 h-8 resize-none rounded-none border-none bg-transparent py-0 text-lg shadow-none placeholder:text-gray-400 focus-visible:ring-transparent lg:text-2xl"
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
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="grid grid-cols-2 items-end gap-4 border-b border-b-gray-400 py-4 lg:py-12 lg:pb-12 lg:pt-8">
                  <FormLabel className="text-xl lg:text-2xl">MESSAGE</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="MESSAGE"
                      className="mt-0 h-8 resize-none rounded-none border-none bg-transparent py-0 text-lg shadow-none placeholder:text-gray-400 focus-visible:ring-transparent lg:text-2xl"
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

            <FormField
              control={form.control}
              name="projectTypes"
              render={({ field }) => (
                <FormItem className="grid items-start gap-4 py-4 lg:grid-cols-2 lg:items-end lg:pb-12 lg:pt-8"> 
                  <FormLabel className="text-xl lg:text-2xl">PROJECT TYPES</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col gap-4 lg:flex-row"
                    >
                      {interest.map((service: any, index: any) => (
                        <FormItem key={index} className={`relative`}>
                          <FormControl
                            onClick={() => handleItemClick(index)}
                            className={`absolute top-0 left-0 w-4 h-4 z-50 checked:bg-purple-400
                        ${
                          index === selectedItem
                            ? "bg-blue-400 hover:bg-blue-400"
                            : "bg-gray-400 hover:bg-flourescentYellow"
                        }
                        `}
                          >
                            <RadioGroupItem
                              className="-z-10 rounded-[10px] border-none"
                              value={service}
                            />
                          </FormControl>
                          <FormLabel className="cursor-pointer">
                            <div className="flex flex-col gap-8 text-2xl text-gray-400 lg:gap-6">
                              <span
                                className={`${index === selectedItem ? " text-gray-500" : "text-gray-400/80"} transition-all duration-300 ease-in-out`}
                              >
                                {service}
                              </span>
                            </div>
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <DialogFooter className="grid grid-cols-2 gap-8 pb-4 pt-8 lg:grid-cols-1 lg:py-12">
            <Button
              className="h-fit bg-white p-0 text-3xl text-black/60 transition-all duration-300 ease-in-out hover:bg-white hover:text-black lg:text-6xl"
              type="submit"
              disabled={isLoading}
              variant={"default"}
            >
              {isLoading ? <Loader className="h-4 w-4 animate-spin" /> : "SEND"}
            </Button>
            <DialogClose asChild>
              <Button
                className="h-fit bg-white p-0 text-3xl text-black/40 transition-all duration-300 ease-in-out hover:bg-white hover:text-black lg:text-6xl"
                type="button"
                variant="default"
              >
                BACK
              </Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </form>
    </Form>
  );
}
