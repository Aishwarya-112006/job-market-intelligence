import {
  Briefcase,
  Users,
  Code2,
  Globe,
  TrendingUp,
  MapPin,
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

const COLORS = ["#3b82f6", "#8b5cf6", "#14b8a6"];

function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Overview of the current job market
        </p>
      </div>


      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        {/* Total Jobs */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-slate-400">
                Total Jobs
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                4,568
              </h2>

              <p className="mt-2 text-sm text-emerald-400">
                +12.5% this month
              </p>
            </div>

            <div className="rounded-xl bg-blue-600/20 p-3">
              <Briefcase className="text-blue-400" size={24} />
            </div>

          </div>

        </div>


        {/* Skills */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-slate-400">
                Skills Tracked
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                58
              </h2>

              <p className="mt-2 text-sm text-emerald-400">
                +8 new skills
              </p>
            </div>

            <div className="rounded-xl bg-purple-600/20 p-3">
              <Code2 className="text-purple-400" size={24} />
            </div>

          </div>

        </div>


        {/* Companies */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-slate-400">
                Companies
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                1,240
              </h2>

              <p className="mt-2 text-sm text-emerald-400">
                +6.2% growth
              </p>
            </div>

            <div className="rounded-xl bg-teal-600/20 p-3">
              <Users className="text-teal-400" size={24} />
            </div>

          </div>

        </div>


        {/* Remote Jobs */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-slate-400">
                Remote Jobs
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                1,876
              </h2>

              <p className="mt-2 text-sm text-emerald-400">
                41% of total jobs
              </p>
            </div>

            <div className="rounded-xl bg-orange-600/20 p-3">
              <Globe className="text-orange-400" size={24} />
            </div>

          </div>

        </div>

      </div>


      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Skills Chart */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 xl:col-span-2">

          <div className="mb-6">

            <h2 className="text-xl font-semibold">
              Top In-Demand Skills
            </h2>

            <p className="text-sm text-slate-400">
              Number of job postings mentioning each skill
            </p>

          </div>

          <div className="h-80">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={skillData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1e293b"
                />

                <XAxis
                  dataKey="skill"
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
                  fill="#3b82f6"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* Experience Chart */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="mb-4">

            <h2 className="text-xl font-semibold">
              Experience Distribution
            </h2>

            <p className="text-sm text-slate-400">
              Jobs by experience level
            </p>

          </div>

          <div className="h-80">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={experienceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
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

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>


      {/* Market Insights */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <TrendingUp
            className="text-emerald-400"
            size={25}
          />

          <h3 className="mt-4 text-lg font-semibold">
            Growing Skills
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            AI, Machine Learning, Docker and Cloud
            technologies are frequently appearing in
            job descriptions.
          </p>

        </div>


        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <MapPin
            className="text-blue-400"
            size={25}
          />

          <h3 className="mt-4 text-lg font-semibold">
            Top Job Locations
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Explore job demand across cities and
            geographic locations.
          </p>

        </div>


        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <TrendingUp
            className="text-purple-400"
            size={25}
          />

          <h3 className="mt-4 text-lg font-semibold">
            Market Trends
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Analyze salary, skills and experience
            requirements across the job market.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;