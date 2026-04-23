import React from "react";
import { CheckCircle2, Calendar } from "lucide-react";

const guidelines = [
  {
    icon: CheckCircle2,
    color: "text-amber-400",
    text: "Ensure the proposal is between 500–1000 words.",
  },
  {
    icon: Calendar,
    color: "text-amber-400",
    text: "Deadline for Fall 2024 is October 15th.",
  },
];

export default function SubmissionGuidelines() {
  return (
    <div className="bg-[#2a2a2a] rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-white mb-4">Submission Guidelines</h3>
      <ul className="flex flex-col gap-3">
        {guidelines.map(({ icon: Icon, color, text }, i) => (
          <li key={i} className="flex items-start gap-3">
            <Icon size={16} className={`${color} mt-0.5 shrink-0`} />
            <p className="text-xs text-gray-300 leading-relaxed">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
