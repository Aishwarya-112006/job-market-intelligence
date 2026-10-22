import { useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  ArrowRight,
} from "lucide-react";

const jobsData = [
  {
    id: 1,
    title: "Senior Backend Engineer",
    company: "Tech Solutions",
    location: "Berlin, Germany",
    type: "Remote",
    experience: "5+ years",
    salary: "$90K - $120K",
    skills: ["Python", "Java", "Docker", "Kubernetes"],
  },
  {
    id: 2,
    title: "Data Engineer",
    company: "DataWorks",
    location: "London, UK",
    type: "Hybrid",
    experience: "3+ years",
    salary: "$75K - $105K",
    skills: ["Python", "SQL", "Spark", "AWS"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Labs",
    location: "Amsterdam, Netherlands",
    type: "Remote",
    experience: "2+ years",
    salary: "$60K - $85K",
    skills: ["React", "JavaScript", "TypeScript", "CSS"],
  },
  {
    id: 4,
    title: "Machine Learning Engineer",
    company: "AI Systems",
    location: "Munich, Germany",
    type: "On-site",
    experience: "4+ years",
    salary: "$95K - $130K",
    skills: ["Python", "Machine Learning", "PyTorch", "SQL"],
  },
  {
    id: 5,
    title: "Cloud Engineer",
    company: "CloudTech",
    location: "Paris, France",
    type: "Hybrid",
    experience: "3+ years",
    salary: "$80K - $110K",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
];

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);

  const filteredJobs = jobsData.filter((job) => {
    const searchMatch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );

    const locationMatch =
      job.location.toLowerCase().includes(location.toLowerCase());

    const remoteMatch =
      !remoteOnly || job.type === "Remote";

    return searchMatch && locationMatch && remoteMatch;
  });

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Explore Jobs
        </h1>

        <p className="mt-2 text-slate-400">
          Search and explore job opportunities from the market.
        </p>
      </div>


      {/* Search & Filters */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

          {/* Search */}
          <div className="relative">

            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search jobs, companies or skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-12 pr-4 text-white outline-none transition focus:border-blue-500"
            />

          </div>


          {/* Location */}
          <div className="relative">

            <MapPin
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Filter by location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-12 pr-4 text-white outline-none transition focus:border-blue-500"
            />

          </div>


          {/* Remote Filter */}
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-4">

            <input
              type="checkbox"
              checked={remoteOnly}
              onChange={(e) => setRemoteOnly(e.target.checked)}
              className="h-4 w-4"
            />

            <span className="text-sm text-slate-300">
              Remote jobs only
            </span>

          </label>

        </div>

      </div>


      {/* Results Header */}
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-semibold">
            Available Jobs
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Showing {filteredJobs.length} jobs
          </p>
        </div>

      </div>


      {/* Job Cards */}
      <div className="space-y-4">

        {filteredJobs.map((job) => (

          <div
            key={job.id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-600"
          >

            <div className="flex flex-col justify-between gap-6 lg:flex-row">

              {/* Job Information */}
              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20">
                  <Briefcase
                    size={22}
                    className="text-blue-400"
                  />
                </div>

                <div>

                  <h3 className="text-lg font-semibold">
                    {job.title}
                  </h3>

                  <p className="mt-1 text-slate-300">
                    {job.company}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-400">

                    <span className="flex items-center gap-1">
                      <MapPin size={15} />
                      {job.location}
                    </span>

                    <span className="flex items-center gap-1">
                      <Clock size={15} />
                      {job.experience}
                    </span>

                    <span className="flex items-center gap-1">
                      <DollarSign size={15} />
                      {job.salary}
                    </span>

                  </div>

                </div>

              </div>


              {/* Right Side */}
              <div className="flex flex-col items-start gap-4 lg:items-end">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    job.type === "Remote"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : job.type === "Hybrid"
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-slate-700 text-slate-300"
                  }`}
                >
                  {job.type}
                </span>

                <button
                  onClick={() => {
                    window.location.href = `/jobs/${job.id}`;
                  }}
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-500"
                >
                  View Details
                  <ArrowRight size={16} />
                </button>

              </div>

            </div>


            {/* Skills */}
            <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-800 pt-5">

              {job.skills.map((skill) => (

                <span
                  key={skill}
                  className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}


        {/* No Results */}
        {filteredJobs.length === 0 && (

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center">

            <Briefcase
              size={40}
              className="mx-auto text-slate-600"
            />

            <h3 className="mt-4 text-lg font-semibold">
              No jobs found
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Try changing your search or filters.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Jobs;