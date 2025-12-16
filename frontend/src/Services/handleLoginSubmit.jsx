import axios from "axios";
const handleLoginSubmit = async (loginData) =>{
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, loginData);
        return res; // Return whole response
    } catch (error) {
    return error.response.data;
    }

}
export default handleLoginSubmit;