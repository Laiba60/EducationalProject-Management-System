import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatsRow from "./components/StatsRow";
import RecentProgress from "./components/RecentProgress";
import RightPanel from "./components/RightPanel";

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f4f5f7] overflow-hidden">

      {/* Sidebar */}
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Area */}
      <div className="flex flex-col flex-1 overflow-hidden min-w-0">

        {/* Topbar */}
        <Topbar setSidebarOpen={setSidebarOpen} />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-5 md:p-7">

          {/* Welcome Heading */}
          <div className="mb-6">
            <h1 className="text-[26px] md:text-[30px] font-extrabold text-[#2e3132] mb-1">
              Student Dashboard
            </h1>
            <p className="text-gray-500 text-[13px]">
              Welcome back, Alex. Here is the progress of your final year academic research.
            </p>
          </div>

          {/* Stats Row (3 cards) */}
          <StatsRow />

          {/* Bottom: Recent Progress + Right Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5">
            <RecentProgress />
            <RightPanel />
          </div>

        </main>
      </div>
    </div>
  );
}
