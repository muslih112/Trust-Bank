"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

 const handleSubmit: React.ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();

    console.log("Login details:", form);
  };

  return (
    <main className="h-screen overflow-hidden bg-[#f4f3f3]">
      <div className="mx-auto h-screen max-w-[550px] border-l border-gray-200 bg-[#f7f7f7] px-8 py-4 sm:px-10">

        <div className="font-serif text-[27px] font-bold text-[#111]">
          Trust
        </div>

        <section className="mt-10">
          <h1 className="font-serif text-[42px] font-bold leading-none text-[#202020]">
            Welcome back.
          </h1>

          <p className="mt-4 max-w-[500px] font-serif text-[18px] leading-[1.35] text-[#16405a]">
            Sign in to your account. Sessions last ten minutes
            between refreshes and can be ended from any device.
          </p>

          <form onSubmit={handleSubmit} className="mt-6">

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-1.5 block font-serif text-[15px] text-[#16405a]"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
                autoComplete="email"
                className="h-[50px] w-full border border-gray-300 bg-[#eeeeee] px-4 font-serif text-[18px] text-[#111] outline-none focus:border-[#078db6]"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-1.5 block font-serif text-[15px] text-[#16405a]"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                required
                autoComplete="current-password"
                className="h-[50px] w-full border border-gray-300 bg-[#eeeeee] px-4 font-serif text-[18px] text-[#111] outline-none focus:border-[#078db6]"
              />
            </div>

            {/* Submit button */}
            <Link href="/Dashboard">
            <button
              type="submit"
              className="mb-4 flex h-[50px] w-full items-center justify-center rounded bg-[#00698f] font-serif text-[19px] font-bold text-white transition-colors hover:bg-[#005f7a]"
            >
              Sign in
            </button>
            </Link>

            {/* Bottom links */}
            <div className="mt-4 flex items-center justify-between">
              <Link
                href="/forgot-password"
                className="font-serif text-[16px] text-[#00698f] underline"
              >
                Forgot password?
              </Link>

              <Link
                href="/auth/signup"
                className="font-serif text-[16px] text-[#00698f] underline"
              >
                Create account
              </Link>
            </div>

          </form>
        </section>
      </div>
    </main>
  );
}