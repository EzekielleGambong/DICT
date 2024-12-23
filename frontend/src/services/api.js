import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token && !req.url.includes("/users/signup") && !req.url.includes("/users/login")) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  });
  

export const loginUser = (formData) => API.post("/users/login", formData);
export const signupUser = (formData) => API.post("/users/signup", formData);
export const fetchProfile = () => API.get("/users/profile");
export const fetchAdminData = () => API.get("/users/admin-data");

export default API;
