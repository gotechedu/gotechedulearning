"use client";

import Link from "next/link";
import React, { useMemo, useState, useEffect } from "react";
import { learningApi } from "@/lib/api";
import { defaultCoursesList, CourseDetail } from "@/lib/courseData";
import {
  Search,
  X,
  Star,
  Clock,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Layers,
  Filter,
} from "lucide-react";

export default function CourseCatalog() {
  const [courses, setCourses] = useState<CourseDetail[]>(defaultCoursesList);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All programs");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState("popular");

  // Fetch live courses from Backend API
  useEffect(() => {
    let isMounted = true;
    async function fetchLiveCourses() {
      try {
        setLoading(true);
        const data = await learningApi.getCourses();
        if (isMounted && data && data.courses && Array.isArray(data.courses) && data.courses.length > 0) {
          // Map backend course objects to CourseDetail format
          const mapped: CourseDetail[] = data.courses.map((bc: any) => {
            const fallback = defaultCoursesList.find(
              (f) => f.slug === bc.slug || f.id === bc._id || f.title.toLowerCase() === (bc.title || "").toLowerCase()
            );

            return {
              id: bc._id || bc.slug,
              slug: bc.slug || (fallback ? fallback.slug : "fullstack-nextjs"),
              title: bc.title,
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
              discountedPrice: bc.discountedPrice || bc.price || (fallback ? fallback.discountedPrice : 24999),
              emiStartsAt: bc.emiStartsAt || (fallback ? fallback.emiStartsAt : 2083),
              rating: bc.rating || (fallback ? fallback.rating : 4.88),
              reviewsCount: bc.reviewsCount || (fallback ? fallback.reviewsCount : 1200),
              enrolledStudents: bc.enrolledStudents || (fallback ? fallback.enrolledStudents : 15000),
              nextBatchDate: bc.nextBatchDate || (fallback ? fallback.nextBatchDate : "Upcoming Cohort 2026"),
              careerOutcome: bc.careerOutcome || (fallback ? fallback.careerOutcome : "Software Engineer"),
              averageSalaryHike: bc.averageSalaryHike || (fallback ? fallback.averageSalaryHike : "75%"),
              techStack: Array.isArray(bc.techStack) && bc.techStack.length > 0 ? bc.techStack : (fallback ? fallback.techStack : ["React", "TypeScript", "Node.js"]),
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

  // Compute dynamic categories
  const categoriesList = useMemo(() => {
    const set = new Set<string>();
    courses.forEach((c) => {
      if (c.category) set.add(c.category);
    });
    return ["All programs", ...Array.from(set)];
  }, [courses]);

  // Filtered and sorted courses
  const filtered = useMemo(() => {
    return courses
      .filter((c) => {
        // Category filter
        if (category !== "All programs" && c.category !== category) {
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
          const matchDesc = c.description.toLowerCase().includes(q);
          const matchTech = (c.techStack || []).some((t) =>
            t.toLowerCase().includes(q)
          );
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
    <div>
      {/* Search & Filter Controls */}
      <div className="catalog-controls">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          <label className="search-box">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search skills (React, Next.js, Python, Cloud)..."
              aria-label="Search programs"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            ) : (
              <kbd>⌘ K</kbd>
            )}
          </label>

          <div className="flex items-center gap-2">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="py-2 px-3 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 cursor-pointer"
            >
              <option value="All Levels">All Levels</option>
              <option value="Beginner friendly">Beginner friendly</option>
              <option value="Beginner to Advanced">Beginner to Advanced</option>
              <option value="Intermediate">Intermediate</option>
              <option value="All levels">All levels</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="py-2 px-3 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviewed</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="filter-row">
          {categoriesList.map((c) => (
            <button
              key={c}
              className={category === c ? "filter active-filter" : "filter"}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="course-grid catalog-grid">
        {filtered.map((course, i) => (
          <article className="course-card" key={course.slug || course.id}>
            <Link
              href={`/courses/${course.slug}`}
              className={`course-cover cover-${i % 3}`}
            >
              <span className="cover-label">{course.category}</span>
              <span className="cover-symbol">{course.symbol}</span>
              <span className="cover-caption">{course.coverText}</span>
              <span className="cover-arrow">↗</span>
            </Link>

            <div className="course-info">
              <div className="course-meta">
                <span className="font-semibold text-blue-700">
                  {course.level}
                </span>
                <span>◷ {course.duration}</span>
              </div>

              <h3>
                <Link
                  href={`/courses/${course.slug}`}
                  className="hover:text-blue-600 transition"
                >
                  {course.title}
                </Link>
              </h3>

              <p className="line-clamp-2">{course.description}</p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1 my-2">
                {(course.techStack || []).slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-mono text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
                {(course.techStack || []).length > 4 && (
                  <span className="text-[9px] font-mono text-slate-400">
                    +{(course.techStack || []).length - 4} more
                  </span>
                )}
              </div>

              <div className="course-footer">
                <span className="rating">
                  ★ <b>{course.rating}</b>{" "}
                  <small>({course.reviewsCount?.toLocaleString()} reviews)</small>
                </span>
                <Link
                  href={`/courses/${course.slug}`}
                  className="font-bold text-blue-600 hover:text-blue-800 transition flex items-center gap-1"
                >
                  <span>View program</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="empty-state">
          <span>⌕</span>
          <h3>No matching learning programs found</h3>
          <p>Try loosening your search filters or explore all categories.</p>
          <button
            type="button"
            className="text-link"
            onClick={() => {
              setQuery("");
              setCategory("All programs");
              setSelectedLevel("All Levels");
            }}
          >
            Clear all filters ↗
          </button>
        </div>
      )}
    </div>
  );
}
