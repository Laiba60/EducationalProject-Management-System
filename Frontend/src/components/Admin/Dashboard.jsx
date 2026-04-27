import React from "react";
import StatsCards from "./StatsCards";
import SubmissionsChart from "./SubmissionsChart";
import SystemActivity from "./SystemActivity";
import { TopDepartment, RefineCurator, TerminalWidget } from "./BottomSection";

export default function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 flex flex-col gap-4">

      {/* Heading */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Institutional Overview
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          Curation status and metrics for the academic year 2023-2024.
        </p>
      </div>

      {/* Row 1: Stats */}
      <StatsCards />

      {/* Row 2: Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3">
          <SubmissionsChart />
        </div>
        <div className="lg:col-span-2">
          <SystemActivity />
        </div>
      </div>

      {/* Row 3: Bottom cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <TopDepartment />
        </div>
        <div className="sm:col-span-2 lg:col-span-2">
          <RefineCurator />
        </div>
        <div className="sm:col-span-2 lg:col-span-2">
          <TerminalWidget />
        </div>
      </div>

    </main>
  );
}