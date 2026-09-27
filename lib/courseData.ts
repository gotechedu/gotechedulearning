export interface CourseModule {
  moduleNumber: number;
  title: string;
  duration: string;
  lectures: {
    title: string;
    duration: string;
    isPreview: boolean;
    type: "video" | "doc" | "lab";
  }[];
}

export interface Instructor {
  name: string;
  role: string;
  organization: string;
  rating: number;
  students: string;
  coursesCount: number;
  bio: string;
  avatar: string;
}

export interface CourseBatch {
  _id: string;
  name: string;
  batchCode: string;
  startDate: string;
  endDate: string;
  mode: string;
  scheduleDays: string[];
  startTime: string;
  endTime: string;
  status: string;
}

export interface CourseDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  duration: string;
  totalHours: string;
  lecturesCount: number;
  mode: string;
  level: string;
  badge: string;
  color: string;
  symbol: string;
  coverText: string;
  description: string;
  heroTagline: string;
  originalPrice: number;
  discountedPrice: number;
  emiStartsAt: number;
  rating: number;
  reviewsCount: number;
  enrolledStudents: number;
  nextBatchDate: string;
  careerOutcome: string;
  averageSalaryHike: string;
  techStack: string[];
  prerequisites: string[];
  whatYouWillLearn: string[];
  overviewParagraph: string;
  previewImage: string;
  syllabusModules: CourseModule[];
  instructors: Instructor[];
  faqs: { question: string; answer: string }[];
  batches?: CourseBatch[];
}

