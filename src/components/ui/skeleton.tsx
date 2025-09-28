
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "circular" | "text" | "button" | "card"
}) {
  const variants = {
    default: "animate-pulse rounded-md bg-muted",
    circular: "animate-pulse rounded-full bg-muted",
    text: "animate-pulse rounded bg-muted h-4",
    button: "animate-pulse rounded-md bg-muted h-10",
    card: "animate-pulse rounded-lg bg-muted"
  }

  return (
    <div
      className={cn(variants[variant], className)}
      {...props}
    />
  )
}

export { Skeleton }
