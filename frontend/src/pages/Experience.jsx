import {
  Briefcase,
  Users,
  TrendingUp,
  GraduationCap,
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
  {
    level: "Entry Level",
    jobs: 1250,
  },
  {
    level: "Mid Level",
    jobs: 1850,
  },
  {
    level: "Senior Level",
    jobs: 980,
  },
  {
    level: "Not Specified",
    jobs: 488,
  },
];


const experienceSalaryData = [
  {
    level: "Entry Level",
    salary: 55000,
  },
  {
    level: "Mid Level",
    salary: 80000,
  },
  {
    level: "Senior Level",
    salary: 115000,
  },
];


const COLORS = [
  "#3b82f6",
  "#8b5cf6",
  "#14b8a6",
  "#64748b",
];


function Experience() {

  return (
    <div className="space-y-8">

      {/* Page Header */}

      <div>

        <h1 className="text-3xl font-bold">
          Experience Analytics
        </h1>

        <p className="mt-2 text-slate-400">
          Analyze experience requirements across job
          postings and career levels.
        </p>

      </div>


      {/* Summary Cards */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* Entry Level */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-400">
                Entry Level Jobs
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                1,250
              </h2>

              <p className="mt-2 text-sm text-blue-400">
                0–2 years
              </p>

            </div>

            <div className="rounded-xl bg-blue-500/10 p-3">

              <GraduationCap
                size={24}
                className="text-blue-400"
              />

            </div>

          </div>

        </div>


        {/* Mid Level */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-400">
                Mid Level Jobs
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                1,850
              </h2>

              <p className="mt-2 text-sm text-purple-400">
                3–5 years
              </p>

            </div>

            <div className="rounded-xl bg-purple-500/10 p-3">

              <Briefcase
                size={24}
                className="text-purple-400"
              />

            </div>

          </div>

        </div>


        {/* Senior Level */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-400">
                Senior Level Jobs
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                980
              </h2>

              <p className="mt-2 text-sm text-emerald-400">
                6+ years
              </p>

            </div>

            <div className="rounded-xl bg-emerald-500/10 p-3">

              <TrendingUp
                size={24}
                className="text-emerald-400"
              />

            </div>

          </div>

        </div>

      </div>


      {/* Charts */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Experience Distribution */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 xl:col-span-2">

          <div className="mb-6">

            <h2 className="text-xl font-semibold">
              Experience Level Distribution
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Number of job postings by required experience.
            </p>

          </div>

          <div className="h-96">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart data={experienceData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1e293b"
                />

                <XAxis
                  dataKey="level"
                  stroke="#94a3b8"
                />

                <YAxis
                  stroke="#94a3b8"
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />

                <Bar
                  dataKey="jobs"
                  name="Jobs"
                  fill="#3b82f6"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* Pie Chart */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="mb-4">

            <h2 className="text-xl font-semibold">
              Experience Breakdown
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Distribution of analyzed jobs.
            </p>

          </div>

          <div className="h-72">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={experienceData}
                  dataKey="jobs"
                  nameKey="level"
                  cx="50%"
                  cy="50%"
                  outerRadius={95}
                  label
                >

                  {experienceData.map(
                    (entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index]}
                      />
                    )
                  )}

                </Pie>

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>


      {/* Salary vs Experience */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <div className="mb-6">

          <h2 className="text-xl font-semibold">
            Average Salary by Experience
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Comparison of average salary across career levels.
          </p>

        </div>

        <div className="h-80">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart data={experienceSalaryData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1e293b"
              />

              <XAxis
                dataKey="level"
                stroke="#94a3b8"
              />

              <YAxis
                stroke="#94a3b8"
                tickFormatter={(value) =>
                  `$${value / 1000}K`
                }
              />

              <Tooltip
                formatter={(value) =>
                  `$${Number(value).toLocaleString()}`
                }
                contentStyle={{
                  backgroundColor: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />

              <Bar
                dataKey="salary"
                name="Average Salary"
                fill="#8b5cf6"
                radius={[6, 6, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>


      {/* Insight */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <div className="flex items-center gap-3">

          <div className="rounded-lg bg-blue-500/10 p-3">

            <Users
              size={22}
              className="text-blue-400"
            />

          </div>

          <h2 className="text-xl font-semibold">
            Experience Insight
          </h2>

        </div>

        <div className="mt-5">

          <p className="leading-7 text-slate-400">
            Experience requirements vary significantly across
            job postings. Entry-level positions generally require
            limited professional experience, while mid-level and
            senior positions demand progressively higher
            experience. The final dashboard will use experience
            information extracted from the actual job descriptions.
          </p>

        </div>

      </div>

    </div>
  );
}


export default Experience;