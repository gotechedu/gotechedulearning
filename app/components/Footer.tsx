"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, ShieldCheck, ExternalLink, GraduationCap, Award, CheckCircle2 } from "lucide-react";

const courseLinks = [
  { name: "Full-Stack Next.js 15 & React", href: "/courses/fullstack-nextjs" },
  { name: "Generative AI & Agentic Systems", href: "/courses/ai-machine-learning" },
  { name: "Cloud DevOps & Kubernetes", href: "/courses/cloud-devops" },
  { name: "Cybersecurity Defense & Ops", href: "/courses/cybersecurity" },
  { name: "Data Science & Applied Analytics", href: "/courses/data-science" },
  { name: "Product & UX Design", href: "/courses/product-design" },
];

const pathwayLinks = [
  { name: "Guided Learning Paths", href: "/learning-paths" },
  { name: "Accredited Certifications", href: "/certifications" },
  { name: "Learner Success & Outcomes", href: "/outcomes" },
  { name: "Admissions & Scholarships", href: "/admissions" },
  { name: "Full Program Catalog", href: "/courses" },
];

const portalLinks = [
  { name: "Student Dashboard", href: "/dashboard" },
  { name: "Central Portal Login", href: "https://portal.gotechedu.com/", external: true },
  { name: "Certificate Verification", href: "/certifications" },
  { name: "Career & Placement Cell", href: "/outcomes" },
  { name: "Admissions Counselor Call", href: "tel:+919608094837", external: true },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/gotechedu",
    hoverStyle: "hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600",
    icon: (
      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gotecheduofficial",
    hoverStyle: "hover:bg-pink-50 hover:border-pink-300 hover:text-pink-600",
    icon: (
      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/gotechedu",
    hoverStyle: "hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600",
    icon: (
      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919608094837",
    hoverStyle: "hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600",
    icon: (
      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@gotechedu",
    hoverStyle: "hover:bg-red-50 hover:border-red-300 hover:text-red-600",
    icon: (
      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-50/95 text-slate-700 pt-16 sm:pt-20 pb-10 border-t border-slate-200/90 font-sans">
      {/* Background Graphic & Light Glows */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        {/* Soft light gradient overlay for maximum readability & high contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-white/85 to-slate-100/95 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f615_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
        <div className="absolute left-1/2 top-0 h-0.5 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/50 via-indigo-500/50 to-transparent" />
        <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-blue-400/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-200">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group"
              aria-label="GoTechEdu Home"
            >
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-blue-200/80 bg-white p-1 shadow-md transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/icons.png"
                  alt="GoTechEdu Academy"
                  width={140}
                  height={140}
                  className="h-full w-full object-contain rounded-full"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-heading text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition">
                    GOTECH
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                      EDU
                    </span>
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-slate-400">
                  Learning Hub · Academy
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              GoTechEdu Learning Hub empowers ambitious engineers and career changers with enterprise-grade curriculum, live 1:1 architect mentorship, verified credentials, and high-impact capstone codebases.
            </p>

            {/* Quick Contact Chips */}
            <div className="space-y-2 pt-1 text-xs">
              <a
                href="tel:+919608094837"
                className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition"
              >
                <div className="h-7 w-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Admissions Helpline: <strong>+91-9608094837</strong></span>
              </a>

              <a
                href="mailto:gotecheduoffical@gmail.com"
                className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition"
              >
                <div className="h-7 w-7 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>Academic Desk: <strong>gotecheduoffical@gmail.com</strong></span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className={`h-9 w-9 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center transition shadow-2xs ${s.hoverStyle}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Flagship Programs */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Flagship Programs
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {courseLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 transition flex items-center gap-1 group"
                  >
                    <span className="transition-transform group-hover:translate-x-0.5">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Academic Pathways */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              Academic Journey
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {pathwayLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 transition flex items-center gap-1 group"
                  >
                    <span className="transition-transform group-hover:translate-x-0.5">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Student & Portal Services */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-600" />
              Student Support
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {portalLinks.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="hover:text-blue-600 transition flex items-center gap-1 group font-medium"
                    >
                      <span className="transition-transform group-hover:translate-x-0.5">
                        {item.name}
                      </span>
                      {item.href.startsWith("http") && <ExternalLink className="w-2.5 h-2.5 text-slate-400" />}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-blue-600 transition flex items-center gap-1 group"
                    >
                      <span className="transition-transform group-hover:translate-x-0.5">
                        {item.name}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching main */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} GoTechEdu Learning Hub. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ISO 9001:2015 Accredited IT Training</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <Link href="/admissions" className="hover:text-blue-600 transition">
              Admissions
            </Link>
            <Link href="/certifications" className="hover:text-blue-600 transition">
              Verify Certificate
            </Link>
            <a
              href="https://portal.gotechedu.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 font-bold hover:underline"
            >
              Student Portal ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
