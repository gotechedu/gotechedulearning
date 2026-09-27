import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "GoTechEdu | Learn skills. Build your future.", template: "%s | GoTechEdu" },
  description: "Industry-focused courses, hands-on projects, expert mentorship, and certifications designed to help you build real-world skills.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body><Header/><main>{children}</main><Footer/></body>
    </html>
  );
}
