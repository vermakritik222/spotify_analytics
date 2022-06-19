import axios from "axios";
const api = axios.create({
  baseURL: "https://api.spotify.com",
  //   withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token").split(`"`)[1]}`,
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const getMe = () => {
  return api.get("/v1/me");
};

export default api;
