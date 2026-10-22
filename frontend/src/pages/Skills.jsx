
import { useState } from "react";
import {
  Code2,
  TrendingUp,
  Search,
  BriefcaseBusiness,
  Sparkles,
  ArrowUpRight,
  BarChart3,
  X,
  Database,
  Cloud,
  BrainCircuit,
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
} from "recharts";

const skillsData = [
  { skill: "Python", jobs: 820 },
  { skill: "SQL", jobs: 760 },
  { skill: "Java", jobs: 620 },
  { skill: "AWS", jobs: 540 },
  { skill: "React", jobs: 480 },
  { skill: "Docker", jobs: 420 },
  { skill: "JavaScript", jobs: 390 },
  { skill: "Kubernetes", jobs: 340 },
  { skill: "PostgreSQL", jobs: 310 },
  { skill: "Machine Learning", jobs: 290 },
];

const barColors = [
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#c084fc",
  "#f472b6",
  "#fb7185",
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#f472b6",
];

function Skills() {
  const [search, setSearch] = useState("");

  const filteredSkills = skillsData.filter((item) =>
    item.skill.toLowerCase().includes(search.toLowerCase().trim())
  );

  const totalSkillMentions = skillsData.reduce(
    (total, item) => total + item.jobs,
    0
  );

  const topSkill = skillsData.reduce((top, item) =>
    item.jobs > top.jobs ? item : top
  );

  return (
    <div className="space-y-8 pb-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/15 via-slate-950 to-rose-500/10 p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-1/3 h-48 w-48 rounded-full bg-rose-500/10 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-300">
              <Sparkles size={14} />
              SKILL INTELLIGENCE
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Decode the{" "}
              <span className="bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent">
                skills economy.
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Explore the technologies employers request most and use
              skill demand patterns to guide your learning roadmap.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
            <div className="rounded-xl bg-rose-500/10 p-2.5 text-rose-300">
              <BarChart3 size={22} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {totalSkillMentions.toLocaleString()}
              </p>
              <p className="text-xs text-slate-400">
                Skill mentions in sample
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary cards */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/[0.08] bg-slate-950/70 p-5 transition hover:border-blue-400/30">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400">Skills tracked</p>
              <h2 className="mt-3 text-3xl font-bold text-white">58</h2>
              <p className="mt-2 text-xs text-slate-500">
                Skills in the project catalog
              </p>
            </div>
            <div className="rounded-xl border border-blue-400/15 bg-blue-400/10 p-3 text-blue-300">
              <Code2 size={22} />
            </div>
          </div>
          <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-slate-950/70 p-5 transition hover:border-rose-400/30">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400">Top requested skill</p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                {topSkill.skill}
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                {topSkill.jobs.toLocaleString()} sample job mentions
              </p>
            </div>
            <div className="rounded-xl border border-rose-400/15 bg-rose-400/10 p-3 text-rose-300">
              <TrendingUp size={22} />
            </div>
          </div>
          <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-rose-500 to-pink-300" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-slate-950/70 p-5 transition hover:border-violet-400/30">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400">Jobs analyzed</p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                4,568
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                Sample project dashboard total
              </p>
            </div>
            <div className="rounded-xl border border-violet-400/15 bg-violet-400/10 p-3 text-violet-300">
              <BriefcaseBusiness size={22} />
            </div>
          </div>
          <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-violet-500 to-blue-400" />
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="rounded-2xl border border-white/[0.08] bg-slate-950/70 p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-2">
          <Search size={17} className="text-blue-400" />
          <h2 className="font-semibold text-white">Explore skill demand</h2>
        </div>

        <div className="relative max-w-xl">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />
          <input
            type="text"
            placeholder="Search Python, SQL, AWS..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-11 pr-11 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/10"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              aria-label="Clear skill search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-500 hover:text-white"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </section>

      {/* Chart and ranking */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-white/[0.08] bg-slate-950/70 p-5 sm:p-6 xl:col-span-2">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-blue-400/10 p-2 text-blue-300">
                  <BarChart3 size={17} />
                </div>
                <h2 className="text-lg font-semibold text-white">
                  Top in-demand skills
                </h2>
              </div>
              <p className="mt-2 text-sm text-slate-400">
                Job mentions by skill · Sorted by supplied sample data
              </p>
            </div>

            <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
              {filteredSkills.length} skills
            </span>
          </div>

          <div className="h-[390px]">
            {filteredSkills.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={filteredSkills}
                  layout="vertical"
                  margin={{ top: 4, left: 12, right: 20, bottom: 4 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#1e293b"
                    horizontal={false}
                  />
                  <XAxis
                    type="number"
                    stroke="#64748b"
                    tick={{ fill: "#94a3b8", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    type="category"
                    dataKey="skill"
                    width={118}
                    stroke="#64748b"
                    tick={{ fill: "#cbd5e1", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(96,165,250,0.06)" }}
                    contentStyle={{
                      backgroundColor: "#080d19",
                      border: "1px solid #26334b",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                    formatter={(value) => [
                      `${Number(value).toLocaleString()} mentions`,
                      "Job postings",
                    ]}
                  />
                  <Bar dataKey="jobs" radius={[0, 6, 6, 0]} maxBarSize={23}>
                    {filteredSkills.map((item) => {
                      const originalIndex = skillsData.findIndex(
                        (skill) => skill.skill === item.skill
                      );
                      return (
                        <Cell
                          key={item.skill}
                          fill={barColors[originalIndex % barColors.length]}
                        />
                      );
                    })}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <Search size={30} className="text-slate-600" />
                <p className="mt-3 font-medium text-white">No skills found</p>
                <p className="mt-1 text-sm text-slate-500">
                  Try a different skill name.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Ranking */}
        <div className="rounded-2xl border border-white/[0.08] bg-slate-950/70 p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-rose-400/10 p-2 text-rose-300">
              <TrendingUp size={17} />
            </div>
            <h2 className="text-lg font-semibold text-white">
              Skill ranking
            </h2>
          </div>
          <p className="mt-2 text-sm text-slate-400">
            Most requested technologies
          </p>

          <div className="mt-6 space-y-5">
            {skillsData
              .slice(0, 8)
              .map((item, index) => (
                <div key={item.skill}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-xs font-bold ${
                          index === 0
                            ? "border-blue-400/30 bg-blue-400/10 text-blue-300"
                            : index === 1
                            ? "border-violet-400/20 bg-violet-400/10 text-violet-300"
                            : "border-white/[0.08] bg-white/[0.03] text-slate-400"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate text-sm text-slate-300">
                        {item.skill}
                      </span>
                    </div>
                    <span className="shrink-0 text-xs font-semibold tabular-nums text-blue-300">
                      {item.jobs}
                    </span>
                  </div>

                  <div className="ml-11 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${(item.jobs / skillsData[0].jobs) * 100}%`,
                        background: `linear-gradient(90deg, ${barColors[index]}, #f472b6)`,
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-7 rounded-xl border border-blue-400/15 bg-blue-400/[0.06] p-4">
            <div className="flex items-center gap-2 text-blue-300">
              <ArrowUpRight size={16} />
              <span className="text-sm font-medium">Leading skill</span>
            </div>
            <p className="mt-2 text-lg font-bold text-white">Python</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Leads this sample ranking with {skillsData[0].jobs} job mentions.
            </p>
          </div>
        </div>
      </section>

      {/* Skill categories */}
      <section>
        <div className="mb-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
            Skill landscape
          </p>
          <h2 className="mt-2 text-xl font-bold text-white">
            Technology categories
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Explore the major areas represented in your skill catalog.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              title: "Programming",
              subtitle: "Languages & development",
              icon: Code2,
              skills: "Python · Java · JavaScript",
              color: "blue",
            },
            {
              title: "Data & databases",
              subtitle: "Storage & processing",
              icon: Database,
              skills: "SQL · PostgreSQL · Spark",
              color: "rose",
            },
            {
              title: "Cloud & AI",
              subtitle: "Infrastructure & intelligence",
              icon: Cloud,
              skills: "AWS · Docker · ML",
              color: "violet",
            },
          ].map((category) => {
            const Icon = category.icon;
            const colorClasses = {
              blue: "border-blue-400/20 bg-blue-400/10 text-blue-300",
              rose: "border-rose-400/20 bg-rose-400/10 text-rose-300",
              violet: "border-violet-400/20 bg-violet-400/10 text-violet-300",
            };

            return (
              <div
                key={category.title}
                className="rounded-2xl border border-white/[0.08] bg-slate-950/60 p-5 transition hover:border-white/20"
              >
                <div
                  className={`mb-4 inline-flex rounded-xl border p-3 ${colorClasses[category.color]}`}
                >
                  <Icon size={21} />
                </div>
                <h3 className="font-semibold text-white">{category.title}</h3>
                <p className="mt-1 text-xs text-slate-500">
                  {category.subtitle}
                </p>
                <p className="mt-4 text-xs leading-5 text-slate-400">
                  {category.skills}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Insight */}
      <section className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/[0.08] via-slate-950 to-rose-500/[0.06] p-6 sm:p-7">
        <div className="pointer-events-none absolute -right-8 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative flex gap-4">
          <div className="h-fit rounded-xl border border-blue-400/20 bg-blue-400/10 p-3 text-blue-300">
            <BrainCircuit size={23} />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-white">Market insight</h3>
              <span className="rounded-full border border-rose-400/20 bg-rose-400/10 px-2.5 py-1 text-[10px] font-medium text-rose-300">
                SAMPLE DATA
              </span>
            </div>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
              In this sample, Python and SQL lead the ranking, while AWS,
              Docker, and Kubernetes represent cloud and infrastructure
              technologies. Together, these patterns illustrate how skill
              analytics can help learners prioritize their development.
              Actual market trends should be calculated from the processed
              job-posting dataset.
            </p>
          </div>
        </div>
      </section>

      <p className="text-center text-xs text-slate-600">
        Illustrative dashboard metrics · Live analytics integration comes later
      </p>
    </div>
  );
}

export default Skills;
