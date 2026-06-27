"use client";

import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, className = "", ...props }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          {...props}
          className={`w-full rounded-md bg-[#333333] border ${
            error
              ? "border-red-500"
              : "border-[#444]"
          } px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-red-500 ${className}`}
        />

        {error && (
          <p className="text-red-500 text-xs mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;