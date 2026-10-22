import {
  Code2,
  TrendingUp,
  Search,
  Briefcase,
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

import { useState } from "react";


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


function Skills() {

  const [search, setSearch] = useState("");

  const filteredSkills = skillsData.filter((item) =>
    item.skill
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold">
          Skills Analytics
        </h1>

        <p className="mt-2 text-slate-400">
          Discover the skills most frequently requested
          in current job postings.
        </p>

      </div>


      {/* Summary Cards */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">


        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-400">
                Skills Tracked
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                58
              </h2>

            </div>

            <div className="rounded-xl bg-blue-500/10 p-3">

              <Code2
                size={24}
                className="text-blue-400"
              />

            </div>

          </div>

        </div>


        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-400">
                Most Requested
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Python
              </h2>

            </div>

            <div className="rounded-xl bg-emerald-500/10 p-3">

              <TrendingUp
                size={24}
                className="text-emerald-400"
              />

            </div>

          </div>

        </div>


        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-400">
                Jobs Analyzed
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                4,568
              </h2>

            </div>

            <div className="rounded-xl bg-purple-500/10 p-3">

              <Briefcase
                size={24}
                className="text-purple-400"
              />

            </div>

          </div>

        </div>

      </div>


      {/* Search */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <div className="relative max-w-xl">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search for a skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-12 pr-4 text-white outline-none focus:border-blue-500"
          />

        </div>

      </div>


      {/* Chart + Ranking */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">


        {/* Chart */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 xl:col-span-2">

          <div className="mb-6">

            <h2 className="text-xl font-semibold">
              Top In-Demand Skills
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Number of job postings containing each skill
            </p>

          </div>


          <div className="h-[420px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={filteredSkills}
                layout="vertical"
                margin={{
                  left: 20,
                  right: 20,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1e293b"
                />

                <XAxis
                  type="number"
                  stroke="#94a3b8"
                />

                <YAxis
                  type="category"
                  dataKey="skill"
                  width={120}
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
                  fill="#3b82f6"
                  radius={[0, 6, 6, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* Ranking */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-xl font-semibold">
            Skill Ranking
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Most requested skills
          </p>


          <div className="mt-6 space-y-4">

            {skillsData
              .slice(0, 8)
              .map((item, index) => (

                <div
                  key={item.skill}
                  className="flex items-center justify-between"
                >

                  <div className="flex items-center gap-3">

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-sm font-semibold text-slate-300">
                      {index + 1}
                    </span>

                    <span className="text-sm text-slate-300">
                      {item.skill}
                    </span>

                  </div>

                  <span className="text-sm font-medium text-blue-400">
                    {item.jobs}
                  </span>

                </div>

              ))}

          </div>

        </div>

      </div>


      {/* Insight */}

      <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

        <div className="flex gap-4">

          <TrendingUp
            size={24}
            className="mt-1 shrink-0 text-blue-400"
          />

          <div>

            <h3 className="font-semibold">
              Market Insight
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Programming, database and cloud technologies
              appear frequently across the analyzed job
              postings. These patterns can help students
              identify technologies that are commonly
              requested by employers.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}


export default Skills;