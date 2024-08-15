import axios from "axios";

const getToken = () => {
  if (typeof window === "undefined") return null;

  const authToken = localStorage.getItem("auth-token");

  if (authToken === null) {
    return null;
  }

  return JSON.parse(authToken);
};

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
});

axiosClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      // if (response.data) response = response.data;
      return response;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
