import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateProposalPage from "./pages/Student/CreateProposalPage";
import UploadFiles from "./pages/Student/UploadFiles";  
import MyProjects from "./pages/Student/MyProjects"; 

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
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/student/create-proposal" element={<CreateProposalPage />} />
      <Route path="/student/upload-files" element={<UploadFiles />} /> 
      <Route path="/student/projects" element={<MyProjects />} /> 
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;