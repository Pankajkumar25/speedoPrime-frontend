"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useAuth } from "@/hooks/useAuth";
import Input from "@/components/common/Input";
import { signupSchema, SignupFormData } from "@/lib/validations";
import { ROUTES } from "@/utils/constants";

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();

  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {

    try {
      await signup(data);
      toast.success("Account Created Successfully");
      router.push(ROUTES.DASHBOARD);
    } catch {
      toast.error("Signup failed.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-5">
      <div className="w-full max-w-6xl bg-[#1B1B1B] rounded-xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Image */}
        <div className="hidden lg:block relative min-h-[650px]">
          <Image
            src="/image/signup-banner.png"
            alt="banner"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="flex items-center justify-center px-8 py-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md"
          >
            <Image
              src="/image/logo.png"
              width={130}
              height={40}
              alt="logo"
              className="mb-8"
            />

            <h2 className="text-white text-3xl font-semibold">
              Create an account
            </h2>

            <p className="text-gray-400 text-sm mt-2 mb-8">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>

            {serverError && (
              <p className="text-red-500 text-sm mb-4">{serverError}</p>
            )}

            <div className="space-y-5">

              <Input
                placeholder="Full Name"
                error={errors.name?.message}
                {...register("name")}
              />

              {/* <Input
                placeholder="Phone Number"
                error={errors.phone?.message}
                {...register("phone")}
              /> */}

              <Input
                placeholder="Email"
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

            <label className="flex items-start gap-3 mt-6 text-xs text-gray-400">
              <input
                type="checkbox"
                className="mt-1 accent-red-600"
              />

              <span>
                You have agreed to Speedo Prime{" "}
                <span className="text-red-500 cursor-pointer">
                  Privacy Policy
                </span>{" "}
                {" "}
                <span className="text-red-500 cursor-pointer">
                  Rules and Regulations
                </span>
                 .that you will abide by all the internal updates and policies of the platform.
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full bg-red-600 hover:bg-red-700 transition rounded-md py-3 text-white font-semibold cursor-pointer"
            >
              {isSubmitting ? "Creating..." : "Verify Account"}
            </button>

            <p className="mt-8 text-gray-500 text-sm">
              Already have account?
              <Link
                href={ROUTES.LOGIN}
                className="text-red-500 ml-2 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}