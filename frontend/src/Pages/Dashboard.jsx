import { useContext, useEffect, useState, useRef } from "react"
import DashboardNav from "../Components/DashboardNav"
import handleLike from "../Services/handleLike"
import { AuthContext } from "../Context/AuthContext"
import handlePosting from "../Services/handlePosting"
import Loading from "../Components/Loading"
import Footer from "../Components/Footer"
import LeftSidebar from "../Components/LeftSidebar"
import SendArrowIcon from "../Images/send_arrow.png"
import ImageIcon from "../Images/image.png"
import HeartInactive from "../Images/heart.png"
import HeartActive from "../Images/heart_active.png"
import BackArrow from "../Images/back_arrow.png"
import NextArrow from "../Images/next_arrow.png"
import Comments from "../Images/comments.png"
import axios from "axios"

const Dashboard = () =>{

      const [loading, setLoading] = useState(false);
      const {userAccount, setUserProfile, userProfile, setPostings, postings} = useContext(AuthContext);

      const userId = userProfile?.accountId;
      const [text, setText] = useState("");
      const [media, setMedia] = useState([]);

      const [currentCount, setCount] = useState(0);

      const [likesCount, setLikesCount] = useState(0);
      const [like, setLike] = useState(false);

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
           console.log("fetched: ", postings);
           setPostings(res.data.posting);
           } catch (error) {
              console.log(error);
           }
           }
           fetchAllPosting();   
      },[])

      const [previewMedia, setPreviewMedia] = useState([]);
      const filePicker = useRef(null);
      const showExplorer = () =>{
            filePicker.current.click();
      }
      const handleUploadMedia = (e) =>{
            const files = Array.from(e.target.files);
            if(!files.length) return;

            const readers = files.map((file) => {
                           return new Promise((resolve) => {
                           const reader = new FileReader();
                           reader.readAsDataURL(file);
                           reader.onloadend = () => resolve(reader.result);
                           })
            })
                           Promise.all(readers).then((results) => {
                           setPreviewMedia((prev) => [...prev, ...results]);
                           setMedia((prev) => [...prev, ...results]);
                           });
      }
      // Handle Liking
      const PressLike = async (details) => {

            // console.log(details?.postingId)
            // console.log(details?.accountId)
            const res = await handleLike(details);
            console.log(res.data.message);
            console.log(res.data.liked);
            console.log(res.data.countsOfLike);
            setLikesCount(res.data.countsOfLike);
            setLike(res.data.liked);

            setPostings(prev =>  
              prev.map(
                post => post?.postingId === postings?.postingId
                ? 
                { ...post, liked: res.data.liked, likesCount: res.data.likesCount }
                : 
                post
              ));
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
            <button className="h-12 w-12 justify-items-center rounded-full border-2 border-gray-100 hover:bg-gray-100 cursor-pointer"
                    onClick={showExplorer}>
              <img src={ImageIcon} alt="image" />
            </button>
            {/* Open file explorer */}
            <input type="file" ref={filePicker} accept="image/*" onChange={handleUploadMedia} hidden />
            <button className="h-12 w-12 bg-green-500 justify-items-center rounded-full hover:bg-green-600 cursor-pointer"
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
          

          {/* New-Feed Card */}
              {postings?.map((posting) => (
                <div key = {posting?.postingId} className="bg-gray-100 w-140 mb-4 shadow-md rounded-xl">
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

                  {posting?.media.length > 0 && (
                  <div className="relative bg-black aspect-square w-full justify-center items-center flex">
                      {currentCount > 0 && ( 
                        <button className="z-1 absolute left-0 justify-items-center hover:bg-white hover:opacity-90 transition duration-500 ease-in-out h-full w-12 cursor-pointer" onClick={() => setCount(prev => (prev > 0 ? prev - 1 : prev))}>
                          <img src={BackArrow} alt="backarrow" />
                        </button>
                      )}
                   

                    <img src={posting?.media[currentCount]} alt="media" className="w-full object-cover"/>
                    {currentCount < posting?.media.length - 1 && ( 
                    <button className="z-1 absolute right-0 justify-items-center hover:bg-white hover:opacity-90 transition duration-500 ease-in-out h-full w-12 cursor-pointer" onClick={()=>setCount(prev => prev < posting?.media.length - 1 ? prev + 1 : prev)}>
                    <img src={NextArrow} alt="nextarrow" />
                    </button>
                    )}
                  </div>
                  )}
                  
                  <div className="bg-white w-full p-2 text-xs">
                    <p className="mb-2">{posting?.text}</p>
                    <div className="h-10 w-full flex gap-2">
                       <div className="bg-white h-full justify-center items-center flex cursor-pointer gap-1">
                        <img src={HeartInactive} alt="heart" onClick={() => PressLike({postingId: posting.postingId, accountId: userProfile.accountId})}/>
                        <h1>{likesCount}</h1>
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