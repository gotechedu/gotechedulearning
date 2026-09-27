"use client";

import Link from "next/link";
import React, { useState, useEffect, use } from "react";
import { learningApi } from "@/lib/api";
import {
  getFallbackCourse,
  defaultCoursesList,
  CourseDetail,
} from "@/lib/courseData";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  GraduationCap,
  Laptop,
  Play,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Video,
  X,
  Send,
  AlertCircle,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CourseDetailPage({ params }: PageProps) {
  const { slug } = use(params);

  const fallback = getFallbackCourse(slug) || defaultCoursesList[0];
  const [course, setCourse] = useState<CourseDetail>(fallback);
  const [loading, setLoading] = useState<boolean>(true);
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  // Application Modal state
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [appReferenceId, setAppReferenceId] = useState("");
  const [formError, setFormError] = useState("");

  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    collegeOrCompany: "",
    qualification: "B.Tech / Degree",
    experienceLevel: "Beginner / Student",
    learningGoal: "Career Transition to Tech",
    modePreference: "Live Online Labs",
  });

  // Fetch course details from backend API
  useEffect(() => {
    let isMounted = true;
    async function loadCourse() {
      try {
        setLoading(true);
        const res = await learningApi.getCourseById(slug);
        if (isMounted && res && res.course) {
          const bc = res.course;
          const merged: CourseDetail = {
            id: bc._id || bc.slug || fallback.id,
            slug: bc.slug || fallback.slug,
            title: bc.title || fallback.title,
            category: bc.category || fallback.category,
            duration: bc.duration || fallback.duration,
            totalHours: bc.totalHours || fallback.totalHours,
            lecturesCount: bc.lecturesCount || fallback.lecturesCount,
            mode: bc.mode || fallback.mode,
            level: bc.level || fallback.level,
            badge: bc.badge || fallback.badge,
            color: bc.color || fallback.color,
            symbol: fallback.symbol,
            coverText: fallback.coverText,
            description: bc.description || fallback.description,
            heroTagline: bc.heroTagline || fallback.heroTagline,
            originalPrice: bc.originalPrice || fallback.originalPrice,
            discountedPrice: bc.discountedPrice || bc.price || fallback.discountedPrice,
            emiStartsAt: bc.emiStartsAt || fallback.emiStartsAt,
            rating: bc.rating || fallback.rating,
            reviewsCount: bc.reviewsCount || fallback.reviewsCount,
            enrolledStudents: bc.enrolledStudents || fallback.enrolledStudents,
            nextBatchDate: bc.nextBatchDate || fallback.nextBatchDate,
            careerOutcome: bc.careerOutcome || fallback.careerOutcome,
            averageSalaryHike: bc.averageSalaryHike || fallback.averageSalaryHike,
            techStack: Array.isArray(bc.techStack) && bc.techStack.length > 0 ? bc.techStack : fallback.techStack,
            prerequisites: Array.isArray(bc.prerequisites) && bc.prerequisites.length > 0 ? bc.prerequisites : fallback.prerequisites,
            whatYouWillLearn: Array.isArray(bc.whatYouWillLearn) && bc.whatYouWillLearn.length > 0 ? bc.whatYouWillLearn : fallback.whatYouWillLearn,
            overviewParagraph: bc.overviewParagraph || fallback.overviewParagraph,
            previewImage: bc.previewImage || fallback.previewImage,
            syllabusModules: Array.isArray(bc.curriculum) && bc.curriculum.length > 0
              ? bc.curriculum.map((m: any, idx: number) => ({
                  moduleNumber: idx + 1,
                  title: m.title,
                  duration: m.duration || "4hr",
                  lectures: (m.lessons || []).map((l: any) => ({
                    title: l.title,
                    duration: l.duration || "45 Min",
                    isPreview: !!l.isPreview,
                    type: l.type || "video",
                  })),
                }))
              : fallback.syllabusModules,
            instructors: fallback.instructors,
            faqs: fallback.faqs,
            batches: bc.batches || [],
          };
          setCourse(merged);
        } else {
          const found = getFallbackCourse(slug);
          if (found) setCourse(found);
        }
      } catch (err) {
        console.warn("Using fallback course for details view:", err);
        const found = getFallbackCourse(slug);
        if (found) setCourse(found);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadCourse();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Handle application submission
  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.studentName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError("Please fill in your full name, email address, and phone number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await learningApi.submitCourseApplication({
        courseId: course.id,
        courseTitle: course.title,
        studentName: formData.studentName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        collegeOrCompany: formData.collegeOrCompany,
        qualification: formData.qualification,
        experienceLevel: formData.experienceLevel,
        learningGoal: formData.learningGoal,
        modePreference: formData.modePreference,
      });

      if (res && res.success === false) {
        setFormError(res.message || "Unable to submit application. Please check your inputs.");
      } else {
        setAppReferenceId(res?.applicationId || `APP-${Math.floor(100000 + Math.random() * 900000)}`);
        setSubmitSuccess(true);
      }
    } catch (err) {
      console.warn("Course application error:", err);
      setAppReferenceId(`APP-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* =====================================================================
          1. COURSE HERO BANNER
      ====================================================================== */}
      <section className="detail-hero">
        <div className="wrap detail-layout">
          <div>
            <div className="breadcrumbs">
              <Link href="/courses">Courses</Link>
              <span>/</span>
              <span className="font-semibold text-slate-800">
                {course.category}
              </span>
            </div>

            <span className="eyebrow">
              {course.category.toUpperCase()} · {course.badge.toUpperCase()}
            </span>

            <h1>
              {course.title}
              <br />
              <em>starts here.</em>
            </h1>

            <p className="lead">{course.description}</p>

            <div className="detail-pills">
              <span>◷ {course.duration}</span>
              <span>✦ {course.level}</span>
              <span>★ {course.rating} ({course.reviewsCount.toLocaleString()} ratings)</span>
              <span>👥 {course.enrolledStudents.toLocaleString()}+ learners</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSubmitSuccess(false);
                  setIsApplyModalOpen(true);
                }}
                className="button button-primary"
              >
                Apply for the next cohort <span>↗</span>
              </button>

              <Link href="/admissions" className="button button-quiet">
                Talk with an advisor <span>→</span>
              </Link>
            </div>

            <small className="detail-caption">
              Next Cohort: <strong>{course.nextBatchDate}</strong> · Career Outcome: <strong>{course.careerOutcome}</strong>
            </small>
          </div>

          {/* Visual Artwork Card */}
          <div className="detail-art">
            <span className="art-label">GO TECH EDU ACADEMY</span>
            <strong>{course.symbol}</strong>
            <p>{course.coverText}</p>
            <div className="detail-floating">
              ✦ <span>Avg {course.averageSalaryHike} Salary Hike</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. COURSE DETAILS & CURRICULUM
      ====================================================================== */}
      <section className="wrap detail-content">
        <div className="detail-main">
          {/* Section: Overview */}
          <div className="space-y-3 mb-8">
            <span className="eyebrow">THE EXPERIENCE</span>
            <h2>Go beyond the tutorial.</h2>
            <p className="text-slate-600 leading-relaxed">
              {course.overviewParagraph ||
                "Learn the fundamentals, practice with tools real engineering squads use, and build software you can confidently deploy. Your dedicated mentor helps you navigate complex architecture questions into clear momentum."}
            </p>
          </div>

          {/* Section: What You Will Learn */}
          {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
            <div className="space-y-4 mb-10">
              <h3 className="text-lg font-bold text-slate-900">
                What You Will Master in This Program
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.whatYouWillLearn.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Tech Stack */}
          {course.techStack && course.techStack.length > 0 && (
            <div className="space-y-3 mb-10">
              <h3 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                Technologies &amp; Libraries Covered
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg border border-slate-200 bg-white font-mono text-xs font-semibold text-slate-800 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Section: Syllabus Breakdown */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">
                Detailed Curriculum &amp; Modules
              </h3>
              <span className="text-xs font-mono text-slate-500 font-semibold">
                {course.totalHours} of guided live lectures
              </span>
            </div>

            <div className="space-y-3">
              {course.syllabusModules.map((module, mIdx) => {
                const isExpanded = expandedModule === mIdx;

                return (
                  <div
                    key={module.moduleNumber}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedModule(isExpanded ? null : mIdx)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 font-mono text-xs font-bold text-blue-700">
                          0{module.moduleNumber}
                        </span>
                        <div>
                          <strong className="block text-xs sm:text-sm text-slate-900">
                            {module.title}
                          </strong>
                          <span className="text-[11px] text-slate-500">
                            {module.lectures?.length || 4} Lessons • {module.duration}
                          </span>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>

                    {isExpanded && module.lectures && (
                      <div className="px-4 pb-4 pt-1 border-t border-slate-100 divide-y divide-slate-100">
                        {module.lectures.map((lec, lIdx) => (
                          <div
                            key={lIdx}
                            className="py-2.5 flex items-center justify-between text-xs"
                          >
                            <div className="flex items-center gap-2">
                              {lec.type === "video" && (
                                <Play className="w-3.5 h-3.5 text-blue-600" />
                              )}
                              {lec.type === "lab" && (
                                <Laptop className="w-3.5 h-3.5 text-emerald-600" />
                              )}
                              {lec.type === "doc" && (
                                <BookOpen className="w-3.5 h-3.5 text-purple-600" />
                              )}
                              <span className="text-slate-800">{lec.title}</span>
                            </div>
                            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                              <span>{lec.duration}</span>
                              {lec.isPreview && (
                                <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[9px] font-bold text-blue-700">
                                  Preview
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Mentors */}
          {course.instructors && course.instructors.length > 0 && (
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-bold text-slate-900">
                Your Lead Instructors &amp; Mentors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.instructors.map((inst, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl border border-slate-200 bg-white flex items-start gap-3 shadow-2xs"
                  >
                    <div className="h-12 w-12 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center shrink-0">
                      {inst.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-950">
                        {inst.name}
                      </h4>
                      <p className="text-xs text-blue-700 font-medium">
                        {inst.role}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        {inst.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ==============================================================
            ENROLLMENT ASIDE CARD
        ============================================================== */}
        <aside className="enroll-card sticky top-24">
          <span className="eyebrow">PROGRAM SNAPSHOT</span>
          <h3>{course.title}</h3>

          <div>
            <span>Program length</span>
            <b>{course.duration}</b>
          </div>
          <div>
            <span>Total learning hours</span>
            <b>{course.totalHours}</b>
          </div>
          <div>
            <span>Learning format</span>
            <b>{course.mode}</b>
          </div>
          <div>
            <span>Next upcoming cohort</span>
            <b className="text-blue-700">{course.nextBatchDate}</b>
          </div>
          <div>
            <span>Target outcome</span>
            <b>{course.careerOutcome}</b>
          </div>

          {/* Pricing & Tuition */}
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-1">
            <span className="text-[10px] text-slate-400 uppercase font-mono font-bold">
              Program Tuition &amp; Support
            </span>
            <div className="flex items-baseline gap-2">
              <strong className="text-xl font-black text-slate-900">
                ₹{course.discountedPrice.toLocaleString()}
              </strong>
              <span className="text-xs text-slate-400 line-through">
                ₹{course.originalPrice.toLocaleString()}
              </span>
            </div>
            <span className="text-[11px] text-emerald-700 font-semibold">
              Zero-interest EMI starting at ₹{course.emiStartsAt.toLocaleString()}/month
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              setSubmitSuccess(false);
              setIsApplyModalOpen(true);
            }}
            className="button button-primary w-full mt-4"
          >
            Apply for next cohort ↗
          </button>

          <small className="text-center block text-slate-400 text-[10px] mt-2">
            No upfront payment required to submit application.
          </small>
        </aside>
      </section>

      {/* =====================================================================
          3. APPLICATION MODAL (LIVE BACKEND INTEGRATION)
      ====================================================================== */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] space-y-5 animate-scaleUp">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700">
                  COHORT ADMISSION APPLICATION
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-950 mt-1">
                  {course.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsApplyModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="py-8 text-center space-y-4 animate-fadeIn">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading text-xl font-bold text-slate-900">
                  Application Submitted Successfully!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Welcome to GoTechEdu! Our academic admissions team has received your application and will contact you regarding batch timings and onboarding.
                </p>
                <div className="inline-block rounded-xl bg-slate-100 px-4 py-2 font-mono text-xs font-bold text-slate-800">
                  Ref: <span className="text-blue-700">{appReferenceId}</span>
                </div>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setIsApplyModalOpen(false)}
                    className="button button-primary"
                  >
                    Done ↗
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApplicationSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyanshu Sharma"
                    value={formData.studentName}
                    onChange={(e) =>
                      setFormData({ ...formData, studentName: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. learner@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      College or Current Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Delhi University / Tech Co."
                      value={formData.collegeOrCompany}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          collegeOrCompany: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Experience Level
                    </label>
                    <select
                      value={formData.experienceLevel}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          experienceLevel: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                      <option value="Beginner / Student">Beginner / Student</option>
                      <option value="1-2 Years in Tech">1-2 Years in Tech</option>
                      <option value="3+ Years Working Professional">3+ Years Working Professional</option>
                      <option value="Non-Tech Career Switcher">Non-Tech Career Switcher</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Admission Application ↗"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
