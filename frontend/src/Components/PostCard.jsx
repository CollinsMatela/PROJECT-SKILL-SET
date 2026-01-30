import { useContext, useState } from "react"
import BlackHeartIcon from "../Images/blackheart25.png"
import RedHeartIcon from "../Images/redheart25.png"
import BackArrow from "../Images/back_arrow.png"
import NextArrow from "../Images/next_arrow.png"
import Comments from "../Images/comments.png"
import defualtProfile from "../Images/default_profile.png"
import handleLike from "../Services/handleLike"
import { AuthContext } from "../Context/AuthContext"

const PostCard = ({posting, userProfile}) => {

    const {setPostings} = useContext(AuthContext);

    const [imageIndex, setImageIndex] = useState(0);

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

    const PressLike = async ({ postingId, accountId }) => {

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

    return(
    <>
    <div key = {posting?.postingId} className="bg-gray-100 w-140 mb-4 rounded-t-xl rounded-t-xl border-1 border-gray-100">

                  {/* HEADER*/}
                  <div className="bg-white h-15 w-full justify-start items-center rounded-t-xl flex p-2 gap-2">
                    <img src={posting?.profile ? posting?.profile : defualtProfile} alt="profile" className="bg-gray-100 h-10 w-10 rounded-full object-cover" />
                    <div className="bg-white h-10 w-full">
                      <h1 className="text-sm font-bold">{`${posting?.firstname} ${posting?.lastname}`}</h1>
                      <h1 className="text-sm text-gray-400">{`${posting?.baranggay}, ${posting?.city}, ${posting?.province}  • ${timeAgo(posting?.createdAt)}`}</h1>
                    </div>
                    <div className="bg-white h-10 w-10 justify-center items-center flex text-center rounded-md hover:bg-gray-100 cursor-pointer">
                      <h1>...</h1>
                    </div>
                  </div>

                  {/* ARROW SLIDES */}
                  {posting?.media.length > 0 && (
                  <div className="relative bg-gray-100 aspect-square w-full justify-center items-center flex">

                      {imageIndex > 0 && ( 
                        <button className="z-1 absolute left-0 justify-items-center hover:bg-white hover:opacity-90 transition duration-500 ease-in-out h-full w-12 cursor-pointer" 
                                onClick={() => setImageIndex(prev => (prev > 0 ? prev - 1 : prev))
                                  }>
                          <img src={BackArrow} alt="backarrow" />
                        </button>
                      )}

                    <img src={posting?.media[imageIndex]} alt="media" className="w-full object-cover"/>

                    {imageIndex < posting?.media.length - 1 && ( 
                    <button className="z-1 absolute right-0 justify-items-center hover:bg-white hover:opacity-90 transition duration-500 ease-in-out h-full w-12 cursor-pointer" 
                             onClick={()=> setImageIndex(prev => (prev < posting?.media.length - 1 ? prev + 1 : prev))
}>
                    <img src={NextArrow} alt="nextarrow" />
                    </button>
                    )}
                  </div>
                  )}
                  
                  <div className="bg-white w-full p-2 text-xs">
                    <p className="mb-2">{posting?.text}</p>
                    <div className="h-10 w-full flex gap-2">
                       <div className="bg-white h-full justify-center items-center flex cursor-pointer gap-1"
                            onClick={() => PressLike({postingId: posting.postingId, accountId: userProfile.accountId})}>
                        <img src={posting?.liked ? RedHeartIcon : BlackHeartIcon} alt="heart" />
                        <h1>{posting?.likesCount}</h1>
                       </div>
                       <div className="bg-white h-full justify-center items-center flex cursor-pointer gap-1">
                        <img src={Comments} alt="comments" />
                        <h1>0</h1>                
                       </div>
                       
                    </div>
                  </div>
                </div>
    </>
    )
}
export default PostCard;