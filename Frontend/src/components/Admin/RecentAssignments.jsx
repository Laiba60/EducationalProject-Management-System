import React from "react";
import { CheckCircle2, ArrowRightLeft } from "lucide-react";

const assignments = [
  {
    id: 1,
    time: "2 MIN AGO",
    student: "James Madison",
    supervisor: "Dr. Sarah Jenkins",
  },
  {
    id: 2,
    time: "15 MIN AGO",
    student: "Maria Reynolds",
    supervisor: "Prof. Robert Thorne",
  },
  {
    id: 3,
    time: "1 HR AGO",
    student: "Thomas Jefferson",
    supervisor: "Dr. Kevin Page",
  },
];

export default function RecentAssignments() {
  return (
    <div className="mt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Recent Assignments</h2>
          <p className="text-xs text-gray-400 mt-0.5">The latest academic pairings verified by the curator.</p>
        </div>
        <button className="text-xs font-semibold text-amber-700 hover:text-amber-900 tracking-wide uppercase transition-colors">
          View All Records
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {assignments.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group"
          >
            {/* Top row */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center shadow-sm">
                <CheckCircle2 size={16} className="text-white" />
              </div>
              <span className="text-xs text-gray-400 font-medium">{item.time}</span>
            </div>

            {/* Student */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-0.5">Student</p>
              <p className="text-base font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                {item.student}
              </p>
            </div>

            {/* Supervisor */}
            <div className="mt-3 flex items-center gap-1.5 text-sm text-gray-500">
              <ArrowRightLeft size={13} className="text-amber-500 shrink-0" />
              <span className="font-medium text-gray-700">{item.supervisor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
