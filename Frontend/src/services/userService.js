import API from "./api";

export const fetchUsers = () => API.get("/users");
export const createUser = (data) => API.post("/users", data);