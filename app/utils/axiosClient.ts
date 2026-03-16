import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_URL,
    withCredentials: true, // gửi cookie
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;