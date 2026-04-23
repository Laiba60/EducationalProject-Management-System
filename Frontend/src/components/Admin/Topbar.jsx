import React from "react";
import { Search, Bell, HelpCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100">
      {/* Search */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 w-72">
        <Search size={14} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search curated projects..."
          className="bg-transparent text-xs text-gray-500 outline-none w-full placeholder-gray-400"
        />
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <button className="text-gray-400 hover:text-gray-600">
          <Bell size={16} />
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          <HelpCircle size={16} />
        </button>
        <div className="flex items-center gap-2">
          <div className="text-right">
            <p className="text-xs font-semibold text-gray-700">Admin Panel</p>
            <p className="text-[10px] text-gray-400">Super User</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#2d6a4f] text-white flex items-center justify-center text-sm font-bold">
            T
          </div>
        </div>
      </div>
    </header>
  );
}
