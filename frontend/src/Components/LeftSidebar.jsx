import { useNavigate } from "react-router-dom";

import NotifIcon from "../Images/notification.png"
import SearchIcon from "../Images/search.png"
import MessageIcon from "../Images/message.png"
import HomeIcon from "../Images/home.png"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const LeftSidebar = () =>{
    const {userProfile} = useContext(AuthContext);

    const navigate = useNavigate();
    const handleHome = () =>{
    navigate("/Dashboard");
}
    return(
        <aside className="abosolute fixed z-50 bg-white justify-start items-center flex flex-col h-220 w-20 left-20 top-15 border-r-2 border-gray-100 p-2 pt-8">
            <button className="h-12 w-full justify-center items-center flex bg-gray-100 rounded-md hover:bg-white cursor-pointer mb-2 p-2 gap-2"
                     onClick={handleHome}>
                <img src={HomeIcon} alt="home" className="h-7 w-7" />
            </button>
            <button className="h-12 w-full justify-center items-center flex bg-gray-100 rounded-md hover:bg-white cursor-pointer mb-2 p-2 gap-2">
                 <img src={SearchIcon} alt="search" className="h-7 w-7" />
            </button>
            <button className="h-12 w-full justify-center items-center flex bg-gray-100 rounded-md hover:bg-white cursor-pointer mb-2 p-2 gap-2">
                <img src={MessageIcon} alt="message" className="h-7 w-7" />
            </button>
            <button className="h-12 w-full justify-center items-center flex bg-gray-100 rounded-md hover:bg-white cursor-pointer mb-2 p-2 gap-2">
                <img src={NotifIcon} alt="notification" className="h-7 w-7" />
            </button>
            
                <img src={userProfile?.profile} alt="profile" className="h-12 w-12 border-2 border-green-500 rounded-full object-cover cursor-pointer" />
           
            
        </aside>
    )
}
export default LeftSidebar