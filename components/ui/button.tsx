import * as React from "react"
import { cn } from "@/components/ui/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-deep-water-blue text-white hover:bg-blue-800 focus:ring-deep-water-blue": variant === "default",
            "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500": variant === "secondary",
            "border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-gray-500": variant === "outline",
          },
          {
            "h-10 px-4 py-2 text-sm": size === "default",
            "h-8 px-3 text-xs": size === "sm",
            "h-12 px-6 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
