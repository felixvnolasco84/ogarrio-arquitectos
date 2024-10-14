import { cn } from "@/lib/utils";

export default function CardTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return <h2 className={cn("font-bold text-2xl xl:text-3xl", className)}>{title}</h2>;
}
