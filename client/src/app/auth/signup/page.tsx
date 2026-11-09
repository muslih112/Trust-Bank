"use client";
import Link from "next/link";

import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // signup request here
  };

  return (
    //
    <main className="bg-white flex min-h-screen shadow items-center justify-center">
      <div className="h-full w-full max-w-[580px] bg-[#f4f3f3] px-6 py-2">
        {/* Logo */}
        <div className="mb-12 font-serif text-[34px] font-bold text-[#111]">
          Trust
        </div>

        <section className="max-w-[580px]">
          <h1 className="font-serif text-[44px] font-bold leading-[1.05] text-[#202020]">
            Create your account.
          </h1>

          <p className="mt-4 max-w-[570px] font-serif text-[16px] leading-[1.4] text-[#16405a]">
            Sign up to get started. Your account lets you manage your sessions
            and access Trust from any device.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            {/* Name */}
            <div className="mb-8">
              <label
                htmlFor="name"
                className="block font-serif text-[17px] text-[#16405a]"
              >
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
                className="h-[41px] w-full border border-gray-300 bg-[#eeeeee] px-4 font-serif text-[14px] text-[#111] outline-none focus:border-[#078db6]"
              />
            </div>

            {/* Email */}
            <div className="mb-8">
              <label
                htmlFor="email"
                className="block font-serif text-[17px] text-[#16405a]"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="h-[41px] w-full border border-gray-300 bg-[#eeeeee] px-4 font-serif text-[14px] text-[#111] outline-none focus:border-[#078db6]"
              />
            </div>

            {/* Password */}
            <div className="mb-8">
              <label
                htmlFor="password"
                className="block font-serif text-[17px] text-[#16405a]"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                className="h-[41px] w-full border border-gray-300 bg-[#eeeeee] px-4 font-serif text-[14px] text-[#111] outline-none focus:border-[#078db6]"
              />
            </div>

            {/* Confirm password */}
            <div className="mb-9">
              <label
                htmlFor="confirmPassword"
                className="block font-serif text-[17px] text-[#16405a]"
              >
                Confirm password
              </label>
 
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="h-[41px] w-full border border-gray-300 bg-[#eeeeee] px-4 font-serif text-[14px] text-[#111] outline-none focus:border-[#078db6]"
              />
            </div>

            {/* Submit */}
            <div className="flex items-center gap-6">
              <Link href="/auth/login">
                <button
                  type="submit"
                  className="h-[41px] w-[200px] rounded bg-[#00698f] font-serif text-[21px] text-white outline-none transition-colors duration-300 hover:bg-[#005f7a]"
                >
                  Create account
                </button>
              </Link>

              <Link
                href="/auth/login"
                className="font-serif text-[17px] text-[#16405a]"
              >
                Already have an account? Sign in
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
