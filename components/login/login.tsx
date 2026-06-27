"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useAuth } from "@/hooks/useAuth";
import Input from "@/components/common/Input";
import { ROUTES } from "@/utils/constants";
import { loginSchema, type LoginFormData } from "@/lib/validations";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
   

    try {
      await login(data);
      toast.success("Logged in successfully");
      router.push(ROUTES.DASHBOARD);
    } catch {
   
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-5">
      <div className="w-full max-w-6xl bg-[#1B1B1B] rounded-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Banner */}
        <div className="hidden lg:block relative min-h-[650px]">
          <Image
            src="/image/signup-banner.png"
            alt="Login Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Login Form */}
        <div className="flex items-center justify-center px-8 py-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md"
          >
            <Image
              src="/image/logo.png"
              alt="Logo"
              width={130}
              height={40}
              className="mb-8"
            />

            <h2 className="text-3xl font-semibold text-white">
              Welcome Back
            </h2>

            <p className="text-sm text-gray-400 mt-2 mb-8">
              Login to continue enjoying Speedo Prime.
            </p>

            {serverError && (
              <p className="mb-4 text-sm text-red-500">
                {serverError}
              </p>
            )}

            <div className="space-y-5">
              <Input
                type="email"
                placeholder="Email Address"
                error={errors.email?.message}
                {...register("email")}
              />

              <Input
                type="password"
                placeholder="Password"
                error={errors.password?.message}
                {...register("password")}
              />
            </div>

            <div className="flex justify-end mt-3">
              <Link
                href="#"
                className="text-sm text-red-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full rounded-md bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <p className="mt-8 text-sm text-gray-400">
              Don't have an account?
              <Link
                href={ROUTES.SIGNUP}
                className="ml-2 text-red-500 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}