import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import StatsSummary from "../../components/admin/StatsSummary";
import UsersDirectory from "../../components/admin/UsersDirectory";
import {
  RecentSystemActions,
  SecurityInsight,
} from "../../components/admin/FooterWidgets";

import {
  fetchUsers,
  fetchUserStats,
} from "../../services/userService";

const systemActions = [
  {
    type: "update",
    title: "User Role Update",
    description: "Dr. Julian Sterling upgraded to Lead Faculty by Admin",
    time: "2 HOURS AGO",
  },
  {
    type: "enroll",
    title: "New Enrollment",
    description: "Sarah Wang completed onboarding for CS projects",
    time: "5 HOURS AGO",
  },
];

const ManageUsers = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Stats State
  const [statsData, setStatsData] = useState([
    {
      title: "Total Users",
      value: "...",
      subtitle: "Loading...",
      subtitleColor: "text-gray-400",
      icon: "↗",
    },
    {
      title: "Active Faculty",
      value: "...",
      subtitle: "Loading...",
      subtitleColor: "text-gray-400",
      icon: "✔",
    },
    {
      title: "Students Enrolled",
      value: "...",
      subtitle: "Loading...",
      subtitleColor: "text-gray-400",
      icon: "📚",
    },
    {
      title: "Pending Requests",
      value: "...",
      subtitle: "Loading...",
      subtitleColor: "text-gray-400",
      icon: "⚠",
    },
  ]);

  // ✅ Load Users + Stats
  useEffect(() => {
    const loadData = async () => {
      try {
        const [users, stats] = await Promise.all([
          fetchUsers(),
          fetchUserStats(),
        ]);

        console.log("Users API Response:", users);
        console.log("Stats API Response:", stats);

        const usersArray = Array.isArray(users)
          ? users
          : users?.users || [];

        setUsersData(usersArray);

        setStatsData([
          {
            title: "Total Users",
            value: stats?.totalUsers?.toString() || "0",
            subtitle: "Registered in system",
            subtitleColor: "text-green-500",
            icon: "↗",
          },
          {
            title: "Active Faculty",
            value: stats?.totalTeachers?.toString() || "0",
            subtitle: "Fully credentialed",
            subtitleColor: "text-green-500",
            icon: "✔",
          },
          {
            title: "Students Enrolled",
            value: stats?.totalStudents?.toString() || "0",
            subtitle: "Across departments",
            subtitleColor: "text-gray-500",
            icon: "📚",
          },
          {
            title: "Pending Requests",
            value: stats?.pendingRequests?.toString() || "0",
            subtitle: "Awaiting verification",
            subtitleColor: "text-yellow-500",
            icon: "⚠",
          },
        ]);
      } catch (err) {
        console.error("Fetch error:", err);

        console.log("Error response:", err.response?.data);

        if (err.response?.status === 401) {
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [navigate]);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-30 md:static md:z-auto
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden min-w-0">

        {/* Mobile Topbar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-100 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <p className="text-sm font-bold text-[#d4a017]">
            FYP Curator
          </p>
        </div>

        {/* Desktop Topbar */}
        <div className="hidden md:block">
          <Topbar />
        </div>

        {/* Page Body */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-5">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Manage Users
              </h1>

              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Coordinate and supervise the academic hierarchy
                of the institution.
              </p>
            </div>

            <button
              onClick={() => navigate("/admin/create-user")}
              className="flex items-center justify-center gap-2 bg-[#C8922A] hover:bg-[#b07d22] text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow transition-colors w-full sm:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>

              Create New User
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {statsData.map((stat, index) => (
              <StatsSummary key={index} {...stat} />
            ))}
          </div>

          {/* Users Table */}
          {loading ? (
            <div className="text-center py-10 text-gray-400">
              Loading users...
            </div>
          ) : (
            <UsersDirectory users={usersData} />
          )}

          {/* Bottom Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <RecentSystemActions actions={systemActions} />

            <SecurityInsight
              percentage={94}
              message="94% of system users have enabled Two-Factor Authentication. Reach 100% for maximum curator status."
            />
          </div>

        </main>
      </div>
    </div>
  );
};

export default ManageUsers;