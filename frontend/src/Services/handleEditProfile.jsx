import axios from "axios";

const handleEditProfile =  async () =>{

    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/Profile/Edit-Profile`);
        return res;
    } catch (error) {
        console.log(error);
    }
    
}
export default handleEditProfile;
