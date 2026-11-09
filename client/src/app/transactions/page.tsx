"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const transactions = [
  { date: "18 Oct", description: "Pret A Manger · London", category: "Eating out", status: "Pending", amount: "-₦6,850", balance: "—", type: "out" },
  { date: "18 Oct", description: "Transfer to @kwame · Rent share", category: "Transfers", status: "Posted", amount: "-₦450,000", balance: "₦4,812,400", type: "out" },
  { date: "17 Oct", description: "Salary · Northwind Ltd", category: "Income", status: "Posted", amount: "+₦3,120,000", balance: "₦5,262,400", type: "in" },
  { date: "16 Oct", description: "TfL Travel", category: "Transport", status: "Posted", amount: "-₦28,400", balance: "₦2,142,400", type: "out" },
  { date: "15 Oct", description: "Sweep to savings · Lisbon", category: "Goals", status: "Posted", amount: "-₦25,000", balance: "₦2,170,800", type: "out" },
  { date: "14 Oct", description: "Sainsbury's · Camden", category: "Groceries", status: "Posted", amount: "-₦64,120", balance: "₦2,195,800", type: "out" },
  { date: "12 Oct", description: "Card declined · Amazon", category: "Shopping", status: "Declined", amount: "₦189,000", balance: "limit reached", type: "out" },
  { date: "10 Oct", description: "Octopus Energy", category: "Bills", status: "Posted", amount: "-₦92,000", balance: "₦2,259,920", type: "out" },
];

const categories = [
  "All categories",
  "Eating out",
  "Transfers",
  "Income",
  "Transport",
  "Goals",
  "Groceries",
  "Shopping",
  "Bills",
];

