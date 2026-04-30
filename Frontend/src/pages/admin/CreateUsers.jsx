import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import { createUser } from "../../services/userService";

export default function CreateUsers() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(form);
    alert("User Created");
  };

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
      <div className={`fixed inset-y-0 left-0 z-30 md:static md:z-auto transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Mobile Topbar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-white border-b md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
          <p className="font-bold text-[#C8922A]">FYP Curator</p>
        </div>

        {/* Desktop Topbar */}
        <div className="hidden md:block">
          <Topbar />
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Create New User
            </h1>
            <p className="text-sm text-gray-500">
              Add new students or teachers to the system.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 max-w-2xl mx-auto">

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C8922A] outline-none"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C8922A] outline-none"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C8922A] outline-none"
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>

              {/* Role */}
              <div>
                <label className="text-sm font-medium text-gray-700">Role</label>
                <select
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C8922A] outline-none"
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                >
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                </select>
              </div>

              {/* Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#C8922A] hover:bg-[#b07d22] text-white px-6 py-2 rounded-lg font-semibold shadow"
                >
                  Create User
                </button>
              </div>

            </form>
          </div>

        </main>
      </div>
    </div>
  );
}