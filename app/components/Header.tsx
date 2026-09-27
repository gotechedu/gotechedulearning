"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open,setOpen]=useState(false);
  return <header className="site-header"><div className="wrap nav-wrap"><Link href="/" className="brand" aria-label="GoTechEdu home"><span className="brand-mark"><i/></span><span>GoTech<span className="brand-light">Edu</span><small>LEARN · BUILD · GROW</small></span></Link><button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?"×":"☰"}</button><nav className={open?"nav-links nav-open":"nav-links"}><Link href="/courses" onClick={()=>setOpen(false)}>Courses</Link><Link href="/learning-paths" onClick={()=>setOpen(false)}>Learning paths</Link><Link href="/outcomes" onClick={()=>setOpen(false)}>Outcomes</Link><Link href="/certifications" onClick={()=>setOpen(false)}>Certifications</Link><Link href="/admissions" onClick={()=>setOpen(false)}>Admissions</Link></nav><div className="nav-actions"><Link className="login-link" href="/admissions">Log in <span>↗</span></Link><Link href="/courses" className="button button-primary nav-cta">Explore courses <span>↗</span></Link></div></div></header>;
}
