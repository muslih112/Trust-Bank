"use client";

import Link from "next/link";

const authorisations = [
  {
    date: "Today",
    merchant: "Pret A Manger",
    status: "Approved · pending",
    statusStyle: "bg-[#f7f4f2] text-[#9b6b5f]",
    amount: "₦6,850",
  },
  {
    date: "16 Oct",
    merchant: "TfL Travel",
    status: "Settled",
    statusStyle: "bg-[#e8f6f8] text-[#007995]",
    amount: "₦28,400",
  },
  {
    date: "12 Oct",
    merchant: "Amazon",
    status: "Declined · limit",
    statusStyle: "bg-[#fff0f4] text-[#bd1760]",
    amount: "₦189,000",
  },
  {
    date: "9 Oct",
    merchant: "Uber",
    status: "Declined · frozen",
    statusStyle: "bg-[#fff0f4] text-[#bd1760]",
    amount: "₦14,200",
  },
];

export default function CardsPage() {
  return (
    <main className="h-dvh overflow-hidden bg-[#eeede7] p-2 sm:p-4">
      <div className="mx-auto h-full max-w-[1200px] overflow-hidden bg-[#f7f6f4] px-6 py-5 sm:px-10 lg:px-12">

        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#deddd8] pb-4">
          <Link
            href="/dashboard"
            className=" text-[27px] font-bold tracking-tight text-[#17191b]"
          >
            Trust
          </Link>

          <nav className="hidden items-center gap-5  text-[14px] sm:flex lg:gap-6 lg:text-[15px]">
            <Link
              href="/Dashboard"
              className="transition hover:text-[#008bb1]"
            >
              Accounts
            </Link>

            <Link
              href="/transfers"
              className="transition hover:text-[#008bb1]"
            >
              Transfers
            </Link>

            <Link
              href="/cards"
              className="text-[#008bb1]"
            >
              Cards
            </Link>

            <Link
              href="/insights"
              className="transition hover:text-[#008bb1]"
            >
              Insights
            </Link>

            <Link
              href="/scheduled"
              className="transition hover:text-[#008bb1]"
            >
              Scheduled
            </Link>

            <Link
              href="/loans"
              className="transition hover:text-[#008bb1]"
            >
              Loans
            </Link>

            <Link
              href="/inbox"
              className="text-[#008bb1]"
            >
              Inbox · 2
            </Link>

            <Link
              href="/profile"
              className="transition hover:text-[#008bb1]"
            >
              @amara
            </Link>
          </nav>
        </header>

        {/* Page */}
        <section className="grid grid-cols-1 gap-10 pt-7 lg:grid-cols-[1fr_1.08fr] lg:gap-12">

          {/* Left */}
          <section>
            <h1 className=" text-[36px] font-bold leading-none text-[#17191b] sm:text-[38px]">
              Virtual card
            </h1>

            {/* Virtual card */}
            <div className="mt-7 w-full max-w-[395px]">
              <div className="relative h-[248px] overflow-hidden rounded-[3px] bg-[#211f1e] px-6 py-6 text-white shadow-[0_15px_30px_rgba(0,0,0,0.16)]">

                {/* Decorative card detail */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/5" />
                <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-white/5" />

                {/* Card top */}
                <div className="relative flex items-center justify-between">
                  <span className=" text-[20px] font-bold">
                    Trust
                  </span>

                  <span className="font-mono text-[12px] tracking-wider">
                    VIRTUAL · DEBIT
                  </span>
                </div>

                {/* Card number */}
                <div className="absolute bottom-[70px] left-6 font-mono text-[25px] tracking-[0.18em]">
                  •••• &nbsp; •••• &nbsp; •••• &nbsp; 4471
                </div>

                {/* Card holder */}
                <div className="absolute bottom-7 left-6 flex items-center gap-8">
                  <div>
                    <p className=" text-[12px] font-bold">
                      user
                    </p>
                  </div>

                  <div>
                    <p className=" text-[12px] font-bold">
                      09/29
                    </p>
                  </div>
                </div>
              </div>

              {/* Card actions */}
              <div className="mt-5 flex items-center gap-5">
                <button
                  type="button"
                  className="border border-[#c9c8c4] px-5 py-2  text-[14px] transition hover:border-[#008bb1] hover:text-[#008bb1]"
                >
                  Reveal details
                </button>

                <button
                  type="button"
                  className=" text-[14px] font-semibold text-[#008bb1] hover:underline"
                >
                  Cancel card
                </button>
              </div>
            </div>
          </section>

          {/* Right */}
          <section className="max-w-[500px]">

            {/* Status */}
            <div>
              <div className="flex items-center justify-between gap-4">
                <h2 className=" text-[23px] font-bold">
                  Status
                </h2>

                <div className="flex">
                  <button
                    type="button"
                    className="border border-[#c9c8c4] bg-[#f7f6f4] px-4 py-2  text-[13px]"
                  >
                    Active
                  </button>

                  <button
                    type="button"
                    className="-ml-px border border-[#c9c8c4] px-4 py-2  text-[13px] text-[#526a7c]"
                  >
                    Frozen
                  </button>
                </div>
              </div>

              <p className="mt-3 max-w-[490px]  text-[14px] leading-5 text-[#526a7c]">
                Freezing declines every new authorisation immediately.
                Pending ones still settle.
              </p>
            </div>

            {/* Monthly limit */}
            <section className="mt-8">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className=" text-[22px] font-bold">
                  Monthly limit
                </h2>

                <span className=" text-[13px]">
                  ₦611,000 of ₦800,000
                </span>
              </div>

              <div className="mt-3 h-[5px] w-full bg-[#deddd8]">
                <div
                  className="h-full bg-[#008bb1]"
                  style={{ width: "76.4%" }}
                />
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className=" text-[13px] text-[#526a7c]">
                  Resets 1 November
                </span>

                <button
                  type="button"
                  className=" text-[13px] text-[#008bb1] underline"
                >
                  Change limit
                </button>
              </div>
            </section>

            {/* Recent authorisations */}
            <section className="mt-8">
              <h2 className="mb-4  text-[22px] font-bold">
                Recent authorisations
              </h2>

              <div className="border-t border-[#deddd8]">
                {authorisations.map((item) => (
                  <div
                    key={`${item.date}-${item.merchant}`}
                    className="grid grid-cols-[70px_1fr_auto_70px] items-center gap-3 border-b border-[#deddd8] py-3 font-serif text-[13px]"
                  >
                    <span className="text-[#526a7c]">
                      {item.date}
                    </span>

                    <span className="truncate">
                      {item.merchant}
                    </span>

                    <span
                      className={`whitespace-nowrap px-2 py-1 text-[11px] ${item.statusStyle}`}
                    >
                      {item.status}
                    </span>

                    <span className="text-right whitespace-nowrap">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </section>

          </section>
        </section>
      </div>
    </main>
  );
}