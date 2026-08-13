import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "navy"
    | "outline"
    | "pink"
    | "ghost"
    | "link"
    | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C75A4B] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer active:scale-[0.98]";

    const variants = {
      default:
        "bg-[#C75A4B] text-white hover:bg-[#A9473A] shadow-sm hover:shadow active:bg-[#913B30]",
      navy: "bg-[#12324D] text-white hover:bg-[#1D4366] shadow-sm hover:shadow active:bg-[#0B1F30]",
      outline:
        "border border-[#E6D9D4] bg-white text-[#12324D] hover:bg-[#FAF7F3] hover:border-[#C75A4B] hover:text-[#C75A4B]",
      pink: "bg-[#F8DDD9] text-[#12324D] hover:bg-[#F4C7C3] active:bg-[#E7A69B]",
      ghost: "text-[#12324D] hover:bg-[#F8DDD9]/60 active:bg-[#F8DDD9]",
      link: "text-[#C75A4B] underline-offset-4 hover:underline p-0 h-auto",
      destructive:
        "bg-[#C62828] text-white hover:bg-[#B71C1C] shadow-sm active:bg-[#8E0000]",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs rounded-lg gap-1.5",
      md: "h-10 px-4 py-2 text-sm rounded-xl gap-2",
      lg: "h-12 px-6 text-base rounded-xl gap-2.5 font-medium",
      icon: "h-10 w-10 rounded-xl p-0",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
