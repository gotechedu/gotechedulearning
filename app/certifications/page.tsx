"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  Award,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Search,
  ExternalLink,
  Sparkles,
  QrCode,
  FileCheck,
  Building,
} from "lucide-react";

export default function Certifications() {
  const [certId, setCertId] = useState("");
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) return;

    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationResult({
        certId: certId.trim().toUpperCase(),
        studentName: "Alex Morgan",
        courseTitle: "The Complete Full-Stack Next.js 15 & React Engineering Track",
        issueDate: "September 2026",
        status: "Verified & Valid",
        score: "Grade A+ (96%)",
        issuer: "GoTechEdu Academic Council",
      });
    }, 600);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-slate-50 pt-10 sm:pt-16 pb-14 sm:pb-20 hero-mesh-radial border-b border-slate-200/80 font-sans">
        <div className="hero-grid-pattern absolute inset-0 opacity-60 pointer-events-none" />

        <div className="wrap relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Hero Copy */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-white/90 shadow-2xs text-xs font-semibold text-blue-700">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>INDUSTRY-RECOGNIZED CREDENTIALS</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              Make Your Hard Work{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Official &amp; Verifiable.
              </span>
            </h1>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Complete your technical bootcamp, defend your capstone codebase, and earn a cryptographically verifiable certificate that demonstrates real engineering capability to recruiters worldwide.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition shadow-md active:scale-95"
              >
                <span>Find a Certificate Program</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#verify-tool"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 transition shadow-2xs"
              >
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span>Verify Credential ID</span>
              </a>
            </div>
          </div>

          {/* Certificate Mockup Preview */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="certificate shadow-2xl rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
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
        </div>
      </section>

      {/* Instant Verification Lookup Tool */}
      <section className="bg-white border-b border-slate-200 py-12 font-sans" id="verify-tool">
        <div className="wrap max-w-2xl mx-auto text-center space-y-4">
          <span className="eyebrow">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            INSTANT CREDENTIAL VERIFICATION
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
            Verify a GoTechEdu Certificate
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Enter the unique Certificate Identification Code (e.g. <code>GTE-2026-FS094</code>) printed on the diploma or shared via candidate portfolio.
          </p>

          <form onSubmit={handleVerify} className="flex gap-2 max-w-md mx-auto pt-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                placeholder="Enter Certificate ID..."
                required
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <button
              type="submit"
              disabled={isVerifying}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-xs disabled:opacity-50"
            >
              {isVerifying ? "Verifying..." : "Verify"}
            </button>
          </form>

          {/* Verification Result Card */}
          {verificationResult && (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 text-left space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-emerald-200/80 pb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="font-heading font-bold text-slate-900 text-sm">
                    Authentic Verified Credential
                  </span>
                </div>
                <span className="rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold px-2.5 py-0.5">
                  STATUS: {verificationResult.status}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 text-[10px] block">Student Name</span>
                  <strong className="text-slate-900">{verificationResult.studentName}</strong>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">Certificate ID</span>
                  <strong className="text-slate-900 font-mono">{verificationResult.certId}</strong>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">Evaluation Score</span>
                  <strong className="text-emerald-700 font-bold">{verificationResult.score}</strong>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-500 text-[10px] block">Program Completed</span>
                  <strong className="text-slate-900">{verificationResult.courseTitle}</strong>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">Issue Date</span>
                  <strong className="text-slate-900">{verificationResult.issueDate}</strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4-Step Accreditation Process */}
      <section className="wrap py-16 sm:py-24 font-sans">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">RIGOROUS STANDARDS</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Earned Through Production Demonstration.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Our certificates are respected by top tech employers because they cannot be gained by passively skipping through videos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-mono font-bold text-xs border border-blue-200">
              01
            </span>
            <h3 className="font-heading text-base font-bold text-slate-900">
              Complete All Modules
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Work through hands-on coding labs, weekly assignments, and maintain an 85%+ attendance across live sessions.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 font-mono font-bold text-xs border border-indigo-200">
              02
            </span>
            <h3 className="font-heading text-base font-bold text-slate-900">
              Build Production Capstone
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deploy a full-stack, AI, cloud, or cybersecurity system to live cloud infrastructure with real user testing.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 font-mono font-bold text-xs border border-cyan-200">
              03
            </span>
            <h3 className="font-heading text-base font-bold text-slate-900">
              1:1 Architect Review
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Defend your system architecture, code quality, and security considerations in a 1:1 viva with a senior tech lead.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600 font-mono font-bold text-xs border border-amber-200">
              04
            </span>
            <h3 className="font-heading text-base font-bold text-slate-900">
              Official Credential Issued
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Receive your tamper-proof certificate, cryptographic hash, and direct LinkedIn profile one-click share link.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white py-14 sm:py-18 font-sans">
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300">
              READY WHEN YOU ARE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Build Skills Worth Celebrating.
            </h2>
            <p className="text-xs sm:text-sm text-slate-200">
              Find an accredited certificate program and start earning credentials that distinguish your resume.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition shadow-md active:scale-95"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
