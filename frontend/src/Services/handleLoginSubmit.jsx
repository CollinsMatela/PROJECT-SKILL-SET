import axios from "axios";
const handleLoginSubmit = async (loginData) =>{
    try {
        console.log("Sending login request to:", `${import.meta.env.VITE_API_URL}/login`);

        const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, loginData);
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

    

}
export default handleLoginSubmit;