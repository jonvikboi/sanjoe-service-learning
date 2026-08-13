import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, School } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F3] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E6D9D4]">
      {/* Subtle architectural background accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-[#F4C7C3]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[#EBF2F7] blur-2xl pointer-events-none" />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="terracotta" className="py-1 px-3">
                <School className="h-3.5 w-3.5 mr-1" />
                Sanjoe Sadan Convent School
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-medium bg-white/80 border border-[#E6D9D4] px-3 py-1 rounded-lg">
                <MapPin className="h-3 w-3 text-[#C75A4B]" />
                <span>Banashankari 6th Stage, Bengaluru</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#12324D] leading-[1.15]">
              Nurturing Minds. <br />
              <span className="font-serif italic font-normal text-[#C75A4B]">
                Building Futures.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
              Welcome to <strong>SadanLearn</strong> — a dedicated digital learning and student-support platform built for Sanjoe Sadan Convent School. Centralizing classroom notes, homework, daily study schedules, and self-learning tools.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link href="/login">
                <Button size="lg" className="group shadow-md hover:shadow-lg">
                  <span>Enter LMS Portal</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <a href="#pillars">
                <Button variant="outline" size="lg" className="bg-white">
                  Explore Learning Pillars
                </Button>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-[#E6D9D4]/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#12324D]">6–10th</p>
                <p className="text-xs text-[#64748B] mt-0.5">Primary & High School</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#C75A4B]">100%</p>
                <p className="text-xs text-[#64748B] mt-0.5">Curriculum Aligned</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#2C5D7D]">3 Langs</p>
                <p className="text-xs text-[#64748B] mt-0.5">Eng • Kan • Hin</p>
              </div>
            </div>
          </div>

          {/* Right Column: School Building Editorial Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Layered architectural frame */}
            <div className="relative mx-auto max-w-lg rounded-3xl p-3 bg-white border border-[#E6D9D4] shadow-[0_16px_40px_rgba(18,50,77,0.08)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#F8DDD9]">
                <Image
                  src="/images/school/building.jpg"
                  alt="Sanjoe Sadan Convent School Building in Bengaluru"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating caption card */}
              <div className="mt-3 px-3 py-2 flex items-center justify-between bg-[#FFFDF9] rounded-xl border border-[#E6D9D4]/60">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#12324D]">
                    Sanjoe Sadan Campus
                  </span>
                  <span className="text-[11px] text-[#64748B]">
                    Hemmigepura, Bengaluru
                  </span>
                </div>
                <Badge variant="blue" size="sm">
                  Academic Campus
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
