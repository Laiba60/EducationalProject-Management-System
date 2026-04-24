import React from "react";
const students = [
  {
    id: 1,
    name: "Marcus Thorne",
    studentId: "ID: 2024-ARCH-012",
    avatar: "MT",
    avatarBg: "bg-blue-200",
    thesis: "Sustainable Kinetic Architecture in Urban Hubs",
    submitted: "Submitted: Oct 12, 2023",
    status: "IN PROGRESS",
    statusColor: "bg-blue-100 text-blue-600",
    actionColor: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    studentId: "ID: 2024-CS-883",
    avatar: "ER",
    avatarBg: "bg-orange-200",
    thesis: "Neural Network Optimization for Edge Compu...",
    submitted: "Submitted: Oct 14, 2023",
    status: "PENDING REVIEW",
    statusColor: "bg-orange-100 text-orange-600",
    actionColor: "bg-amber-600 hover:bg-amber-700 text-white",
  },
  {
    id: 3,
    name: "Jameson Lee",
    studentId: "ID: 2024-HIST-442",
    avatar: "JL",
    avatarBg: "bg-green-200",
    thesis: "The Impact of Maritime Trade on Post-War Re...",
    submitted: "Submitted: Oct 11, 2023",
    status: "IN PROGRESS",
    statusColor: "bg-blue-100 text-blue-600",
    actionColor: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  },
  {
    id: 4,
    name: "Sarah Al-Farsi",
    studentId: "ID: 2024-BIOM-009",
    avatar: "SA",
    avatarBg: "bg-purple-200",
    thesis: "Non-Invasive Glucose Monitoring via Spectro...",
    submitted: "Submitted: Oct 09, 2023",
    status: "COMPLETED",
    statusColor: "bg-green-100 text-green-600",
    actionColor: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  },
  {
    id: 5,
    name: "Oliver Schmidt",
    studentId: "ID: 2024-ENG-221",
    avatar: "OS",
    avatarBg: "bg-gray-300",
    thesis: "Modular Bridge Systems for Rapid Disaster R...",
    submitted: "Submitted: Oct 15, 2023",
    status: "PENDING REVIEW",
    statusColor: "bg-orange-100 text-orange-600",
    actionColor: "bg-amber-600 hover:bg-amber-700 text-white",
  },
];

export default function StudentRosterTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-4 px-6 py-3 border-b border-gray-100 bg-gray-50">
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          Student Profile
        </p>
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          Project Thesis
        </p>
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          Current Status
        </p>
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">
          Actions
        </p>
      </div>

      {/* Rows */}
      {students.map((student, index) => (
        <div
          key={student.id}
          className={`grid grid-cols-4 items-center px-6 py-4 ${
            index !== students.length - 1 ? "border-b border-gray-50" : ""
          } hover:bg-gray-50/50 transition-colors`}
        >
          {/* Student Profile */}
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-gray-700 flex-shrink-0 ${student.avatarBg}`}
            >
              {student.avatar}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {student.name}
              </p>
              <p className="text-xs text-gray-400">{student.studentId}</p>
            </div>
          </div>

          {/* Thesis */}
          <div>
            <p className="text-sm text-gray-700 font-medium leading-snug">
              {student.thesis}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{student.submitted}</p>
          </div>

          {/* Status */}
          <div>
            <span
              className={`text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wide ${student.statusColor}`}
            >
              {student.status}
            </span>
          </div>

          {/* Action */}
          <div className="flex justify-end">
            <button
              className={`text-xs font-semibold px-4 py-2 rounded-xl transition-colors ${student.actionColor}`}
            >
              View Review
            </button>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
        <p className="text-xs text-gray-400">Showing 1–5 of 24 students</p>
        <div className="flex items-center gap-1">
          <button className="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 flex items-center justify-center text-xs transition">
            ‹
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-7 h-7 rounded-lg text-xs font-semibold transition ${
                page === 1
                  ? "bg-gray-900 text-white"
                  : "border border-gray-200 text-gray-500 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 flex items-center justify-center text-xs transition">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
