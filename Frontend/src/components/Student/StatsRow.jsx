export default function StatsRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

      {/* Total Projects */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <p className="text-[10px] font-bold tracking-[1.5px] text-gray-400 uppercase mb-3">
          Total Projects
        </p>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[44px] font-extrabold text-[#2e3132] leading-none">2</p>
            <p className="text-[12px] text-gray-400 mt-2 flex items-center gap-1">
              <span className="text-[#bb8c4b]">↗</span>
              <span className="text-[#bb8c4b] font-semibold">1 new</span>
              <span>this semester</span>
            </p>
          </div>
          <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center text-[#bb8c4b]">
            {/* Person/graduate icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Current Status */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <p className="text-[10px] font-bold tracking-[1.5px] text-gray-400 uppercase mb-3">
          Current Status
        </p>
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse flex-shrink-0" />
              <span className="text-[12px] font-bold text-amber-600 tracking-wide uppercase">
                Pending Review
              </span>
            </div>
            <p className="text-[12px] text-gray-400">
              Estimated response in{" "}
              <span className="text-[#2e3132] font-semibold">3 days</span>
            </p>
          </div>
          <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center text-[#bb8c4b]">
            {/* Hourglass icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 3h14" />
              <path d="M5 21h14" />
              <path d="M5 3l7 9 7-9" />
              <path d="M5 21l7-9 7 9" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mastering Thesis Promo Card */}
      <div className="bg-[#bb8c4b] rounded-xl p-5 shadow-sm relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10" />
        <div className="absolute -right-2 bottom-2 w-14 h-14 rounded-full bg-white/5" />

        <p className="text-white font-extrabold text-[15px] leading-snug mb-1.5 relative z-10">
          Mastering Your <br />Thesis Proposal
        </p>
        <p className="text-white/70 text-[11px] mb-4 relative z-10">
          New resources available in the library.
        </p>
        <button className="bg-white text-[#bb8c4b] font-bold text-[11px] px-3.5 py-1.5 rounded-md hover:bg-gray-50 transition-colors relative z-10">
          View Guide
        </button>
      </div>
    </div>
  );
}
