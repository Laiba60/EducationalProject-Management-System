import React from "react";
import { ArrowRight, Pencil } from "lucide-react";

const projects = [
  {
    id: 1,
    icon: "⊕",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    tag: "IN REVIEW",
    tagColor: "bg-amber-100 text-amber-700",
    title: "Neural Architecture for Low-Latency NLP",
    description:
      "An investigation into pruning techniques for transformer-based...",
    supervisor: "Dr. Alistair Cook",
    role: "Lead Supervisor",
    avatar: "AC",
    avatarBg: "bg-gray-300",
    milestone: null,
  },
  {
    id: 2,
    icon: "🛡",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    tag: "DRAFT",
    tagColor: "bg-gray-100 text-gray-500",
    title: "Blockchain for Academic Integrity",
    description:
      "Decentralized storage of academic transcripts using Ethereum-based...",
    supervisor: "Prof. Elena Moretti",
    role: "Co-Supervisor",
    avatar: "EM",
    avatarBg: "bg-orange-300",
    milestone: null,
  },
  {
    id: 3,
    icon: "🔬",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    tag: "ACTIVE",
    tagColor: "bg-green-100 text-green-700",
    title: "Synthesizing Protein Fold Architectures",
    description:
      "Leveraging GANs to predict protein folding patterns for drug discovery...",
    supervisor: "Dr. Simon Peters",
    role: "External Mentor",
    avatar: "SP",
    avatarBg: "bg-blue-300",
    milestone: { current: 2, total: 5, percent: 40 },
  },
];

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
        >
          {/* Top Row — Icon + Tag */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${project.iconBg}`}
            >
              {project.icon}
            </div>
            <span
              className={`text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide ${project.tagColor}`}
            >
              {project.tag}
            </span>
          </div>

          {/* Title + Description */}
          <div className="mb-4">
            <h3 className="text-base font-bold text-gray-900 leading-snug mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Milestone Bar (only for ACTIVE) */}
          {project.milestone && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  Milestone {project.milestone.current}/{project.milestone.total}
                </span>
                <span className="text-[10px] font-semibold text-gray-500">
                  {project.milestone.percent}%
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-amber-500 h-1.5 rounded-full"
                  style={{ width: `${project.milestone.percent}%` }}
                />
              </div>
            </div>
          )}

          {/* Footer — Avatar + Actions */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${project.avatarBg}`}
              >
                {project.avatar}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-700">
                  {project.supervisor}
                </p>
                <p className="text-[10px] text-gray-400">{project.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition">
                <Pencil size={12} className="text-gray-400" />
              </button>
              <button className="w-7 h-7 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition">
                <ArrowRight size={12} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
