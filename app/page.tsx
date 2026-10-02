"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { defaultCoursesList } from "@/lib/courseData";
import {
  Sparkles,
  ArrowRight,
  Clock,
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  Users,
  Code2,
  ChevronRight,
  TrendingUp,
  Laptop,
  Check,
  Phone,
  Compass,
} from "lucide-react";

const categories = [
  "All Programs",
  "Full-Stack Web Development",
  "Applied AI & Machine Learning",
  "Cloud & DevOps Engineering",
  "Cybersecurity Foundations",
  "Product & UX Design",
];

const pillarsWithImages = [
  {
    title: "1:1 Architect Mentorship",
    description: "Get weekly code reviews, architecture feedback, and unblocking sessions with engineers who have shipped software for Fortune 500s.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    badge: "Direct Guidance",
  },
  {
    title: "Real Production Projects",
    description: "No toy todo-apps. Build full-stack enterprise SaaS, CRM tools, AI agent swarms, and zero-downtime CI/CD deployment pipelines.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    badge: "Enterprise Codebases",
  },
  {
    title: "Accredited Certifications",
    description: "Earn tamper-proof, globally verifiable certificates with official QR codes and direct LinkedIn credential integration.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    badge: "ISO 9001:2015",
  },
  {
    title: "Placement & Referral Cell",
    description: "Access curated mock technical interviews, resume optimization, salary negotiation guidance, and direct hiring partner referrals.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    badge: "350+ Partners",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All Programs");

  // Filter courses based on selected category
  const filteredCourses = useMemo(() => {
    if (selectedCategory === "All Programs") {
      return defaultCoursesList;
    }
    return defaultCoursesList.filter((c) => {
      const cat = c.category.toLowerCase();
      const target = selectedCategory.toLowerCase();
      return cat.includes(target) || target.includes(cat);
    });
  }, [selectedCategory]);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-50 pt-8 sm:pt-14 pb-16 sm:pb-24 hero-mesh-radial border-b border-slate-200/80">
        <div className="hero-grid-pattern absolute inset-0 opacity-60 pointer-events-none" />

        <div className="wrap relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Announcement Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-white/90 shadow-2xs text-xs font-semibold text-blue-700">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>2026 Cohorts Enrolling Now · Up to 40% Merit Scholarships</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
              Build Enterprise Skills.{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Accelerate Your Future.
              </span>
            </h1>

            {/* Subtitle Lead */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Career-focused technology academy by <strong>GoTechEdu</strong>. Master Full-Stack Web Engineering, Autonomous AI Systems, Multi-Cloud DevOps, and Cybersecurity through live enterprise capstones and 1:1 senior architect mentorship.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Explore All Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-slate-800 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition shadow-2xs active:scale-95"
              >
                <span>Fast Apply 2026</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <a
                href="tel:+919608094837"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-bold text-blue-700 bg-blue-50/90 border border-blue-100 hover:bg-blue-100 transition"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Hotline: +91-9608094837</span>
              </a>
            </div>

            {/* Social Proof with Realistic Learner Avatars */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-600">
              <div className="flex -space-x-2.5 items-center">
                <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-white shadow-xs">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt="Learner Ananya"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-white shadow-xs">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    alt="Learner Rohit"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-white shadow-xs">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                    alt="Learner Sneha"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-white shadow-xs">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                    alt="Learner Vikram"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-[10px] border-2 border-white shadow-xs">
                  +12k
                </div>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  {"★".repeat(5)}
                  <span className="text-slate-800 font-bold ml-1 text-xs">4.92 / 5.0</span>
                </div>
                <span className="text-slate-500 text-[11px]">
                  from 12,000+ enrolled students &amp; alumni
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Background Glows */}
            <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-72 h-72 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />

            {/* Main Interactive Showcase Card */}
            <div className="relative w-full max-w-md rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:shadow-blue-500/10">
              {/* Card Header with Realistic Classroom Photo Banner */}
              <div className="relative h-28 w-full rounded-xl overflow-hidden mb-4 shadow-xs">
                <Image
                  src="/assets/pillars/training.jpg"
                  alt="GoTechEdu Live Learning Class"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                      LIVE CLASSROOM · BATCH 2026-B
                    </span>
                  </div>
                  <span className="rounded bg-blue-600/90 px-2 py-0.5 text-[9px] font-mono font-bold text-white uppercase">
                    SEATS OPEN
                  </span>
                </div>
              </div>

              {/* Simulated Code Terminal */}
              <div className="rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-200 shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] text-slate-400">careerPath.ts</span>
                </div>
                <div className="space-y-1.5 leading-relaxed text-[11px]">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">learner</span> ={" "}
                    <span className="text-amber-300">useGoTechEdu</span>();
                  </p>
                  <p className="text-slate-400">
                    <span className="text-purple-400">await</span>{" "}
                    <span className="text-blue-400">learner</span>.
                    <span className="text-emerald-400">masterFullStack</span>();
                  </p>
                  <p className="text-slate-400">
                    <span className="text-purple-400">await</span>{" "}
                    <span className="text-blue-400">learner</span>.
                    <span className="text-emerald-400">deployAIWorkflow</span>();
                  </p>
                  <p className="text-slate-500">{"// Result: Production-Ready Engineer"}</p>
                  <p className="text-pink-400">
                    &lt;<span className="text-cyan-400">CareerReady</span> verified=
                    <span className="text-amber-300">&quot;100%&quot;</span> /&gt;
                  </p>
                </div>
              </div>

              {/* Progress & Live Curriculum Card */}
              <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                      ⌘
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">
                        Full-Stack Next.js 15 &amp; React
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Module 04: Production Microservices &amp; CI/CD
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-600">
                    78%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                    style={{ width: "78%" }}
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-left">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-amber-50/80 border border-amber-200/60 text-amber-900">
                  <Award className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="text-[11px] font-bold leading-tight">ISO Accredited</p>
                    <p className="text-[9px] text-amber-700">Verifiable Credentials</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50/80 border border-blue-200/60 text-blue-900">
                  <Users className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <p className="text-[11px] font-bold leading-tight">1:1 Mentorship</p>
                    <p className="text-[9px] text-blue-700">Senior Architects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HIRING & REPUTATION STRIP */}
      <section className="border-b border-slate-200 bg-white py-6">
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap text-center md:text-left">
            Where Our Alumni &amp; Learners Work
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-500 font-heading font-black text-sm sm:text-base tracking-tight">
            <span className="hover:text-slate-900 transition">◈ Google Cloud</span>
            <span className="hover:text-slate-900 transition">◉ AWS</span>
            <span className="hover:text-slate-900 transition">▰ Microsoft</span>
            <span className="hover:text-slate-900 transition">◉ Meta</span>
            <span className="hover:text-slate-900 transition">✳ NVIDIA</span>
            <span className="hover:text-slate-900 transition">▲ Vercel</span>
            <span className="hover:text-slate-900 transition">⬡ Red Hat</span>
          </div>
        </div>
      </section>

      {/* 3. EXPLORE FLAGSHIP PROGRAMS WITH REALISTIC COVERS */}
      <section className="wrap py-16 sm:py-24" id="programs">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="eyebrow">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              INDUSTRY-ACCREDITED CURRICULUM
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Programs Built for the Modern Enterprise.
            </h2>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition group"
          >
            <span>Browse Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid with Realistic Cover Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <article
              key={course.slug}
              className="group flex flex-col rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              {/* Realistic Photographic Cover Banner */}
              <Link
                href={`/courses/${course.slug}`}
                className="relative h-48 w-full overflow-hidden block"
              >
                {course.previewImage ? (
                  <Image
                    src={course.previewImage}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${course.color}`} />
                )}

                {/* Subtle contrast gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-slate-950/20" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="rounded-full bg-slate-900/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                    {course.category}
                  </span>
                  <span className="rounded-full bg-blue-600/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white shadow-2xs">
                    {course.badge}
                  </span>
                </div>

                {/* Bottom Cover Title / Tagline */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <p className="text-xs font-semibold text-white/95 line-clamp-1">
                    {course.coverText}
                  </p>
                </div>
              </Link>

              {/* Course Body Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {course.duration}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                      {course.level}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug line-clamp-2">
                    <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {course.description || course.overviewParagraph}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                {course.techStack && course.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {course.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {course.techStack.length > 4 && (
                      <span className="rounded-md bg-slate-50 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
                        +{course.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                )}

                {/* Rating & Pricing Row */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-500 font-bold">★ {course.rating}</span>
                    <span className="text-slate-400 text-[11px]">
                      ({course.reviewsCount || "1,200"} reviews)
                    </span>
                  </div>

                  {course.discountedPrice && (
                    <div className="text-right">
                      <span className="font-bold text-slate-900 text-sm">
                        ₹{course.discountedPrice.toLocaleString()}
                      </span>
                      {course.emiStartsAt && (
                        <span className="block text-[9px] text-slate-500">
                          EMI from ₹{course.emiStartsAt.toLocaleString()}/mo
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="w-full text-center py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/admissions?course=${encodeURIComponent(course.title)}`}
                    className="w-full text-center py-2 rounded-lg bg-blue-600 text-xs font-bold text-white hover:bg-blue-700 transition shadow-xs"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. GUIDED LEARNING PATHWAY ROADMAP */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-16 sm:py-24">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="wrap relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="eyebrow text-blue-400">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              STRUCTURED CAREER ROADMAP
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Your Goals Deserve a Real, Guided Blueprint.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Don&apos;t waste months navigating scattered tutorials. Follow a guided curriculum constructed around production engineering standards, industry milestones, and verifiable proof of skill.
            </p>
            <div className="pt-2">
              <Link
                href="/learning-paths"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition shadow-md active:scale-95"
              >
                <span>Explore Learning Paths</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 4-Step Interactive Steps */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-800/60 backdrop-blur-xs space-y-2 hover:border-slate-700 transition">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/60 text-blue-400 font-mono font-bold text-xs border border-blue-700/50">
                  01
                </span>
                <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Foundation
                </span>
              </div>
              <h3 className="font-heading text-base font-bold text-white">
                Core Systems &amp; Mental Models
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Build deep intuition for programming paradigms, data structures, clean code principles, and web foundations.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-800/60 backdrop-blur-xs space-y-2 hover:border-slate-700 transition">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-900/60 text-indigo-400 font-mono font-bold text-xs border border-indigo-700/50">
                  02
                </span>
                <span className="text-indigo-400 text-xs font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Modern Stack
                </span>
              </div>
              <h3 className="font-heading text-base font-bold text-white">
                Enterprise Toolchains &amp; Frameworks
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Gain hands-on command over Next.js 15, TypeScript, Python, Docker, cloud services, and autonomous agent pipelines.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-800/60 backdrop-blur-xs space-y-2 hover:border-slate-700 transition">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-900/60 text-cyan-400 font-mono font-bold text-xs border border-cyan-700/50">
                  03
                </span>
                <span className="text-cyan-400 text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Capstone
                </span>
              </div>
              <h3 className="font-heading text-base font-bold text-white">
                Production-Grade Capstone Labs
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Build complete full-stack SaaS apps, LLM pipelines, or multi-cloud infrastructures tested against real users and traffic.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-800/60 backdrop-blur-xs space-y-2 hover:border-slate-700 transition">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-900/60 text-amber-400 font-mono font-bold text-xs border border-amber-700/50">
                  04
                </span>
                <span className="text-amber-400 text-xs font-bold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> Career
                </span>
              </div>
              <h3 className="font-heading text-base font-bold text-white">
                Portfolio, Certificate &amp; Placement
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Earn your verified certificate, polish your GitHub portfolio, and get direct referrals into top tech employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE GOTECHEDU EDGE (PILLARS WITH REALISTIC PHOTOGRAPHY) */}
      <section className="wrap py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            THE GOTECHEDU DIFFERENCE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Why Learners Choose GoTechEdu.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            We don&apos;t just teach syntax. We train you to think, engineer, and operate like a principal software architect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillarsWithImages.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-2xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Pillar Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 rounded-full bg-blue-600/90 text-white font-mono text-[9px] font-bold px-2 py-0.5">
                  {pillar.badge}
                </span>
              </div>

              {/* Pillar Content */}
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. VERIFIED CERTIFICATE SHOWCASE WITH QR BADGE */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16 sm:py-24">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Certificate Mockup Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="certificate shadow-xl rotate-[-1deg] hover:rotate-0 transition-transform duration-300 relative">
              <div className="cert-inner">
                <span className="cert-seal">G</span>
                <small>GOTECHEDU ACADEMY · VERIFIED CREDENTIAL</small>
                <h3>Certificate of Achievement</h3>
                <span className="cert-rule" />
                <p>This certifies that</p>
                <b>Alex Morgan</b>
                <p className="text-[10px] text-slate-500 mt-1">
                  has demonstrated production excellence and completed
                </p>
                <strong>The Complete Full-Stack Next.js 15 &amp; React Engineering Track</strong>

                {/* QR Code and Signatures */}
                <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-left px-2">
                  <div className="flex items-center gap-2">
                    <div className="relative h-12 w-12 rounded border border-slate-300 overflow-hidden bg-white p-0.5">
                      <Image
                        src="/assets/gotechedu-qr.jpeg"
                        alt="Verification QR Code"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-[8px] font-mono font-bold text-slate-400 block">ID: GTE-2026-FS094</span>
                      <span className="text-[8px] text-emerald-600 font-bold flex items-center gap-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5" /> Cryptographically Verified
                      </span>
                    </div>
                  </div>

                  <div className="cert-sign">
                    <span>Aditya Kumar</span>
                    <i>Academic Program Director</i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Explanation */}
          <div className="lg:col-span-6 space-y-5">
            <span className="eyebrow">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              PROOF OF MASTERY
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Make Your Hard Work Official &amp; Verifiable.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              GoTechEdu certificates are not participation trophies. They represent rigorous project completion, code reviews, and demonstrable capability that recruiters, engineering managers, and clients can verify with a single click.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>One-click addition to LinkedIn licenses &amp; certifications</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cryptographically verifiable QR code &amp; credential hash</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Recognized by 100+ partner tech companies &amp; hiring managers</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/certifications"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition shadow-xs"
              >
                <span>Learn About Certifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REAL LEARNER OUTCOMES & METRICS */}
      <section className="wrap py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Copy & Stats */}
          <div className="lg:col-span-5 space-y-5">
            <span className="eyebrow">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              MEASURABLE CAREER ADVANCEMENT
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Progress You Can Feel. Results You Can Show.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every course is engineered backwards from what hiring managers and technical directors actually evaluate in interviews and production codebases.
            </p>
            <div className="pt-2">
              <Link
                href="/outcomes"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition group"
              >
                <span>Read Full Outcomes Report</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Stats Grid with Alumnus Spotlight */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs">
              <span className="font-heading text-4xl sm:text-5xl font-black text-blue-600 tracking-tight">
                4.92<span className="text-xl text-slate-400">/5</span>
              </span>
              <p className="font-bold text-slate-800 text-xs mt-2">Average Learner Satisfaction</p>
              <p className="text-[11px] text-slate-500 mt-1">
                Rated across 2,400+ cohort evaluations and mentor sessions.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs">
              <span className="font-heading text-4xl sm:text-5xl font-black text-indigo-600 tracking-tight">
                94<span className="text-2xl text-indigo-400">%</span>
              </span>
              <p className="font-bold text-slate-800 text-xs mt-2">Placement &amp; Transition Rate</p>
              <p className="text-[11px] text-slate-500 mt-1">
                Transitioned into engineering roles within 6 months of completion.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs">
              <span className="font-heading text-4xl sm:text-5xl font-black text-cyan-600 tracking-tight">
                12k<span className="text-2xl text-cyan-400">+</span>
              </span>
              <p className="font-bold text-slate-800 text-xs mt-2">Learners &amp; Alumni Network</p>
              <p className="text-[11px] text-slate-500 mt-1">
                Collaborative community across India, Middle East, and beyond.
              </p>
            </div>

            {/* Testimonial card with real avatar */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-2xs flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl text-amber-400 block mb-1">“</span>
                <p className="text-xs text-slate-200 italic leading-relaxed">
                  I went from basic tutorials to architecting full-stack SaaS apps with confidence.
                </p>
              </div>

              <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-slate-800">
                <div className="relative h-8 w-8 rounded-full overflow-hidden border border-white/20">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="Rohit Sharma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white leading-tight">Rohit Sharma</p>
                  <p className="text-[9px] text-slate-400">Software Engineer, FinTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAST-TRACK ADMISSIONS CALL TO ACTION */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white py-14 sm:py-20">
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300">
              YOUR NEXT CAREER CHAPTER STARTS NOW
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Master Production Software Engineering?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Explore cohort dates, syllabus modules, scholarship grants, or talk directly with our academic counseling team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition shadow-lg active:scale-95 w-full sm:w-auto justify-center"
            >
              <span>Apply for 2026 Batch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+919608094837"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-white border border-white/30 hover:bg-white/10 transition w-full sm:w-auto justify-center"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
