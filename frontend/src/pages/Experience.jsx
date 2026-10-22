
import {
  BriefcaseBusiness,
  Users,
  TrendingUp,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  ChartNoAxesCombined,
  Target,
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

const experienceData = [
  { level: "Entry Level", jobs: 1250 },
  { level: "Mid Level", jobs: 1850 },
  { level: "Senior Level", jobs: 980 },
  { level: "Not Specified", jobs: 488 },
];

const experienceSalaryData = [
  { level: "Entry Level", salary: 55000 },
  { level: "Mid Level", salary: 80000 },
  { level: "Senior Level", salary: 115000 },
];

const COLORS = ["#22d3ee", "#3b82f6", "#fb7185", "#64748b"];

const totalJobs = experienceData.reduce((sum, item) => sum + item.jobs, 0);

const formatSalary = (value) =>
  `$${(Number(value) / 1000).toLocaleString()}K`;

const tooltipStyle = {
  backgroundColor: "#090d18",
  border: "1px solid #26334d",
  borderRadius: "12px",
  color: "#f8fafc",
};

const stats = [
  {
    label: "Entry-Level Jobs",
    value: "1,250",
    detail: "Typically 0–2 years",
    icon: GraduationCap,
    color: "text-cyan-300",
    glow: "bg-cyan-400/10",
    border: "hover:border-cyan-400/40",
  },
  {
    label: "Mid-Level Jobs",
    value: "1,850",
    detail: "Typically 3–5 years",
    icon: BriefcaseBusiness,
    color: "text-blue-300",
    glow: "bg-blue-400/10",
    border: "hover:border-blue-400/40",
  },
  {
    label: "Senior-Level Jobs",
    value: "980",
    detail: "Typically 6+ years",
    icon: TrendingUp,
    color: "text-rose-300",
    glow: "bg-rose-400/10",
    border: "hover:border-rose-400/40",
  },
];

function Experience() {
  return (
    <div className="min-h-full space-y-8 pb-8 text-slate-100">
      {/* Page header */}
      <section className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#101a35] via-[#0c1122] to-[#180e24] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-1/3 h-48 w-48 rounded-full bg-rose-500/10 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-200">
              <Sparkles size={14} />
              CAREER LEVEL INTELLIGENCE
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Experience <span className="text-cyan-300">Analytics</span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Understand experience requirements across job postings,
              identify career-level demand, and compare compensation.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
            <div className="rounded-xl bg-rose-400/10 p-3 text-rose-300">
              <Target size={22} />
            </div>
            <div>
              <p className="text-xs text-slate-400">Jobs represented</p>
              <p className="mt-1 text-lg font-semibold">
                {totalJobs.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1020] p-5 transition duration-300 hover:-translate-y-1 ${stat.border}`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight">
                    {stat.value}
                  </h2>
                  <p className="mt-2 text-xs text-slate-500">{stat.detail}</p>
                </div>

                <div className={`rounded-xl p-3 ${stat.glow} ${stat.color}`}>
                  <Icon size={23} />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                <ArrowUpRight size={14} className={stat.color} />
                <span>Illustrative sample metric</span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Experience distribution */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-[#0b1020] p-5 sm:p-6 xl:col-span-2">
          <div className="mb-7">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-300">
                <ChartNoAxesCombined size={19} />
              </div>
              <h2 className="text-lg font-semibold sm:text-xl">
                Experience Level Distribution
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Compare the number of jobs across experience categories.
            </p>
          </div>

          <div className="h-80 w-full sm:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={experienceData}
                margin={{ top: 10, right: 8, left: 0, bottom: 4 }}
                barCategoryGap="30%"
              >
                <CartesianGrid
                  stroke="#1e293b"
                  strokeDasharray="4 5"
                  vertical={false}
                />
                <XAxis
                  dataKey="level"
                  stroke="#64748b"
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                />
                <YAxis
                  stroke="#64748b"
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={45}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  cursor={{ fill: "#172033", opacity: 0.6 }}
                />
                <Bar
                  dataKey="jobs"
                  name="Job postings"
                  radius={[7, 7, 0, 0]}
                  maxBarSize={64}
                >
                  {experienceData.map((item, index) => (
                    <Cell key={item.level} fill={COLORS[index]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Experience breakdown */}
        <div className="rounded-2xl border border-slate-800 bg-[#0b1020] p-5 sm:p-6">
          <h2 className="text-lg font-semibold sm:text-xl">
            Experience Breakdown
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Share of postings in each category.
          </p>

          <div className="relative mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={experienceData}
                  dataKey="jobs"
                  nameKey="level"
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={95}
                  paddingAngle={4}
                  stroke="none"
                >
                  {experienceData.map((item, index) => (
                    <Cell key={item.level} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value, name) => [
                    `${Number(value).toLocaleString()} jobs`,
                    name,
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">
                {totalJobs.toLocaleString()}
              </span>
              <span className="mt-1 text-xs text-slate-500">Total jobs</span>
            </div>
          </div>

          <div className="mt-2 space-y-3">
            {experienceData.map((item, index) => (
              <div key={item.level} className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="min-w-0 flex-1 text-sm text-slate-400">
                  {item.level}
                </span>
                <span className="text-sm font-medium text-slate-200">
                  {((item.jobs / totalJobs) * 100).toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salary by experience */}
      <section className="rounded-2xl border border-slate-800 bg-[#0b1020] p-5 sm:p-6">
        <div className="mb-7 flex items-start gap-3">
          <div className="rounded-xl bg-rose-400/10 p-3 text-rose-300">
            <TrendingUp size={21} />
          </div>
          <div>
            <h2 className="text-lg font-semibold sm:text-xl">
              Average Salary by Experience
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Compare illustrative annual compensation across career levels.
            </p>
          </div>
        </div>

        <div className="h-72 w-full sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={experienceSalaryData}
              margin={{ top: 10, right: 8, left: 0, bottom: 4 }}
              barCategoryGap="40%"
            >
              <CartesianGrid
                stroke="#1e293b"
                strokeDasharray="4 5"
                vertical={false}
              />
              <XAxis
                dataKey="level"
                stroke="#64748b"
                tick={{ fill: "#94a3b8", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                stroke="#64748b"
                tickFormatter={formatSalary}
                tick={{ fill: "#94a3b8", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                width={55}
              />
              <Tooltip
                formatter={(value) => [
                  `$${Number(value).toLocaleString()}`,
                  "Average salary",
                ]}
                contentStyle={tooltipStyle}
                cursor={{ fill: "#172033", opacity: 0.6 }}
              />
              <Bar
                dataKey="salary"
                name="Average salary"
                fill="#22d3ee"
                radius={[7, 7, 0, 0]}
                maxBarSize={70}
              >
                {experienceSalaryData.map((item, index) => (
                  <Cell
                    key={item.level}
                    fill={["#3b82f6", "#22d3ee", "#fb7185"][index]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Insights */}
      <section className="relative overflow-hidden rounded-2xl border border-rose-400/20 bg-gradient-to-r from-[#180f22] via-[#101426] to-[#0b1020] p-5 sm:p-6">
        <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-rose-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 md:flex-row md:items-start">
          <div className="w-fit rounded-xl bg-rose-400/10 p-3 text-rose-300">
            <Users size={23} />
          </div>

          <div className="flex-1">
            <h2 className="text-lg font-semibold">Experience Insights</h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400">
              Mid-level roles make up the largest experience category in this
              sample, followed by entry-level positions. Senior roles account
              for a smaller share, while some postings do not specify experience
              requirements. These patterns are illustrative and should be
              validated against the real job descriptions in your pipeline.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs text-slate-500">Largest category</p>
                <p className="mt-2 font-semibold text-cyan-300">Mid Level</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs text-slate-500">Mid-level postings</p>
                <p className="mt-2 font-semibold">1,850 jobs</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs text-slate-500">Not specified</p>
                <p className="mt-2 font-semibold text-rose-300">488 jobs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="text-center text-xs text-slate-600">
        Demo figures for UI development · Not live market statistics
      </p>
    </div>
  );
}

export default Experience;
