import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FeaturedLearningCardProps {
  subject: string;
  chapter: string;
  topic?: string;
  progress?: number;
  estimatedTime?: string;
  resourcesCount?: number;
  actionHref?: string;
}

export function FeaturedLearningCard({
  subject,
  chapter,
  topic,
  progress = 65,
  estimatedTime = "25 mins",
  resourcesCount = 4,
  actionHref = "/student/notes",
}: FeaturedLearningCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F8DDD9] via-[#FAF7F3] to-[#FFFDF9] border border-[#F4C7C3] p-6 sm:p-8 shadow-[0_4px_20px_rgba(199,90,75,0.08)]">
      {/* Decorative subtle background accents */}
      <div className="absolute -right-8 -bottom-8 h-44 w-44 rounded-full bg-[#F4C7C3]/40 blur-2xl pointer-events-none" />
      <div className="absolute right-12 top-6 opacity-10 text-[#12324D] pointer-events-none hidden sm:block">
        <Sparkles className="h-28 w-28" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <Badge variant="terracotta" className="bg-[#C75A4B] text-white">
            Today&apos;s Featured Learning
          </Badge>
          <div className="flex items-center gap-3 text-xs text-[#64748B] font-medium">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-[#C75A4B]" />
              {estimatedTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5 text-[#2C5D7D]" />
              {resourcesCount} Resources
            </span>
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-[#2C5D7D]">
            {subject}
          </p>
          <h3 className="mt-1 text-xl sm:text-2xl font-bold text-[#12324D] tracking-tight">
            {chapter}
          </h3>
          {topic && (
            <p className="mt-1.5 text-sm text-[#475569] leading-relaxed">
              {topic}
            </p>
          )}
        </div>

        {/* Progress indicator */}
        <div className="mt-6 max-w-md">
          <div className="flex items-center justify-between text-xs font-semibold text-[#12324D] mb-1.5">
            <span>Chapter Completion</span>
            <span className="text-[#C75A4B]">{progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#E6D9D4]">
            <div
              className="h-full rounded-full bg-[#C75A4B] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Link href={actionHref}>
            <Button className="group shadow-sm">
              <span>Continue Learning</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/student/homework">
            <Button variant="outline" className="bg-white/80">
              View Tasks
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
