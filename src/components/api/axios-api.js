import axiosInstance from "./axios-uitls";


export const sendContactData = async (payload) => {
    const response = await axiosInstance.post("contact", payload);
    return response
        
    }


