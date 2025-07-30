import axios from "axios";

const axiosInstance = axios.create({
baseURL:"https://myportfolio-backend-q6na.onrender.com/api/v1",
headers : 
{
    "Content-Type" : "application/json",
},

});

axiosInstance.interceptors.request.use(
  (config) => {
   
    return config;
  },
  (error) => {
   
      console.error("Server error");
  
    return Promise.reject(error);
  }
);

export default axiosInstance;
