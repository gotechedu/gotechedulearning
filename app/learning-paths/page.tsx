import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  ArrowRight,
  Code2,
  Cpu,
  Cloud,
  ShieldCheck,
  TrendingUp,
  Laptop,
  Briefcase,
  Sparkles,
  Phone,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Career Learning Paths | GoTechEdu Learning Hub",
  description:
    "Follow guided multi-month technology learning paths in Full-Stack Engineering, Generative AI, Cloud DevOps, and Cybersecurity to reach your next career milestone.",
};

const paths = [
  {
    n: "01",
    icon: <Code2 className="w-5 h-5 text-blue-600" />,
    iconBg: "bg-blue-50 border-blue-200 text-blue-600",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    title: "Full-Stack Software Architect Track",
    copy: "Go from fundamental programming principles to architecting and deploying scalable enterprise web applications.",
    skills: ["Next.js 15", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Docker", "CI/CD"],
    duration: "6–8 Months",
    targetRole: "Full-Stack Software Engineer / Frontend Architect",
    salaryHike: "₹8 – 24 LPA",
    slug: "fullstack-nextjs",
    modulesCount: "12 Modules · 120+ Hrs",
  },
  {
    n: "02",
    icon: <Cpu className="w-5 h-5 text-purple-600" />,
    iconBg: "bg-purple-50 border-purple-200 text-purple-600",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
    title: "Applied Generative AI & Autonomous Agents",
    copy: "Build production-ready LLM pipelines, Retrieval-Augmented Generation (RAG) architectures, and autonomous AI agents.",
    skills: ["Python", "PyTorch", "LangChain", "Vector DBs", "RAG", "Agent Swarms", "Fine-tuning"],
    duration: "7–9 Months",
    targetRole: "AI Engineer / LLM Solutions Architect",
    salaryHike: "₹12 – 32 LPA",
    slug: "ai-machine-learning",
    modulesCount: "14 Modules · 140+ Hrs",
  },
  {
    n: "03",
    icon: <Cloud className="w-5 h-5 text-sky-600" />,
    iconBg: "bg-sky-50 border-sky-200 text-sky-600",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    title: "Multi-Cloud DevOps & Site Reliability (SRE)",
    copy: "Master automated multi-cloud infrastructure, container orchestration with Kubernetes, and robust CI/CD pipelines.",
    skills: ["AWS Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"],
    duration: "5–7 Months",
    targetRole: "Cloud Architect / DevOps Engineer / SRE",
    salaryHike: "₹10 – 28 LPA",
    slug: "cloud-devops",
    modulesCount: "10 Modules · 100+ Hrs",
  },
  {
    n: "04",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    iconBg: "bg-emerald-50 border-emerald-200 text-emerald-600",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    title: "Enterprise Cybersecurity Defense & SOC Operations",
    copy: "Develop hands-on capabilities across defensive operations, threat hunting, vulnerability scanning, and zero-trust security.",
    skills: ["Network Security", "Threat Hunting", "SIEM Tools", "OWASP Top 10", "Pen Testing"],
    duration: "5–6 Months",
    targetRole: "Cybersecurity Analyst / SOC Engineer",
    salaryHike: "₹8 – 22 LPA",
    slug: "cybersecurity",
    modulesCount: "10 Modules · 90+ Hrs",
  },
  {
    n: "05",
    icon: <TrendingUp className="w-5 h-5 text-amber-600" />,
    iconBg: "bg-amber-50 border-amber-200 text-amber-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    title: "Data Science & Applied Predictive Analytics",
    copy: "Transform unstructured enterprise data into strategic machine learning insights with advanced predictive pipelines.",
    skills: ["Python", "Pandas", "SQL", "Scikit-Learn", "Deep Learning", "Tableau", "MLOps"],
    duration: "7–9 Months",
    targetRole: "Data Scientist / Quantitative ML Specialist",
    salaryHike: "₹9 – 26 LPA",
    slug: "data-science",
    modulesCount: "14 Modules · 130+ Hrs",
  },
  {
    n: "06",
    icon: <Laptop className="w-5 h-5 text-rose-600" />,
    iconBg: "bg-rose-50 border-rose-200 text-rose-600",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80",
    title: "Product Design & Design Systems Architecture",
    copy: "Research, wireframe, prototype, and build scalable component libraries and accessible design systems for modern digital products.",
    skills: ["Figma", "Design Systems", "User Research", "Wireframing", "WCAG Accessibility"],
    duration: "4–5 Months",
    targetRole: "Product Designer / UI/UX Lead",
    salaryHike: "₹7 – 18 LPA",
    slug: "product-design",
    modulesCount: "8 Modules · 80+ Hrs",
  },
];

export default function LearningPaths() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-slate-50 pt-10 sm:pt-16 pb-14 sm:pb-20 hero-mesh-radial border-b border-slate-200/80 font-sans">
        <div className="hero-grid-pattern absolute inset-0 opacity-60 pointer-events-none" />

        <div className="wrap relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-white/90 shadow-2xs text-xs font-semibold text-blue-700">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>ROLE-FOCUSED CAREER ROADMAPS</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Big Career Goals.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Step-by-Step Roadmaps.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Choose your target tech specialization. We pair foundational coursework, production toolchains, capstone labs, and verified credentials into a clear path from curious to hired.
          </p>
        </div>
      </section>

      {/* Structured Path Cards Grid with Realistic Cover Images */}
      <section className="wrap py-14 sm:py-20 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paths.map((p) => (
            <article
              key={p.n}
              className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Realistic Header Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="rounded-full bg-slate-900/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold text-white border border-white/20">
                    PATHWAY {p.n}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs font-bold">{p.duration}</span>
                  <span className="text-[10px] font-mono bg-blue-600/90 px-2 py-0.5 rounded font-bold">
                    {p.salaryHike}
                  </span>
                </div>
              </div>

              {/* Path Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center border ${p.iconBg}`}>
                      {p.icon}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug">
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.copy}
                  </p>

                  <div className="pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <span className="text-slate-400 block text-[10px]">Target Role:</span>
                    <strong className="text-slate-800">{p.targetRole}</strong>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {p.skills.slice(0, 5).map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer & CTA */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    {p.modulesCount}
                  </span>

                  <Link
                    href={`/courses/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition"
                  >
                    <span>View Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Advisory Consultation Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 font-sans relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="wrap relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="eyebrow text-cyan-400">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              FREE ACADEMIC COUNSELING
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Not Sure Which Pathway Matches Your Background?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Schedule a 15-minute 1:1 consultation with an academic advisor. We&apos;ll evaluate your current skills, career goals, and recommend the exact curriculum to reach your target role.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition shadow-md active:scale-95"
              >
                <span>Request Advisor Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+919608094837"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-white border border-white/30 hover:bg-white/10 transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: +91-9608094837</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl border border-slate-800 bg-slate-800/80 backdrop-blur-xs space-y-3">
            <h3 className="font-heading text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              What You Get in Every Pathway
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Live interactive weekend sessions &amp; recorded backup</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>1:1 mentor code audits on every capstone milestone</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Cryptographically verifiable certificate of achievement</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Resume audit, mock technical rounds, and recruiter intros</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
