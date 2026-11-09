"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  { name: "Rent", amount: 575000, change: "—", width: "100%", color: "bg-[#444444]", changeColor: "text-[#526a7c]" },
  { name: "Groceries", amount: 248300, change: "−₦22,000", width: "43.2%", color: "bg-[#444444]", changeColor: "text-[#008bb1]" },
  { name: "Eating out", amount: 212400, change: "+₦58,000", width: "37%", color: "bg-[#d50070]", changeColor: "text-[#d50070]" },
  { name: "Transport", amount: 96200, change: "+₦4,000", width: "16.7%", color: "bg-[#444444]", changeColor: "text-[#526a7c]" },
  { name: "Bills", amount: 92000, change: "—", width: "16%", color: "bg-[#444444]", changeColor: "text-[#526a7c]" },
  { name: "Goals", amount: 75000, change: "—", width: "13%", color: "bg-[#008bb1]", changeColor: "text-[#526a7c]" },
];

const budgets = [
  { name: "Eating out", remaining: "₦32,000 over", width: "100%", color: "bg-[#d50070]", over: true },
  { name: "Groceries", remaining: "₦102,000 left", width: "70.9%", color: "bg-[#008bb1]", over: false },
  { name: "Transport", remaining: "₦44,000 left", width: "68.6%", color: "bg-[#008bb1]", over: false },
  { name: "Shopping", remaining: "₦120,000 left", width: "0%", color: "bg-[#008bb1]", over: false },
];

const months = ["Aug", "Sep", "Oct"];

export default function InsightsPage() {
  const [selectedMonth, setSelectedMonth] = useState("Oct");

  return (
    <main className="h-dvh overflow-hidden bg-[#eeede7] p-2 sm:p-3">
      <div className="mx-auto h-full max-w-[1200px] overflow-hidden bg-[#f7f6f4] px-6 py-5 sm:px-10 lg:px-12">

        {/* Navigation */}
        <header className="flex items-center justify-between gap-5 border-b border-[#deddd8] pb-4">
          <Link
            href="/dashboard"
            className="text-[27px] font-bold tracking-tight text-[#17191b]"
          >
            Trust
          </Link>

          <nav className="hidden items-center gap-5 text-[14px] md:flex lg:gap-6">
            <Link href="/Dashboard" className="hover:text-[#008bb1]">Accounts</Link>
            <Link href="/transfers" className="hover:text-[#008bb1]">Transfers</Link>
            <Link href="/cards" className="hover:text-[#008bb1]">Cards</Link>
            <Link href="/insights" className="text-[#008bb1]">Insights</Link>
            <Link href="/scheduled" className="hover:text-[#008bb1]">Scheduled</Link>
            <Link href="/loans" className="hover:text-[#008bb1]">Loans</Link>
            <Link href="/inbox" className="text-[#008bb1]">Inbox · 2</Link>
            <Link href="/profile" className="hover:text-[#008bb1]">@user</Link>
          </nav>
        </header>

        {/* Insights heading */}
        <section className="mt-7">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-[850px]">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.12em] text-[#526a7c]">
                {selectedMonth === "Oct" ? "October 2026 · 18 days in" : `${selectedMonth} 2026`}
              </p>

              <h1 className="text-[30px] font-semibold leading-[1.2] tracking-tight text-[#17191b] sm:text-[34px]">
                Spent ₦1,214,620 — ₦96,000 less than this time last month
              </h1>
            </div>

            {/* Month selector */}
            <div className="flex shrink-0 border border-[#cececa]">
              {months.map((month) => (
                <button
                  key={month}
                  type="button"
                  onClick={() => setSelectedMonth(month)}
                  className={`border-r border-[#cececa] px-4 py-2 text-[13px] transition last:border-r-0 ${
                    selectedMonth === month
                      ? "bg-[#008bb1] text-white"
                      : "text-[#17191b] hover:bg-[#e8f3f5]"
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main content */}
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-12">

          {/* Spending by category */}
          <section>
            <h2 className="mb-5 text-[21px] font-semibold tracking-tight">
              By category
            </h2>

            <div className="space-y-[17px]">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="grid grid-cols-[115px_minmax(80px,1fr)_105px_85px] items-center gap-3 text-[13px] sm:grid-cols-[125px_minmax(100px,1fr)_105px_90px]"
                >
                  <span className={`font-medium ${category.name === "Eating out" ? "text-[#d50070]" : "text-[#17191b]"}`}>
                    {category.name}
                  </span>

                  <div className="h-[13px] w-full bg-transparent">
                    <div
                      className={`h-full ${category.color}`}
                      style={{ width: category.width }}
                    />
                  </div>

                  <span className="text-right font-medium tabular-nums">
                    ₦{category.amount.toLocaleString("en-NG")}
                  </span>

                  <span className={`text-right tabular-nums ${category.changeColor}`}>
                    {category.change}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-[570px] text-[13px] leading-5 text-[#526a7c]">
              Last column compares to the same day in September.
              Magenta marks a category over its budget.
            </p>
          </section>

          {/* Budgets */}
          <section>
            <h2 className="mb-5 text-[21px] font-semibold tracking-tight">
              Budgets
            </h2>

            <div className="space-y-5">
              {budgets.map((budget) => (
                <div key={budget.name}>
                  <div className="mb-2 flex items-center justify-between gap-3 text-[13px]">
                    <span className="font-medium">{budget.name}</span>

                    <span className={`whitespace-nowrap tabular-nums ${budget.over ? "text-[#d50070]" : "text-[#17191b]"}`}>
                      {budget.remaining}
                    </span>
                  </div>

                  <div className="h-[4px] w-full bg-[#deddd8]">
                    <div
                      className={`h-full ${budget.color}`}
                      style={{ width: budget.width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/budgets"
              className="mt-6 inline-flex h-[38px] items-center border border-[#cececa] px-5 text-[13px] font-medium transition hover:border-[#008bb1] hover:text-[#008bb1]"
            >
              Edit budgets
            </Link>
          </section>

        </div>
      </div>
    </main>
  );
}