
import React from "react";
const weekOptions = [
  "Week 1", "Week 2", "Week 3", "Week 4",
  "Week 5", "Week 6", "Week 7", "Week 8",
];

const timelineEntries = [
  {
    id: 1,
    status: "CURRENT",
    statusColor: "bg-amber-500",
    badgeColor: "bg-amber-100 text-amber-700",
    date: "Oct 24, 2023",
    week: "Week 8: Prototyping Phase",
    description:
      "Successfully integrated the neural curatorial engine with the front-end dashboard. Most of the week was spent on refining the data visualization layers and ensuring the 'Academic Curator' logic follows the editorial guidelines established in the thesis.",
    supervisor: "Dr. Alistair Vance",
    role: "Supervisor",
    quote:
      "Excellent progress on the visual layers. Let's look closer at the latency of the curatorial engine during our next sync. Make sure you document the decision-making process for the asymmetric layout.",
    tags: [],
  },
  {
    id: 2,
    status: "ARCHIVED",
    statusColor: "bg-gray-300",
    badgeColor: "bg-gray-100 text-gray-500",
    date: "Oct 17, 2023",
    week: "Week 7: Data Architecture",
    description:
      "Defined the schema for the project database. Focused on building a robust tagging system that allows the Curator to categorize project entries by complexity and field of study.",
    supervisor: "Dr. Alistair Vance",
    role: null,
    quote:
      "The schema looks solid. Ensure that you've accounted for edge cases in the tagging hierarchy.",
    tags: [],
  },
  {
    id: 3,
    status: "ARCHIVED",
    statusColor: "bg-gray-300",
    badgeColor: "bg-gray-100 text-gray-500",
    date: "Oct 10, 2023",
    week: "Week 6: Literature Review",
    description:
      "Finalized the analysis of current academic management systems. Identified key gaps in user engagement and editorial presentation which this project seeks to address.",
    supervisor: null,
    role: null,
    quote: null,
    tags: ["REVIEW_V1.PDF", "BIBLIOGRAPHY.XLSX"],
  },
];
 export default function TimelineEntry({ entry }) {
  return (
    <div className="relative pl-8">
      {/* Dot */}
      <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-white shadow ${entry.statusColor}`} />

      {/* Card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full tracking-widest ${entry.badgeColor}`}>
            {entry.status}
          </span>
          <span className="text-xs text-gray-400">{entry.date}</span>
        </div>

        {/* Week Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2">{entry.week}</h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {entry.description}
        </p>

        {/* Supervisor Quote */}
        {entry.quote && (
          <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-gray-200">
            {entry.supervisor && (
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-[10px] font-bold text-amber-700 flex-shrink-0">
                  {entry.supervisor.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-800">
                    {entry.supervisor}
                  </span>
                  {entry.role && (
                    <span className="text-xs text-amber-600 ml-1">
                      • {entry.role}
                    </span>
                  )}
                </div>
              </div>
            )}
            <p className="text-xs text-gray-500 italic leading-relaxed">
              "{entry.quote}"
            </p>
          </div>
        )}

        {/* Tags */}
        {entry.tags && entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}