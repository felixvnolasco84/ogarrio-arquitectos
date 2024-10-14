import { cn } from "@/lib/utils";
import React from "react";

export default function CustomSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "grid w-full lg:space-y-12",
        className
      )}
    >
      <div className="grid gap-y-12">
        {children}
      </div>
    </section>
  );
}
