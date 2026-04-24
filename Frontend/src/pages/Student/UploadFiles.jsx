import React from "react";
import Sidebar from "../../components/Student/Sidebar";       
import Topbar from "../../components/Student/Topbar";         
import UploadSection from "../../components/Student/UploadSection";
import RecentSubmissions from "../../components/Student/RecentSubmissions";
import SubmissionSidebar from "../../components/Student/SubmissionSidebar";

export default function UploadFiles() {
  return (
    <div className="flex h-screen bg-gray-50">

      {/* ── Tumhara Existing Sidebar ── */}
      <Sidebar />

      {/* ── Right Side ── */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* ── Tumhara Existing Topbar ── */}
        <Topbar />

        {/* ── Page Content ── */}
        <main className="flex-1 overflow-y-auto px-6 py-8">

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Upload Project Deliverables
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Centralize your academic research documents and final submissions.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Left Column */}
            <div className="flex-1">
              <UploadSection />
              <RecentSubmissions />
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-72 flex-shrink-0">
              <SubmissionSidebar />
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}