import { useContext } from "react";
import PostCard from "../Components/PostCard";
import { AuthContext } from "../Context/AuthContext";
const FilterPostModal = ({onClose, filteredPostings}) =>{

    const {userProfile} =useContext (AuthContext);
    
    return(
        <>
        <section className="fixed inset-0 z-50 justify-center items-center flex flex-col">
            <div className="absolute inset-0 bg-black/80" onClick={onClose}></div>

                <div className="relative h-20 w-3xl justify-center items-center flex">
                    <h1 className="text-2xl text-white font-bold">Filtered Post</h1>
                </div>
            <div className="relative max-w-150 max-h-[80vh]">
                
                <div className="h-full w-full space-y-2 space-x-2 rounded-xl overflow-y-scroll hide-scrollbar">
                    {filteredPostings.length === 0 ? 
                    (
                        <h1 className="text-white justify-center items-center flex h-20">No Posting Found!</h1>
                    ) : 
                    (
                        filteredPostings.map((post) => (
                                <PostCard key={post.postingId} 
                                        posting={post}  
                                        userProfile={userProfile}
                                />
                            
                                                        ))
                    )
                    }
                </div>
                
              
            </div>
            
        </section>
        </>
    )
}
export default FilterPostModal;