import React, { useState } from "react";

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");

  const navItems = [
    { name: "Dashboard", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    )},
    { name: "Projects", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 7h18M3 12h18M3 17h18"/>
      </svg>
    )},
    { name: "Users", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0-3-3.85"/>
      </svg>
    )},
    { name: "Assign", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    )},
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f8f9fa", overflow: "hidden" }}>

      {/* Sidebar */}
      <div style={{
        width: "200px", minWidth: "200px", backgroundColor: "#2e3132", display: "flex",
        flexDirection: "column", padding: "0", color: "#fff", position: "relative"
      }}>
        {/* Logo */}
        <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid #3d4142" }}>
          <div style={{ color: "#bb8c4b", fontWeight: "800", fontSize: "18px", letterSpacing: "0.5px" }}>FYP Curator</div>
          <div style={{ color: "#888", fontSize: "10px", letterSpacing: "1.5px", marginTop: "2px", textTransform: "uppercase" }}>Management Portal</div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "16px 0" }}>
          {navItems.map((item) => (
            <div
              key={item.name}
              onClick={() => setActiveNav(item.name)}
              style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "11px 20px", cursor: "pointer", fontSize: "14px", fontWeight: "500",
                color: activeNav === item.name ? "#fff" : "#9a9b9e",
                backgroundColor: activeNav === item.name ? "#3d4142" : "transparent",
                borderLeft: activeNav === item.name ? "3px solid #bb8c4b" : "3px solid transparent",
                transition: "all 0.2s",
              }}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </nav>

        {/* New Proposal Button */}
        <div style={{ padding: "16px 20px" }}>
          <button style={{
            width: "100%", padding: "11px", backgroundColor: "#bb8c4b",
            color: "#fff", border: "none", borderRadius: "8px", fontWeight: "700",
            fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center",
            justifyContent: "center", gap: "6px"
          }}>
            <span style={{ fontSize: "18px", lineHeight: 1 }}>+</span> New Proposal
          </button>
        </div>

        {/* Logout */}
        <div
          onClick={handleLogout}
          style={{
            display: "flex", alignItems: "center", gap: "10px", padding: "16px 20px",
            color: "#9a9b9e", cursor: "pointer", fontSize: "14px",
            borderTop: "1px solid #3d4142", transition: "color 0.2s"
          }}
          onMouseOver={e => e.currentTarget.style.color = "#fff"}
          onMouseOut={e => e.currentTarget.style.color = "#9a9b9e"}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Logout
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Top Bar */}
        <div style={{
          backgroundColor: "#fff", padding: "14px 28px", display: "flex",
          alignItems: "center", justifyContent: "space-between",
          borderBottom: "1px solid #e8e9ea", flexShrink: 0
        }}>
          {/* Search */}
          <div style={{ position: "relative", width: "280px" }}>
            <svg style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#aaa" }}
              width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input placeholder="Search students or projects..." style={{
              width: "100%", padding: "8px 12px 8px 36px", border: "1px solid #e0e0e0",
              borderRadius: "8px", fontSize: "13px", color: "#555", outline: "none",
              backgroundColor: "#fafafa", boxSizing: "border-box"
            }} />
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ color: "#bb8c4b", fontWeight: "600", fontSize: "14px" }}>Teacher Dashboard</span>
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#bb8c4b",
              display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
              fontWeight: "700", fontSize: "14px"
            }}>C</div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px" }}>

          {/* Welcome */}
          <div style={{ marginBottom: "24px" }}>
            <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#2e3132", margin: "0 0 6px" }}>Welcome, Curator</h1>
            <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>
              Review and oversee the final year project lifecycle. You have new submissions awaiting your professional feedback.
            </p>
          </div>

          {/* Stats Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.2fr", gap: "20px", marginBottom: "28px" }}>

            {/* Assigned Students */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "20px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width: "36px", height: "36px", backgroundColor: "#f5f0e8", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#bb8c4b" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <span style={{ color: "#6b7280", fontSize: "13px" }}>Academic Year 24/25</span>
              </div>
              <div style={{ fontSize: "13px", color: "#6b7280", marginBottom: "4px" }}>Assigned Students</div>
              <div style={{ fontSize: "36px", fontWeight: "800", color: "#2e3132", lineHeight: 1 }}>12</div>
              <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "10px" }}>↗ 2 more than previous semester</div>
            </div>

            {/* Pending Approvals */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "20px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                <div style={{ width: "36px", height: "36px", backgroundColor: "#fef3f2", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <span style={{ fontSize: "11px", color: "#e74c3c", fontWeight: "600", backgroundColor: "#fef3f2", padding: "3px 8px", borderRadius: "20px" }}>Requires Attention</span>
              </div>
              <div style={{ fontSize: "13px", color: "#6b7280", marginBottom: "4px" }}>Pending Approvals</div>
              <div style={{ fontSize: "36px", fontWeight: "800", color: "#2e3132", lineHeight: 1 }}>5</div>
              <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "10px" }}>● Due within 48 hours</div>
            </div>

            {/* Quick Actions */}
            <div style={{ backgroundColor: "#7e571a", borderRadius: "12px", padding: "20px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
              <div style={{ fontSize: "14px", fontWeight: "700", color: "#fff", marginBottom: "14px" }}>Quick Actions</div>
              {[
                { label: "Review Projects", icon: "📋" },
                { label: "Give Feedback", icon: "💬" },
                { label: "Schedule Viva", icon: "📅" },
              ].map((action) => (
                <div key={action.label} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  backgroundColor: "rgba(255,255,255,0.12)", borderRadius: "8px",
                  padding: "9px 12px", marginBottom: "8px", cursor: "pointer",
                  color: "#fff", fontSize: "13px", fontWeight: "500",
                  transition: "background 0.2s"
                }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)"}
                  onMouseOut={e => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)"}
                >
                  <span>{action.label}</span>
                  <span>›</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "20px 24px", marginBottom: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontWeight: "700", fontSize: "16px", color: "#2e3132" }}>Recent Student Activities</span>
              <span style={{ color: "#bb8c4b", fontSize: "13px", cursor: "pointer", fontWeight: "500" }}>View All Activity ↗</span>
            </div>

            {[
              { name: "Amara Chen", time: "2 hours ago", desc: 'Uploaded first draft of "Neural Architecture Search for IoT Devices"', tag: "NEW SUBMISSION", tagColor: "#bb8c4b", tagBg: "#f5f0e8", avatar: "AC" },
              { name: "Julian Thorne", time: "5 hours ago", desc: "Modified project methodology based on previous feedback", tag: "UPDATED", tagColor: "#3b82f6", tagBg: "#eff6ff", avatar: "JT" },
              { name: "Sasha Varma", time: "Yesterday", desc: "Requested urgent meeting regarding hardware procurement delay", tag: "ACTION REQUIRED", tagColor: "#e74c3c", tagBg: "#fef3f2", avatar: "SV", urgent: true },
            ].map((item) => (
              <div key={item.name} style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "14px 0", borderBottom: "1px solid #f3f4f6",
                borderLeft: item.urgent ? "3px solid #e74c3c" : "3px solid transparent",
                paddingLeft: item.urgent ? "12px" : "0"
              }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#e8e0d4",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: "700", fontSize: "13px", color: "#7e571a", flexShrink: 0
                }}>{item.avatar}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "600", fontSize: "14px", color: "#2e3132" }}>{item.name}</div>
                  <div style={{ fontSize: "13px", color: "#6b7280", marginTop: "2px" }}>{item.desc}</div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "4px" }}>{item.time}</div>
                  <span style={{
                    fontSize: "10px", fontWeight: "700", padding: "3px 8px", borderRadius: "20px",
                    color: item.tagColor, backgroundColor: item.tagBg, letterSpacing: "0.5px"
                  }}>{item.tag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

            {/* Curator's Insights */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "20px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
              <div style={{ fontWeight: "700", fontSize: "15px", color: "#2e3132", marginBottom: "16px" }}>✦ Curator's Insights</div>
              <div style={{ display: "flex", gap: "32px" }}>
                <div>
                  <div style={{ fontSize: "12px", color: "#bb8c4b", fontWeight: "600", marginBottom: "4px" }}>Completion Rate</div>
                  <div style={{ fontSize: "28px", fontWeight: "800", color: "#2e3132" }}>65% <span style={{ fontSize: "13px", color: "#9ca3af", fontWeight: "400" }}>On schedule</span></div>
                  <div style={{ marginTop: "8px", height: "6px", backgroundColor: "#f0ebe3", borderRadius: "3px", width: "140px" }}>
                    <div style={{ width: "65%", height: "100%", backgroundColor: "#bb8c4b", borderRadius: "3px" }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "12px", color: "#bb8c4b", fontWeight: "600", marginBottom: "4px" }}>Submission Intensity</div>
                  <div style={{ fontSize: "24px", fontWeight: "800", color: "#2e3132" }}>High <span style={{ fontSize: "12px", color: "#9ca3af", fontWeight: "400" }}>Peak deadline week</span></div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", marginTop: "8px", height: "32px" }}>
                    {[60, 80, 50, 90, 70, 100, 85].map((h, i) => (
                      <div key={i} style={{ width: "10px", height: `${h * 0.32}px`, backgroundColor: i === 5 ? "#bb8c4b" : "#e8e0d4", borderRadius: "2px" }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Thesis Repository */}
            <div style={{ backgroundColor: "#f0ebe3", borderRadius: "12px", padding: "20px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.07)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontWeight: "700", fontSize: "15px", color: "#2e3132", marginBottom: "8px" }}>Thesis Repository</div>
                <div style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.5" }}>
                  Access the digital library of all past distinguished final year projects for reference.
                </div>
                <div style={{ marginTop: "14px", color: "#bb8c4b", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>
                  Enter Archives →
                </div>
              </div>
              <div style={{ textAlign: "right", marginTop: "16px" }}>
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#c4a882" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
