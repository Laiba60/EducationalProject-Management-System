import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const dummyProjects = [
  {
    _id: "1",
    title: "AI Based Attendance System",
    studentName: "Ali Hassan",
    teacherName: "Dr. Sarah Jenkins",
    status: "Approved",
    createdAt: "2024-01-15",
  },
  {
    _id: "2",
    title: "Blockchain Voting System",
    studentName: "Sara Ahmed",
    teacherName: "Dr. Kevin Page",
    status: "Pending",
    createdAt: "2024-02-10",
  },
  {
    _id: "3",
    title: "Smart Library Management",
    studentName: "Usman Ali",
    teacherName: "Dr. Vesta",
    status: "Rejected",
    createdAt: "2024-03-05",
  },
  {
    _id: "4",
    title: "E-Commerce Recommendation Engine",
    studentName: "Fatima Khan",
    teacherName: "Dr. Sarah Jenkins",
    status: "Pending",
    createdAt: "2024-03-20",
  },
];

const statusStyle = (status) => {
  const styles = {
    Approved: "bg-green-100 text-green-700",
    Pending:  "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
  };
  return styles[status] || "bg-gray-100 text-gray-600";
};

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [filter, setFilter]     = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false); // ✅ Mobile sidebar

  useEffect(() => {
    setTimeout(() => {
      setProjects(dummyProjects);
      setLoading(false);
    }, 500);
  }, []);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.status === filter);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {/* ── Mobile Overlay ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar ── */}
      <div
        className={`
          fixed inset-y-0 left-0 z-30 md:static md:z-auto
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Sidebar />
      </div>

      {/* ── Main Content ── */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">

        {/* ── Topbar ── */}
        <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-100 md:hidden">
          {/* Mobile hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <p className="text-sm font-bold text-[#d4a017]">FYP Curator</p>
        </div>

        {/* Desktop Topbar */}
        <div className="hidden md:block">
          <Topbar />
        </div>

        {/* ── Page Body ── */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-5">

          {/* ── Page Header ── */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                All Projects
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Overview of all Final Year Projects in the system.
              </p>
            </div>

            {/* ── Stats Badges ── */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600 shadow-sm">
                Total: {projects.length}
              </span>
              <span className="text-xs bg-green-50 border border-green-200 rounded-full px-3 py-1 text-green-700">
                Approved: {projects.filter((p) => p.status === "Approved").length}
              </span>
              <span className="text-xs bg-yellow-50 border border-yellow-200 rounded-full px-3 py-1 text-yellow-700">
                Pending: {projects.filter((p) => p.status === "Pending").length}
              </span>
              <span className="text-xs bg-red-50 border border-red-200 rounded-full px-3 py-1 text-red-700">
                Rejected: {projects.filter((p) => p.status === "Rejected").length}
              </span>
            </div>
          </div>

          {/* ── Filter Tabs ── */}
          <div className="flex gap-2 flex-wrap">
            {["All", "Pending", "Approved", "Rejected"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  filter === f
                    ? "bg-[#C8922A] text-white shadow"
                    : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* ── Desktop Table ── */}
          <div className="hidden sm:block bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-6 h-6 border-2 border-[#C8922A] border-t-transparent rounded-full animate-spin" />
                  <p className="text-gray-400 text-sm">Loading projects...</p>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[600px]">
                  <thead>
                    <tr className="text-xs text-gray-400 uppercase tracking-wider bg-gray-50">
                      <th className="px-4 py-3">#</th>
                      <th className="px-4 py-3">Project Title</th>
                      <th className="px-4 py-3">Student</th>
                      <th className="px-4 py-3">Supervisor</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-10 text-gray-400 text-sm">
                          No projects found.
                        </td>
                      </tr>
                    ) : (
                      filtered.map((project, index) => (
                        <tr
                          key={project._id}
                          className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-4 py-3 text-xs text-gray-400">
                            {index + 1}
                          </td>
                          <td className="px-4 py-3 text-sm font-semibold text-gray-800">
                            {project.title}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {project.studentName}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {project.teacherName}
                          </td>
                          <td className="px-4 py-3">
                            <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${statusStyle(project.status)}`}>
                              {project.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs text-gray-400">
                            {new Date(project.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* ── Mobile Cards ── */}
          <div className="sm:hidden space-y-3">
            {loading ? (
              <div className="flex items-center justify-center py-10">
                <div className="w-6 h-6 border-2 border-[#C8922A] border-t-transparent rounded-full animate-spin" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="bg-white rounded-xl p-6 text-center text-gray-400 text-sm border border-gray-100">
                No projects found.
              </div>
            ) : (
              filtered.map((project, index) => (
                <div
                  key={project._id}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 space-y-3"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-xs text-gray-400 mb-0.5">#{index + 1}</p>
                      <h3 className="text-sm font-semibold text-gray-800 leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full flex-shrink-0 ${statusStyle(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Card Details */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-gray-400 uppercase tracking-wide text-[9px] mb-0.5">Student</p>
                      <p className="text-gray-700 font-medium">{project.studentName}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 uppercase tracking-wide text-[9px] mb-0.5">Supervisor</p>
                      <p className="text-gray-700 font-medium">{project.teacherName}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 uppercase tracking-wide text-[9px] mb-0.5">Date</p>
                      <p className="text-gray-600">
                        {new Date(project.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </main>
      </div>
    </div>
  );
}