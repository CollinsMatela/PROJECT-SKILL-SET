import { useContext, useEffect, useState } from "react"
import DashboardNav from "../Components/DashboardNav"
import { AuthContext } from "../Context/AuthContext"
import handlePosting from "../Services/handlePosting"
import Loading from "../Components/Loading"
import Footer from "../Components/Footer"
import LeftSidebar from "../Components/LeftSidebar"
import SendArrowIcon from "../Images/send_arrow.png"
import ImageIcon from "../Images/image.png"
import HeartInactive from "../Images/heart.png"
import HeartActive from "../Images/heart_active.png"
import Comments from "../Images/comments.png"
import axios from "axios"

const Dashboard = () =>{

      const [loading, setLoading] = useState(false);
      const {userAccount, setUserProfile, userProfile, setPostings, postings} = useContext(AuthContext);

      const userId = userProfile?.accountId;
      const [text, setText] = useState("");
      const [media, setMedia] = useState([]);

      useEffect(() => {
      if (!userAccount?.accountId) return

      const fetchProfile = async () => {
            try {
            setLoading(true);
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/get-profile/${userAccount.accountId}`);
            console.log(res.data.message);
            console.log(res.data.ProfileInformation);
            setUserProfile(res.data.ProfileInformation);
            setLoading(false);
            } catch (error) {
             console.error(error.response?.data?.message || error.message);
            }
      }
      fetchProfile();
      },[userAccount])

      useEffect(() => {
        
          const fetchAllPosting = async () =>{

           try {
           const res = await axios.get(`${import.meta.env.VITE_API_URL}/get-posting/all-posting`);
           console.log(res.data.message);
           setPostings(res.data.posting);
           console.log("fetched: ", postings);
           } catch (error) {
              console.log(error);
           }
           }
           fetchAllPosting();   
      },[])
      
      const SubmitPosting = async () => {
         try {
          const postingDetails = {
              accountId : userId,
              text : text,
              media: media  
            }
            const res = await handlePosting(postingDetails);
            console.log(res.data.message);
            alert("Posting: sent request");
        } catch (error) {
           console.log(error);
        }
        }
        const timeAgo = (createdAt) =>{
          const time = Date.now() - new Date(createdAt);
          const minutes = Math.floor(time / 60000);
          const hours = Math.floor(time / 3600000);
          const days = Math.floor(time / 86400000);

          if (minutes < 1) return "Just now";
          if (minutes < 60) return `${minutes} min ago`;
          if (hours < 24) return `${hours} hr ago`;
          return `${days} day${days > 1 ? "s" : ""} ago`;
        }
      return(
      <>
      <main className="relative">
        {loading ? <Loading/> : ""}
        <DashboardNav/>
        <LeftSidebar/>
        <section className="bg-white w-full flex flex-col justify-start items-center px-20 pt-20">
          
          <div className="justify-start items-start flex rounded-md p-2 gap-2 mb-4">
            <img src={userProfile?.profile} alt="profile" className="h-12 w-12 rounded-full object-cover border-2 border-green-500 cursor-pointer" />
            <textarea name="posting" id="posting" placeholder={`Welcome ${userProfile?.firstname}, share your thoughts!`}
                      className="bg-gray-100 h-full w-100 rounded-md px-4 outline-none pt-2"
                      value={text}
                      onChange={(e) => setText(e.target.value)}>
                  
                      </textarea>
            <button className="h-12 w-12 justify-items-center rounded-full border-2 border-gray-100 hover:bg-gray-100 cursor-pointer">
              <img src={ImageIcon} alt="image" />
            </button>
            <button className="h-12 w-12 bg-green-500 justify-items-center rounded-full hover:bg-green-600 cursor-pointer"
                    onClick={SubmitPosting}>
              <img src={SendArrowIcon} alt="arrow" />
            </button>
          </div>
              {postings?.map((posting, index) => (
                <div key = {index} className="bg-gray-100 w-140 mb-4 shadow-md rounded-xl">
                  <div className="bg-white h-15 w-full justify-start items-center flex p-2 gap-2">
                    <img src={posting?.profile} alt="profile" className="bg-gray-100 h-10 w-10 rounded-full border-2 border-green-500 object-cover" />
                    <div className="bg-white h-10 w-full">
                      <h1 className="text-sm font-bold">{`${posting?.firstname} ${posting?.lastname}`}</h1>
                      <h1 className="text-sm text-gray-400">{`${posting?.baranggay}, ${posting?.city}, ${posting?.province}  • ${timeAgo(posting?.createdAt)}`}</h1>
                    </div>
                    <div className="bg-white h-10 w-10 justify-center items-center flex text-center rounded-md hover:bg-gray-100 cursor-pointer">
                      <h1>...</h1>
                    </div>
                  </div>

                  {posting?.media ? <img src={posting?.media} alt="picture" className="bg-gray-100 h-100 w-full object-cover"/> : ""}
                  
                  <div className="bg-white w-full p-2 text-xs">
                    <p className="mb-2">{posting?.text}</p>
                    <div className="h-10 w-full flex gap-2">
                       <div className="bg-white h-full justify-center items-center flex cursor-pointer gap-1">
                        <img src={HeartInactive} alt="heart" />
                        <h1>0</h1>
                       </div>
                       <div className="bg-white h-full justify-center items-center flex cursor-pointer gap-1">
                        <img src={Comments} alt="comments" />
                        <h1>0</h1>                
                       </div>
                       
                    </div>
                  </div>
                </div>
              ))  
              }
            
           
        </section>

      </main>
      </>
      )
}
export default Dashboard