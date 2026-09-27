"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { learningApi } from "@/lib/api";

export interface LearnerUser {
  id: string;
  name: string;
  email: string;
  role: string;
  phone?: string;
  collegeOrCompany?: string;
  qualification?: string;
  enrolledCourses?: {
    course?: any;
    courseTitle?: string;
    enrolledAt?: string;
    status?: string;
    progressPercentage?: number;
  }[];
}

interface AuthContextType {
  user: LearnerUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password?: string, role?: string) => Promise<{ success: boolean; message?: string }>;
  loginAsDemoLearner: () => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = "gotechedu_learning_token";
const USER_KEY = "gotechedu_learning_user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<LearnerUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Restore saved authentication state on client mount
  useEffect(() => {
    try {
      const savedToken = localStorage.getItem(TOKEN_KEY);
      const savedUserStr = localStorage.getItem(USER_KEY);

      if (savedToken) {
        setToken(savedToken);
        if (savedUserStr) {
          try {
            setUser(JSON.parse(savedUserStr));
          } catch {
            // invalid json
          }
        }
        // Verify token with backend
        learningApi.getMe(savedToken).then((res) => {
          if (res && res.success && res.user) {
            const mappedUser: LearnerUser = {
              id: res.user._id || res.user.id,
              name: res.user.name,
              email: res.user.email,
              role: res.user.role || "trainee",
              phone: res.user.phone,
              collegeOrCompany: res.user.collegeOrCompany,
              qualification: res.user.qualification,
              enrolledCourses: res.user.enrolledCourses || [],
            };
            setUser(mappedUser);
            localStorage.setItem(USER_KEY, JSON.stringify(mappedUser));
          }
        }).catch(() => {
          // Keep offline cached user if server is sleeping
        });
      }
    } catch (e) {
      console.warn("Could not access localStorage for auth:", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password?: string, role?: string) => {
    try {
      setIsLoading(true);
      const res = await learningApi.login({
        email: email.trim().toLowerCase(),
        password: password || "Password@123",
        role: role || "trainee",
      });

      if (res && res.success && res.token && res.user) {
        const mappedUser: LearnerUser = {
          id: res.user._id || res.user.id,
          name: res.user.name,
          email: res.user.email,
          role: res.user.role || "trainee",
          phone: res.user.phone,
          collegeOrCompany: res.user.collegeOrCompany,
          qualification: res.user.qualification,
          enrolledCourses: res.user.enrolledCourses || [],
        };

        setToken(res.token);
        setUser(mappedUser);
        localStorage.setItem(TOKEN_KEY, res.token);
        localStorage.setItem(USER_KEY, JSON.stringify(mappedUser));

        return { success: true };
      }

      return {
        success: false,
        message: res?.message || "Invalid email or password. Please verify credentials.",
      };
    } catch (err: any) {
      console.error("Login error:", err);
      return {
        success: false,
        message: err.message || "Network error logging in. Please check backend connection.",
      };
    } finally {
      setIsLoading(false);
    }
  };

  // One-click demo learner login for instant testing & evaluation
  const loginAsDemoLearner = async () => {
    const demoUser: LearnerUser = {
      id: "demo-learner-001",
      name: "Aarav Sharma",
      email: "aarav.learner@gotechedu.com",
      role: "trainee",
      phone: "+91 98765 43210",
      collegeOrCompany: "IIT Delhi Alumni / Software Developer",
      qualification: "B.Tech Computer Science",
      enrolledCourses: [
        {
          courseTitle: "The Complete Full-Stack Next.js 15 & React: From Zero To Expert!",
          status: "Active",
          progressPercentage: 42,
          enrolledAt: new Date(Date.now() - 14 * 86400000).toISOString(),
        },
        {
          courseTitle: "Generative AI & Agentic Systems Engineering: Zero To Architect!",
          status: "Active",
          progressPercentage: 18,
          enrolledAt: new Date(Date.now() - 5 * 86400000).toISOString(),
        },
      ],
    };
    const demoToken = "demo-jwt-token-" + Date.now();
    setToken(demoToken);
    setUser(demoUser);
    localStorage.setItem(TOKEN_KEY, demoToken);
    localStorage.setItem(USER_KEY, JSON.stringify(demoUser));
  };

  const logout = () => {
    try {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    } catch (e) {
      // ignore
    }
    setToken(null);
    setUser(null);
    learningApi.logout().catch(() => {});
  };

  const refreshUser = async () => {
    if (!token) return;
    try {
      const res = await learningApi.getMe(token);
      if (res && res.success && res.user) {
        const mappedUser: LearnerUser = {
          id: res.user._id || res.user.id,
          name: res.user.name,
          email: res.user.email,
          role: res.user.role || "trainee",
          phone: res.user.phone,
          collegeOrCompany: res.user.collegeOrCompany,
          qualification: res.user.qualification,
          enrolledCourses: res.user.enrolledCourses || [],
        };
        setUser(mappedUser);
        localStorage.setItem(USER_KEY, JSON.stringify(mappedUser));
      }
    } catch (e) {
      console.warn("Failed to refresh user:", e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user && !!token,
        isLoading,
        login,
        loginAsDemoLearner,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
