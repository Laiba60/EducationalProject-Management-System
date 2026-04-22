import React from "react";
import { useState } from "react";

const navItems = [
  {
    name: "Dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    name: "Projects",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
  },
  {
    name: "Users",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 21v-2a4 4 0 0 0-3-3.85" />
      </svg>
    ),
  },
  {
    name: "Assign",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

const activities = [
  {
    name: "Amara Chen",
    avatar: "AC",
    time: "2 hours ago",
    desc: 'Uploaded first draft of "Neural Architecture Search for IoT Devices"',
    tag: "NEW SUBMISSION",
    tagClass: "text-amber-700 bg-amber-50",
    urgent: false,
  },
  {
    name: "Julian Thorne",
    avatar: "JT",
    time: "5 hours ago",
    desc: "Modified project methodology based on previous feedback",
    tag: "UPDATED",
    tagClass: "text-blue-600 bg-blue-50",
    urgent: false,
  },
  {
    name: "Sasha Varma",
    avatar: "SV",
    time: "Yesterday",
    desc: "Requested urgent meeting regarding hardware procurement delay",
    tag: "ACTION REQUIRED",
    tagClass: "text-red-600 bg-red-50",
    urgent: true,
  },
];

const quickActions = ["Review Projects", "Give Feedback", "Schedule Viva"];
const barHeights = [60, 80, 50, 90, 70, 100, 85];

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden relative">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── SIDEBAR ── */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-50
          w-[200px] min-w-[200px] bg-[#2e3132]
          flex flex-col text-white transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="px-5 pt-6 pb-5 border-b border-white/10">
          <p className="text-[#bb8c4b] font-extrabold text-lg tracking-wide">FYP Curator</p>
          <p className="text-[#888] text-[10px] tracking-widest mt-0.5 uppercase">Management Portal</p>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 py-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => { setActiveNav(item.name); setSidebarOpen(false); }}
              className={`
                w-full flex items-center gap-3 px-5 py-[11px] text-sm font-medium
                border-l-[3px] transition-all duration-200
                ${activeNav === item.name
                  ? "bg-[#3d4142] border-[#bb8c4b] text-white"
                  : "border-transparent text-[#9a9b9e] hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>

        {/* New Proposal */}
        <div className="px-5 pb-4">
          <button className="w-full py-[11px] bg-[#bb8c4b] hover:bg-[#a67c3e] text-white rounded-lg font-bold text-[13px] flex items-center justify-center gap-1.5 transition-colors">
            <span className="text-lg leading-none">+</span> New Proposal
          </button>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2.5 px-5 py-4 text-[#9a9b9e] text-sm border-t border-white/10 hover:text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </button>
      </aside>

      {/* ── MAIN ── */}
      <div className="flex flex-col flex-1 overflow-hidden min-w-0">

        {/* Top Bar */}
        <header className="bg-white px-4 md:px-7 py-3.5 flex items-center justify-between border-b border-gray-200 gap-3 flex-shrink-0">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {/* Hamburger */}
            <button
              className="md:hidden text-[#2e3132] p-1 flex-shrink-0"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            {/* Search */}
            <div className="relative w-full max-w-[280px]">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                placeholder="Search students or projects..."
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-600 bg-gray-50 outline-none focus:border-[#bb8c4b] transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="hidden sm:block text-[#bb8c4b] font-semibold text-sm">Teacher Dashboard</span>
            <div className="w-9 h-9 rounded-full bg-[#bb8c4b] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              C
            </div>
          </div>
        </header>

        {/* ── SCROLLABLE CONTENT ── */}
        <main className="flex-1 overflow-y-auto p-5 md:p-8">

          {/* Welcome */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-[28px] font-extrabold text-[#2e3132] mb-1.5">Welcome, Curator</h1>
            <p className="text-gray-500 text-sm">
              Review and oversee the final year project lifecycle. You have new submissions awaiting your professional feedback.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-7">

            {/* Assigned Students */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#bb8c4b" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <span className="text-gray-500 text-[13px]">Academic Year 24/25</span>
              </div>
              <p className="text-[13px] text-gray-500 mb-1">Assigned Students</p>
              <p className="text-4xl font-extrabold text-[#2e3132] leading-none">12</p>
              <p className="text-[12px] text-gray-400 mt-2.5">↗ 2 more than previous semester</p>
            </div>

            {/* Pending Approvals */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <span className="text-[11px] text-red-500 font-semibold bg-red-50 px-2 py-0.5 rounded-full">
                  Requires Attention
                </span>
              </div>
              <p className="text-[13px] text-gray-500 mb-1">Pending Approvals</p>
              <p className="text-4xl font-extrabold text-[#2e3132] leading-none">5</p>
              <p className="text-[12px] text-gray-400 mt-2.5">● Due within 48 hours</p>
            </div>

            {/* Quick Actions */}
            <div className="bg-[#7e571a] rounded-xl p-5 shadow-sm sm:col-span-2 lg:col-span-1">
              <p className="text-sm font-bold text-white mb-3.5">Quick Actions</p>
              {quickActions.map((label) => (
                <button
                  key={label}
                  className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2.5 mb-2 text-white text-[13px] font-medium transition-colors"
                >
                  <span>{label}</span>
                  <span>›</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-4 gap-2">
              <span className="font-bold text-base text-[#2e3132]">Recent Student Activities</span>
              <span className="text-[#bb8c4b] text-[13px] font-medium cursor-pointer whitespace-nowrap hover:underline">
                View All Activity ↗
              </span>
            </div>

            {activities.map((item) => (
              <div
                key={item.name}
                className={`flex items-start sm:items-center gap-3.5 py-3.5 border-b border-gray-100 last:border-0 ${item.urgent ? "border-l-[3px] border-l-red-500 pl-3" : ""}`}
              >
                <div className="w-10 h-10 rounded-full bg-[#e8e0d4] flex items-center justify-center font-bold text-[13px] text-[#7e571a] flex-shrink-0">
                  {item.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-[#2e3132]">{item.name}</p>
                  <p className="text-[13px] text-gray-500 mt-0.5 truncate">{item.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[12px] text-gray-400 mb-1">{item.time}</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide ${item.tagClass}`}>
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Curator's Insights */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="font-bold text-[15px] text-[#2e3132] mb-4">✦ Curator's Insights</p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-[12px] text-[#bb8c4b] font-semibold mb-1">Completion Rate</p>
                  <p className="text-[28px] font-extrabold text-[#2e3132]">
                    65%{" "}
                    <span className="text-[13px] text-gray-400 font-normal">On schedule</span>
                  </p>
                  <div className="mt-2 h-1.5 bg-amber-100 rounded-full w-36">
                    <div className="h-full w-[65%] bg-[#bb8c4b] rounded-full" />
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-[#bb8c4b] font-semibold mb-1">Submission Intensity</p>
                  <p className="text-2xl font-extrabold text-[#2e3132]">
                    High{" "}
                    <span className="text-[12px] text-gray-400 font-normal">Peak deadline week</span>
                  </p>
                  <div className="flex items-end gap-1 mt-2 h-8">
                    {barHeights.map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h * 0.32}px` }}
                        className={`w-2.5 rounded-sm ${i === 5 ? "bg-[#bb8c4b]" : "bg-[#e8e0d4]"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Thesis Repository */}
            <div className="bg-[#f0ebe3] rounded-xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <p className="font-bold text-[15px] text-[#2e3132] mb-2">Thesis Repository</p>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Access the digital library of all past distinguished final year projects for reference.
                </p>
                <p className="mt-3.5 text-[#bb8c4b] font-semibold text-sm cursor-pointer hover:underline">
                  Enter Archives →
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#c4a882" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
