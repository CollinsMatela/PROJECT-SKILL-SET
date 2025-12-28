import axios from "axios";

const handlePosting = async (postingDetails) =>{
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/posting`, postingDetails);
        return res;
    } catch (error) {
        console.log(error);
    }
}
export default handlePosting;   