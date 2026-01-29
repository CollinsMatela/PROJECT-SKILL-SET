import { useContext, useEffect, useState, useRef } from "react"
import DashboardNav from "../Components/DashboardNav"
import handleLike from "../Services/handleLike"
import handleLikesCount from "../Services/handleLikesCount"
import { AuthContext } from "../Context/AuthContext"
import handlePosting from "../Services/handlePosting"
import Loading from "../Components/Loading"
import Footer from "../Components/Footer"
import LeftSidebar from "../Components/LeftSidebar"
import RightSideBar from "../Components/RightSideBar"
import defualtProfile from "../Images/default_profile.png"
import SendArrowIcon from "../Images/send_arrow.png"
import ImageIcon from "../Images/image.png"
import PostCard from "../Components/PostCard"
import EditProfileModal from "../Components/EditProfileModal"
import FilterContainer from "../Components/FilterContainer"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Dashboard = () =>{

      const [loading, setLoading] = useState(false);
      const {userProfile, setUserProfile, setPostings, postings} = useContext(AuthContext);

      const userId = userProfile?.accountId;
      const [text, setText] = useState("");
      const [media, setMedia] = useState([]);

      const navigate = useNavigate();
      const [showEditProfile, setShowEditProfile] = useState(false);
      
      const fetchData = async () => {
        setLoading(true);
        setPostings([]);
      
        try {
          // 1️⃣ Fetch profile
          const profileRes = await axios.get(`${import.meta.env.VITE_API_URL}/get-profile/${userProfile.accountId}`);
          setUserProfile(profileRes.data.ProfileInformation);

          // 2️⃣ Fetch posts using the profile's accountId
          const postsRes = await axios.get(`${import.meta.env.VITE_API_URL}/get-posting/all-posting?accountId=${profileRes.data.ProfileInformation.accountId}`);
          setPostings(postsRes.data.postings);
 
          setLoading(false);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
          
        }
      };
      
      useEffect(() => {
      if (!userProfile?.accountId) return;
      fetchData();
      }, [userProfile?.accountId]);

      const [previewMedia, setPreviewMedia] = useState([]);
      const filePicker = useRef(null);
      const showExplorer = () =>{
            filePicker.current.click();
      }
      const handleUploadMedia = async (e) =>{
            const files = Array.from(e.target.files);
            if(!files.length) return;

            try {
              const uploadedImages = await Promise.all(
                files.map(async(file) => {
                      const formData = new FormData();
                      formData.append("file", file);
                      formData.append("upload_preset", "unsigned_media_upload"); // replace with your upload preset

                      const res = await axios.post("https://api.cloudinary.com/v1_1/dhgn8rvvn/image/upload", formData);
                      return res.data.secure_url;
                })
              );
                setPreviewMedia((prev) => [...prev, ...uploadedImages]);
                setMedia((prev) => [...prev, ...uploadedImages]);
            } catch (error) {
              console.log("Error uploading images:", error);
            }
            
      }
      // Handle Liking
      const PressLike = async ({ postingId, accountId }) => {

            // console.log(details?.postingId)
            // console.log(details?.accountId)
            const res = await handleLike({ postingId, accountId });
            console.log(res.data.message);
            console.log(res.data.liked);
            console.log(res.data.likesCount);

            setPostings(prev =>
        prev.map(post =>
          post.postingId === postingId
            ? {
                ...post,
                liked: res.data.liked,
                likesCount: res.data.likesCount
              }
            : post
        )
  );
      }

      const SubmitPosting = async () => {
         try {
          const postingDetails = {
              accountId : userId,
              text : text,
              media: media  
            }
            const res = await handlePosting(postingDetails);
            console.log(res.data.message);

            setText("");
            setMedia([]);
            setPreviewMedia([]);
            alert("Posting: sent request");
            fetchData();
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
        {/* <DashboardNav/> */}
        
        <section className="bg-white w-full flex justify-center items-start px-20">

          {/* Left Sidebar */}
          <div className="sticky flex-1 bg-white h-screen w-100">
            <LeftSidebar/>
          </div>
          <div className="bg-white flex-1 justify-center items-center flex flex-col pt-10">

                  <div className="justify-start items-start flex rounded-md p-2 gap-2 mb-4">
                  <img src={userProfile?.profile ? userProfile?.profile : defualtProfile} alt="profile" className="h-12 w-12 rounded-full object-cover cursor-pointer" />
                  <textarea name="posting" id="posting" placeholder={`Welcome ${userProfile?.firstname}, share your thoughts!`}
                            className="bg-gray-100 h-full w-100 rounded-md px-4 outline-none pt-2"
                            value={text}
                            onChange={(e) => setText(e.target.value)}>
                        
                            </textarea>
                  <button className="h-12 w-12 justify-items-center rounded-full border-2 border-gray-100 hover:bg-gray-100 cursor-pointer"
                          onClick={showExplorer}>
                    <img src={ImageIcon} alt="image" />
                  </button>
                  {/* Open file explorer */}
                  <input type="file" ref={filePicker} accept="image/*" onChange={handleUploadMedia} hidden />
                  <button className="h-12 w-12 bg-black justify-items-center rounded-md transition-all duration-3000 ease-in-out hover:rounded-4xl hover:-translate-y-1 cursor-pointer"
                          onClick={SubmitPosting}>
                    <img src={SendArrowIcon} alt="arrow" />
                  </button>
                </div>

                      {previewMedia.length > 0 && 
                (<div className="grid grid-cols-4 flex justify-start items-center p-2 mb-4 gap-2 border-b-2 border-gray-100">
                  {previewMedia.map((file, index) => (
                      <img key={index} src={file} alt={`preview-${index}`} className={"bg-gray-300 h-35 w-35 object-cover rounded-xl border-2 border-gray-300 cursor-pointer hover:border-red-400"}
                            onClick={() => { setPreviewMedia(prev => prev.filter(z => z !== file));
                                            setMedia(prev => prev.filter(z => z !== file));
                            }} />
                  ))}
                </div>)
                }
                {/*For you feed filter*/}
                <FilterContainer/>

          {/* Post Cards */}
              {postings?.map((posting) => (
                 <PostCard key={posting.postingId} 
                           posting={posting} 
                           timeAgo={timeAgo} 
                           PressLike={PressLike}
                           userProfile={userProfile}
                 />
              ))  
              }
          </div>
          {/* Right Sidebar */}
            <RightSideBar/> 
          
          
          
            
           
        </section>

      </main>
      </>
      )
}
export default Dashboard