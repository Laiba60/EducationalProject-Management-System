import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import AssignForm from "../../components/admin/AssignForm";
import AllocationPanel from "../../components/admin/AllocationPanel";
import RecentAssignments from "../../components/admin/RecentAssignments";

export default function AssignTeacher() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {/* ✅ Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* ✅ Topbar */}
        <Topbar />

        {/* Page Body */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

          {/* Page Header */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Assign Supervisor
            </h1>
            <p className="text-sm text-gray-500 mt-1 max-w-xl leading-relaxed">
              Establish the foundation of academic research by pairing outstanding
              students with expert faculty members for their Final Year Projects.
            </p>
          </div>

          {/* Form + Allocation Panel */}
          <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
            <AssignForm />
            <AllocationPanel />
          </div>

          {/* Recent Assignments */}
          <RecentAssignments />

        </main>
      </div>
    </div>
  );
}