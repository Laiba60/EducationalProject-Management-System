import React from "react";
import { Users, FolderOpen, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: Users,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    badge: "+12%",
    badgeColor: "text-green-500",
    label: "TOTAL USERS",
    value: "450",
  },
  {
    icon: FolderOpen,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    badge: "Active",
    badgeColor: "text-green-500",
    label: "TOTAL PROJECTS",
    value: "120",
  },
  {
    icon: GraduationCap,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-500",
    badge: "84% Capacity",
    badgeColor: "text-gray-500",
    label: "ACTIVE TEACHERS",
    value: "25",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map(({ icon: Icon, iconBg, iconColor, badge, badgeColor, label, value }) => (
        <div key={label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-3">
            <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center`}>
              <Icon size={16} className={iconColor} />
            </div>
            <span className={`text-[10px] font-semibold ${badgeColor}`}>{badge}</span>
          </div>
          <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">{label}</p>
          <p className="text-3xl font-bold text-gray-800 mt-0.5">{value}</p>
        </div>
      ))}
    </div>
  );
}
