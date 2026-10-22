import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  Code2,
  DollarSign,
  GraduationCap,
  BarChart3,
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Jobs",
    path: "/jobs",
    icon: Briefcase,
  },
  {
    name: "Skills",
    path: "/skills",
    icon: Code2,
  },
  {
    name: "Salary",
    path: "/salary",
    icon: DollarSign,
  },
  {
    name: "Experience",
    path: "/experience",
    icon: GraduationCap,
  },
];

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-800 bg-slate-900">

        {/* Logo */}
        <div className="flex h-20 items-center gap-3 border-b border-slate-800 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
            <BarChart3 size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold">
              JobIntel
            </h1>

            <p className="text-xs text-slate-400">
              Market Intelligence
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 p-4">

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <Icon size={19} />
                {item.name}
              </NavLink>
            );
          })}

        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">

        {/* Top Bar */}
        <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">

          <div>
            <h2 className="text-xl font-semibold">
              Job Market Intelligence
            </h2>

            <p className="text-sm text-slate-400">
              Analyze jobs, skills and market trends
            </p>
          </div>

          <div className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300">
            Data Engineering Project
          </div>

        </header>

        {/* Page Content */}
        <section className="p-8">
          <Outlet />
        </section>

      </main>

    </div>
  );
}

export default MainLayout;