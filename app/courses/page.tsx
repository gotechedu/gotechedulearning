import type { Metadata } from "next";
import Link from "next/link";
import CourseCatalog from "../components/CourseCatalog";
import { Sparkles, ArrowRight, ShieldCheck, Users, Laptop, Award, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Explore Programs & Courses | GoTechEdu Learning Hub",
  description:
    "Explore enterprise technology courses in Full-Stack Web Development, Generative AI, Cloud DevOps, Cybersecurity, and Data Science led by senior software architects.",
};

export default function CoursesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-slate-50 pt-10 sm:pt-16 pb-14 sm:pb-20 hero-mesh-radial border-b border-slate-200/80 font-sans">
        <div className="hero-grid-pattern absolute inset-0 opacity-60 pointer-events-none" />

        <div className="wrap relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-white/90 shadow-2xs text-xs font-semibold text-blue-700">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>2026 COHORTS ENROLLING · LIVE LABS &amp; MENTORSHIP</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Explore Industry-Grade{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Tech Programs.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Practical, production-focused engineering bootcamps designed to bridge the gap between textbook theory and real enterprise codebases.
          </p>

          {/* Value Prop Chips */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-700 font-semibold">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-blue-600" /> 1:1 Architect Reviews
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              <Laptop className="w-3.5 h-3.5 text-indigo-600" /> Production Capstone Labs
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              <Award className="w-3.5 h-3.5 text-amber-600" /> ISO Accredited Certificates
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 94% Placement Transition
            </span>
          </div>
        </div>
      </section>

      {/* Main Course Catalog Section */}
      <section className="wrap py-12 sm:py-16 font-sans">
        <CourseCatalog />
      </section>

      {/* Not Sure Where to Start Banner */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white py-14 sm:py-18 font-sans">
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300">
              NOT SURE WHICH COURSE FITS YOUR PROFILE?
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Explore Our Step-by-Step Learning Roadmaps.
            </h2>
            <p className="text-xs sm:text-sm text-slate-200">
              Follow guided multi-month pathways constructed around the exact roles you want to target next.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/learning-paths"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition shadow-md active:scale-95"
            >
              <span>Explore Learning Paths</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+919608094837"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-white border border-white/30 hover:bg-white/10 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Talk to an Advisor</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
