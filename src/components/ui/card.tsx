import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "elevated" | "pink" | "navy" | "cream" }
>(({ className, variant = "default", ...props }, ref) => {
  const variantStyles = {
    default: "bg-white border border-[#E6D9D4] shadow-[0_2px_8px_rgba(18,50,77,0.04)]",
    elevated: "bg-white border border-[#E6D9D4] shadow-[0_8px_24px_rgba(18,50,77,0.08)]",
    pink: "bg-[#F8DDD9]/60 border border-[#F4C7C3] shadow-[0_2px_8px_rgba(199,90,75,0.06)]",
    navy: "bg-[#12324D] text-white border border-[#1D4366] shadow-[0_8px_24px_rgba(18,50,77,0.18)]",
    cream: "bg-[#FFFDF9] border border-[#E6D9D4] shadow-[0_2px_8px_rgba(18,50,77,0.03)]",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl transition-all duration-200",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-semibold text-lg leading-tight tracking-tight text-[#12324D]",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-[#64748B] leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
