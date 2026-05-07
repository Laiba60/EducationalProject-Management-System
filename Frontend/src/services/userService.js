import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

// ✅ GET ALL
export const fetchUsers = async () => {
  const res = await axios.get(`${BASE_URL}/users`, getAuthHeaders());
  return res.data;
};

// ✅ CREATE
export const createUser = async (formData) => {
  const res = await axios.post(`${BASE_URL}/users`, formData, getAuthHeaders());
  return res.data;
};

// ✅ UPDATE
export const updateUser = async (id, formData) => {
  const res = await axios.put(`${BASE_URL}/users/${id}`, formData, getAuthHeaders());
  return res.data;
};

// ✅ DELETE
export const deleteUser = async (id) => {
  const res = await axios.delete(`${BASE_URL}/users/${id}`, getAuthHeaders());
  return res.data;
};