import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

// Helper — har request mein token lagao
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

// ✅ GET ALL USERS
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("fetchUsers error:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ CREATE USER
export const createUser = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/users`,
      formData,
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("createUser error:", error.response?.data || error.message);
    throw error;
  }
};