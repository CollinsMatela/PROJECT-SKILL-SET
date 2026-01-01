import axios from "axios"
const handleLike = async (details) => {
      try {
          const postingId = details.postingId;
          const accountId = details.accountId;

          const res = await axios.post(`${import.meta.env.VITE_API_URL}/posts/${postingId}/like`, {accountId})
          return res;

      } catch (error) {
          console.log(error);
      }
}
export default handleLike;