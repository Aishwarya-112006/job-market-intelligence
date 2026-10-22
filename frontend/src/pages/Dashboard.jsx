
import {
  BriefcaseBusiness,
  Users,
  Code2,
  Globe2,
  TrendingUp,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Activity,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const skillData = [
  { skill: "Python", jobs: 820 },
  { skill: "SQL", jobs: 760 },
  { skill: "Java", jobs: 620 },
  { skill: "AWS", jobs: 540 },
  { skill: "React", jobs: 480 },
  { skill: "Docker", jobs: 420 },
];

const experienceData = [
  { name: "Entry Level", value: 30 },
  { name: "Mid Level", value: 45 },
  { name: "Senior Level", value: 25 },
];

const COLORS = ["#3b82ff", "#ff3d8d", "#8b5cf6"];

const stats = [
  {
    label: "Total Job Listings",
    value: "4,568",
    change: "Collected listings",
    icon: BriefcaseBusiness,
    accent: "#3b82ff",
    glow: "rgba(59,130,255,0.12)",
  },
  {
    label: "Skills Tracked",
    value: "58",
    change: "Across job descriptions",
    icon: Code2,
    accent: "#ff3d8d",
    glow: "rgba(255,61,141,0.10)",
  },
  {
    label: "Companies",
    value: "1,240",
    change: "Distinct employers",
    icon: Users,
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.10)",
  },
  {
    label: "Remote Jobs",
    value: "1,876",
    change: "41% of listed jobs",
    icon: Globe2,
    accent: "#34d399",
    glow: "rgba(52,211,153,0.09)",
  },
];

const panelClass =
  "rounded-2xl border border-white/[0.08] bg-[#0a0d18]/90 p-5 shadow-[0_12px_45px_rgba(0,0,0,0.12)] sm:p-6";

const tooltipStyle = {
  backgroundColor: "#0b1020",
  border: "1px solid rgba(59,130,255,0.3)",
  borderRadius: "12px",
  color: "#f4f7ff",
};

function Dashboard() {
  return (
    <div className="space-y-7">
      {/* Dashboard heading */}
      <section className="relative overflow-hidden rounded-3xl border border-blue-400/15 bg-gradient-to-r from-[#0b1429] via-[#0b0e1b] to-[#180b19] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full bg-blue-500/15 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-24 right-1/3 h-48 w-48 rounded-full bg-[#ff3d8d]/10 blur-[80px]" />

        <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">
              <Sparkles size={13} />
              Intelligence overview
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Understand the{" "}
              <span className="bg-gradient-to-r from-[#3b82ff] to-[#ff3d8d] bg-clip-text text-transparent">
                job market.
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Explore job listings, discover in-demand skills, and understand
              experience requirements across your collected job data.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
              <Activity size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500">Project status</p>
              <p className="mt-1 text-sm font-semibold text-white">
                Analytics workspace
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KPI cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0d18] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/[0.16]"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-opacity group-hover:opacity-100"
                style={{ backgroundColor: stat.glow }}
              />

              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                    {stat.value}
                  </h2>
                </div>

                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border"
                  style={{
                    color: stat.accent,
                    backgroundColor: stat.glow,
                    borderColor: `${stat.accent}35`,
                  }}
                >
                  <Icon size={21} />
                </div>
              </div>

              <div className="relative mt-5 flex items-center gap-2 border-t border-white/[0.07] pt-4">
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: stat.glow,
                    color: stat.accent,
                  }}
                >
                  <ArrowUpRight size={13} />
                </span>
                <span className="text-xs text-slate-400">{stat.change}</span>
              </div>
            </article>
          );
        })}
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 gap-5 2xl:grid-cols-5">
        <article className={`${panelClass} 2xl:col-span-3`}>
          <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_#3b82ff]" />
                <h2 className="text-base font-semibold text-white sm:text-lg">
                  Top In-Demand Skills
                </h2>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Job postings mentioning each skill
              </p>
            </div>

            <span className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-slate-400">
              Top 6 skills
            </span>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={skillData}
                margin={{ top: 8, right: 8, left: -18, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="skillGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82ff" stopOpacity={1} />
                    <stop offset="100%" stopColor="#3b82ff" stopOpacity={0.35} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  stroke="rgba(148,163,184,0.10)"
                  strokeDasharray="4 5"
                  vertical={false}
                />
                <XAxis
                  dataKey="skill"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#8490a8", fontSize: 11 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#8490a8", fontSize: 11 }}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  cursor={{ fill: "rgba(59,130,255,0.06)" }}
                />
                <Bar
                  dataKey="jobs"
                  name="Job postings"
                  fill="url(#skillGradient)"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={46}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 flex items-center gap-2 border-t border-white/[0.07] pt-4 text-xs text-slate-500">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Python leads this sample dataset.
          </div>
        </article>

        <article className={`${panelClass} 2xl:col-span-2`}>
          <div className="mb-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#ff3d8d] shadow-[0_0_10px_#ff3d8d]" />
              <h2 className="text-base font-semibold text-white sm:text-lg">
                Experience Distribution
              </h2>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Share of jobs by experience level
            </p>
          </div>

          <div className="relative h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={experienceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={95}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {experienceData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value) => [`${value}%`, "Share"]}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">100%</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Distribution
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {experienceData.map((item, index) => (
              <div key={item.name} className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="flex-1 text-xs text-slate-400">
                  {item.name}
                </span>
                <span className="text-sm font-semibold text-white">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Market insight cards */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <Sparkles size={17} className="text-[#ff3d8d]" />
          <h2 className="text-lg font-semibold text-white">Market Insights</h2>
          <span className="ml-1 text-xs text-slate-500">
            Explore your dataset
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <article className={`${panelClass} group transition hover:border-[#ff3d8d]/25`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ff3d8d]/20 bg-[#ff3d8d]/[0.08] text-[#ff3d8d]">
              <TrendingUp size={20} />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-white">
              Skill Demand
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Review programming, cloud and data skills appearing in your
              collected job descriptions.
            </p>
            <p className="mt-4 text-xs font-medium text-[#ff3d8d]">
              Skills analytics <span aria-hidden="true">↗</span>
            </p>
          </article>

          <article className={`${panelClass} group transition hover:border-blue-400/25`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.08] text-blue-400">
              <MapPin size={20} />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-white">
              Job Locations
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Explore the locations recorded in job postings and investigate
              geographic patterns in your data.
            </p>
            <p className="mt-4 text-xs font-medium text-blue-400">
              Location analysis <span aria-hidden="true">↗</span>
            </p>
          </article>

          <article className={`${panelClass} group transition hover:border-purple-400/25`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/[0.08] text-purple-300">
              <Activity size={20} />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-white">
              Market Patterns
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Compare skill demand, experience requirements and salary
              information as the analytics pipeline develops.
            </p>
            <p className="mt-4 text-xs font-medium text-purple-300">
              Explore analytics <span aria-hidden="true">↗</span>
            </p>
          </article>
        </div>
      </section>

      <p className="text-center text-[11px] leading-5 text-slate-600">
        JobIntel · Values shown are currently sample dashboard data, not live market statistics.
      </p>
    </div>
  );
}

export default Dashboard;
