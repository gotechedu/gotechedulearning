"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import {
  LogOut,
  LayoutDashboard,
  BookOpen,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Menu,
  X,
  Phone,
  Mail,
  GraduationCap,
  Award,
  Compass,
  TrendingUp,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setUserMenuOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getInitials = (name?: string) => {
    if (!name) return "GT";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const navLinks = [
    { name: "Programs & Courses", href: "/courses", icon: <BookOpen className="w-4 h-4 text-blue-600" /> },
    { name: "Learning Paths", href: "/learning-paths", icon: <Compass className="w-4 h-4 text-indigo-600" /> },
    { name: "Outcomes", href: "/outcomes", icon: <TrendingUp className="w-4 h-4 text-emerald-600" /> },
    { name: "Certifications", href: "/certifications", icon: <Award className="w-4 h-4 text-amber-600" /> },
    { name: "Admissions", href: "/admissions", icon: <GraduationCap className="w-4 h-4 text-cyan-600" /> },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all font-sans">
      {/* Top Quick Info Bar matching main */}
      <div className="hidden sm:block border-b border-slate-200/90 bg-slate-50 text-slate-600 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <span className="text-blue-600 font-bold">Admissions Hotline:</span>
              <a
                href="tel:+919608094837"
                className="text-slate-800 hover:text-blue-600 transition font-semibold"
              >
                +91-9608094837
              </a>
            </div>
            <div className="hidden md:flex items-center gap-1.5 border-l border-slate-200 pl-4">
              <span className="text-blue-600 font-bold">E-mail:</span>
              <a
                href="mailto:gotecheduoffical@gmail.com"
                className="text-slate-800 hover:text-blue-600 transition font-semibold"
              >
                gotecheduoffical@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/admissions"
              className="text-blue-600 hover:text-blue-700 transition font-bold flex items-center gap-1"
            >
              <span>🎓 2026 Cohorts Enrolling Now</span>
            </Link>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-2.5 text-slate-500">
              <a
                href="https://www.linkedin.com/company/gotechedu"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-600 transition"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/gotecheduofficial"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-600 transition"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919608094837"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="hover:text-emerald-600 transition"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
            <span className="text-slate-300">|</span>
            <a
              href="https://portal.gotechedu.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full transition shadow-xs active:scale-95 flex items-center gap-1"
            >
              <span>Portal</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-slate-200/80 bg-white/95 backdrop-blur-lg shadow-xs">
        <div className="mx-auto flex h-18 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo with official icons.png & styled brand text */}
          <Link
            href="/"
            className="group relative flex items-center gap-3 transition-all duration-300 active:scale-95"
            aria-label="GoTechEdu Learning Hub Home"
          >
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600/30 via-indigo-500/30 to-cyan-400/30 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-full border border-blue-200/80 bg-white p-1 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400 group-hover:shadow-lg">
              <Image
                src="/icons.png"
                alt="GoTechEdu - IT Solutions & EdTech Learning Platform"
                width={140}
                height={140}
                className="h-full w-full object-contain rounded-full transition-transform duration-300 group-hover:rotate-6"
                priority
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-heading text-lg sm:text-xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  GOTECH
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    EDU
                  </span>
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400 transition-colors group-hover:text-blue-600">
                Learning Hub · Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-[13px] font-semibold transition-colors duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? "text-blue-600 bg-blue-50/80 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {isAuthenticated && (
              <Link
                href="/dashboard"
                className={`px-3 py-2 rounded-lg text-[13px] font-bold transition-colors flex items-center gap-1.5 ${
                  pathname === "/dashboard"
                    ? "text-blue-700 bg-blue-100"
                    : "text-blue-600 hover:bg-blue-50"
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Dashboard</span>
              </Link>
            )}
          </nav>

          {/* Actions / Auth Area */}
          <div className="flex items-center gap-3">
            {isAuthenticated && user ? (
              /* Logged-In User Profile Menu */
              <div className="relative" ref={userMenuRef}>
                <button
                  type="button"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 py-1.5 px-3 rounded-full border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition cursor-pointer text-xs font-semibold text-slate-800"
                >
                  <div className="h-7 w-7 rounded-full bg-blue-600 text-white font-mono font-bold text-[11px] flex items-center justify-center">
                    {getInitials(user.name)}
                  </div>
                  <span className="max-w-[120px] truncate hidden sm:inline">
                    {user.name}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-white border border-slate-200/90 shadow-xl py-2 z-50 animate-fadeIn">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs font-bold text-slate-900 truncate">
                        {user.name}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate">
                        {user.email}
                      </p>
                      <span className="inline-block mt-1 rounded bg-blue-50 px-2 py-0.5 text-[9px] font-mono font-bold text-blue-700 uppercase">
                        {user.role} Portal
                      </span>
                    </div>

                    <div className="py-1">
                      <Link
                        href="/dashboard"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 transition"
                      >
                        <LayoutDashboard className="w-4 h-4 text-blue-600" />
                        <span>My Learning Dashboard</span>
                      </Link>
                      <Link
                        href="/courses"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 transition"
                      >
                        <BookOpen className="w-4 h-4 text-indigo-600" />
                        <span>Browse Programs</span>
                      </Link>
                    </div>

                    <div className="pt-1 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => {
                          setUserMenuOpen(false);
                          logout();
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-red-600 hover:bg-red-50 transition cursor-pointer text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Logged-Out Actions */
              <div className="flex items-center gap-2.5">
                <Link
                  href="/login"
                  className="hidden sm:inline-flex px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-blue-600 transition"
                >
                  Log in
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition shadow-sm hover:shadow-md active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Explore Programs</span>
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
              aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="lg:hidden border-t border-slate-200/90 bg-white px-4 pt-3 pb-6 shadow-xl space-y-1 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition ${
                  pathname === link.href
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}

            {isAuthenticated ? (
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-blue-600 bg-blue-50"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>My Dashboard</span>
              </Link>
            ) : (
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-800 hover:bg-slate-50"
                >
                  Log in to Learner Account
                </Link>
                <Link
                  href="/admissions"
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm"
                >
                  Apply for Admission
                </Link>
              </div>
            )}

            {/* Quick Contact within mobile menu */}
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
              <a
                href="tel:+919608094837"
                className="flex items-center gap-2 text-slate-700 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Hotline: +91-9608094837</span>
              </a>
              <a
                href="mailto:gotecheduoffical@gmail.com"
                className="flex items-center gap-2 text-slate-700 font-semibold"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>gotecheduoffical@gmail.com</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
