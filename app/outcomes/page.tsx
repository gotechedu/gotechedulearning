import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  ShieldCheck,
  Building,
  CheckCircle2,
  Briefcase,
  Star,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Learner Outcomes & Placement Report | GoTechEdu Learning Hub",
  description:
    "Explore career outcomes, average salary hikes, transition case studies, and placement statistics for GoTechEdu academy graduates.",
};

const caseStudies = [
  {
    name: "Rohit Sharma",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    previousRole: "Manual QA Engineer (₹4.5 LPA)",
    currentRole: "Full-Stack Software Engineer (₹12.8 LPA)",
    company: "FinTech Platform",
    hike: "184% Salary Hike",
    program: "The Complete Full-Stack Next.js 15 & React Track",
    quote:
      "GoTechEdu transformed how I approach software. Instead of following tutorial steps, my mentor taught me system architecture, database optimization, and real Next.js server actions.",
  },
  {
    name: "Sneha Mukherjee",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    previousRole: "B.Tech Fresher (Looking for first tech job)",
    currentRole: "AI / ML Solutions Engineer (₹11.2 LPA)",
    company: "Enterprise Cloud Partner",
    hike: "Direct Campus Transition",
    program: "Applied Generative AI & Autonomous Agent Track",
    quote:
      "During my interview, the hiring team was impressed that I had already built and deployed a production multi-tenant RAG pipeline with vector embeddings and LangChain.",
  },
  {
    name: "Vikram Patel",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    previousRole: "Junior Linux Administrator (₹5.2 LPA)",
    currentRole: "Cloud DevOps & SRE Engineer (₹14.0 LPA)",
    company: "Global Logistics Tech",
    hike: "169% Salary Hike",
    program: "Multi-Cloud DevOps & Kubernetes Engineering",
    quote:
      "The hands-on capstone where we configured Terraform infrastructure, automated GitHub Actions, and managed Kubernetes clusters gave me the exact confidence I needed.",
  },
];

export default function Outcomes() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-slate-50 pt-10 sm:pt-16 pb-14 sm:pb-20 hero-mesh-radial border-b border-slate-200/80 font-sans">
        <div className="hero-grid-pattern absolute inset-0 opacity-60 pointer-events-none" />

        <div className="wrap relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-white/90 shadow-2xs text-xs font-semibold text-blue-700">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            <span>MEASURABLE CAREER ADVANCEMENT REPORT</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Progress You Can Feel.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Results You Can Show.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We don&apos;t measure success in certificates issued or videos watched. We measure it in tangible portfolio codebases, technical interview readiness, and life-changing salary increases.
          </p>
        </div>
      </section>

      {/* Verified Placement Statistics Grid */}
      <section className="wrap py-14 sm:py-20 font-sans">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <span className="font-heading text-4xl sm:text-5xl font-black text-blue-600 tracking-tight">
              94<span className="text-2xl text-blue-400">%</span>
            </span>
            <h3 className="font-heading text-base font-bold text-slate-900">
              Placement &amp; Transition Rate
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Graduates transitioned into software engineering roles within 6 months of course completion.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <span className="font-heading text-4xl sm:text-5xl font-black text-indigo-600 tracking-tight">
              120<span className="text-2xl text-indigo-400">%</span>
            </span>
            <h3 className="font-heading text-base font-bold text-slate-900">
              Average Salary Hike
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Reported compensation increase for working professionals upgrading their engineering stack.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <span className="font-heading text-4xl sm:text-5xl font-black text-cyan-600 tracking-tight">
              12k<span className="text-2xl text-cyan-400">+</span>
            </span>
            <h3 className="font-heading text-base font-bold text-slate-900">
              Active Alumni Network
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Global community of software engineers, cloud architects, and data scientists across 15+ countries.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <span className="font-heading text-4xl sm:text-5xl font-black text-amber-600 tracking-tight">
              4.92<span className="text-xl text-amber-400">/5</span>
            </span>
            <h3 className="font-heading text-base font-bold text-slate-900">
              Learner Satisfaction
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Rated across 2,400+ cohort evaluations, 1:1 mentor code audits, and curriculum ratings.
            </p>
          </div>
        </div>
      </section>

      {/* Real Career Transition Case Studies with Realistic Avatars */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16 sm:py-24 font-sans">
        <div className="wrap space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">VERIFIED ALUMNI STORIES</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              From Beginner to Hired Engineer.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Read how ambitious professionals took charge of their tech careers through GoTechEdu&apos;s architect-led bootcamps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  {/* Hike pill */}
                  <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                    {cs.hike}
                  </span>

                  {/* Quote */}
                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    &ldquo;{cs.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-slate-200 shrink-0">
                    <Image
                      src={cs.avatar}
                      alt={cs.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-xs min-w-0">
                    <strong className="text-slate-900 block text-sm truncate">{cs.name}</strong>
                    <span className="text-blue-600 font-semibold block truncate">{cs.currentRole}</span>
                    <span className="text-[11px] text-slate-400 block truncate">Previously: {cs.previousRole}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pillars of Dedicated Placement Assistance */}
      <section className="wrap py-16 sm:py-24 font-sans">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">THE PLACEMENT ENGINE</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            How We Support Your Job Search.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Our career placement cell works with you until you sign your dream offer letter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-3">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900">
              1. Resume &amp; LinkedIn Audit
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We optimize your resume keywords to bypass recruiter ATS filters and make your technical impact stand out immediately.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900">
              2. GitHub Portfolio Polish
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We ensure your repositories have clean READMEs, architectural diagrams, Docker configurations, and live demo links.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-3">
            <div className="h-10 w-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900">
              3. Mock Technical Interviews
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Practice live data structures, algorithm challenges, and system design rounds under real interview time constraints.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900">
              4. Direct Partner Referrals
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gain exclusive access to GoTechEdu hiring drives and direct referral connections into 350+ partner tech companies.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white py-14 sm:py-18 font-sans">
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300">
              YOUR STORY STARTS HERE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Write Your Career Transformation?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200">
              Explore our cohort schedule or apply for admission to start your journey.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition shadow-md active:scale-95"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-white border border-white/30 hover:bg-white/10 transition"
            >
              <span>Apply for Admission</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
