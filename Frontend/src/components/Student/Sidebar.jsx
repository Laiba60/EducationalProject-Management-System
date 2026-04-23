import React from "react";
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

export default function Sidebar({ activeNav, setActiveNav, sidebarOpen, setSidebarOpen }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-50
          w-[185px] min-w-[185px] bg-[#252829]
          flex flex-col text-white transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="px-5 pt-7 pb-5 border-b border-white/10">
          <p className="text-[#bb8c4b] font-extrabold text-[17px] tracking-wide leading-tight">
            FYP Curator
          </p>
          <p className="text-[#777] text-[9px] tracking-[2px] mt-1 uppercase">
            Management Portal
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => { setActiveNav(item.name); setSidebarOpen(false); }}
              className={`
                w-full flex items-center gap-3 px-5 py-[10px] text-[13px] font-medium
                border-l-[3px] transition-all duration-200 text-left
                ${activeNav === item.name
                  ? "bg-[#3a3c3d] border-[#bb8c4b] text-white"
                  : "border-transparent text-[#8a8b8e] hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>

        {/* New Proposal Button */}
        <div className="px-4 pb-4">
          <button className="w-full py-3 bg-[#bb8c4b] hover:bg-[#a67c3e] text-white rounded-lg font-bold text-[13px] flex items-center justify-center gap-1.5 transition-colors shadow-md">
            <span className="text-base leading-none">+</span> New Proposal
          </button>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2.5 px-5 py-4 text-[#8a8b8e] text-[13px] border-t border-white/10 hover:text-white transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </button>
      </aside>
    </>
  );
}
