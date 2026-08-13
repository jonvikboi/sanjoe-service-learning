import Link from "next/link";
import { MapPin, School, ArrowUpRight, Heart } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SCHOOL_INFO } from "@/lib/mock-data/school";

export function Footer() {
  return (
    <footer id="footer" className="bg-[#12324D] text-[#FAF7F3] pt-16 pb-12 border-t border-[#1D4366]">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1D4366]">
          {/* Brand & Address */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C75A4B] text-white font-bold text-lg">
                SS
              </div>
              <div>
                <span className="font-bold text-lg text-white">SadanLearn</span>
                <p className="text-xs text-[#A9B3CE]">
                  {SCHOOL_INFO.name}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A9B3CE] leading-relaxed max-w-sm">
              {SCHOOL_INFO.philosophy}
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#A9B3CE]">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#E7A69B] mt-0.5" />
                <span className="leading-relaxed">
                  {SCHOOL_INFO.location}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <School className="h-4 w-4 shrink-0 text-[#E7A69B]" />
                <span>Affiliation: {SCHOOL_INFO.board}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F4C7C3]">
              Platform Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A9B3CE]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About School
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-white transition-colors">
                  Learning Pillars
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Student Experience
                </a>
              </li>
              <li>
                <a href="#beyond" className="hover:text-white transition-colors">
                  Beyond the Classroom
                </a>
              </li>
              <li>
                <a href="#lms-preview" className="hover:text-white transition-colors">
                  LMS Interface Preview
                </a>
              </li>
            </ul>
          </div>

          {/* Portals & Access */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F4C7C3]">
              LMS Access
            </h4>
            <p className="text-xs text-[#A9B3CE] leading-relaxed">
              {SCHOOL_INFO.verifiedContactPlaceholder}
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/login"
                className="inline-flex items-center justify-between p-3 rounded-xl bg-[#1D4366] hover:bg-[#2C5D7D] text-xs font-medium text-white transition-colors"
              >
                <span>Student & Teacher Login</span>
                <ArrowUpRight className="h-4 w-4 text-[#F4C7C3]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F91A6]">
          <p>© {new Date().getFullYear()} Sanjoe Sadan Convent School. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built as a Service-Learning Initiative with</span>
            <Heart className="h-3 w-3 text-[#C75A4B] fill-[#C75A4B]" />
            <span>for Bengaluru Students</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
