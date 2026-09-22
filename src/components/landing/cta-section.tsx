import Link from "next/link";
import { ArrowRight, ShieldCheck, GraduationCap, Users } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-[#C75A4B] via-[#B84E40] to-[#A9473A] text-white relative overflow-hidden">


      <Container size="md" className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold text-white mb-6 backdrop-blur-xs border border-white/20">
          <GraduationCap className="h-4 w-4" />
          <span>Sanjoe Sadan Convent School Learning Portal</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          Step into a smarter, structured learning experience.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          Access your classroom subjects, review homework deadlines, study with step-by-step math explanations, and practice state languages.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/login">
            <Button
              size="lg"
              variant="navy"
              className="bg-[#12324D] hover:bg-[#0B1F30] text-white shadow-lg text-base px-8 group"
            >
              <span>Enter SadanLearn</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <a href="#about">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#C75A4B]"
            >
              About the Initiative
            </Button>
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" />
            Role-Based Access
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            Students, Teachers & Administrators
          </span>
        </div>
      </Container>
    </section>
  );
}
