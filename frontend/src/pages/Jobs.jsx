
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  BriefcaseBusiness,
  Clock3,
  DollarSign,
  ArrowUpRight,
  SlidersHorizontal,
  Sparkles,
  Building2,
  X,
  Laptop,
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
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);

  const filteredJobs = jobsData.filter((job) => {
    const query = search.toLowerCase().trim();

    const searchMatch =
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(query)
      );

    const locationMatch = job.location
      .toLowerCase()
      .includes(location.toLowerCase().trim());

    const remoteMatch = !remoteOnly || job.type === "Remote";

    return searchMatch && locationMatch && remoteMatch;
  });

  const resetFilters = () => {
    setSearch("");
    setLocation("");
    setRemoteOnly(false);
  };

  return (
    <div className="space-y-8 pb-8">
      {/* Page heading */}
      <section className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/15 via-slate-950 to-rose-500/10 p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-1/3 h-48 w-48 rounded-full bg-rose-500/10 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-300">
              <Sparkles size={14} />
              JOB MARKET EXPLORER
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Discover your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent">
                next opportunity.
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Explore job roles, compare required skills, and uncover
              opportunities across the market.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
            <div className="rounded-xl bg-blue-500/15 p-2.5 text-blue-400">
              <BriefcaseBusiness size={21} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {filteredJobs.length}
              </p>
              <p className="text-xs text-slate-400">Matching roles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and filters */}
      <section className="rounded-2xl border border-white/[0.08] bg-slate-950/70 p-5 shadow-xl shadow-black/10 sm:p-6">
        <div className="mb-5 flex items-center gap-2">
          <SlidersHorizontal size={17} className="text-blue-400" />
          <h2 className="font-semibold text-white">Find your match</h2>
          <span className="ml-auto text-xs text-slate-500">
            Search & filters
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_1fr_auto]">
          <label className="group relative block">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition group-focus-within:text-blue-400"
            />
            <input
              type="text"
              placeholder="Search roles, companies or skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/10"
            />
          </label>

          <label className="group relative block">
            <MapPin
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition group-focus-within:text-rose-400"
            />
            <input
              type="text"
              placeholder="City or country..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-rose-400/60 focus:ring-2 focus:ring-rose-500/10"
            />
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3 transition hover:border-blue-400/30">
            <input
              type="checkbox"
              checked={remoteOnly}
              onChange={(e) => setRemoteOnly(e.target.checked)}
              className="h-4 w-4 accent-blue-500"
            />
            <Laptop size={17} className="text-blue-400" />
            <span className="whitespace-nowrap text-sm text-slate-300">
              Remote only
            </span>
          </label>
        </div>

        {(search || location || remoteOnly) && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500">Active filters:</span>
            {search && (
              <button
                onClick={() => setSearch("")}
                className="inline-flex items-center gap-1 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300"
              >
                {search} <X size={12} />
              </button>
            )}
            {location && (
              <button
                onClick={() => setLocation("")}
                className="inline-flex items-center gap-1 rounded-full border border-rose-400/20 bg-rose-400/10 px-3 py-1 text-xs text-rose-300"
              >
                {location} <X size={12} />
              </button>
            )}
            {remoteOnly && (
              <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                Remote
              </span>
            )}
            <button
              onClick={resetFilters}
              className="ml-auto text-xs text-slate-400 transition hover:text-white"
            >
              Clear all
            </button>
          </div>
        )}
      </section>

      {/* Results heading */}
      <section>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              Opportunity feed
            </p>
            <h2 className="mt-2 text-xl font-bold text-white">
              Available positions
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {filteredJobs.length} of {jobsData.length} sample listings
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            Search results update instantly
          </div>
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job, index) => (
            <article
              key={job.id}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/60 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-blue-950/20 sm:p-6"
            >
              <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-blue-400 to-rose-400 opacity-0 transition group-hover:opacity-100" />

              <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-start">
                <div className="flex min-w-0 gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-gradient-to-br from-blue-500/15 to-rose-500/10 text-blue-300 transition group-hover:border-blue-400/30">
                    <Building2 size={22} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-white transition group-hover:text-blue-300 sm:text-lg">
                        {job.title}
                      </h3>
                      <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[10px] text-slate-500">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                      <Building2 size={14} />
                      {job.company}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400 sm:text-sm">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-blue-400" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock3 size={14} className="text-rose-400" />
                        {job.experience}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <DollarSign size={14} className="text-emerald-400" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex shrink-0 items-center justify-between gap-3 xl:flex-col xl:items-end">
                  <span
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                      job.type === "Remote"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                        : job.type === "Hybrid"
                        ? "border-blue-400/20 bg-blue-400/10 text-blue-300"
                        : "border-rose-400/20 bg-rose-400/10 text-rose-300"
                    }`}
                  >
                    {job.type}
                  </span>

                  <button
                    onClick={() => navigate(`/jobs/${job.id}`)}
                    className="inline-flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/10 px-4 py-2.5 text-sm font-medium text-blue-300 transition hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-white"
                  >
                    View details
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </div>
              </div>

              <div className="mt-5 border-t border-white/[0.06] pt-4">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Key skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`rounded-lg border px-3 py-1.5 text-xs transition ${
                        skillIndex === 0
                          ? "border-blue-400/20 bg-blue-400/[0.08] text-blue-300"
                          : "border-white/[0.07] bg-white/[0.025] text-slate-400"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {filteredJobs.length === 0 && (
            <div className="rounded-2xl border border-white/[0.08] bg-slate-950/60 px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                <BriefcaseBusiness size={25} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                No matching opportunities
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">
                Try another job title, skill, or location—or clear your filters
                to explore all available listings.
              </p>
              <button
                onClick={resetFilters}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Clear filters
                <ArrowUpRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      <p className="text-center text-xs text-slate-600">
        Demo listings for UI development · Market data integration comes later
      </p>
    </div>
  );
}

export default Jobs;
