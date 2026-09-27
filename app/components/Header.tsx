"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import {
  User,
  LogOut,
  LayoutDashboard,
  BookOpen,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { user, isAuthenticated, logout } = useAuth();

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

  return (
    <header className="site-header">
      <div className="wrap nav-wrap">
        {/* Brand */}
        <Link href="/" className="brand" aria-label="GoTechEdu learning home">
          <span className="brand-mark">
            <i />
          </span>
          <span>
            GoTech<span className="brand-light">Edu</span>
            <small>LEARN · BUILD · GROW</small>
          </span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : "☰"}
        </button>

        {/* Navigation Links */}
        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          <Link href="/courses" onClick={() => setOpen(false)}>
            Courses
          </Link>
          <Link href="/learning-paths" onClick={() => setOpen(false)}>
            Learning paths
          </Link>
          <Link href="/outcomes" onClick={() => setOpen(false)}>
            Outcomes
          </Link>
          <Link href="/certifications" onClick={() => setOpen(false)}>
            Certifications
          </Link>
          <Link href="/admissions" onClick={() => setOpen(false)}>
            Admissions
          </Link>
          {isAuthenticated && (
            <Link
              href="/dashboard"
              className="text-blue-600 font-bold"
              onClick={() => setOpen(false)}
            >
              My Dashboard
            </Link>
          )}
        </nav>

        {/* Actions / Auth Area */}
        <div className="nav-actions">
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
                      <span>Browse Course Catalog</span>
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
            <>
              <Link className="login-link" href="/login">
                Log in <span>↗</span>
              </Link>
              <Link href="/courses" className="button button-primary nav-cta">
                Explore courses <span>↗</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
