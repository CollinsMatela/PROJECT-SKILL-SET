import { useContext, useEffect, useState } from "react"
import DashboardNav from "../Components/DashboardNav"
import { AuthContext } from "../Context/AuthContext"
import handlePosting from "../Services/handlePosting"
import Loading from "../Components/Loading"
import Footer from "../Components/Footer"
import LeftSidebar from "../Components/LeftSidebar"
import SendArrowIcon from "../Images/send_arrow.png"
import ImageIcon from "../Images/image.png"
import axios from "axios"

const Dashboard = () =>{

      const [loading, setLoading] = useState(false);
      const {userAccount, setUserProfile, userProfile, setPostings, postings} = useContext(AuthContext);

      const [userId, setUserId] = useState(userProfile?.accountId);
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
            alert("Post sent");
        } catch (error) {
           console.log(error);
        }
            
      }
      return(
      <>
      <main className="relative">
        {loading ? <Loading/> : ""}
        <DashboardNav/>
        <LeftSidebar/>
        <section className="bg-white h-screen w-full flex flex-col justify-start items-center px-20 pt-20">
          
          <div className="justify-start items-start flex rounded-md p-2 gap-2">
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
                <div key = {index} className="bg-gray-100 h-100 w-140">{posting?.accountId}</div>
              ))  
              }
            
           
        </section>

      </main>
      </>
      )
}
export default Dashboard