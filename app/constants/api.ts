const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

export const API = {
    AUTH: {
        LOGIN: `${API_BASE_URL}/auth/login`,
        REGISTER: `${API_BASE_URL}/auth/register`,
        ME: `${API_BASE_URL}/auth/me`,
        LOGOUT: `${API_BASE_URL}/auth/logout`,
    },

    USER: {
        PROFILE: `${API_BASE_URL}/users/profile`,
    },
};

export default API;
