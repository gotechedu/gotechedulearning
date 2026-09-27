"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { learningApi } from "@/lib/api";
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  GraduationCap,
  Laptop,
  Play,
  Sparkles,
  TrendingUp,
  User,
  Video,
  Award,
  ArrowRight,
  ShieldCheck,
  FileText,
} from "lucide-react";

export default function DashboardPage() {
  const { user, token, isAuthenticated, loginAsDemoLearner } = useAuth();
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch real enrollments from backend
  useEffect(() => {
    async function fetchEnrollments() {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const res = await learningApi.getMyEnrollments(token);
        if (res && res.enrollments && Array.isArray(res.enrollments)) {
          setEnrollments(res.enrollments);
        }
      } catch (err) {
        console.warn("Could not load enrollments from backend:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEnrollments();
  }, [token]);

  // If user has no enrollments from backend, provide rich active learner data
  const activeCourses = enrollments.length > 0 ? enrollments : (user?.enrolledCourses || [
    {
      courseTitle: "The Complete Full-Stack Next.js 15 & React: From Zero To Expert!",
      category: "Full-Stack Web Development",
      progressPercentage: 42,
      status: "Active",
      nextClass: {
        title: "Live Architecture Lab: Server Actions & Next.js 15 Edge Caching",
        date: "Tomorrow, 7:00 PM IST",
        meetUrl: "https://meet.google.com/gte-arch-lab",
      },
      instructor: "Aditya Verma (Lead Frontend Architect)",
    },
    {
      courseTitle: "Generative AI & Agentic Systems Engineering: Zero To Architect!",
      category: "Artificial Intelligence",
      progressPercentage: 18,
      status: "Active",
      nextClass: {
        title: "Autonomous Tool Calling & Multi-Agent Swarms with LangGraph",
        date: "Thursday, 8:00 PM IST",
        meetUrl: "https://meet.google.com/gte-ai-lab",
      },
      instructor: "Dr. Vikram Sharma (Head of AI Research)",
    },
  ]);

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-white border border-slate-200/90 rounded-3xl p-8 text-center space-y-5 shadow-xs">
          <div className="h-16 w-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900">
              Sign In To View Your Dashboard
            </h2>
            <p className="text-xs text-slate-500">
              Access your enrolled programs, live cohorts, assignment submissions, and progress telemetry.
            </p>
          </div>
          <div className="pt-2 flex flex-col gap-2.5">
            <Link
              href="/login"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800 transition"
            >
              <span>Sign In to Learner Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              type="button"
              onClick={loginAsDemoLearner}
              className="w-full py-2.5 px-4 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold hover:bg-blue-100 transition cursor-pointer"
            >
              ⚡ Instant Demo Learner Preview
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 sm:py-14 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* ==============================================================
            1. LEARNER WELCOME HERO BANNER
        ============================================================== */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-[#142b48] to-blue-950 p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="space-y-2 relative z-10 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-300">
                Active Student Status • Cohort 2026
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Welcome Back, {user.name}!
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              You are currently enrolled in {activeCourses.length} industry-led engineering programs. Your next live interactive session starts soon.
            </p>
          </div>

          <div className="shrink-0 relative z-10 flex flex-wrap items-center gap-3">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm hover:bg-slate-100 transition"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Explore Programs</span>
            </Link>
          </div>
        </div>

        {/* ==============================================================
            2. KEY LEARNER METRICS GRID
        ============================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase font-mono">
                Enrolled Programs
              </span>
              <BookOpen className="w-4 h-4 text-blue-600" />
            </div>
            <p className="text-2xl font-black text-slate-900">
              {activeCourses.length}
            </p>
            <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">
              Active Curriculum Access
            </span>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase font-mono">
                Overall Progress
              </span>
              <TrendingUp className="w-4 h-4 text-indigo-600" />
            </div>
            <p className="text-2xl font-black text-slate-900">38%</p>
            <span className="text-[11px] text-blue-600 font-semibold mt-1 block">
              Ahead of cohort pace
            </span>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase font-mono">
                Live Attendance
              </span>
              <Video className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-black text-slate-900">94%</p>
            <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">
              Excellent participation
            </span>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase font-mono">
                Certifications
              </span>
              <Award className="w-4 h-4 text-amber-600" />
            </div>
            <p className="text-2xl font-black text-slate-900">1 Earned</p>
            <span className="text-[11px] text-amber-700 font-semibold mt-1 block">
              1 Capstone In-Review
            </span>
          </div>
        </div>

        {/* ==============================================================
            3. ACTIVE ENROLLED COURSES
        ============================================================== */}
        <div className="space-y-4" id="courses">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Your Active Enrolled Courses
              </h2>
              <p className="text-xs text-slate-500">
                Continue lessons, complete assignments, and join live laboratory sessions.
              </p>
            </div>
            <Link
              href="/courses"
              className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
            >
              <span>Browse catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCourses.map((c: any, idx: number) => {
              const title = c.course?.title || c.courseTitle || "Enrolled Course";
              const progress = c.progressPercentage || (idx === 0 ? 42 : 18);
              const instructor = c.course?.instructor || c.instructor || "GoTechEdu Principal Architect";

              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between space-y-5 hover:border-blue-300 hover:shadow-md transition"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-blue-700 border border-blue-100">
                        Active Cohort
                      </span>
                      <span className="text-xs font-bold text-slate-900 font-mono">
                        {progress}% Complete
                      </span>
                    </div>

                    <h3 className="font-heading text-base sm:text-lg font-bold text-slate-950 leading-snug">
                      {title}
                    </h3>

                    <p className="text-xs text-slate-500 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>Mentor: {typeof instructor === "string" ? instructor : instructor?.name || "GoTechEdu Lead"}</span>
                    </p>

                    {/* Progress Bar */}
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Next Class Alert */}
                  <div className="p-3.5 rounded-2xl border border-slate-100 bg-slate-50/70 text-xs text-slate-700 space-y-1">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span className="flex items-center gap-1 text-blue-700">
                        <Video className="w-3.5 h-3.5 text-blue-600" /> Live Session
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        Tomorrow, 7:00 PM IST
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Interactive Architecture Lab: Server Actions &amp; Next.js 15
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center gap-3">
                    <Link
                      href="/courses/fullstack-nextjs"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Continue Learning</span>
                    </Link>
                    <a
                      href="https://meet.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
                      title="Join Meeting"
                    >
                      <Video className="w-4 h-4 text-emerald-600" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==============================================================
            4. LEARNING RESOURCES & CERTIFICATES WIDGET
        ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Upcoming Live Cohort Timetable
            </h3>
            <div className="divide-y divide-slate-100 text-xs">
              <div className="py-3 flex items-center justify-between">
                <div>
                  <strong className="block text-slate-900">
                    Next.js 15 Edge SSR &amp; Streaming Architecture
                  </strong>
                  <span className="text-slate-500">Full-Stack Development • Cohort A</span>
                </div>
                <span className="font-mono text-blue-700 font-bold bg-blue-50 px-2.5 py-1 rounded-lg">
                  Tomorrow 7:00 PM
                </span>
              </div>

              <div className="py-3 flex items-center justify-between">
                <div>
                  <strong className="block text-slate-900">
                    Enterprise RAG &amp; Vector Databases with ChromaDB
                  </strong>
                  <span className="text-slate-500">Data &amp; AI • Cohort B</span>
                </div>
                <span className="font-mono text-indigo-700 font-bold bg-indigo-50 px-2.5 py-1 rounded-lg">
                  Thursday 8:00 PM
                </span>
              </div>

              <div className="py-3 flex items-center justify-between">
                <div>
                  <strong className="block text-slate-900">
                    Docker Container Internals &amp; Kubernetes Pod Autoscaling
                  </strong>
                  <span className="text-slate-500">Cloud &amp; DevOps • Cohort C</span>
                </div>
                <span className="font-mono text-purple-700 font-bold bg-purple-50 px-2.5 py-1 rounded-lg">
                  Saturday 11:00 AM
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Verified Credentials &amp; Certifications
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete your capstone lab evaluations to unlock verifiable blockchain-backed course completion credentials.
              </p>
            </div>

            <Link
              href="/certifications"
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-xs font-bold text-slate-700 transition"
            >
              <span>View Certificate Showcase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
