import React from "react";
import { Upload, CheckCircle, AlertTriangle, Users } from "lucide-react";

const activities = [
  {
    icon: Upload,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    text: (
      <>
        <span className="font-semibold">Dr. Aris Thorne</span> uploaded:{" "}
        <span className="text-[#b8860b] font-medium italic">
          "Quantum Cryptography in IoT"
        </span>
      </>
    ),
    time: "3 MINUTES AGO",
  },
  {
    icon: CheckCircle,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    text: (
      <>
        <span className="font-semibold">System Audit</span> completed for{" "}
        <span className="font-semibold">Computer Science</span>
      </>
    ),
    time: "45 MINUTES AGO",
  },
  {
    icon: AlertTriangle,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    text: (
      <>
        <span className="font-semibold">Quota Alert:</span>{" "}
        <span className="font-semibold">Prof. Sarah Jenkins</span> reached max limit.
      </>
    ),
    time: "1 HOUR AGO",
  },
  {
    icon: Users,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    text: (
      <>
        <span className="font-semibold">12 Students</span> bulk imported via CSV.
      </>
    ),
    time: "2 HOURS AGO",
  },
];

export default function SystemActivity() {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">System Activity</h3>
        <button className="text-xs text-[#b8860b] font-semibold hover:underline">
          View All
        </button>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4">
        {activities.map(({ icon: Icon, iconBg, iconColor, text, time }, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className={`w-7 h-7 rounded-full ${iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}
            >
              <Icon size={13} className={iconColor} />
            </div>
            <div>
              <p className="text-xs text-gray-600 leading-snug">{text}</p>
              <p className="text-[9px] text-gray-400 mt-0.5 tracking-widest">{time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}