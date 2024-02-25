import axios from "axios";

export const adminToken = localStorage.getItem("adminToken");
export const username = localStorage.getItem("username");
export const errorMessage = "Something went wrong .. please try again later";
export const paginatorSize = 5;

const axiosInstance = axios.create({
  // withCredentials: true,
  headers: {
    Authorization: `Bearer ${adminToken}`,
  },
});

// Add a response interceptor to handle 401 responses
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirect to the login page when a 401 response is received
      window.location.href = '/';
    } else if (error.response && error.response.status === 422) {
      return (error?.response)
    } else if (error.response && error.response.status === 500) {
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
