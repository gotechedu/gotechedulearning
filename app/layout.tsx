import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

export const metadata: Metadata = {
  title: {
    default: "GoTechEdu Learning Hub | Enterprise Tech Academy & Certification Bootcamps",
    template: "%s | GoTechEdu Learning Hub",
  },
  description:
    "Master Full-Stack Engineering, Generative AI & Autonomous Agents, Multi-Cloud DevOps, and Cybersecurity with 1:1 mentorship from senior software architects at GoTechEdu.",
  keywords: [
    "GoTechEdu Learning Hub",
    "Full-Stack Web Development Bootcamp",
    "AI and Machine Learning Courses",
    "Cloud DevOps Certification Training",
    "Cybersecurity Career Program",
    "GoTechEdu Academy",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/icons.png?v=2", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/icons.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "GoTechEdu Learning Hub | Enterprise Tech Academy & Certification Bootcamps",
    description:
      "Career-focused tech academy. Hands-on capstones, verified credentials, and architect mentorship.",
    images: [{ url: "/icons.png", width: 512, height: 512, alt: "GoTechEdu Learning Hub" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/icons.png?v=2" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/icons.png?v=2" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <AuthProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
