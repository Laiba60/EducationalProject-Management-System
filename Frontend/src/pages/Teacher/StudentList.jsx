import React from "react";  
import Sidebar from "../../components/Student/Sidebar";
import Topbar from "../../components/Student/Topbar";
import StudentRosterTable from "../../components/Teacher/StudentRosterTable";
import RosterStats from "../../components/Teacher/RosterStats";
import { ChevronDown } from "lucide-react";

export default function StudentList() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Topbar */}
        <Topbar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto px-6 py-8">

          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Student Rosters
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage and review thesis progress for assigned Final Year
                Project students.
              </p>
            </div>

            {/* Top Right Stats */}
            <div className="flex items-center gap-6 flex-shrink-0">
              <div className="text-center">
                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                  Total Assigned
                </p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                  Pending Reviews
                </p>
                <p className="text-2xl font-bold text-gray-900">08</p>
              </div>
            </div>
          </div>

          {/* Status Filter */}
          <div className="flex items-center justify-end mb-4">
            <button className="flex items-center gap-2 border border-gray-200 bg-white text-sm text-gray-600 font-medium px-4 py-2 rounded-xl hover:bg-gray-50 transition shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                />
              </svg>
              Status: All
              <ChevronDown size={14} className="text-gray-400" />
            </button>
          </div>

          {/* Table */}
          <StudentRosterTable />

          {/* Bottom Stats */}
          <RosterStats />

        </main>
      </div>
    </div>
  );
}
