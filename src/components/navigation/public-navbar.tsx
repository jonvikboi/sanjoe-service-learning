"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export function PublicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About School", href: "#about" },
    { label: "Learning Pillars", href: "#pillars" },
    { label: "Student Life", href: "#experience" },
    { label: "Beyond Classroom", href: "#beyond" },
    { label: "LMS Preview", href: "#lms-preview" },
    { label: "Contact", href: "#footer" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E6D9D4] bg-[#FAF7F3]/95 backdrop-blur-md transition-all">
      <Container size="lg">
        <div className="flex h-20 items-center justify-between">
          {/* Logo & School Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#12324D] text-white font-bold text-lg shadow-sm group-hover:bg-[#C75A4B] transition-colors">
              SS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-[#12324D] group-hover:text-[#C75A4B] transition-colors">
                SadanLearn
              </span>
              <span className="text-[11px] font-medium text-[#64748B] tracking-wide">
                Sanjoe Sadan Convent School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#1F2328]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#12324D]/80 hover:text-[#C75A4B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#C75A4B] after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/login">
              <Button size="md" className="group shadow-sm">
                <span>Enter LMS</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <Link href="/login">
              <Button size="sm">Enter LMS</Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#12324D] hover:bg-[#F8DDD9]/60 border border-[#E6D9D4]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E6D9D4] bg-[#FAF7F3] px-6 py-5 animate-fade-in shadow-lg">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#12324D] hover:text-[#C75A4B] py-2 border-b border-[#E6D9D4]/40"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full justify-center">Enter LMS Portal</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
