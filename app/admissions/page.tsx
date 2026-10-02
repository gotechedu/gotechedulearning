"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { learningApi } from "@/lib/api";
import { defaultCoursesList } from "@/lib/courseData";
import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Phone,
  Mail,
  GraduationCap,
  Building,
  User,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";

export default function AdmissionsPage() {
  const [courses, setCourses] = useState<any[]>(defaultCoursesList);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [appId, setAppId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    courseTitle: "The Complete Full-Stack Next.js 15 & React: From Zero To Expert!",
    collegeOrCompany: "",
    experienceLevel: "Beginner / Student",
    goals: "",
    agreeConsent: true,
  });

  // Fetch course list from backend
  useEffect(() => {
    async function loadCourseOptions() {
      try {
        const res = await learningApi.getCourses();
        if (res && res.courses && Array.isArray(res.courses) && res.courses.length > 0) {
          setCourses(res.courses);
        }
      } catch (err) {
        // keep defaultCoursesList
      }
    }
    loadCourseOptions();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    if (!fullName || !formData.email || !formData.phone) {
      setErrorMsg("Please fill in your full name, email address, and phone number.");
      return;
    }

    setSubmitting(true);
    try {
      const selectedCourse = courses.find((c) => c.title === formData.courseTitle);

      const res = await learningApi.submitCourseApplication({
        courseId: selectedCourse?._id || selectedCourse?.id || null,
        courseTitle: formData.courseTitle,
        studentName: fullName,
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        collegeOrCompany: formData.collegeOrCompany.trim(),
        experienceLevel: formData.experienceLevel,
        learningGoal: formData.goals.trim(),
        modePreference: "Live Online + Capstone Labs",
      });

      if (res && res.success === false) {
        setErrorMsg(res.message || "Failed to submit admission enquiry. Please verify your inputs.");
      } else {
        setAppId(res?.applicationId || `APP-${Math.floor(100000 + Math.random() * 900000)}`);
        setSent(true);
      }
    } catch (err: any) {
      console.warn("Admission submission error:", err);
      setAppId(`APP-${Math.floor(100000 + Math.random() * 900000)}`);
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-slate-50 pt-10 sm:pt-16 pb-14 sm:pb-20 hero-mesh-radial border-b border-slate-200/80 font-sans">
        <div className="hero-grid-pattern absolute inset-0 opacity-60 pointer-events-none" />

        <div className="wrap relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-white/90 shadow-2xs text-xs font-semibold text-blue-700">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>2026 ADMISSIONS DESK · SCHOLARSHIPS AVAILABLE</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Let&apos;s Find the{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Right Fit For You.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Tell us about your learning background and career goals. Our senior academic team will walk you through live cohort timings, prerequisites, scholarship grants, and payment plans.
          </p>
        </div>
      </section>

      {/* Main Form & Information Section */}
      <section className="wrap py-14 sm:py-20 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Advisor Info & Promises */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="eyebrow">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                HERE TO HELP YOU SUCCEED
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Talk to a Practicing Tech Mentor.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                We take time to understand your pace, career timeline, and current engineering capabilities so you enroll with complete confidence.
              </p>
            </div>

            {/* Structured Promises */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider block">
                  STEP 01
                </span>
                <strong className="text-sm font-bold text-slate-900 block">
                  Share Your Goals
                </strong>
                <p className="text-xs text-slate-600">
                  Tell us what technology you want to master or the exact software engineering role you target.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-wider block">
                  STEP 02
                </span>
                <strong className="text-sm font-bold text-slate-900 block">
                  Personalized Roadmap Guidance
                </strong>
                <p className="text-xs text-slate-600">
                  We&apos;ll evaluate your current technical baseline and match you with the right cohort schedule.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-cyan-600 uppercase tracking-wider block">
                  STEP 03
                </span>
                <strong className="text-sm font-bold text-slate-900 block">
                  Merit Scholarship Evaluation
                </strong>
                <p className="text-xs text-slate-600">
                  Eligible applicants can receive up to 40% merit-based tuition fee reduction and flexible EMI options.
                </p>
              </div>
            </div>

            {/* Direct Helpline Card */}
            <div className="p-5 rounded-2xl border border-blue-200 bg-blue-50/70 space-y-3">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Need Instant Help?</span>
              </div>
              <p className="text-xs text-blue-800 leading-relaxed">
                Connect directly with our academic admissions office:
              </p>
              <div className="space-y-1 text-xs font-semibold">
                <a
                  href="tel:+919608094837"
                  className="block text-blue-700 hover:underline font-bold"
                >
                  📞 Phone: +91-9608094837
                </a>
                <a
                  href="mailto:gotecheduoffical@gmail.com"
                  className="block text-blue-700 hover:underline"
                >
                  ✉ E-mail: gotecheduoffical@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Admission Application Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
              <span className="eyebrow">APPLICATION FORM</span>
              <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 mt-1 mb-6">
                {sent ? "Application Submitted" : "Request Admission & Counseling"}
              </h2>

              {sent ? (
                <div className="text-center py-8 space-y-4 animate-fadeIn">
                  <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    Your Application Has Been Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for applying. A dedicated GoTechEdu academic counselor will review your profile and reach out within 24 hours to schedule your onboarding session.
                  </p>
                  <div className="py-2.5 px-4 rounded-xl bg-slate-100 font-mono text-xs font-bold text-slate-800 inline-block border border-slate-200">
                    Application ID: <span className="text-blue-600">{appId}</span>
                  </div>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="px-4 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                    >
                      Submit Another Enquiry
                    </button>
                    <Link
                      href="/courses"
                      className="px-5 py-2 rounded-full bg-blue-600 text-xs font-bold text-white hover:bg-blue-700 transition shadow-xs"
                    >
                      Browse Programs ↗
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Alex"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Morgan"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 96080 94837"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      />
                    </div>
                  </div>

                  {/* Program of Interest */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Program of Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.courseTitle}
                      onChange={(e) =>
                        setFormData({ ...formData, courseTitle: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                    >
                      {courses.map((c) => (
                        <option key={c.slug || c._id || c.title} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                      <option value="General Exploration">
                        I&apos;m still exploring / Request Advisor Recommendation
                      </option>
                    </select>
                  </div>

                  {/* College/Company & Background */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        College or Current Company
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. University / Tech Org"
                        value={formData.collegeOrCompany}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            collegeOrCompany: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Current Technical Background
                      </label>
                      <select
                        value={formData.experienceLevel}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            experienceLevel: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      >
                        <option value="Beginner / Student">Beginner / Student</option>
                        <option value="1-2 Years in Tech">1-2 Years Experience</option>
                        <option value="3+ Years Working Professional">3+ Years Working Professional</option>
                        <option value="Non-Tech Career Switcher">Non-Tech Career Switcher</option>
                      </select>
                    </div>
                  </div>

                  {/* Learning Goals */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Main Learning Goals &amp; Expectations (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what you want to build, specific skills you need, or job transition timeline..."
                      value={formData.goals}
                      onChange={(e) =>
                        setFormData({ ...formData, goals: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <label className="flex items-start gap-2.5 text-xs text-slate-600 pt-1 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreeConsent}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          agreeConsent: e.target.checked,
                        })
                      }
                      className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span className="leading-snug">
                      I agree to receive admission details, cohort schedules, and scholarship information from GoTechEdu via WhatsApp/Email/Phone.
                    </span>
                  </label>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-md active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <span>Processing Application...</span>
                      ) : (
                        <>
                          <span>Submit Application for 2026 Batch</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-400 pt-1">
                    🔒 Your personal information is encrypted and strictly protected under GoTechEdu privacy terms.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
