import axios from 'axios';

const URL = "http://localhost:8000";

export const authenticateSignup = async (data) => {
    try {
        const response = await axios.post(`${URL}/signup`, data);
        return response.data; // Return the response data directly
    } catch (error) {
        console.error("Error while calling signup API:", error); // Log error for debugging
        throw error; // Re-throw the error to handle it in the component
    }
};