export default function TransactionsPage() {
  const [filter, setFilter] = useState("All");
  const [category, setCategory] = useState("All categories");
  const [search, setSearch] = useState("");

  const filteredTransactions = useMemo(() => {
    return transactions.filter((item) => {
      const matchesType =
        filter === "All" ||
        (filter === "In" && item.type === "in") ||
        (filter === "Out" && item.type === "out");

      const matchesCategory =
        category === "All categories" || item.category === category;

      const matchesSearch =
        `${item.description} ${item.category} ${item.status}`
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesType && matchesCategory && matchesSearch;
    });
  }, [filter, category, search]);

  const exportCSV = () => {
    const headers = ["Date", "Description", "Category", "Status", "Amount", "Balance"];

    const rows = filteredTransactions.map((item) => [
      item.date,
      item.description,
      item.category,
      item.status,
      item.amount,
      item.balance,
    ]);

    const csv = [headers, ...rows]
      .map((row) => row.map((value) => `"${value.replace(/"/g, '""')}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "trust-transactions.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main className="h-dvh overflow-hidden bg-[#eeede7] p-2 sm:p-3">
      <div className="mx-auto h-full max-w-[1200px] overflow-hidden bg-[#f7f6f4] px-5 py-5 sm:px-8 lg:px-10">

        {/* Navigation */}
        <header className="flex items-center justify-between gap-5 border-b border-[#deddd8] pb-4">
          <Link
            href="/dashboard"
            className="text-[27px] font-bold tracking-tight text-[#17191b]"
          >
            Trust
          </Link>

          <nav className="hidden items-center gap-5 text-[14px] md:flex lg:gap-6">
            <Link href="/Dashboard" className="text-[#008bb1]">Accounts</Link>
            <Link href="/transfers" className="hover:text-[#008bb1]">Transfers</Link>
            <Link href="/cards" className="hover:text-[#008bb1]">Cards</Link>
            <Link href="/insights" className="hover:text-[#008bb1]">Insights</Link>
            <Link href="/scheduled" className="hover:text-[#008bb1]">Scheduled</Link>
            <Link href="/loans" className="hover:text-[#008bb1]">Loans</Link>
            <Link href="/inbox" className="text-[#008bb1]">Inbox · 2</Link>
            <Link href="/profile" className="hover:text-[#008bb1]">@amara</Link>
          </nav>
        </header>

        {/* Page heading */}
        <section className="mt-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#526a7c]">
                Current · 31847720
              </p>

              <h1 className="text-[32px] font-semibold leading-tight tracking-tight text-[#17191b] sm:text-[36px]">
                Transactions
              </h1>
            </div>

            <button
              onClick={exportCSV}
              className="mb-1 h-[37px] shrink-0 border border-[#cececa] px-4 text-[12px] font-semibold transition hover:border-[#008bb1] hover:text-[#008bb1]"
            >
              Export CSV
            </button>
          </div>
        </section>

        {/* Filters */}
        <section className="mt-5 flex flex-wrap items-center gap-3">
          <div className="flex h-[35px] border border-[#cececa]">
            {["All", "In", "Out"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`border-r border-[#cececa] px-3 text-[12px] last:border-r-0 transition ${
                  filter === item
                    ? "bg-[#008bb1] text-white"
                    : "hover:bg-[#e8f3f5]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex h-[35px] items-center border border-[#cececa] bg-[#eeedeb] px-3">
            <span className="text-[12px]">1 Oct 2026 – 18 Oct 2026</span>
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-[35px] min-w-[155px] border border-[#cececa] bg-[#eeedeb] px-3 text-[12px] outline-none focus:border-[#008bb1]"
          >
            {categories.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>

          <input
            type="search"
            placeholder="Search merchant or reference"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-[35px] min-w-[180px] flex-1 border border-[#cececa] bg-[#eeedeb] px-3 text-[12px] outline-none placeholder:text-[#78818a] focus:border-[#008bb1] sm:max-w-[280px]"
          />
        </section>

        {/* Transactions table */}
        <section className="mt-6">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[850px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#cececa] text-[10px] uppercase tracking-[0.1em] text-[#526a7c]">
                  <th className="w-[10%] pb-3 pl-2 font-medium">Date</th>
                  <th className="w-[42%] pb-3 font-medium">Description</th>
                  <th className="w-[16%] pb-3 font-medium">Category</th>
                  <th className="w-[12%] pb-3 font-medium">Status</th>
                  <th className="w-[10%] pb-3 text-right font-medium">Amount</th>
                  <th className="w-[10%] pb-3 pr-2 text-right font-medium">Balance</th>
                </tr>
              </thead>

              <tbody>
                {filteredTransactions.map((item, index) => (
                  <tr
                    key={`${item.date}-${item.description}`}
                    className="border-b border-[#e0dfdc] text-[12px] transition hover:bg-[#f0efec]"
                  >
                    <td className="whitespace-nowrap py-[13px] pl-2 text-[#526a7c]">
                      {item.date}
                    </td>

                    <td className="whitespace-nowrap py-[13px] pr-3 font-medium">
                      {item.description}
                    </td>

                    <td className="whitespace-nowrap py-[13px]">
                      {item.category}
                    </td>

                    <td className="py-[13px]">
                      <span
                        className={`inline-block whitespace-nowrap px-2 py-1 text-[10px] ${
                          item.status === "Pending"
                            ? "bg-[#f7f4f2] text-[#9b6b5f]"
                            : item.status === "Declined"
                            ? "bg-[#fff0f4] text-[#bd1760]"
                            : "bg-[#e8f6f8] text-[#007995]"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className={`whitespace-nowrap py-[13px] text-right tabular-nums ${
                      item.type === "in" ? "text-[#008bb1]" : ""
                    }`}>
                      {item.amount}
                    </td>

                    <td className="whitespace-nowrap py-[13px] pr-2 text-right tabular-nums text-[#34383c]">
                      {item.balance}
                    </td>
                  </tr>
                ))}

                {filteredTransactions.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-[13px] text-[#526a7c]">
                      No transactions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[12px] text-[#526a7c]">
          <span>
            Showing {filteredTransactions.length} of 1,284 · cursor pagination, 50 per page
          </span>

          <button
            type="button"
            className="font-semibold text-[#008bb1] transition hover:underline"
            onClick={() => setSearch("")}
          >
            Load more →
          </button>
        </footer>

      </div>
    </main>
  );
}