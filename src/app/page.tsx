const services = [
  {
    title: "Engine Diagnostics",
    description:
      "Pinpoint electrical, injection, and warning-light issues before they become expensive failures.",
  },
  {
    title: "Seasonal Maintenance",
    description:
      "Oil, filters, brake checks, and fluids handled on a predictable schedule with transparent pricing.",
  },
  {
    title: "Rapid Turnaround",
    description:
      "Priority slots for commuters and fleet owners who need the car back the same day.",
  },
];

const highlights = [
  "Live booking confirmation in under 10 minutes",
  "Certified mechanics for German, Japanese, and Korean brands",
  "Status updates with photo notes while the vehicle is in service",
];

const stats = [
  { value: "12+", label: "years in operation" },
  { value: "4.9/5", label: "average client rating" },
  { value: "1,800+", label: "cars serviced yearly" },
];

export default function Home() {
  return (
    <main className="relative isolate flex-1 overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(255,137,61,0.28),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(41,70,121,0.2),_transparent_30%),linear-gradient(180deg,_#f7f2eb_0%,_#f3efe8_45%,_#e6ddd2_100%)]" />
      <div className="absolute right-[-8rem] top-24 -z-10 h-72 w-72 rounded-full border border-white/50 bg-white/20 blur-3xl" />
      <div className="absolute left-[-6rem] top-[34rem] -z-10 h-64 w-64 rounded-full bg-[#243a67]/10 blur-3xl" />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-8 rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-[0_24px_80px_rgba(27,31,41,0.08)] backdrop-blur md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-5">
              <span className="inline-flex w-fit rounded-full border border-[#243a67]/15 bg-white/80 px-4 py-2 font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.24em] text-[#243a67]">
                Web-Seirei / car-service
              </span>
              <div className="space-y-4">
                <p className="max-w-xl text-sm font-medium uppercase tracking-[0.32em] text-[#b85d25]">
                  Premium maintenance for people who rely on their car every day
                </p>
                <h1 className="max-w-4xl text-5xl leading-none font-semibold tracking-[-0.06em] text-[#142033] sm:text-6xl lg:text-7xl">
                  Garage service that feels as sharp as the drive after pickup.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[#43516a] sm:text-xl">
                  Diagnostics, maintenance, and rapid repairs in one organized flow. Book
                  the slot, get real updates, approve the estimate, and leave with a car
                  that feels sorted.
                </p>
              </div>
            </div>

            <div className="grid gap-3 rounded-[1.75rem] border border-[#142033]/10 bg-[#142033] p-5 text-[#f7f2eb] shadow-[0_18px_60px_rgba(20,32,51,0.24)] sm:min-w-[300px]">
              <div className="flex items-center justify-between font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.28em] text-[#f1c7ad]">
                <span>Open today</span>
                <span>08:00-20:00</span>
              </div>
              <p className="text-2xl font-semibold tracking-[-0.04em]">
                Same-day diagnostics for urgent issues.
              </p>
              <p className="text-sm leading-7 text-[#c3ccdb]">
                For launch, this project ships with Next.js 16, GitHub CI, and a clean
                path to Vercel production.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-[#142033]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#b85d25] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#9f4d1a]"
                href="mailto:service@car-service.example"
              >
                Request Inspection
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#142033]/10 bg-white px-6 py-3 text-sm font-semibold text-[#142033] transition-colors duration-200 hover:bg-[#142033] hover:text-white"
                href="#services"
              >
                View Services
              </a>
            </div>

            <ul className="grid gap-2 text-sm text-[#4a556a]">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#b85d25]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
          <div
            id="services"
            className="rounded-[2rem] bg-[#142033] p-6 text-[#f7f2eb] shadow-[0_28px_80px_rgba(20,32,51,0.18)] md:p-8"
          >
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.3em] text-[#f1c7ad]">
                  Core services
                </p>
                <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                  Built for reliability, not guesswork.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-[#c3ccdb]">
                The page is intentionally static and marketing-focused, while the repo is
                ready for full Next.js runtime deployment on Vercel.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition-transform duration-200 hover:-translate-y-1"
                >
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.26em] text-[#f1c7ad]">
                    Service
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#d3d9e4]">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[#142033]/10 bg-white/75 p-6 shadow-[0_24px_70px_rgba(27,31,41,0.08)] backdrop-blur md:p-8">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.3em] text-[#b85d25]">
              Why clients stay
            </p>
            <div className="mt-6 grid gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-[#142033]/10 bg-[#f8f4ee] p-5"
                >
                  <div className="text-4xl font-semibold tracking-[-0.06em] text-[#142033]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm uppercase tracking-[0.22em] text-[#60708a]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_24px_80px_rgba(27,31,41,0.08)] backdrop-blur md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.3em] text-[#243a67]">
                Launch stack
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[#142033] sm:text-4xl">
                Next.js 16, GitHub CI, Vercel-ready deployment flow.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-[#4a556a]">
                This repository is prepared for a straightforward production handoff: code
                lives in GitHub, CI validates every push, and Vercel can attach directly
                to the repository for automatic deployments and a public URL.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-[#f3ece3] px-5 py-4 font-[family-name:var(--font-jetbrains-mono)] text-sm leading-7 text-[#142033]">
              <div>npm run lint</div>
              <div>npm run build</div>
              <div>git push origin main</div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
