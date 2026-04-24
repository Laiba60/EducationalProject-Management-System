import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import Dashboard from "../../components/admin/Dashboard";

export default function AdminDashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
     
      <Sidebar />

     
      <div className="flex flex-col flex-1 min-w-0">
        <Topbar />
        <Dashboard />
      </div>
    </div>
  );
}