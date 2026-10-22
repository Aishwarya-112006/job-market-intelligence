import {
  DollarSign,
  TrendingUp,
  Briefcase,
  BarChart3,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const salaryData = [
  {
    level: "Entry Level",
    minimum: 45000,
    maximum: 65000,
    average: 55000,
  },
  {
    level: "Mid Level",
    minimum: 65000,
    maximum: 95000,
    average: 80000,
  },
  {
    level: "Senior Level",
    minimum: 90000,
    maximum: 140000,
    average: 115000,
  },
];


const distributionData = [
  { range: "$40K–$60K", jobs: 420 },
  { range: "$60K–$80K", jobs: 680 },
  { range: "$80K–$100K", jobs: 750 },
  { range: "$100K–$120K", jobs: 520 },
  { range: "$120K+", jobs: 310 },
];


function Salary() {

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold">
          Salary Analytics
        </h1>

        <p className="mt-2 text-slate-400">
          Explore salary patterns across job postings
          and experience levels.
        </p>

      </div>


      {/* Summary Cards */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">


        {/* Average Salary */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-400">
                Average Salary
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                $87K
              </h2>

              <p className="mt-2 text-sm text-emerald-400">
                Across analyzed jobs
              </p>

            </div>

            <div className="rounded-xl bg-emerald-500/10 p-3">

              <DollarSign
                size={24}
                className="text-emerald-400"
              />

            </div>

          </div>

        </div>


        {/* Salary Jobs */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-400">
                Jobs With Salary
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                1,240
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Salary information detected
              </p>

            </div>

            <div className="rounded-xl bg-blue-500/10 p-3">

              <Briefcase
                size={24}
                className="text-blue-400"
              />

            </div>

          </div>

        </div>


        {/* Highest Salary */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-400">
                Highest Salary Range
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                $140K+
              </h2>

              <p className="mt-2 text-sm text-purple-400">
                Senior level positions
              </p>

            </div>

            <div className="rounded-xl bg-purple-500/10 p-3">

              <TrendingUp
                size={24}
                className="text-purple-400"
              />

            </div>

          </div>

        </div>

      </div>


      {/* Salary by Experience */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <div className="mb-6">

          <h2 className="text-xl font-semibold">
            Salary by Experience Level
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Comparison of minimum, average and maximum
            salaries.
          </p>

        </div>


        <div className="h-96">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart data={salaryData}>

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
                dataKey="minimum"
                name="Minimum"
                fill="#64748b"
                radius={[4, 4, 0, 0]}
              />

              <Bar
                dataKey="average"
                name="Average"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
              />

              <Bar
                dataKey="maximum"
                name="Maximum"
                fill="#8b5cf6"
                radius={[4, 4, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>


      {/* Distribution */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">


        {/* Chart */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 xl:col-span-2">

          <div className="mb-6">

            <h2 className="text-xl font-semibold">
              Salary Distribution
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Number of jobs within each salary range.
            </p>

          </div>


          <div className="h-80">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart data={distributionData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1e293b"
                />

                <XAxis
                  dataKey="range"
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
                  fill="#14b8a6"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* Salary Insight */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex items-center gap-3">

            <div className="rounded-lg bg-blue-500/10 p-3">

              <BarChart3
                size={22}
                className="text-blue-400"
              />

            </div>

            <h2 className="text-xl font-semibold">
              Salary Insight
            </h2>

          </div>


          <div className="mt-6 space-y-5">

            <div>

              <p className="text-sm text-slate-400">
                Entry Level
              </p>

              <p className="mt-1 text-lg font-semibold">
                $45K – $65K
              </p>

            </div>


            <div>

              <p className="text-sm text-slate-400">
                Mid Level
              </p>

              <p className="mt-1 text-lg font-semibold">
                $65K – $95K
              </p>

            </div>


            <div>

              <p className="text-sm text-slate-400">
                Senior Level
              </p>

              <p className="mt-1 text-lg font-semibold">
                $90K – $140K+
              </p>

            </div>


            <div className="border-t border-slate-800 pt-5">

              <p className="text-sm leading-6 text-slate-400">
                Salary generally increases with experience
                level. The final dashboard will use the
                salary information extracted from actual
                job descriptions.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


export default Salary;