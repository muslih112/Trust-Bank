"use client";

import Link from "next/link";

const transactions = [
  { date: "Today", description: "Pret A Manger", category: "Eating out · pending", amount: "-₦6,850" },
  { date: "Today", description: "Transfer to @kwame", category: "Rent share", amount: "-₦450,000" },
  { date: "Yesterday", description: "Salary · Northwind Ltd", category: "Income", amount: "+₦3,120,000" },
  { date: "16 Oct", description: "TfL Travel", category: "Transport", amount: "-₦28,400" },
  { date: "15 Oct", description: "Sweep to savings", category: "Goal · Lisbon", amount: "-₦25,000" },
];

const budgets = [
  { name: "Eating out", spent: 212000, limit: 180000, color: "bg-[#c60070]" },
  { name: "Groceries", spent: 248000, limit: 350000, color: "bg-[#008bb1]" },
  { name: "Transport", spent: 96000, limit: 140000, color: "bg-[#008bb1]" },
];

const upcoming = [
  { name: "Rent · Hartley Lettings", date: "1 Nov · ₦1,150,000" },
  { name: "Loan instalment 3 of 24", date: "5 Nov · ₦212,180" },
  { name: "Sweep to Lisbon", date: "Mon · ₦25,000" },
];

export default function DashboardPage() {
  return (
    <main className="h-dvh overflow-hidden bg-[#eeede7] p-2">
  <div className="mx-auto h-full max-w-[1440px] overflow-hidden bg-[#f7f6f4] px-5 py-4 text-[#17191b] sm:px-8 lg:px-10">

        {/* Navigation */}
        <header className="flex flex-wrap items-center justify-between gap-5 border-b border-[#deddd8] pb-5">
          <Link href="/dashboard" className=" text-3xl font-bold tracking-tight">
            Trust
          </Link>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-3  text-sm sm:gap-x-7 sm:text-base">
            <Link href="/Dashboard" className="border-b-2 border-[#008bb1] pb-2 font-semibold text-[#008bb1]">
              Accounts
            </Link>
            <Link href="/transfers" className="transition hover:text-[#008bb1]">Transfers</Link>
            <Link href="/cards" className="transition hover:text-[#008bb1]">Cards</Link>
            <Link href="/insights" className="transition hover:text-[#008bb1]">Insights</Link>
            <Link href="/scheduled" className="transition hover:text-[#008bb1]">Scheduled</Link>
            <Link href="/loans" className="transition hover:text-[#008bb1]">Loans</Link>
            <Link href="/inbox" className="text-[#008bb1]">Inbox · 2</Link>
            <Link href="/profile" className="font-medium">@user</Link>
          </nav>
        </header>

        {/* Dashboard content */}
        <div className="grid grid-cols-1 gap-10 pt-8 lg:grid-cols-[1.55fr_1fr] lg:gap-12">

          {/* Left column */}
          <section className="min-w-0">
            <p className="mb-6  text-xs uppercase tracking-[0.12em] text-[#526a7c]">
              Good morning, user
            </p>

            {/* Account balances */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <article className="min-w-0 sm:border-r sm:border-[#deddd8] sm:pr-6">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="text-xl">Current</span>
                  <span className="text-sm text-[#526a7c]">31847720</span>
                </div>

                <h1 className="mt-3 whitespace-nowrap text-4xl font-bold tracking-tight sm:text-[clamp(2rem,3.2vw,3.6rem)]">
                  ₦4,000,000.00
                </h1>

                <p className="mt-3 text-[#526a7c]">
                  ₦4,000,000.00 available · ₦100,000.00pending
                </p>
              </article>

              <article className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="text-xl">Savings</span>
                  <span className="text-sm text-[#526a7c]">31847738</span>
                </div>

                <h2 className="mt-3 whitespace-nowrap text-4xl font-bold tracking-tight sm:text-[clamp(2rem,3.2vw,3.6rem)]">
                  ₦2,000,000.00
                </h2>

                <p className="mt-3  text-sm leading-6 text-[#526a7c]">
                  Goal: Lisbon, 27% · sweep ₦270,000.00 weekly
                </p>
              </article>
            </div>

            {/* Account actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/transfers"
                className="inline-flex min-h-11 items-center justify-center bg-[#008bb1] px-6  text-sm font-bold text-white transition hover:bg-[#006f90]"
              >
                Send money
              </Link>

              <Link
                href="/savings"
                className="inline-flex min-h-11 items-center justify-center border border-[#c9c9c5] px-5  text-sm transition hover:border-[#008bb1]"
              >
                Move to savings
              </Link>

              <Link
                href="/transactions"
                className="px-2 py-2  text-sm font-semibold text-[#008bb1] hover:underline"
              >
                All transactions →
              </Link>
            </div>

            {/* Recent activity */}
            <section className="mt-10">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className=" text-2xl font-bold sm:text-[28px]">
                  Recent activity
                </h2>
                <Link href="/transactions" className="whitespace-nowrap  text-sm text-[#008bb1] hover:underline">
                  View all →
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[550px] border-collapse text-left  text-sm">
                  <thead>
                    <tr className="border-b border-[#deddd8] text-xs uppercase tracking-wider text-[#526a7c]">
                      <th className="pb-3 pr-3 font-normal">Date</th>
                      <th className="pb-3 pr-3 font-normal">Description</th>
                      <th className="pb-3 pr-3 font-normal">Category</th>
                      <th className="pb-3 text-right font-normal">Amount</th>
                    </tr>
                  </thead>

                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={`${transaction.date}-${transaction.description}`} className="border-b border-[#e2e1dd]">
                        <td className="whitespace-nowrap py-4 pr-3 text-[#526a7c]">{transaction.date}</td>
                        <td className="whitespace-nowrap py-4 pr-3">{transaction.description}</td>
                        <td className="whitespace-nowrap py-4 pr-3 text-[#526a7c]">{transaction.category}</td>
                        <td className={`whitespace-nowrap py-4 text-right ${transaction.amount.startsWith("+") ? "text-[#008bb1]" : ""}`}>
                          {transaction.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </section>

          {/* Right column */}
          <aside className="space-y-9">

            {/* Budgets */}
            <section>
              <h2 className="mb-5  text-2xl font-bold sm:text-[28px]">
                October budgets
              </h2>

              <div className="space-y-5">
                {budgets.map((budget) => {
                  const percentage = Math.min(
                    (budget.spent / budget.limit) * 100,
                    100
                  );
                  const isOverBudget = budget.spent > budget.limit;

                  return (
                    <article key={budget.name}>
                      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2  text-sm sm:text-base">
                        <span>{budget.name}</span>
                        <span className={isOverBudget ? "text-[#c60070]" : ""}>
                          ₦{budget.spent.toLocaleString("en-NG")} of ₦{budget.limit.toLocaleString("en-NG")}
                        </span>
                      </div>

                      <div
                        className="h-[4px] w-full overflow-hidden bg-[#deddd8]"
                        role="progressbar"
                        aria-label={`${budget.name} budget used`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={Math.round(percentage)}
                      >
                        <div
                          className={`h-full ${isOverBudget ? "bg-[#c60070]" : budget.color}`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* Upcoming payments */}
            <section>
              <h2 className="mb-4  text-2xl font-bold sm:text-[28px]">
                Upcoming
              </h2>

              <div className="space-y-4">
                {upcoming.map((item) => (
                  <div key={item.name} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1  text-sm sm:text-base">
                    <span>{item.name}</span>
                    <span className="text-[#526a7c]">{item.date}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Cards */}
            <section>
              <h2 className="mb-4  text-2xl font-bold sm:text-[28px]">
                Cards
              </h2>

              <div className="flex flex-wrap items-center justify-between gap-3 ">
                <span>Current · •••• 4471</span>
                <span className="bg-[#e0f3f8] px-3 py-1 text-xs text-[#006f90]">
                  Active
                </span>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
