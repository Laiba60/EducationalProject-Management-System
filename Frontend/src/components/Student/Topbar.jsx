export default function Topbar({ setSidebarOpen }) {
  return (
    <header className="bg-white px-5 md:px-8 py-3.5 flex items-center justify-between border-b border-gray-100 flex-shrink-0 gap-3">

      {/* Left: Hamburger + Search */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-[#2e3132] p-1 flex-shrink-0"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Search */}
        <div className="relative w-full max-w-[260px]">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            placeholder="Search projects..."
            className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-500 bg-gray-50 outline-none focus:border-[#bb8c4b] transition-colors placeholder-gray-400"
          />
        </div>
      </div>

      {/* Right: Icons + User */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {/* Bell */}
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        {/* Help */}
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200 hidden sm:block" />

        {/* User Info */}
        <div className="hidden sm:flex flex-col items-end">
          <p className="text-[13px] font-semibold text-[#2e3132] leading-tight">Alex Sterling</p>
          <p className="text-[10px] text-gray-400 tracking-wide uppercase">Final Year Student</p>
        </div>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-[#2e3132] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 border-2 border-[#bb8c4b]">
          A
        </div>
      </div>
    </header>
  );
}
