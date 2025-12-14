import axios from "axios"

const handleRegistrationSubmit = async (registerData) =>{
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/registration`, registerData)
        // console.log("Status:", res.data.message)
        return res.data;

    } catch (error) {
        console.log(error)
    }
    
}
export default handleRegistrationSubmit;