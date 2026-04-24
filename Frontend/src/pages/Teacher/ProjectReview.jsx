import React from "react";
import Sidebar from "../../components/Student/Sidebar";
import Topbar from "../../components/Student/Topbar";
import ProjectHero from "../../components/Teacher/ProjectHero";
import ProjectDetails from "../../components/Teacher/ProjectDetails";
import ReviewerActionPanel from "../../components/Teacher/ReviewerActionPanel";
import { Link } from "react-router-dom";

export default function ProjectReview() {
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

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-6">
            <Link to="/dashboard" className="hover:text-gray-600 transition">
              Dashboard
            </Link>
            <span>/</span>
            <Link to="/student/projects" className="hover:text-gray-600 transition">
              Projects
            </Link>
            <span>/</span>
            <span className="text-gray-700 font-semibold">Review Application</span>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6 items-start">

            {/* ── Left Column ── */}
            <div className="flex-1 min-w-0">
              {/* Hero Card */}
              <ProjectHero />

              {/* Abstract + Resources */}
              <ProjectDetails />
            </div>

            {/* ── Right Column — Reviewer Panel ── */}
            <div className="w-full lg:w-72 flex-shrink-0">
              <ReviewerActionPanel />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
