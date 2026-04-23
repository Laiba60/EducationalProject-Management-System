import { useState } from "react";
import {
  LayoutDashboard, FolderOpen, Users, ClipboardCheck,
  LogOut, PlusCircle, Search, Bell, HelpCircle,
  Upload, CheckCircle, AlertTriangle
} from "lucide-react";

// ─── SIDEBAR ───────────────────────────────────────────────
function Sidebar() {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: FolderOpen, label: "Projects" },
    { icon: Users, label: "Users" },
    { icon: ClipboardCheck, label: "Assign" },
  ];

  return (
    <aside className="w-44 min-h-screen bg-[#1e1e1e] flex flex-col text-white flex-shrink-0">
      <div className="flex items-center gap-2 px-4 py-5 border-b border-white/10">
        <div className="w-8 h-8 rounded-md bg-[#b8860b] flex items-center justify-center text-white font-bold text-sm">F</div>
        <div>
          <p className="text-xs font-bold leading-tight text-[#d4a017]">FYP Curator</p>
          <p className="text-[9px] text-gray-400 uppercase tracking-widest">Management Portal</p>
        </div>
      </div>
      <nav className="flex-1 py-4 flex flex-col gap-1 px-2">
        {navItems.map(({ icon: Icon, label, active }) => (
          <button key={label} className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-all w-full text-left ${active ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
            <Icon size={14} />{label}
          </button>
        ))}
      </nav>
      <div className="px-3 pb-3">
        <button className="w-full flex items-center justify-center gap-2 bg-[#b8860b] hover:bg-[#d4a017] text-white text-xs font-semibold py-2.5 rounded-md transition-colors">
          <PlusCircle size={13} />New Proposal
        </button>
      </div>
      <div className="px-3 pb-5">
        <button className="w-full flex items-center gap-2 text-gray-400 hover:text-white text-xs py-2 px-2 rounded-md hover:bg-white/5 transition-colors">
          <LogOut size={13} />Logout
        </button>
      </div>
    </aside>
  );
}

// ─── TOPBAR ────────────────────────────────────────────────
function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100">
      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 w-64">
        <Search size={14} className="text-gray-400" />
        <input type="text" placeholder="Search curated projects..." className="bg-transparent text-xs text-gray-500 outline-none w-full placeholder-gray-400" />
      </div>
      <div className="flex items-center gap-3">
        <button className="text-gray-400 hover:text-gray-600"><Bell size={16} /></button>
        <button className="text-gray-400 hover:text-gray-600"><HelpCircle size={16} /></button>
        <div className="flex items-center gap-2">
          <div className="text-right">
            <p className="text-xs font-semibold text-gray-700">Admin Panel</p>
            <p className="text-[10px] text-gray-400">Super User</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#2d6a4f] text-white flex items-center justify-center text-sm font-bold">T</div>
        </div>
      </div>
    </header>
  );
}

