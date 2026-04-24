import React from "react";
import { CheckCircle, Circle } from "lucide-react";

const checklist = [
  { label: "Abstract (max 300 words) included", done: true },
  { label: "Plagiarism report generated", done: true },
  { label: "Supervisor's digital sign-off", done: false },
];

export default function SubmissionSidebar() {
  const storageUsed = 325;
  const storageTotal = 500;
  const storagePercent = Math.round((storageUsed / storageTotal) * 100);

  return (
    <div className="flex flex-col gap-4">
      {/* Ready for Submission Card */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        {/* Banner Image */}
        <div className="bg-gradient-to-br from-amber-100 to-amber-200 h-36 flex items-center justify-center">
          <div className="w-16 h-16 bg-amber-300/60 rounded-2xl flex items-center justify-center shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-amber-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        </div>

        {/* Text + Button */}
        <div className="p-4 text-center">
          <h3 className="text-base font-bold text-gray-800 mb-1">
            Ready for Submission?
          </h3>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">
            Once uploaded, the final draft will be locked for peer review.
            Ensure all citations follow the APA 7th edition format.
          </p>
          <button className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm py-2.5 rounded-xl transition">
            <CheckCircle className="w-4 h-4" />
            Upload Final Draft
          </button>
          <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-wide">
            System Status: Acceptable
          </p>
        </div>
      </div>

      {/* Project Storage */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-gray-800 rounded-sm" />
          <h4 className="text-sm font-semibold text-gray-800">
            Project Storage
          </h4>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-1.5 overflow-hidden">
          <div
            className="bg-amber-500 h-2 rounded-full transition-all"
            style={{ width: `${storagePercent}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 text-right">
          {storageUsed} MB of {storageTotal} MB used{" "}
          <span className="font-semibold text-gray-700">{storagePercent}%</span>
        </p>
      </div>

      {/* Submission Checklist */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
        <h4 className="text-sm font-semibold text-gray-800 mb-3">
          Submission Checklist
        </h4>
        <ul className="flex flex-col gap-2.5">
          {checklist.map((item, i) => (
            <li key={i} className="flex items-center gap-2.5">
              {item.done ? (
                <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
              )}
              <span
                className={`text-xs ${
                  item.done ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
