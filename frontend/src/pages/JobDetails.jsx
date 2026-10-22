import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Building2,
  CheckCircle2,
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

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobsData.find(
    (item) => item.id === Number(id)
  );

  if (!job) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center">
        <h1 className="text-2xl font-bold">
          Job not found
        </h1>

        <button
          onClick={() => navigate("/jobs")}
          className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-500"
        >
          Back to Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">

      {/* Back */}
      <button
        onClick={() => navigate("/jobs")}
        className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
      >
        <ArrowLeft size={18} />
        Back to Jobs
      </button>


      {/* Job Header */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <div className="flex flex-col justify-between gap-6 md:flex-row">

          <div className="flex gap-5">

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600/20">
              <Building2
                size={30}
                className="text-blue-400"
              />
            </div>

            <div>

              <h1 className="text-3xl font-bold">
                {job.title}
              </h1>

              <p className="mt-2 text-lg text-slate-300">
                {job.company}
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">

                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  {job.location}
                </span>

                <span className="flex items-center gap-2">
                  <Briefcase size={16} />
                  {job.type}
                </span>

                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {job.experience}
                </span>

              </div>

            </div>

          </div>


          <div className="flex flex-col items-start gap-3 md:items-end">

            <div className="flex items-center gap-2 text-xl font-semibold text-emerald-400">
              <DollarSign size={20} />
              {job.salary}
            </div>

            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
              {job.type}
            </span>

          </div>

        </div>

      </div>


      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Description */}
        <div className="space-y-6 lg:col-span-2">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="text-xl font-semibold">
              Job Description
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              {job.description}
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              The successful candidate will work with
              cross-functional teams to build reliable,
              scalable and maintainable technology
              solutions.
            </p>

          </div>


          {/* Responsibilities */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="text-xl font-semibold">
              Key Responsibilities
            </h2>

            <div className="mt-5 space-y-4">

              {[
                "Design and develop scalable software solutions.",
                "Collaborate with engineering and product teams.",
                "Write clean, maintainable and tested code.",
                "Analyze technical requirements and solve problems.",
                "Contribute to system architecture and improvements.",
              ].map((item) => (

                <div
                  key={item}
                  className="flex gap-3 text-slate-400"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-emerald-400"
                  />

                  <span>
                    {item}
                  </span>
                </div>

              ))}

            </div>

          </div>

        </div>


        {/* Sidebar */}
        <div className="space-y-6">

          {/* Skills */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-lg font-semibold">
              Required Skills
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">

              {job.skills.map((skill) => (

                <span
                  key={skill}
                  className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>


          {/* Job Summary */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-lg font-semibold">
              Job Summary
            </h2>

            <div className="mt-5 space-y-4">

              <div>
                <p className="text-xs text-slate-500">
                  Experience
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  {job.experience}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Location
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  {job.location}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Salary
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  {job.salary}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Work Type
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  {job.type}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default JobDetails;