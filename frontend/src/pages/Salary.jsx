
import {
  DollarSign,
  TrendingUp,
  BriefcaseBusiness,
  BarChart3,
  Sparkles,
  ArrowUpRight,
  ChartNoAxesCombined,
  Wallet,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

const salaryData = [
  { level: "Entry Level", minimum: 45000, average: 55000, maximum: 65000 },
  { level: "Mid Level", minimum: 65000, average: 80000, maximum: 95000 },
  { level: "Senior Level", minimum: 90000, average: 115000, maximum: 140000 },
];

const distributionData = [
  { range: "$40–60K", jobs: 420 },
  { range: "$60–80K", jobs: 680 },
  { range: "$80–100K", jobs: 750 },
  { range: "$100–120K", jobs: 520 },
  { range: "$120K+", jobs: 310 },
];

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
    label: "Average Salary",
    value: "$87K",
    detail: "Across analyzed jobs",
    icon: DollarSign,
    color: "text-cyan-300",
    glow: "bg-cyan-400/10",
    border: "hover:border-cyan-400/40",
  },
  {
    label: "Jobs With Salary",
    value: "1,240",
    detail: "Salary data detected",
    icon: BriefcaseBusiness,
    color: "text-blue-300",
    glow: "bg-blue-400/10",
    border: "hover:border-blue-400/40",
  },
  {
    label: "Highest Salary",
    value: "$140K+",
    detail: "Senior-level positions",
    icon: TrendingUp,
    color: "text-rose-300",
    glow: "bg-rose-400/10",
    border: "hover:border-rose-400/40",
  },
];

function Salary() {
  return (
    <div className="min-h-full space-y-8 pb-8 text-slate-100">
      {/* Page header */}
      <section className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#101a35] via-[#0c1122] to-[#180e24] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-1/3 h-48 w-48 rounded-full bg-rose-500/10 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-200">
              <Sparkles size={14} />
              COMPENSATION INTELLIGENCE
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Salary <span className="text-cyan-300">Analytics</span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Explore compensation patterns, compare experience levels,
              and understand how salary ranges vary across job opportunities.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
            <div className="rounded-xl bg-rose-400/10 p-3 text-rose-300">
              <Wallet size={22} />
            </div>
            <div>
              <p className="text-xs text-slate-400">Market overview</p>
              <p className="mt-1 text-sm font-semibold">Compensation trends</p>
            </div>
          </div>
        </div>
      </section>

      {/* KPI cards */}
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

      {/* Salary by experience */}
      <section className="rounded-2xl border border-slate-800 bg-[#0b1020] p-5 sm:p-6">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-300">
                <ChartNoAxesCombined size={19} />
              </div>
              <h2 className="text-lg font-semibold sm:text-xl">
                Salary by Experience
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Compare minimum, average, and maximum annual salaries.
            </p>
          </div>

          <span className="w-fit rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-400">
            Annual salary · USD
          </span>
        </div>

        <div className="h-80 w-full sm:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={salaryData}
              margin={{ top: 10, right: 8, left: 0, bottom: 4 }}
              barGap={5}
              barCategoryGap="25%"
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
                ]}
                contentStyle={tooltipStyle}
                cursor={{ fill: "#172033", opacity: 0.6 }}
              />
              <Legend
                wrapperStyle={{ fontSize: "12px", paddingTop: "14px" }}
              />
              <Bar
                dataKey="minimum"
                name="Minimum"
                fill="#64748b"
                radius={[5, 5, 0, 0]}
              />
              <Bar
                dataKey="average"
                name="Average"
                fill="#22d3ee"
                radius={[5, 5, 0, 0]}
              />
              <Bar
                dataKey="maximum"
                name="Maximum"
                fill="#fb7185"
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Salary distribution and insights */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-[#0b1020] p-5 sm:p-6 xl:col-span-2">
          <div className="mb-6 flex items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold sm:text-xl">
                Salary Distribution
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Number of sample job postings in each salary bracket.
              </p>
            </div>

            <div className="rounded-xl bg-rose-400/10 p-2.5 text-rose-300">
              <BarChart3 size={20} />
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={distributionData}
                margin={{ top: 8, right: 6, left: -18, bottom: 0 }}
              >
                <CartesianGrid
                  stroke="#1e293b"
                  strokeDasharray="4 5"
                  vertical={false}
                />
                <XAxis
                  dataKey="range"
                  stroke="#64748b"
                  tick={{ fill: "#94a3b8", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                />
                <YAxis
                  stroke="#64748b"
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  cursor={{ fill: "#172033", opacity: 0.6 }}
                />
                <Bar
                  dataKey="jobs"
                  name="Jobs"
                  radius={[7, 7, 0, 0]}
                  maxBarSize={48}
                >
                  {distributionData.map((entry, index) => (
                    <Cell
                      key={entry.range}
                      fill={index === 2 ? "#22d3ee" : index === 4 ? "#fb7185" : "#3b82f6"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            The $80K–$100K bracket contains the largest number of jobs in this sample.
          </p>
        </div>

        <aside className="relative overflow-hidden rounded-2xl border border-rose-400/20 bg-gradient-to-b from-[#1b1021] to-[#0b1020] p-5 sm:p-6">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-rose-500/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-rose-400/10 p-3 text-rose-300">
                <Sparkles size={21} />
              </div>
              <div>
                <h2 className="font-semibold">Salary Insights</h2>
                <p className="mt-1 text-xs text-slate-500">
                  Experience comparison
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-5">
              {salaryData.map((item, index) => (
                <div key={item.level}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm text-slate-400">{item.level}</span>
                    <span className="text-sm font-semibold text-slate-100">
                      {formatSalary(item.average)}
                    </span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className={`h-full rounded-full ${
                        index === 0
                          ? "bg-blue-400"
                          : index === 1
                            ? "bg-cyan-300"
                            : "bg-rose-400"
                      }`}
                      style={{ width: `${(item.average / 140000) * 100}%` }}
                    />
                  </div>

                  <p className="mt-1.5 text-xs text-slate-500">
                    {formatSalary(item.minimum)} – {formatSalary(item.maximum)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-xl border border-rose-400/15 bg-black/20 p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-rose-200">
                <TrendingUp size={16} />
                Key takeaway
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                The sample shows higher average compensation at more senior
                experience levels. Actual trends will depend on the jobs and
                salary data collected by your pipeline.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <p className="text-center text-xs text-slate-600">
        Demo figures for UI development · Not live market statistics
      </p>
    </div>
  );
}

export default Salary;
