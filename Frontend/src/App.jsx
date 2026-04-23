import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard"; 
import CreateProposalPage from "./pages/Student/CreateProposalPage";

const isAuthenticated = () => {
  return !!(localStorage.getItem("token") || sessionStorage.getItem("token"));
};

const PublicRoute = ({ children }) => {
  return !isAuthenticated() ? children : <Navigate to="/dashboard" replace />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
      <Route path="/dashboard" element={<TeacherDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} /> {/* ✅ Uppercase Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
       <Route path="/student/create-proposal" element={<CreateProposalPage />} />
    </Routes>
  );
};

export default App;