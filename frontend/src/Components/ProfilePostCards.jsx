import { useContext } from "react";
import ImageIcon from "../Images/image.png"
import { AuthContext } from "../Context/AuthContext";

const ProfilePostCards = ({accountId}) => {

    const {userProfile, postings} = useContext(AuthContext);

    const handleDate = (date) =>{
          const iso = date;
          const newDate = iso.split("T")[0];
          return newDate;
    }
    const limitCaption = (text) =>{
        if(!text) return "";

        return text.length > 100 ? text.substring(0, 200) + "..." : text;
    }

    return(
        <>
        <div className="h-10 w-200 border-b-2 border-gray-100 justify-center items-center flex">
                            <img src={ImageIcon} />
                         </div>
                         <div className="w-200 grid grid-cols-3 gap-1">
                                    {postings.filter(p => p.accountId === accountId && p.media).map((posting) => (
                                    <div key={posting.postingId} className={`relative  h-80 w-full justify-center items-center flex ${!posting?.media ? 'bg-gray-200' : 'bg-white'} cursor-pointer overflow-hidden`}>
        
                                        <img src={posting?.media.length >= 0 ? posting?.media : null} className={`${posting?.media.length !== 0 ? '' : 'hidden'} object-cover h-full w-full`}/>
        
                                        <div className={`${posting?.media.length !== 0 ? 'bg-black hidden' : 'bg-gray-100'} p-4 w-full`}>
                                            <h1 className="text-black text-xs"># {posting?.text}</h1>
                                        </div>
        
                                        <div className={`inset-0 absolute opacity-0 hover:opacity-100 hover:bg-black/30 hover:backdrop-blur-md justify-center items-center flex flex-col`}>
                                               <h1 className="text-white text-sm p-2">{limitCaption(posting?.text)}</h1>
                                               <h1 className="text-white font-bold text-sm p-2">{handleDate(posting?.createdAt)}</h1>
                                        </div>
                                        
                                        
                                        
                                        
                                    </div>
                                    ))}
                                    
                                    
                         </div>
        </>
    )
}
export default ProfilePostCards;