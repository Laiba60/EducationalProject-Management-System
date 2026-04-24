import React from "react";
import { useState } from "react";
import Sidebar from "../../components/Student/Sidebar";
import Topbar from "../../components/Student/Topbar";
import PostWeeklyUpdate from "../../components/Student/PostWeeklyUpdate";
import MilestoneHealth from "../../components/Student/MilestoneHealth";
import TimelineEntry from "../../components/Student/TimelineEntry"; 
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

export default function ProgressTracking() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Topbar */}
        <Topbar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto px-6 py-8">

          {/* Page Heading */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Progress Tracking
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Final Year Project:{" "}
              <span className="text-amber-600 font-medium italic">
                AI-Driven Curatorial Logic in Digital Museums
              </span>
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6 items-start">

            {/* ── Left Column — Form + Milestone ── */}
            <div className="w-full lg:w-72 flex-shrink-0">
              <PostWeeklyUpdate />
              <MilestoneHealth />
            </div>

            {/* ── Right Column — Timeline ── */}
            <div className="flex-1">
              {/* Vertical line */}
              <div className="relative">
                <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gray-200" />

                <div className="flex flex-col gap-6">
                  {timelineEntries.map((entry) => (
                    <TimelineEntry key={entry.id} entry={entry} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
