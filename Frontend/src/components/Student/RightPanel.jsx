const deadlines = [
  {
    month: "OCT",
    day: "24",
    title: "Draft Submission",
    subtitle: "Final Year Project I",
    color: "bg-[#bb8c4b]",
  },
  {
    month: "NOV",
    day: "02",
    title: "Poster Presentation",
    subtitle: "Main Atrium",
    color: "bg-[#3d4142]",
  },
];

export default function RightPanel() {
  return (
    <div className="flex flex-col gap-5">

      {/* Upcoming Deadlines */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <p className="text-[10px] font-bold tracking-[2px] text-gray-400 uppercase mb-4">
          Upcoming Deadlines
        </p>

        <div className="flex flex-col gap-3">
          {deadlines.map((d) => (
            <div key={d.title} className="flex items-center gap-3">
              {/* Date badge */}
              <div className={`${d.color} rounded-lg w-11 h-11 flex flex-col items-center justify-center flex-shrink-0`}>
                <span className="text-white text-[8px] font-bold tracking-widest uppercase leading-none">
                  {d.month}
                </span>
                <span className="text-white text-[16px] font-extrabold leading-tight">
                  {d.day}
                </span>
              </div>

              {/* Info */}
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-[#2e3132] leading-tight">{d.title}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{d.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 relative overflow-hidden">
        {/* Gold left border accent */}
        <div className="absolute left-0 top-4 bottom-4 w-[3px] bg-[#bb8c4b] rounded-full" />

        <div className="pl-4">
          <p className="text-[13px] text-gray-500 leading-relaxed italic mb-4">
            "The strength of a project lies not in the complexity of its design, but in
            the clarity of its research methodology."
          </p>

          <div className="flex items-center gap-2.5">
            {/* Avatar */}
            <div className="w-7 h-7 rounded-full bg-[#2e3132] flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bb8c4b" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#2e3132] leading-tight">Dr. Aris</p>
              <p className="text-[10px] text-gray-400">Head of Research</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
