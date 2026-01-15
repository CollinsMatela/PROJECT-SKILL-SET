import axios from "axios"

const handleRegistrationSubmit = async (registerData) =>{
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/registration`, registerData)
        return res;

    } catch (error) {
        console.log(error)
    }
    
}
export default handleRegistrationSubmit;