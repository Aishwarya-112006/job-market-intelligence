
import {
  ArrowLeft,
  MapPin,
  BriefcaseBusiness,
  Clock,
  DollarSign,
  Building2,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Code2,
  ShieldCheck,
  CalendarDays,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

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
    description:
      "We are looking for a Senior Backend Engineer to design, develop and maintain scalable backend systems.",
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
    description:
      "Join our data engineering team to build reliable data pipelines and analytics infrastructure.",
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
    description:
      "Build modern and responsive web applications using React and modern frontend technologies.",
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
    description:
      "Develop machine learning solutions and production-ready AI systems for real-world applications.",
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
    description:
      "Design and maintain scalable cloud infrastructure using modern DevOps and cloud technologies.",
  },
];

const responsibilities = [
  "Design and develop scalable software solutions.",
  "Collaborate with engineering and product teams.",
  "Write clean, maintainable and tested code.",
  "Analyze technical requirements and solve problems.",
  "Contribute to system architecture and improvements.",
];

const tooltipCards = "rounded-2xl border border-slate-800 bg-[#0b1020]";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobsData.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-slate-100">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-[#0b1020] p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-400/10 text-rose-300">
            <BriefcaseBusiness size={30} />
          </div>
          <h1 className="mt-5 text-2xl font-bold">Job not found</h1>
          <p className="mt-2 text-sm text-slate-400">
            This listing may not exist in the current sample dataset.
          </p>
          <button
            onClick={() => navigate("/jobs")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            <ArrowLeft size={16} />
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-full max-w-7xl space-y-6 pb-8 text-slate-100">
      {/* Navigation */}
      <button
        onClick={() => navigate("/jobs")}
        className="group inline-flex items-center gap-2 rounded-lg text-sm text-slate-400 transition hover:text-cyan-300"
      >
        <ArrowLeft
          size={17}
          className="transition-transform group-hover:-translate-x-1"
        />
        Back to Jobs
      </button>

      {/* Job hero */}
      <section className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#101a35] via-[#0c1122] to-[#180e24] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-1/3 h-48 w-48 rounded-full bg-rose-500/10 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-7 xl:flex-row xl:items-start">
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-cyan-300 sm:h-20 sm:w-20">
              <Building2 size={32} />
            </div>

            <div className="min-w-0">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  <Sparkles size={13} />
                  Job overview
                </span>
                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-200">
                  {job.type}
                </span>
              </div>

              <h1 className="break-words text-2xl font-bold tracking-tight sm:text-3xl xl:text-4xl">
                {job.title}
              </h1>

              <p className="mt-3 flex items-center gap-2 text-base text-slate-300 sm:text-lg">
                <Building2 size={17} className="text-slate-500" />
                {job.company}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-cyan-300" />
                  {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <BriefcaseBusiness size={16} className="text-cyan-300" />
                  {job.type}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-cyan-300" />
                  {job.experience}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full rounded-2xl border border-rose-400/20 bg-black/20 p-5 xl:w-auto xl:min-w-64">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Listed salary range
            </p>
            <div className="mt-3 flex items-center gap-2 text-2xl font-bold text-rose-300">
              <DollarSign size={22} />
              {job.salary.replace("$", "")}
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Salary shown as provided in the sample listing.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          {/* Description */}
          <section className={`${tooltipCards} p-5 sm:p-7`}>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                <BriefcaseBusiness size={20} />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Job Description</h2>
                <p className="mt-1 text-xs text-slate-500">
                  Role overview and expectations
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              {job.description}
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              The successful candidate will work with cross-functional teams
              to build reliable, scalable, and maintainable technology
              solutions.
            </p>
          </section>

          {/* Responsibilities */}
          <section className={`${tooltipCards} p-5 sm:p-7`}>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-rose-400/10 p-3 text-rose-300">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Key Responsibilities</h2>
                <p className="mt-1 text-xs text-slate-500">
                  Typical expectations for this role
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {responsibilities.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-cyan-300"
                  />
                  <span className="text-sm leading-6 text-slate-400">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right sidebar */}
        <aside className="space-y-5">
          {/* Skills */}
          <section className={`${tooltipCards} p-5`}>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-400/10 p-3 text-blue-300">
                <Code2 size={20} />
              </div>
              <div>
                <h2 className="font-semibold">Required Skills</h2>
                <p className="mt-1 text-xs text-slate-500">
                  {job.skills.length} listed technologies
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span
                  key={skill}
                  className={`rounded-lg border px-3 py-2 text-sm transition hover:-translate-y-0.5 ${
                    index % 2 === 0
                      ? "border-cyan-400/20 bg-cyan-400/5 text-cyan-200"
                      : "border-rose-400/20 bg-rose-400/5 text-rose-200"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Job summary */}
          <section className={`${tooltipCards} p-5`}>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-rose-400/10 p-3 text-rose-300">
                <CalendarDays size={20} />
              </div>
              <h2 className="font-semibold">Job Summary</h2>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <Clock size={17} className="mt-0.5 text-slate-500" />
                <div>
                  <p className="text-xs text-slate-500">Experience</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {job.experience}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 text-slate-500" />
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {job.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <DollarSign size={17} className="mt-0.5 text-slate-500" />
                <div>
                  <p className="text-xs text-slate-500">Salary</p>
                  <p className="mt-1 text-sm text-slate-200">{job.salary}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BriefcaseBusiness size={17} className="mt-0.5 text-slate-500" />
                <div>
                  <p className="text-xs text-slate-500">Work arrangement</p>
                  <p className="mt-1 text-sm text-slate-200">{job.type}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Data status */}
          <section className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-5">
            <div className="flex items-center gap-2 text-cyan-200">
              <ShieldCheck size={18} />
              <h2 className="text-sm font-semibold">Listing Information</h2>
            </div>
            <p className="mt-3 text-xs leading-6 text-slate-400">
              This page currently uses sample job records for UI development.
              Live job descriptions and extracted skills can be connected to
              your data pipeline later.
            </p>
          </section>

          <button
            onClick={() => navigate("/jobs")}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200"
          >
            <ExternalLink size={16} />
            Explore More Jobs
          </button>
        </aside>
      </div>
    </div>
  );
}

export default JobDetails;
