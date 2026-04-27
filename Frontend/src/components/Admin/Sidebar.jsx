import React from "react";
import { LayoutDashboard, FolderOpen, Users, ClipboardCheck, LogOut, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FolderOpen, label: "Projects" },
  { icon: Users, label: "Users" },
  { icon: ClipboardCheck, label: "Assign" },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className="w-44 min-h-screen bg-[#1e1e1e] flex flex-col text-white">

      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-5 border-b border-white/10">
        <div className="w-8 h-8 rounded-md bg-[#b8860b] flex items-center justify-center text-white font-bold text-sm">
          F
        </div>
        <div>
          <p className="text-xs font-bold leading-tight text-[#d4a017]">FYP Curator</p>
          <p className="text-[9px] text-gray-400 uppercase tracking-widest">Management Portal</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 flex flex-col gap-1 px-2">
        {navItems.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-all w-full text-left ${
              active
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </nav>

      {/* New Proposal */}
      <div className="px-3 pb-3">
        <button className="w-full flex items-center justify-center gap-2 bg-[#b8860b] hover:bg-[#d4a017] text-white text-xs font-semibold py-2.5 rounded-md transition-colors">
          <PlusCircle size={13} />
          New Proposal
        </button>
      </div>

      {/* Logout */}
      <div className="px-3 pb-5">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 text-gray-400 hover:text-white text-xs py-2 px-2 rounded-md hover:bg-white/5 transition-colors"
        >
          <LogOut size={13} />
          Logout
        </button>
      </div>

    </aside>
  );
}