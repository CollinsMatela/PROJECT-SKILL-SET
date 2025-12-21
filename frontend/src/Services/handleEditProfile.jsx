import axios from "axios";

const handleEditProfile =  async (ProfileInformations) =>{

    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/Profile/Edit-Profile`, ProfileInformations);
        return res;
    } catch (error) {
         if (error.response) {
        console.log("Server responded with:", error.response.data);
        } else if (error.request) {
        console.log("No response received:", error.request);
        } else {
        console.log("Error setting up request:", error.message);
        }
    }
    
}
export default handleEditProfile;
