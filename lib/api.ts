/**
 * GoTechEdu Learning Platform API Client
 * Connects to GoTechEdu Central Backend API
 */

const rawApiUrl = (
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "http://localhost:5000/api"
).trim().replace(/\/+$/, "");

export const API_BASE_URL = rawApiUrl
  ? rawApiUrl.endsWith("/api")
    ? rawApiUrl
    : `${rawApiUrl}/api`
  : "http://localhost:5000/api";

async function fetchJson<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T | null> {
  if (!API_BASE_URL) return null;

  try {
    const formattedEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    const url = `${API_BASE_URL}${formattedEndpoint}`;
    const headers: Record<string, string> = {
      ...((options.headers as Record<string, string>) || {}),
    };
    if (options.body && !headers["Content-Type"]) {
      headers["Content-Type"] = "application/json";
    }

    const res = await fetch(url, {
      ...options,
      headers,
    });

    if (!res.ok) {
      const errJson = await res.json().catch(() => null);
      if (errJson && typeof errJson === "object") {
        return errJson as T;
      }
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    // Graceful offline fallback if backend server is unreachable
    console.warn(`[Learning API] Failed to fetch ${endpoint}:`, error);
    return null;
  }
}

export const learningApi = {
  // 1. Courses Catalog & Details
  getCourses: async (params: { category?: string; search?: string } = {}) => {
    const query = new URLSearchParams();
    if (params.category && params.category !== "All") {
      query.append("category", params.category);
    }
    if (params.search) {
      query.append("search", params.search);
    }
    const qs = query.toString();
    return fetchJson<{ success: boolean; count: number; courses: any[] }>(
      `/courses${qs ? `?${qs}` : ""}`
    );
  },

  getCourseById: async (idOrSlug: string) => {
    return fetchJson<{ success: boolean; course: any }>(`/courses/${idOrSlug}`);
  },

  // 2. Admissions & Course Applications
  submitCourseApplication: async (data: {
    courseId?: string | null;
    courseTitle: string;
    studentName: string;
    email: string;
    phone: string;
    collegeOrCompany?: string;
    qualification?: string;
    experienceLevel?: string;
    learningGoal?: string;
    modePreference?: string;
    password?: string;
  }) => {
    return fetchJson<{
      success: boolean;
      message: string;
      applicationId?: string;
      studentName?: string;
      courseTitle?: string;
    }>("/course-applications", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  getCourseApplicationById: async (id: string, token?: string) => {
    return fetchJson<{ success: boolean; application: any }>(
      `/course-applications/${id}`,
      {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }
    );
  },

  // 3. User Authentication
  login: async (credentials: {
    email: string;
    password?: string;
    role?: string;
  }) => {
    return fetchJson<{
      success: boolean;
      token?: string;
      user?: any;
      message?: string;
    }>("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  },

  getMe: async (token: string) => {
    return fetchJson<{
      success: boolean;
      user: any;
      message?: string;
    }>("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  logout: async () => {
    return fetchJson<{ success: boolean; message: string }>("/auth/logout", {
      method: "POST",
    });
  },

  // 4. Enrollments & Learning Progress
  getMyEnrollments: async (token: string) => {
    return fetchJson<{
      success: boolean;
      count: number;
      enrollments: any[];
    }>("/enrollments/my-enrollments", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getCourseLearningPath: async (enrollmentId: string, token: string) => {
    return fetchJson<{
      success: boolean;
      enrollment: any;
      course: any;
      modules: any[];
      currentLesson?: any;
    }>(`/enrollments/${enrollmentId}/learning-path`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  markLessonComplete: async (
    enrollmentId: string,
    lessonId: string,
    token: string
  ) => {
    return fetchJson<{
      success: boolean;
      message: string;
      progressPercentage?: number;
    }>(`/enrollments/${enrollmentId}/lessons/${lessonId}/complete`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  // 5. Batches & Cohorts
  getBatches: async (courseId?: string) => {
    const qs = courseId ? `?course=${courseId}` : "";
    return fetchJson<{
      success: boolean;
      count: number;
      batches: any[];
    }>(`/batches${qs}`);
  },

  // 6. Offers & Scholarships
  getOffers: async () => {
    return fetchJson<{
      success: boolean;
      count: number;
      offers: any[];
    }>("/offers");
  },
};
