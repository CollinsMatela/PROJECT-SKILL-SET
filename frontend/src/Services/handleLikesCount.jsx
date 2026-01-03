import axios from "axios"
const handleLikesCount = async (postingId) => {
       try {
         const res = await axios.post(`${import.meta.env.VITE_API_URL}/likesCount`, {postingId});
         return res;

       } catch (error) {
         console.log(error)
       }
}
export default handleLikesCount;