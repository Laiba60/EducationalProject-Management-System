import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateProposalPage from "./pages/Student/CreateProposalPage";
import UploadFiles from "./pages/Student/UploadFiles";
import MyProjects from "./pages/Student/MyProjects";
import ProgressPage from "./pages/Student/ProgressPage";
import StudentList from "./pages/Teacher/StudentList";
import ProjectReview from "./pages/Teacher/ProjectReview";
import ManageUsers from "./pages/admin/ManageUsers";
import AssignTeacher from "./pages/admin/AssignTeacher";
import AdminProjects from "./pages/admin/AdminProjects";

// ✅ Token check
const isAuthenticated = () => {
  return !!(localStorage.getItem("token") || sessionStorage.getItem("token"));
};

// ✅ Role check
const getUserRole = () => {
  const user = localStorage.getItem("user") || sessionStorage.getItem("user");
  return user ? JSON.parse(user).role : null;
};

// ✅ Login/Register sirf tab dikhao jab logged out ho
const PublicRoute = ({ children }) => {
  if (!isAuthenticated()) return children;

  // Agar logged in hai toh role ke hisaab se bhejo
  const role = getUserRole();
  if (role === 'Admin') return <Navigate to="/admin/dashboard" replace />;
  if (role === 'Teacher') return <Navigate to="/teacher/dashboard" replace />;
  return <Navigate to="/student/dashboard" replace />;
};

// ✅ Protected Route — sirf logged in users ke liye
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Routes>

      {/* ✅ Public Routes */}
      <Route path="/" element={<Navigate to="/register" replace />} />
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />

      {/* ✅ Admin Routes */}
      <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/assign" element={<ProtectedRoute><AssignTeacher /></ProtectedRoute>} />
      <Route path="/manage-users" element={<ProtectedRoute><ManageUsers /></ProtectedRoute>} />
      <Route
  path="/admin/projects"
  element={<ProtectedRoute><AdminProjects /></ProtectedRoute>}
/>

      {/* ✅ Teacher Routes */}
      <Route path="/teacher/dashboard" element={<ProtectedRoute><TeacherDashboard /></ProtectedRoute>} />
      <Route path="/teacher/rosters" element={<ProtectedRoute><StudentList /></ProtectedRoute>} />
      <Route path="/teacher/review" element={<ProtectedRoute><ProjectReview /></ProtectedRoute>} />

      {/* ✅ Student Routes */}
      <Route path="/student/dashboard" element={<ProtectedRoute><MyProjects /></ProtectedRoute>} />
      <Route path="/student/create-proposal" element={<ProtectedRoute><CreateProposalPage /></ProtectedRoute>} />
      <Route path="/student/upload-files" element={<ProtectedRoute><UploadFiles /></ProtectedRoute>} />
      <Route path="/student/projects" element={<ProtectedRoute><MyProjects /></ProtectedRoute>} />
      <Route path="/student/progress" element={<ProtectedRoute><ProgressPage /></ProtectedRoute>} />

      {/* ✅ Koi bhi unknown route → Register */}
      <Route path="*" element={<Navigate to="/register" replace />} />

    </Routes>
  );
};

export default App;