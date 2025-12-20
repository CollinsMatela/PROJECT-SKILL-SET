import axios from "axios";

const handleEditProfile =  async (ProfileInformations) =>{

    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/Profile/Edit-Profile`, ProfileInformations);
        return res;
    } catch (error) {
        console.log(error);
    }
    
}
export default handleEditProfile;