export const detailedCourses: Record<string, CourseDetail> = {
  "fullstack-nextjs": {
    id: "fullstack-nextjs",
    slug: "fullstack-nextjs",
    title: "The Complete Full-Stack Next.js 15 & React: From Zero To Expert!",
    category: "Full-Stack Web Development",
    duration: "16 Weeks",
    totalHours: "120+ Hours",
    lecturesCount: 64,
    mode: "Live Online + Capstone Labs",
    level: "Beginner to Advanced",
    badge: "Bestseller",
    color: "from-blue-600 via-indigo-600 to-cyan-500",
    symbol: "</>",
    coverText: "Build the web, from front to back",
    description:
      "Master modern web development by building 6+ enterprise production projects in 16 weeks. Learn React 19, Next.js 15 App Router, TypeScript, Tailwind CSS, PostgreSQL, Prisma ORM, and Cloud CI/CD.",
    heroTagline:
      "Master Full-Stack JavaScript & TypeScript by Building 6+ Real-World SaaS Projects. Learn Next.js 15, React 19, Databases, Auth, Server Actions & Cloud Deployment!",
    originalPrice: 49999,
    discountedPrice: 24999,
    emiStartsAt: 2083,
    rating: 4.88,
    reviewsCount: 14820,
    enrolledStudents: 38400,
    nextBatchDate: "September 15, 2026",
    careerOutcome: "Full-Stack Software Engineer (₹8L – ₹18L PA)",
    averageSalaryHike: "84%",
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "Git & GitHub",
      "Vercel Cloud",
    ],
    overviewParagraph:
      "This program is architected for aspiring developers who want to skip tutorial-hell and start shipping real production software. You will build high-throughput microservices, learn robust component state patterns, implement database schemas with migrations, and deploy enterprise applications with confidence.",
    whatYouWillLearn: [
      "Master Next.js 15 App Router, Server Components, and Server Actions from scratch.",
      "Build complex relational schemas with PostgreSQL and type-safe Prisma ORM queries.",
      "Implement multi-role JWT and OAuth 2.0 authentication with role-based access control.",
      "Architect reactive UI dashboards with Tailwind CSS v4 and fluid micro-animations.",
      "Containerize full-stack applications with Docker and deploy to AWS and Vercel with automated CI/CD.",
      "Write automated end-to-end and integration tests with Playwright and Vitest.",
    ],
    prerequisites: [
      "Basic understanding of HTML, CSS, and elementary JavaScript.",
      "A laptop (Windows, Mac, or Linux) with internet access.",
    ],
    syllabusModules: [
      {
        moduleNumber: 1,
        title: "Modern JavaScript (ES6+), Async Engine & TypeScript Foundations",
        duration: "4hr 20min",
        lectures: [
          { title: "Event Loop, Closures, Promises & Async/Await Deep Dive", duration: "60 Min", isPreview: true, type: "video" },
          { title: "TypeScript Types, Interfaces, Generics & Strict Mode", duration: "75 Min", isPreview: false, type: "video" },
          { title: "Functional Programming & Immutability Patterns", duration: "45 Min", isPreview: false, type: "video" },
          { title: "Lab: Building an Interactive Type-Safe Task Engine", duration: "80 Min", isPreview: false, type: "lab" },
        ],
      },
      {
        moduleNumber: 2,
        title: "React 19 Architecture, Hooks & Component State Patterns",
        duration: "5hr 10min",
        lectures: [
          { title: "Virtual DOM vs React 19 Compiler Architecture", duration: "50 Min", isPreview: true, type: "video" },
          { title: "Custom Hooks & Optimistic UI Updates", duration: "65 Min", isPreview: false, type: "video" },
          { title: "Global State Management with Zustand & React Query", duration: "75 Min", isPreview: false, type: "video" },
          { title: "Lab: High-Performance Live Trading Dashboard", duration: "90 Min", isPreview: false, type: "lab" },
        ],
      },
      {
        moduleNumber: 3,
        title: "Next.js 15 App Router, Server Actions & High-Speed Edge SSR",
        duration: "6hr 15min",
        lectures: [
          { title: "Server Components (RSC) vs Client Components", duration: "60 Min", isPreview: true, type: "video" },
          { title: "Streaming SSR, Suspense & Partial Prerendering (PPR)", duration: "70 Min", isPreview: false, type: "video" },
          { title: "Type-Safe Server Actions & Mutation Pipelines", duration: "80 Min", isPreview: false, type: "video" },
          { title: "Lab: Production SaaS Multi-Tenant Workspace", duration: "120 Min", isPreview: false, type: "lab" },
        ],
      },
      {
        moduleNumber: 4,
        title: "Database Modeling, Prisma ORM & Enterprise Security",
        duration: "5hr 45min",
        lectures: [
          { title: "PostgreSQL Database Schema Design & Migrations", duration: "65 Min", isPreview: false, type: "video" },
          { title: "Prisma Client Queries, Relations & Transactions", duration: "75 Min", isPreview: false, type: "video" },
          { title: "JWT, Session Cookies & RBAC Permission Guards", duration: "70 Min", isPreview: false, type: "video" },
          { title: "Capstone: Enterprise HRMS & Attendance Platform", duration: "140 Min", isPreview: false, type: "lab" },
        ],
      },
    ],
    instructors: [
      {
        name: "Aditya Verma",
        role: "Lead Frontend Architect",
        organization: "GoTechEdu Engineering",
        rating: 4.92,
        students: "38,000+",
        coursesCount: 4,
        bio: "Aditya has architected enterprise SaaS products for global firms and mentored thousands of software developers into high-paying engineering roles.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      },
    ],
    faqs: [
      {
        question: "Is this bootcamp suitable for beginners?",
        answer: "Yes! We start with foundational JavaScript and step-by-step TypeScript concepts before advancing into production architectures.",
      },
      {
        question: "Will I get placement support and portfolio reviews?",
        answer: "Yes, every learner receives 1-on-1 resume reviews, mock technical interview sessions, and placement referrals across our hiring partner network.",
      },
    ],
  },
  "gen-ai-agentic": {
    id: "gen-ai-agentic",
    slug: "gen-ai-agentic",
    title: "Generative AI & Agentic Systems Engineering: Zero To Architect!",
    category: "Artificial Intelligence & LLMs",
    duration: "14 Weeks",
    totalHours: "110+ Hours",
    lecturesCount: 52,
    mode: "Live Labs + Research Project",
    level: "Intermediate to Advanced",
    badge: "Flagship AI",
    color: "from-purple-600 via-indigo-600 to-cyan-500",
    symbol: "✦",
    coverText: "Make intelligence practical",
    description:
      "Learn to architect autonomous multi-agent systems, build enterprise RAG pipelines with vector databases, and fine-tune open-source foundation models using PyTorch, LangChain, LangGraph, and Hugging Face.",
    heroTagline:
      "Build Autonomous Multi-Agent Swarms, Enterprise Hybrid RAG, Fine-Tune Open-Source LLMs with LoRA, and Deploy Production AI on Cloud GPUs!",
    originalPrice: 58000,
    discountedPrice: 29999,
    emiStartsAt: 2499,
    rating: 4.95,
    reviewsCount: 8120,
    enrolledStudents: 22400,
    nextBatchDate: "September 18, 2026",
    careerOutcome: "AI Engineer / LLM Architect (₹14L – ₹28L PA)",
    averageSalaryHike: "92%",
    previewImage:
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "Python 3.12",
      "PyTorch",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "ChromaDB",
      "FastAPI",
      "Hugging Face",
      "Docker",
    ],
    overviewParagraph:
      "Step into the highest-paying domain in tech. Learn the mathematical fundamentals and production engineering of foundation models, autonomous agents with tool-calling loops, hybrid dense-sparse RAG systems, and parameter-efficient fine-tuning (PEFT/LoRA).",
    whatYouWillLearn: [
      "Master Transformer architectures, attention mechanisms, and prompt optimization techniques.",
      "Build Enterprise Hybrid RAG (Dense + Sparse Vector Search) with ChromaDB and Cohere re-rankers.",
      "Orchestrate stateful autonomous multi-agent swarms with LangGraph and human-in-the-loop controls.",
      "Fine-tune open-source LLMs (Llama-3, Mistral) using 4-bit QLoRA on cloud GPUs.",
      "Deploy scalable FastAPI inference endpoints with streaming responses and observability.",
    ],
    prerequisites: [
      "Intermediate familiarity with Python programming.",
      "Basic mathematical understanding of linear algebra and machine learning concepts.",
    ],
    syllabusModules: [
      {
        moduleNumber: 1,
        title: "Foundation Transformers, Tokenization & Prompt Engineering",
        duration: "3hr 40min",
        lectures: [
          { title: "Transformers Internals: Self-Attention & Embeddings", duration: "50 Min", isPreview: true, type: "video" },
          { title: "Structured Outputs with Pydantic & JSON Schemas", duration: "45 Min", isPreview: true, type: "video" },
          { title: "Lab: Automated Contract Analysis & Legal Parsing Agent", duration: "80 Min", isPreview: false, type: "lab" },
        ],
      },
      {
        moduleNumber: 2,
        title: "Enterprise RAG: Vector Databases, Chunking & Hybrid Search",
        duration: "5hr 20min",
        lectures: [
          { title: "Dense vs Sparse Vector Embeddings with ChromaDB & Pinecone", duration: "60 Min", isPreview: true, type: "video" },
          { title: "Contextual Chunking, Re-Ranking & Guardrails", duration: "75 Min", isPreview: false, type: "video" },
          { title: "Lab: Building a Financial Audit RAG with Zero Hallucination", duration: "110 Min", isPreview: false, type: "lab" },
        ],
      },
    ],
    instructors: [
      {
        name: "Dr. Vikram Sharma",
        role: "Head of AI Research & Solutions",
        organization: "GoTechEdu Applied AI Lab",
        rating: 4.96,
        students: "22,000+",
        coursesCount: 3,
        bio: "Dr. Vikram leads generative AI and agentic workflow engineering at GoTechEdu, specializing in enterprise RAG vector retrieval and foundation model fine-tuning.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      },
    ],
    faqs: [
      {
        question: "Do I need an expensive GPU to take this course?",
        answer: "No, all high-performance GPU compute credits (AWS/RunPod) are sponsored and provided directly within our cloud sandbox!",
      },
    ],
  },
  "cloud-devops": {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps Infrastructure: Kubernetes, AWS, Terraform & CI/CD",
    category: "Cloud & DevOps",
    duration: "14 Weeks",
    totalHours: "100+ Hours",
    lecturesCount: 48,
    mode: "Live Online + Cloud Sandboxes",
    level: "Intermediate",
    badge: "High Demand",
    color: "from-sky-600 via-blue-600 to-indigo-600",
    symbol: "☁",
    coverText: "Build. Ship. Scale.",
    description:
      "Become an industry-ready DevOps engineer. Master Linux systems, Docker containerization, Kubernetes orchestration, Terraform Infrastructure as Code (IaC), AWS multi-region architecture, and GitOps CI/CD pipelines.",
    heroTagline:
      "Master Kubernetes, Multi-Cloud AWS Architecture, Terraform Automation, and Production GitOps CI/CD with 100% Hands-On Cloud Sandboxes!",
    originalPrice: 48000,
    discountedPrice: 22999,
    emiStartsAt: 1916,
    rating: 4.86,
    reviewsCount: 6420,
    enrolledStudents: 18900,
    nextBatchDate: "September 20, 2026",
    careerOutcome: "Cloud DevOps & Platform Engineer (₹9L – ₹22L PA)",
    averageSalaryHike: "78%",
    previewImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "AWS",
      "Docker",
      "Kubernetes (EKS)",
      "Terraform",
      "Linux / Bash",
      "GitHub Actions",
      "ArgoCD",
      "Prometheus & Grafana",
    ],
    overviewParagraph:
      "Learn to automate, scale, and secure high-availability cloud infrastructure. This course covers everything from Linux kernel tuning and Docker internals to orchestrating multi-node Kubernetes clusters and writing modular Terraform blueprints.",
    whatYouWillLearn: [
      "Provision and manage scalable AWS cloud infrastructure (VPC, EC2, EKS, RDS, S3).",
      "Write reusable, modular Infrastructure as Code using Terraform and OpenTofu.",
      "Build secure Docker container images and optimize multi-stage builds.",
      "Deploy, scale, and monitor distributed microservices on production Kubernetes.",
      "Implement zero-downtime GitOps continuous delivery with GitHub Actions and ArgoCD.",
    ],
    prerequisites: [
      "Familiarity with basic command line navigation (Linux/Bash).",
    ],
    syllabusModules: [
      {
        moduleNumber: 1,
        title: "Linux Administration & Container Engineering with Docker",
        duration: "4hr 15min",
        lectures: [
          { title: "Linux Networking, Process Management & Permissions", duration: "55 Min", isPreview: true, type: "video" },
          { title: "Docker Containerization & Multi-Stage Builds", duration: "65 Min", isPreview: true, type: "video" },
          { title: "Lab: Containerizing a High-Traffic Microservice", duration: "80 Min", isPreview: false, type: "lab" },
        ],
      },
    ],
    instructors: [
      {
        name: "Sarah Jenkins",
        role: "Principal Cloud Architect",
        organization: "GoTechEdu Cloud Solutions",
        rating: 4.88,
        students: "19,000+",
        coursesCount: 2,
        bio: "Sarah has designed high-availability cloud infrastructure across AWS and Azure for Fortune 500 enterprises.",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      },
    ],
    faqs: [
      {
        question: "Will I learn AWS or Azure?",
        answer: "The primary hands-on labs focus on AWS and Kubernetes, with multi-cloud portable concepts applicable to Azure and Google Cloud.",
      },
    ],
  },
  "cybersecurity": {
    id: "cybersecurity",
    slug: "cybersecurity",
    title: "Zero-Trust Cybersecurity Defense & Systems Auditing",
    category: "Cybersecurity",
    duration: "12 Weeks",
    totalHours: "90+ Hours",
    lecturesCount: 42,
    mode: "Live Cyber Range + Ethical Hacking Labs",
    level: "Beginner friendly",
    badge: "Industry Accredited",
    color: "from-emerald-600 via-teal-600 to-cyan-600",
    symbol: "⬡",
    coverText: "Think ahead. Stay secure.",
    description:
      "Develop practical security skills across enterprise networks, vulnerability assessment, threat intelligence, cloud workload protection, and defensive SOC operations.",
    heroTagline:
      "Defend Enterprise Networks, Execute Ethical Vulnerability Assessments, and Master Zero-Trust Architecture with Real Cyber Range Labs!",
    originalPrice: 45000,
    discountedPrice: 21999,
    emiStartsAt: 1833,
    rating: 4.84,
    reviewsCount: 5200,
    enrolledStudents: 14200,
    nextBatchDate: "September 25, 2026",
    careerOutcome: "SOC Analyst / Cybersecurity Engineer (₹8L – ₹18L PA)",
    averageSalaryHike: "74%",
    previewImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "Wireshark",
      "Nmap",
      "Metasploit",
      "Burp Suite",
      "Splunk SIEM",
      "Linux Security",
      "Zero-Trust Network Access",
    ],
    overviewParagraph:
      "Modern cyber defense requires understanding both attacker methodologies and automated detection postures. Train inside our live cyber range to analyze packet flows, detect intrusions, mitigate zero-day CVEs, and configure enterprise SIEM alerts.",
    whatYouWillLearn: [
      "Master network penetration fundamentals and packet inspection with Wireshark.",
      "Conduct automated and manual web application vulnerability assessments.",
      "Configure enterprise SIEM log monitoring and alert triage in Splunk.",
      "Implement Zero-Trust identity verification, least-privilege RBAC, and network micro-segmentation.",
    ],
    prerequisites: [
      "Basic understanding of computer networks and operating systems.",
    ],
    syllabusModules: [
      {
        moduleNumber: 1,
        title: "Network Security Protocols & Packet Analysis",
        duration: "3hr 50min",
        lectures: [
          { title: "OSI Layer Attacks, TCP/IP Handshakes & Wireshark Triage", duration: "50 Min", isPreview: true, type: "video" },
          { title: "Firewalls, IDS/IPS & Threat Mitigation Strategies", duration: "60 Min", isPreview: false, type: "video" },
          { title: "Lab: Live Packet Capture & MITM Attack Defense", duration: "75 Min", isPreview: false, type: "lab" },
        ],
      },
    ],
    instructors: [
      {
        name: "Rohan Mehra",
        role: "Chief Information Security Officer",
        organization: "GoTechEdu Security Services",
        rating: 4.89,
        students: "14,000+",
        coursesCount: 2,
        bio: "Rohan leads enterprise security defense, zero-trust posture management, and compliance auditing at GoTechEdu.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      },
    ],
    faqs: [
      {
        question: "Is this training recognized for global certifications?",
        answer: "Yes, our curriculum maps directly to CompTIA Security+, CEH, and Red Hat Certified System Administrator standards.",
      },
    ],
  },
  "product-design": {
    id: "product-design",
    slug: "product-design",
    title: "Product & UI/UX Design: From User Discovery to Polished Design Systems",
    category: "Design",
    duration: "10 Weeks",
    totalHours: "80+ Hours",
    lecturesCount: 36,
    mode: "Live Design Critiques + Figma Studio",
    level: "All levels",
    badge: "Portfolio Ready",
    color: "from-pink-600 via-rose-600 to-amber-500",
    symbol: "◌",
    coverText: "Make useful things, beautifully",
    description:
      "Research, prototype, and test thoughtful digital experiences from first sketch to polished handoff. Master Figma auto-layout, interactive component variants, design token systems, and user research.",
    heroTagline:
      "Craft World-Class UI/UX Products, Build Scalable Figma Design Systems, and Graduate with a Verified Industry Design Portfolio!",
    originalPrice: 42000,
    discountedPrice: 19999,
    emiStartsAt: 1666,
    rating: 4.91,
    reviewsCount: 4890,
    enrolledStudents: 12500,
    nextBatchDate: "October 01, 2026",
    careerOutcome: "Product Designer / UI-UX Lead (₹7L – ₹16L PA)",
    averageSalaryHike: "72%",
    previewImage:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "Figma",
      "FigJam",
      "Design Tokens",
      "Framer",
      "User Testing",
      "Wireframing",
      "WCAG Accessibility",
    ],
    overviewParagraph:
      "Turn creative intuition into methodical product design. Master user empathy interviews, information architecture mapping, responsive auto-layout in Figma, interactive micro-prototypes, and developer handoff workflows.",
    whatYouWillLearn: [
      "Conduct qualitative user research interviews and build validated user personas.",
      "Construct scalable Figma component libraries using design tokens and auto-layout.",
      "Build realistic high-fidelity interactive prototypes in Figma and Framer.",
      "Ensure web accessibility compliance (WCAG 2.1 AA) across typography and color contrast.",
    ],
    prerequisites: [
      "No coding background required. Open to all creative minds.",
    ],
    syllabusModules: [
      {
        moduleNumber: 1,
        title: "User Experience Foundations & Information Architecture",
        duration: "3hr 30min",
        lectures: [
          { title: "User Research Methodologies & Empathy Mapping", duration: "45 Min", isPreview: true, type: "video" },
          { title: "User Flows, Sitemaps & Low-Fidelity Wireframes", duration: "55 Min", isPreview: true, type: "video" },
          { title: "Lab: Redesigning a B2B SaaS Onboarding Flow", duration: "70 Min", isPreview: false, type: "lab" },
        ],
      },
    ],
    instructors: [
      {
        name: "Pooja Malhotra",
        role: "Head of Product Experience",
        organization: "GoTechEdu Design Studio",
        rating: 4.93,
        students: "12,000+",
        coursesCount: 2,
        bio: "Pooja is obsessive about craft, user empathy, accessibility, and pixel-perfection, having built design systems for leading consumer and enterprise platforms.",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      },
    ],
    faqs: [
      {
        question: "Do I need a MacBook to design with Figma?",
        answer: "No, Figma is completely cloud-based and runs smoothly in any web browser on Windows, Mac, or Linux!",
      },
    ],
  },
};

export const defaultCoursesList = Object.values(detailedCourses);

export function getFallbackCourse(slugOrId: string): CourseDetail | undefined {
  if (!slugOrId) return undefined;
  const clean = slugOrId.toLowerCase().trim();
  return (
    detailedCourses[clean] ||
    defaultCoursesList.find(
      (c) =>
        c.slug.toLowerCase() === clean ||
        c.id.toLowerCase() === clean ||
        c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") === clean
    )
  );
}
