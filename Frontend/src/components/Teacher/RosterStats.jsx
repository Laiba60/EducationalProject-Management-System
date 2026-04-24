import React from "react";

const stats = [
  {
    id: 1,
    iconBg: "bg-blue-50",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    label: "Batch Progress",
    value: "64%",
    sub: "+12% from last week",
    subColor: "text-green-500",
  },
  {
    id: 2,
    iconBg: "bg-amber-50",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: "Final Deadline",
    value: "Dec 15",
    sub: "62 days remaining",
    subColor: "text-gray-400",
  },
  {
    id: 3,
    iconBg: "bg-red-50",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    label: "Urgent Actions",
    value: "04",
    sub: "Milestone 2 reports due",
    subColor: "text-red-400",
  },
];

export default function RosterStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-4"
        >
          {/* Icon */}
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${stat.iconBg}`}
          >
            {stat.icon}
          </div>

          {/* Text */}
          <div>
            <p className="text-xs text-gray-400 font-medium mb-0.5">
              {stat.label}
            </p>
            <p className="text-2xl font-bold text-gray-900 leading-tight">
              {stat.value}
            </p>
            <p className={`text-[11px] font-medium mt-0.5 ${stat.subColor}`}>
              {stat.sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
