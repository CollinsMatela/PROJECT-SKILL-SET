import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import defaultProfile from "../Images/profile30.png"

const CommentModal = ({onClose, PostingId}) => {

    const {postings} = useContext(AuthContext);
    const [currentIndex, setCurrentIndex] = useState(0);

    const userPost = postings.find(p => p.postingId === PostingId);

    return(
        <div className="bg-black/80 inset-0 fixed z-50 justify-center items-center flex">
             <div className="relative h-220 w-300 flex">
                  {/* Images */}
                  <div className={`${userPost?.media.length === 0 ? "hidden" : ""} relative flex-2 bg-black justify-center items-center flex`}>
                        <div className=" justify-center items-center flex h-full w-20 absolute left-0">
                            <div className={`${currentIndex === 0 && "hidden"} bg-white h-10 w-10 rounded-full cursor-pointer`} onClick={() => currentIndex === 0 ? null : setCurrentIndex(prev => prev - 1)}></div>
                        </div>
                        <img src={userPost?.media[currentIndex]} className="h-full w-full object-cover" />
                        <div className=" justify-center items-center flex h-full w-20 absolute right-0">
                            <div className={`${currentIndex >= userPost?.media.length - 1 && "hidden"} bg-white h-10 w-10 rounded-full cursor-pointer`} onClick={() => currentIndex >= userPost?.media.length - 1 ? null : setCurrentIndex(prev => prev + 1)}></div>
                        </div>
                        
                  </div>
                  {/* Comments */}
                  <div className="flex-1 bg-white rounded-xl">
                    <div className="h-15 w-full justify-between items-center flex p-4 border-b-1 border-gray-200">
                        <div className="justify-center items-center flex gap-2">
                            <img src={userPost ? userPost.profile : defaultProfile} className="h-10 w-10 object-cover rounded-full"/>
                            <h1 className="text-sm font-bold">{userPost ? `${userPost.firstname} ${userPost.lastname}` : "No Name"}</h1>
                        </div>
                         
                         <button className="bg-gray-100 h-5 w-5 text-gray-500 text-sm rounded-full justify-center items-center flex cursor-pointer" onClick={onClose}>x</button>
                    </div>

                    <div className="w-full flex flex-col p-4">
                        <p className="text-xs font-bold text-gray-300">#Caption</p>
                        <p className="text-sm ">{userPost?.text ? userPost?.text : "No caption"}</p>
                    </div>

                    <div className="w-full flex px-4 gap-2">
                        <input type="text" className="bg-gray-100 h-12 w-full rounded-xl px-2" placeholder="Add a comment..."/>
                        <button className="h-12 min-w-12 border-1 border-b-4 border-black rounded-xl justify-center items-center flex cursor-pointer hover:bg-gray-100">Post</button>
                    </div>
                     
                  </div>
             </div>
        </div>
    )
}
export default CommentModal;