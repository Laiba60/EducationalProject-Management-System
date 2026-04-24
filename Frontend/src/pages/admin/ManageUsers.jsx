import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import StatsSummary from "./StatsSummary";
import UsersDirectory from "./UsersDirectory";
import { RecentSystemActions, SecurityInsight } from "./FooterWidgets";




const statsData = [
  {
    title: "Total Users",
    value: "1,284",
    subtitle: "12% increase this semester",
    subtitleColor: "text-green-500",
    icon: "↗",
  },
  {
    title: "Active Faculty",
    value: "142",
    subtitle: "Fully credentialed",
    subtitleColor: "text-green-500",
    icon: "✔",
  },
  {
    title: "Students Enrolled",
    value: "1,056",
    subtitle: "Across 14 departments",
    subtitleColor: "text-gray-500",
    icon: "📚",
  },
  {
    title: "Pending Requests",
    value: "86",
    subtitle: "Awaiting verification",
    subtitleColor: "text-yellow-500",
    icon: "⚠",
  },
];

const usersData = [
  {
    avatar: "https://i.pravatar.cc/40?img=12",
    name: "Dr. Julian Sterling",
    joined: "Joined Sept 2021",
    role: "LEAD FACULTY",
    email: "j.sterling@curator.edu",
    department: "Applied Sciences",
  },
  {
    avatar: "https://i.pravatar.cc/40?img=47",
    name: "Ava Chen-Moore",
    joined: "Joined Aug 2023",
    role: "RESEARCHER",
    email: "a.moore@curator.edu",
    department: "Data Ethics",
  },
  {
    avatar: "https://i.pravatar.cc/40?img=33",
    name: "Robert Kim",
    joined: "Joined Jan 2022",
    role: "ADMINISTRATOR",
    email: "r.kim@curator.edu",
    department: "Registrar's Office",
  },
  {
    avatar: "https://i.pravatar.cc/40?img=44",
    name: "Sarah Wang",
    joined: "Joined Oct 2023",
    role: "STUDENT",
    email: "s.wang@curator.edu",
    department: "Computer Science",
  },
];

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
  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Topbar */}
        <Topbar />

        {/* Page Body */}
        <main className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

          {/* ── Page Header ── */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Manage Users</h1>
              <p className="text-sm text-gray-500 mt-0.5">
                Coordinate and supervise the academic hierarchy of the institution.
              </p>
            </div>
            <button className="flex items-center gap-2 bg-[#C8922A] hover:bg-[#b07d22] text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create New User
            </button>
          </div>

          {/* ── Stats Cards ── */}
          <div className="flex gap-4 flex-wrap">
            {statsData.map((stat, index) => (
              <StatsSummary key={index} {...stat} />
            ))}
          </div>

          {/* ── User Table ── */}
          <UsersDirectory users={usersData} />

          {/* ── Bottom Section ── */}
          <div className="flex gap-4 flex-wrap">
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
