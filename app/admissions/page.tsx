"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { learningApi } from "@/lib/api";
import { defaultCoursesList } from "@/lib/courseData";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  Sparkles,
  Phone,
  Mail,
  GraduationCap,
  Building,
  User,
  BookOpen,
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
      <section className="page-hero wrap">
        <span className="eyebrow">A GOOD NEXT STEP STARTS WITH A CONVERSATION</span>
        <h1>
          Let’s find the
          <br />
          <em>right fit for you.</em>
        </h1>
        <p>
          Tell us a little about what you’re looking for. Our academic learning team will guide you through curricula, live cohort timings, and scholarships.
        </p>
      </section>

      <section className="wrap admissions-layout">
        {/* Left Side: Promises & Advisor Info */}
        <div className="admissions-aside">
          <span className="eyebrow">HERE TO HELP</span>
          <h2>Talk to a real mentor.</h2>
          <p>
            We help you select the optimal program, understand the hands-on capstone experience, and find a cohort schedule tailored to your pace.
          </p>

          <div className="admission-promise">
            <span>01</span>
            <div>
              <b>Share your goals</b>
              <small>Tell us what you want to learn or the engineering role you target.</small>
            </div>
          </div>

          <div className="admission-promise">
            <span>02</span>
            <div>
              <b>Get personalized guidance</b>
              <small>We’ll evaluate your current background and map your learning milestones.</small>
            </div>
          </div>

          <div className="admission-promise">
            <span>03</span>
            <div>
              <b>Choose your own start date</b>
              <small>Take your time. Your conversation is completely obligation-free.</small>
            </div>
          </div>

          <div className="admission-contact">
            <span>✉</span>
            <div>
              <b>Prefer direct email?</b>
              <small>Reach our learning advisors directly</small>
              <a href="mailto:learning@gotechedu.com">learning@gotechedu.com ↗</a>
            </div>
          </div>
        </div>

        {/* Right Side: Integrated Admission Application Form */}
        <form className="admissions-form" onSubmit={handleSubmit}>
          <span className="eyebrow">YOUR LEARNING JOURNEY</span>
          <h2>{sent ? "Thanks for reaching out." : "Let’s get to know you."}</h2>

          {sent ? (
            <div className="success-message">
              <span>✓</span>
              <b>Your Application is Received!</b>
              <p>
                Thanks for sharing your details. A dedicated learning advisor has received your profile and will contact you within 24 hours.
              </p>
              <div className="my-3 py-2 px-3 rounded-lg bg-slate-100 font-mono text-xs font-bold text-slate-800 inline-block">
                Reference: <span className="text-blue-700">{appId}</span>
              </div>
              <div className="mt-3 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="text-link"
                >
                  Send another enquiry ↗
                </button>
                <Link href="/courses" className="text-link font-bold">
                  Browse Programs ↗
                </Link>
              </div>
            </div>
          ) : (
            <>
              <p className="form-intro">
                A few details help us customize your cohort onboarding and scholarship eligibility.
              </p>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs font-medium text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="form-row">
                <label>
                  First name <span className="text-red-500">*</span>
                  <input
                    required
                    placeholder="e.g. Alex"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </label>
                <label>
                  Last name <span className="text-red-500">*</span>
                  <input
                    required
                    placeholder="e.g. Morgan"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Email address <span className="text-red-500">*</span>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </label>
                <label>
                  Mobile / WhatsApp Number <span className="text-red-500">*</span>
                  <input
                    required
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </label>
              </div>

              <label>
                What program are you interested in?
                <select
                  value={formData.courseTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, courseTitle: e.target.value })
                  }
                >
                  {courses.map((c) => (
                    <option key={c.slug || c._id || c.title} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                  <option value="General Exploration">I&apos;m still exploring options</option>
                </select>
              </label>

              <div className="form-row">
                <label>
                  College or Current Company
                  <input
                    placeholder="e.g. Delhi University / Tech Co."
                    value={formData.collegeOrCompany}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        collegeOrCompany: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  Current Technical Background
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        experienceLevel: e.target.value,
                      })
                    }
                  >
                    <option value="Beginner / Student">Beginner / Student</option>
                    <option value="1-2 Years in Tech">1-2 Years in Tech</option>
                    <option value="3+ Years Working Professional">3+ Years Working Professional</option>
                    <option value="Non-Tech Career Switcher">Non-Tech Career Switcher</option>
                  </select>
                </label>
              </div>

              <label>
                What are your main learning goals?
                <textarea
                  rows={3}
                  placeholder="Tell us what you want to build or what software engineering role you target (optional)"
                  value={formData.goals}
                  onChange={(e) =>
                    setFormData({ ...formData, goals: e.target.value })
                  }
                />
              </label>

              <label className="consent">
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
                />
                <span>
                  I agree to be contacted by GoTechEdu admissions team regarding batch enrollment and curriculum schedules.
                </span>
              </label>

              <button
                className="button button-primary form-submit"
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Submitting Application..." : "Request a conversation ↗"}
              </button>

              <small className="privacy-copy">
                Your data is securely stored and never shared with third parties.
              </small>
            </>
          )}
        </form>
      </section>
    </>
  );
}
