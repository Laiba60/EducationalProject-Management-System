import React from "react";
import AssignForm from "../../components/admin/AssignForm";
import AllocationPanel from "../../components/admin/AllocationPanel";
import RecentAssignments from "../../components/admin/RecentAssignments";

export default function AssignTeacher() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
          Assign Supervisor
        </h1>
        <p className="text-sm text-gray-500 mt-2 max-w-xl leading-relaxed">
          Establish the foundation of academic research by pairing outstanding students with
          expert faculty members for their Final Year Projects.
        </p>
      </div>

      {/* Top Section: Form + Allocation Panel */}
      <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
        {/* Left: Assign Form */}
        <AssignForm />

        {/* Right: Allocation Panel */}
        <AllocationPanel />
      </div>

      {/* Bottom: Recent Assignments */}
      <RecentAssignments />
    </div>
  );
}
