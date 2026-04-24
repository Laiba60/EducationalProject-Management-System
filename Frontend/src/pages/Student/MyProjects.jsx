import React from "react";
import Sidebar from "../../components/Student/Sidebar";
import Topbar from "../../components/Student/Topbar";
import ProjectCards from "../../components/Student/ProjectCards";
import SubmissionTimeline from "../../components/Student/SubmissionTimeline";
import CuratorsNote from "../../components/Student/CuratorsNote";
import { Filter, ArrowUpDown } from "lucide-react";

export default function MyProjects() {
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

          {/* Page Heading + Buttons */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Projects</h1>
              <p className="text-sm text-gray-500 mt-1 max-w-md">
                Manage and monitor your active research proposals and final year
                project developments.
              </p>
            </div>

            {/* Filter + Sort */}
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-4 py-2 rounded-xl hover:bg-gray-50 transition">
                <Filter size={14} />
                Filter
              </button>
              <button className="flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-4 py-2 rounded-xl hover:bg-gray-50 transition">
                <ArrowUpDown size={14} />
                Sort
              </button>
            </div>
          </div>

          {/* Project Cards */}
          <div className="mt-6">
            <ProjectCards />
          </div>

          {/* Bottom Row — Timeline + Curator's Note */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <SubmissionTimeline />
            <CuratorsNote />
          </div>

        </main>
      </div>
    </div>
  );
}
