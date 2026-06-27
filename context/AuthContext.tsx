"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { login as loginApi, signup as signupApi, logout as logoutApi } from "@/services/auth.service";
import { getCookie, setCookie, removeCookie, getItem, setItem, removeItem } from "@/utils/storage";
import { STORAGE_KEYS } from "@/utils/constants";
import type { LoginPayload, SignupPayload } from "@/types/auth";
import type { User } from "@/types/user";
import type { ApiResponse } from "@/types/api";

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (data: LoginPayload) => Promise<void>;
  signup: (data: SignupPayload) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = getCookie(STORAGE_KEYS.TOKEN);
    const storedUser = getItem<User>(STORAGE_KEYS.USER);
    if (storedToken) setToken(storedToken);
    if (storedUser) setUser(storedUser);
    setIsLoading(false);
  }, []);

  const login = useCallback(async (data: LoginPayload) => {
    const res = await loginApi(data);
    const body = res.data as ApiResponse<{ token: string; user: User }>;
    setToken(body.data.token);
    setUser(body.data.user);
    setCookie(STORAGE_KEYS.TOKEN, body.data.token);
    setItem(STORAGE_KEYS.USER, body.data.user);
  }, []);

  const signup = useCallback(async (data: SignupPayload) => {
    const res = await signupApi(data);
    const body = res.data as ApiResponse<{ token: string; user: User }>;
    setToken(body.data.token);
    setUser(body.data.user);
    setCookie(STORAGE_KEYS.TOKEN, body.data.token);
    setItem(STORAGE_KEYS.USER, body.data.user);
  }, []);

  const logout = useCallback(async () => {
    try { await logoutApi(); } catch {}
    setToken(null);
    setUser(null);
    removeCookie(STORAGE_KEYS.TOKEN);
    removeItem(STORAGE_KEYS.USER);
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used within AuthProvider");
  return ctx;
}
