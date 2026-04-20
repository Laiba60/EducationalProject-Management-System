import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Simple auth check helper
const isAuthenticated = () => {
  return !!(localStorage.getItem("token") || sessionStorage.getItem("token"));
};

// Protected Route — redirect to login if not authenticated
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" replace />;
};

// Public Route — redirect to dashboard if already logged in
const PublicRoute = ({ children }) => {
  return !isAuthenticated() ? children : <Navigate to="/dashboard" replace />;
};

const App = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

      {/* Protected route placeholder */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-[#2e3132] mb-2">Welcome to FYP Curator!</h1>
                <p className="text-[#5d5c70] mb-6">You are successfully logged in.</p>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("user");
                    window.location.href = "/";
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-[#7e571a] to-[#bb8c4b] text-white font-bold rounded-xl"
                >
                  Logout
                </button>
              </div>
            </div>
          </PrivateRoute>
        }
      />

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
