import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export function LoadingState({
  message = "Loading resources...",
  className,
}: LoadingStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-12 text-center",
        className
      )}
    >
      <Loader2 className="h-8 w-8 animate-spin text-[#C75A4B] mb-3" />
      <p className="text-sm font-medium text-[#64748B]">{message}</p>
    </div>
  );
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#E6D9D4] bg-white p-6 animate-pulse space-y-4",
        className
      )}
    >
      <div className="h-4 bg-[#F8DDD9]/80 rounded w-1/3" />
      <div className="h-6 bg-[#E6D9D4]/60 rounded w-2/3" />
      <div className="space-y-2 pt-2">
        <div className="h-3 bg-[#E6D9D4]/40 rounded w-full" />
        <div className="h-3 bg-[#E6D9D4]/40 rounded w-4/5" />
      </div>
    </div>
  );
}
