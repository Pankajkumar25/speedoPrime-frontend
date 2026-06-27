import axios from "@/config/axios";
import { LoginPayload, SignupPayload } from "@/types/auth";

export const signup = (data: SignupPayload) =>
  axios.post("/auth/signup", data);

export const login = (data: LoginPayload) =>
  axios.post("/auth/login", data);

export const logout = () =>
  axios.post("/auth/logout");