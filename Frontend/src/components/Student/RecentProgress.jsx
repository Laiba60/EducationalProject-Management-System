const projects = [
  {
    id: 1,
    title: "Quantum Architecture Synthesis",
    subtitle: "Submitted: Chapter 2 – Methodology",
    time: "2 HOURS AGO",
    progress: 72,
    imgBg: "#1a1a2e",
    imgColor: "#bb8c4b",
  },
  {
    id: 2,
    title: "Neural Path-finding in Urban Planning",
    subtitle: "Supervisor Dr. Aris commented on Abstract",
    time: "YESTERDAY",
    progress: 38,
    imgBg: "#0f2027",
    imgColor: "#7ec8c8",
  },
];

function ProjectAvatar({ imgBg, imgColor }) {
  return (
    <div
      className="w-[52px] h-[52px] rounded-lg flex-shrink-0 flex items-center justify-center"
      style={{ backgroundColor: imgBg }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={imgColor} strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    </div>
  );
}

export default function RecentProgress() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100">
        <h2 className="text-[15px] font-bold text-[#2e3132]">Recent Progress</h2>
        <button className="text-[#bb8c4b] text-[12px] font-semibold hover:underline whitespace-nowrap">
          View All Updates
        </button>
      </div>

      {/* Project Items */}
      <div className="divide-y divide-gray-50">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-start gap-4 px-5 py-4 hover:bg-gray-50/60 transition-colors cursor-pointer"
          >
            <ProjectAvatar imgBg={project.imgBg} imgColor={project.imgColor} />

            <div className="flex-1 min-w-0">
              {/* Title row */}
              <div className="flex items-start justify-between gap-2 mb-1">
                <p className="text-[14px] font-semibold text-[#2e3132] leading-snug">{project.title}</p>
                <span className="text-[10px] font-semibold text-gray-400 tracking-wide whitespace-nowrap flex-shrink-0 mt-0.5">
                  {project.time}
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-[12px] text-gray-400 mb-3 truncate">{project.subtitle}</p>

              {/* Progress bar */}
              <div className="h-1.5 bg-gray-100 rounded-full w-full max-w-[280px]">
                <div
                  className="h-full rounded-full bg-[#bb8c4b]"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
