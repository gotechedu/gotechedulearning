"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useMemo, useState, useEffect } from "react";
import { learningApi } from "@/lib/api";
import { defaultCoursesList, CourseDetail } from "@/lib/courseData";
import {
  Search,
  X,
  Clock,
  GraduationCap,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Filter,
} from "lucide-react";

export default function CourseCatalog() {
  const [courses, setCourses] = useState<CourseDetail[]>(defaultCoursesList);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Programs");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState("popular");

  // Fetch live courses from Backend API
  useEffect(() => {
    let isMounted = true;
    async function fetchLiveCourses() {
      try {
        setLoading(true);
        const data = await learningApi.getCourses();
        if (
          isMounted &&
          data &&
          data.courses &&
          Array.isArray(data.courses) &&
          data.courses.length > 0
        ) {
          const mapped: CourseDetail[] = data.courses.map((bc: any) => {
            const fallback = defaultCoursesList.find(
              (f) =>
                f.slug === bc.slug ||
                f.id === bc._id ||
                f.title.toLowerCase() === (bc.title || "").toLowerCase()
            );

            return {
              id: bc._id || bc.slug || (fallback ? fallback.id : "course"),
              slug: bc.slug || (fallback ? fallback.slug : "fullstack-nextjs"),
              title: bc.title || (fallback ? fallback.title : "Tech Program"),
              category: bc.category || (fallback ? fallback.category : "Full-Stack Development"),
              duration: bc.duration || (fallback ? fallback.duration : "14 Weeks"),
              totalHours: bc.totalHours || (fallback ? fallback.totalHours : "100+ Hours"),
              lecturesCount: bc.lecturesCount || (fallback ? fallback.lecturesCount : 48),
              mode: bc.mode || (fallback ? fallback.mode : "Live Online + Capstone Labs"),
              level: bc.level || (fallback ? fallback.level : "Beginner to Advanced"),
              badge: bc.badge || (fallback ? fallback.badge : "Bestseller"),
              color: bc.color || (fallback ? fallback.color : "from-blue-600 to-indigo-600"),
              symbol: fallback ? fallback.symbol : "</>",
              coverText: fallback ? fallback.coverText : "Learn by building production systems",
              description: bc.description || (fallback ? fallback.description : ""),
              heroTagline: bc.heroTagline || (fallback ? fallback.heroTagline : ""),
              originalPrice: bc.originalPrice || (fallback ? fallback.originalPrice : 45000),
              discountedPrice:
                bc.discountedPrice || bc.price || (fallback ? fallback.discountedPrice : 24999),
              emiStartsAt: bc.emiStartsAt || (fallback ? fallback.emiStartsAt : 2083),
              rating: bc.rating || (fallback ? fallback.rating : 4.88),
              reviewsCount: bc.reviewsCount || (fallback ? fallback.reviewsCount : 1200),
              enrolledStudents: bc.enrolledStudents || (fallback ? fallback.enrolledStudents : 15000),
              nextBatchDate: bc.nextBatchDate || (fallback ? fallback.nextBatchDate : "Upcoming Cohort 2026"),
              careerOutcome: bc.careerOutcome || (fallback ? fallback.careerOutcome : "Software Engineer"),
              averageSalaryHike: bc.averageSalaryHike || (fallback ? fallback.averageSalaryHike : "75%"),
              techStack:
                Array.isArray(bc.techStack) && bc.techStack.length > 0
                  ? bc.techStack
                  : fallback
                  ? fallback.techStack
                  : ["React", "TypeScript", "Node.js"],
              prerequisites: bc.prerequisites || (fallback ? fallback.prerequisites : []),
              whatYouWillLearn: bc.whatYouWillLearn || (fallback ? fallback.whatYouWillLearn : []),
              overviewParagraph: bc.overviewParagraph || (fallback ? fallback.overviewParagraph : ""),
              previewImage: bc.previewImage || (fallback ? fallback.previewImage : ""),
              syllabusModules: fallback ? fallback.syllabusModules : [],
              instructors: fallback ? fallback.instructors : [],
              faqs: fallback ? fallback.faqs : [],
            };
          });
          setCourses(mapped);
        } else {
          setCourses(defaultCoursesList);
        }
      } catch (err) {
        console.warn("Using fallback courses for learning catalog:", err);
        setCourses(defaultCoursesList);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchLiveCourses();
    return () => {
      isMounted = false;
    };
  }, []);

  // Compute dynamic categories list
  const categoriesList = useMemo(() => {
    const set = new Set<string>();
    courses.forEach((c) => {
      if (c.category) set.add(c.category);
    });
    return ["All Programs", ...Array.from(set)];
  }, [courses]);

  // Filtered and sorted courses
  const filtered = useMemo(() => {
    return courses
      .filter((c) => {
        // Category filter
        if (category !== "All Programs" && c.category !== category) {
          return false;
        }
        // Level filter
        if (selectedLevel !== "All Levels" && c.level !== selectedLevel) {
          return false;
        }
        // Search query
        if (query.trim()) {
          const q = query.toLowerCase();
          const matchTitle = c.title.toLowerCase().includes(q);
          const matchCat = c.category.toLowerCase().includes(q);
          const matchDesc = (c.description || "").toLowerCase().includes(q);
          const matchTech = (c.techStack || []).some((t) => t.toLowerCase().includes(q));
          if (!matchTitle && !matchCat && !matchDesc && !matchTech) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "reviews") return b.reviewsCount - a.reviewsCount;
        return b.enrolledStudents - a.enrolledStudents;
      });
  }, [courses, category, selectedLevel, query, sortBy]);

  return (
    <div className="space-y-8">
      {/* Top Search & Filter Bar */}
      <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search programs by skill (Next.js, Python, Cloud, Docker, AI)..."
              aria-label="Search courses"
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Dropdown Filters */}
          <div className="flex items-center gap-2.5">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="py-2.5 px-3 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 cursor-pointer focus:outline-none focus:border-blue-500"
            >
              <option value="All Levels">All Experience Levels</option>
              <option value="Beginner friendly">Beginner Friendly</option>
              <option value="Beginner to Advanced">Beginner to Advanced</option>
              <option value="Intermediate">Intermediate</option>
              <option value="All levels">All Levels Welcome</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="py-2.5 px-3 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 cursor-pointer focus:outline-none focus:border-blue-500"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviewed</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pt-1 no-scrollbar">
          {categoriesList.map((c) => {
            const isSelected = category === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-2xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Active Category Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Showing <strong>{filtered.length}</strong> available programs in{" "}
          <span className="text-blue-600 font-semibold">{category}</span>
        </span>
        {(query || category !== "All Programs" || selectedLevel !== "All Levels") && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All Programs");
              setSelectedLevel("All Levels");
            }}
            className="text-blue-600 hover:underline font-bold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((course) => (
          <article
            key={course.slug || course.id}
            className="group flex flex-col rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300"
          >
            {/* Realistic Photographic Cover Banner */}
            <Link
              href={`/courses/${course.slug}`}
              className="relative h-48 w-full overflow-hidden block"
            >
              {course.previewImage ? (
                <Image
                  src={course.previewImage}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${course.color}`} />
              )}

              {/* Subtle contrast gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-slate-950/20" />

              {/* Top Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                <span className="rounded-full bg-slate-900/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                  {course.category}
                </span>
                <span className="rounded-full bg-blue-600/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white shadow-2xs">
                  {course.badge}
                </span>
              </div>

              {/* Bottom Cover Title / Tagline */}
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <p className="text-xs font-semibold text-white/95 line-clamp-1">
                  {course.coverText}
                </p>
              </div>
            </Link>

            {/* Course Body Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    {course.duration}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                    {course.level}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug line-clamp-2">
                  <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {course.description || course.overviewParagraph}
                </p>
              </div>

              {/* Tech Stack Pills */}
              {course.techStack && course.techStack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {course.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {course.techStack.length > 4 && (
                    <span className="rounded-md bg-slate-50 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
                      +{course.techStack.length - 4} more
                    </span>
                  )}
                </div>
              )}

              {/* Rating & Pricing Row */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">★ {course.rating}</span>
                  <span className="text-slate-400 text-[11px]">
                    ({course.reviewsCount?.toLocaleString()} reviews)
                  </span>
                </div>

                {course.discountedPrice && (
                  <div className="text-right">
                    <span className="font-bold text-slate-900 text-sm">
                      ₹{course.discountedPrice.toLocaleString()}
                    </span>
                    {course.emiStartsAt && (
                      <span className="block text-[9px] text-slate-500">
                        EMI from ₹{course.emiStartsAt.toLocaleString()}/mo
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Card Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  href={`/courses/${course.slug}`}
                  className="w-full text-center py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition"
                >
                  View Curriculum
                </Link>
                <Link
                  href={`/admissions?course=${encodeURIComponent(course.title)}`}
                  className="w-full text-center py-2 rounded-lg bg-blue-600 text-xs font-bold text-white hover:bg-blue-700 transition shadow-xs"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center space-y-3">
          <div className="h-12 w-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto text-xl font-bold">
            ⌕
          </div>
          <h3 className="font-heading text-lg font-bold text-slate-900">
            No matching learning programs found
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query, selecting a different experience level, or resetting all filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All Programs");
              setSelectedLevel("All Levels");
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 text-xs font-bold text-white hover:bg-blue-700 transition shadow-xs"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
