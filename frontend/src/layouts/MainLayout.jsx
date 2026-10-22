
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  Code2,
  DollarSign,
  GraduationCap,
  BarChart3,
  Search,
  Bell,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Jobs", path: "/jobs", icon: BriefcaseBusiness },
  { name: "Skills", path: "/skills", icon: Code2 },
  { name: "Salary", path: "/salary", icon: DollarSign },
  { name: "Experience", path: "/experience", icon: GraduationCap },
];

function MainLayout() {
  const location = useLocation();

  const currentPage =
    navItems.find((item) =>
      item.path === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(item.path)
    )?.name ?? "Dashboard";

  return (
    <div className="min-h-screen bg-[#03040a] text-slate-100">
      <div className="pointer-events-none fixed inset-0 neon-grid opacity-50" />

      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-white/[0.08] bg-[#070912]/95 backdrop-blur-xl md:flex">
        <div className="flex h-20 items-center gap-3 border-b border-white/[0.08] px-6">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-blue-400 shadow-[0_0_25px_rgba(59,130,255,0.18)]">
            <BarChart3 size={23} />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#070912] bg-[#ff3d8d]" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Job<span className="text-[#3b82ff]">Intel</span>
            </h1>
            <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Market intelligence
            </p>
          </div>
        </div>

        <div className="px-4 pt-7">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Workspace
          </p>

          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-3 overflow-hidden rounded-xl px-3.5 py-3 text-sm transition-all duration-200 ${
                      isActive
                        ? "border border-blue-400/20 bg-blue-500/[0.12] font-semibold text-white shadow-[inset_0_0_20px_rgba(59,130,255,0.04)]"
                        : "border border-transparent text-slate-400 hover:bg-white/[0.04] hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full bg-[#3b82ff] shadow-[0_0_12px_#3b82ff]" />
                      )}
                      <Icon
                        size={18}
                        className={
                          isActive
                            ? "text-[#3b82ff]"
                            : "text-slate-500 transition-colors group-hover:text-slate-200"
                        }
                      />
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#3b82ff] shadow-[0_0_8px_#3b82ff]" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4">
          <div className="relative overflow-hidden rounded-2xl border border-[#3b82ff]/20 bg-gradient-to-br from-blue-500/[0.12] to-[#ff3d8d]/[0.06] p-4">
            <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-blue-500/10 blur-2xl" />
            <div className="relative">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400">
                <Sparkles size={16} />
              </div>
              <p className="text-sm font-semibold text-white">Market pulse</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Explore skills, salaries and hiring trends in one place.
              </p>
              <div className="mt-3 flex items-center gap-1 text-xs font-medium text-blue-400">
                Explore insights <ArrowUpRight size={14} />
              </div>
            </div>
          </div>

          <p className="px-1 pt-4 text-[10px] text-slate-600">
            JOBINTEL · DATA ANALYTICS
          </p>
        </div>
      </aside>

      <div className="relative min-h-screen md:ml-64">
        <header className="sticky top-0 z-20 flex min-h-20 items-center justify-between gap-4 border-b border-white/[0.08] bg-[#03040a]/80 px-5 backdrop-blur-2xl sm:px-8">
          <div className="min-w-0">
            <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Workspace / <span className="text-blue-400">{currentPage}</span>
            </p>
            <h2 className="truncate text-lg font-semibold tracking-tight text-white sm:text-xl">
              {currentPage === "Dashboard"
                ? "Job Market Intelligence"
                : `${currentPage} Analytics`}
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-slate-500 lg:flex">
              <Search size={14} />
              <span>Market overview</span>
              <span className="ml-3 rounded border border-white/10 px-1.5 py-0.5 text-[10px]">
                LIVE
              </span>
            </div>

            <button
              type="button"
              aria-label="Notifications"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition hover:border-blue-400/30 hover:text-blue-400"
            >
              <Bell size={17} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#ff3d8d]" />
            </button>

            <div className="hidden h-9 items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="text-xs text-slate-300">Analytics workspace</span>
            </div>
          </div>
        </header>

        <main className="relative mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
