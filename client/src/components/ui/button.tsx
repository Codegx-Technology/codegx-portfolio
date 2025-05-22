import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Enterprise button variants
        sapphire: "bg-sapphire text-white hover:bg-sapphire/90 shadow-sm",
        electric: "bg-electric text-white hover:bg-electric/90 shadow-sm",
        emerald: "bg-emerald text-white hover:bg-emerald/90 shadow-sm",
        amber: "bg-amber text-sapphire hover:bg-amber/90 shadow-sm",
        soft: "bg-background border border-border hover:border-primary/50 shadow-sm",
        "sapphire-outline": "border-2 border-sapphire text-sapphire bg-transparent hover:bg-sapphire/10",
        "electric-outline": "border-2 border-electric text-electric bg-transparent hover:bg-electric/10",
      },
      size: {
        default: "min-h-[44px] px-6 py-3 w-full sm:w-auto",
        sm: "min-h-[36px] rounded-xl px-4 py-2 w-full sm:w-auto",
        lg: "min-h-[48px] rounded-2xl px-8 py-3 w-full sm:w-auto",
        icon: "h-10 w-10 min-h-[44px]",
        mobile: "w-full min-h-[44px] px-6 py-3 sm:w-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
