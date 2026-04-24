import React from "react";
import { FileText, FileArchive, File } from "lucide-react";

const submissions = [
  {
    id: 1,
    name: "Initial_Proposal_Draft_v2.pdf",
    date: "Oct 12, 2023",
    time: "09:45 AM",
    tag: "ARCHIVE",
    tagColor: "bg-gray-200 text-gray-600",
    icon: <FileText className="w-5 h-5 text-red-500" />,
    iconBg: "bg-red-50",
  },
  {
    id: 2,
    name: "Literature_Review_Notes.docx",
    date: "Oct 08, 2023",
    time: "02:15 PM",
    tag: "ACTIVE",
    tagColor: "bg-green-100 text-green-700",
    icon: <File className="w-5 h-5 text-blue-500" />,
    iconBg: "bg-blue-50",
  },
  {
    id: 3,
    name: "Data_Set_Source_Files.zip",
    date: "Sep 29, 2023",
    time: "11:30 AM",
    tag: "SOURCE",
    tagColor: "bg-orange-100 text-orange-600",
    icon: <FileArchive className="w-5 h-5 text-orange-500" />,
    iconBg: "bg-orange-50",
  },
];

export default function RecentSubmissions() {
  return (
    <div className="mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-800">
          Recent Submissions
        </h3>
        <button className="text-xs text-amber-600 font-medium hover:underline">
          View All History
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-2">
        {submissions.map((file) => (
          <div
            key={file.id}
            className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 hover:shadow-sm transition"
          >
            {/* Icon */}
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${file.iconBg}`}
            >
              {file.icon}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">
                {file.name}
              </p>
              <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                <span className="w-3 h-3 inline-block">🕒</span>
                {file.date} • {file.time}
              </p>
            </div>

            {/* Tag */}
            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${file.tagColor}`}
            >
              {file.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