// ─── STATS CARDS ───────────────────────────────────────────
function StatsCards() {
  const stats = [
    { emoji: "👥", iconBg: "bg-blue-50", badge: "+12%", badgeColor: "text-green-500", label: "TOTAL USERS", value: "450" },
    { emoji: "📁", iconBg: "bg-yellow-50", badge: "Active", badgeColor: "text-green-500", label: "TOTAL PROJECTS", value: "120" },
    { emoji: "🎓", iconBg: "bg-teal-50", badge: "84% Capacity", badgeColor: "text-gray-400", label: "ACTIVE TEACHERS", value: "25" },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map(({ emoji, iconBg, badge, badgeColor, label, value }) => (
        <div key={label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-3">
            <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center text-base`}>{emoji}</div>
            <span className={`text-[10px] font-semibold ${badgeColor}`}>{badge}</span>
          </div>
          <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">{label}</p>
          <p className="text-3xl font-bold text-gray-800 mt-0.5">{value}</p>
        </div>
      ))}
    </div>
  );
}

// ─── CHART ─────────────────────────────────────────────────
function SubmissionsChart() {
  const [view, setView] = useState("Monthly");
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
  const values = [28, 35, 52, 40, 30, 38];
  const maxValue = Math.max(...values);

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Project Submissions Growth</h3>
        <div className="flex gap-3 text-xs">
          {["Monthly", "Weekly"].map(v => (
            <button key={v} onClick={() => setView(v)} className={`font-semibold transition-colors ${view === v ? "text-[#b8860b] border-b border-[#b8860b]" : "text-gray-400 hover:text-gray-600"}`}>{v}</button>
          ))}
        </div>
      </div>
      <div className="flex items-end gap-3 h-36 pt-4">
        {months.map((month, i) => {
          const heightPct = (values[i] / maxValue) * 100;
          const isHighlighted = i === 2;
          return (
            <div key={month} className="flex-1 flex flex-col items-center gap-1">
              {isHighlighted && <span className="text-[10px] text-gray-500 font-medium">{values[i]}</span>}
              {!isHighlighted && <span className="text-[10px] text-transparent">0</span>}
              <div className="w-full flex flex-col justify-end" style={{ height: "108px" }}>
                <div className={`w-full rounded-sm ${isHighlighted ? "bg-[#d4a017]" : "bg-gray-200"}`} style={{ height: `${heightPct}%` }} />
              </div>
              <span className="text-[10px] text-gray-400">{month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── SYSTEM ACTIVITY ───────────────────────────────────────
function SystemActivity() {
  const activities = [
    {
      Icon: Upload, iconBg: "bg-blue-100", iconColor: "text-blue-500",
      text: <><span className="font-semibold">Dr. Aris Thorne</span> uploaded a new project proposal: <span className="text-[#b8860b] font-medium italic">"Quantum Cryptography in IoT"</span></>,
      time: "3 MINUTES AGO",
    },
    {
      Icon: CheckCircle, iconBg: "bg-yellow-100", iconColor: "text-yellow-500",
      text: <><span className="font-semibold">System Audit</span> completed successfully for department <span className="font-semibold">Computer Science</span></>,
      time: "45 MINUTES AGO",
    },
    {
      Icon: AlertTriangle, iconBg: "bg-red-100", iconColor: "text-red-500",
      text: <><span className="font-semibold">Quota Alert:</span> Teacher <span className="font-semibold">Prof. Sarah Jenkins</span> has reached the maximum project limit.</>,
      time: "1 HOUR AGO",
    },
    {
      Icon: Users, iconBg: "bg-purple-100", iconColor: "text-purple-500",
      text: <><span className="font-semibold">12 Students</span> were bulk imported via CSV successfully.</>,
      time: "2 HOURS AGO",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">System Activity</h3>
        <button className="text-xs text-[#b8860b] font-semibold hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-4">
        {activities.map(({ Icon, iconBg, iconColor, text, time }, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`w-7 h-7 rounded-full ${iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
              <Icon size={13} className={iconColor} />
            </div>
            <div>
              <p className="text-xs text-gray-600 leading-snug">{text}</p>
              <p className="text-[9px] text-gray-400 mt-0.5 tracking-widest">{time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── BOTTOM ROW ────────────────────────────────────────────
function TopDepartment() {
  return (
    <div className="bg-[#1e1e1e] text-white rounded-xl p-5 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-sm font-bold text-[#d4a017]">Top Department</h3>
        <p className="text-xs text-gray-400 mt-1 leading-snug">Engineering Faculty leads with the highest proposal acceptance rate.</p>
      </div>
      <div className="mt-4">
        <p className="text-5xl font-extrabold text-white">92%</p>
        <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-0.5">Efficiency Index</p>
      </div>
    </div>
  );
}

function RefineCurator() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-sm font-bold text-gray-800">Refine the Curator</h3>
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          The current curation cycle is 80% complete. Adjust the allocation algorithms or review pending exceptions before the final deadline on Friday.
        </p>
      </div>
      <div className="flex gap-3 mt-4">
        <button className="text-xs font-semibold text-gray-700 border border-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">Review Exceptions</button>
        <button className="text-xs font-semibold text-[#b8860b] hover:underline">Algorithm Settings →</button>
      </div>
    </div>
  );
}

function TerminalWidget() {
  return (
    <div className="bg-[#111] rounded-xl overflow-hidden border border-gray-700 h-full">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#2a2a2a] border-b border-gray-700">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="text-[10px] text-gray-400 ml-2">Safe Safe Work</span>
      </div>
      <div className="p-3 font-mono text-[10px] text-green-400 leading-loose">
        <p>$ curator --run audit</p>
        <p className="text-gray-500">Scanning departments...</p>
        <p>✓ CS Dept: 34 projects</p>
        <p>✓ EE Dept: 28 projects</p>
        <p className="text-yellow-400">⚠ Quota alert: 2 teachers</p>
        <p className="animate-pulse">$ _</p>
      </div>
    </div>
  );
}

// ─── MAIN APP ──────────────────────────────────────────────
export default function App() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden text-gray-900" style={{ fontFamily: "system-ui, sans-serif" }}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-5 bg-gray-50">
          <div className="mb-5">
            <h1 className="text-2xl font-bold text-gray-900">Institutional Overview</h1>
            <p className="text-xs text-gray-400 mt-1">Curation status and metrics for the academic year 2023-2024.</p>
          </div>
          <StatsCards />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <div className="col-span-3"><SubmissionsChart /></div>
            <div className="col-span-2"><SystemActivity /></div>
          </div>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <div className="col-span-1"><TopDepartment /></div>
            <div className="col-span-2"><RefineCurator /></div>
            <div className="col-span-2"><TerminalWidget /></div>
          </div>
        </main>
      </div>
    </div>
  );
}
