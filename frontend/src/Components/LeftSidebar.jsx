import { useNavigate } from "react-router-dom";

import NotifIcon from "../Images/notification.png"
import SearchIcon from "../Images/search.png"
import MessageIcon from "../Images/message.png"
import HomeIcon from "../Images/home.png"
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const LeftSidebar = () =>{
    const {userProfile} = useContext(AuthContext);

    const [search, setSearch] = useState(false);
    const [myButton, setMyButton] = useState(false);

    const handleLogout = () => {
          navigate("/");
          setPostings([]);
          setUserProfile(null);
    }
    const navigate = useNavigate();
    const handleHome = () =>{
    navigate("/Dashboard");
}
    return(
        <aside className="fixed bg-white justify-start items-start flex h-full left-0 top-0">
            <div className="flex flex-col bg-white h-screen w-60 border-r-2 border-gray-200 pt-10 px-4">
               <h1 className="font-nanum text-4xl font-bold mb-4">SKILL SET</h1>
            <button className="h-12 w-full justify-start items-start flex bg-white rounded-xl hover:bg-gray-100 cursor-pointer mb-2 p-2 gap-2"
                     onClick={handleHome}>
                <img src={HomeIcon} alt="home" className="h-7 w-7" />
                <h1>Home</h1>
            </button>
            <button className="h-12 w-full justify-start items-start flex bg-white  rounded-xl hover:bg-gray-100 cursor-pointer mb-2 p-2 gap-2"
                    onClick={() => setSearch(prev => !prev)}>
                 <img src={SearchIcon} alt="search" className="h-7 w-7" />
                 <h1>Search</h1>
            </button>
            <button className="h-12 w-full justify-start items-start flex bg-white rounded-xl hover:bg-gray-100 cursor-pointer mb-2 p-2 gap-2">
                <img src={MessageIcon} alt="message" className="h-7 w-7" />
                <h1>Message</h1>
            </button>
            <button className="h-12 w-full justify-start items-start flex bg-white rounded-xl hover:bg-gray-100 cursor-pointer mb-2 p-2 gap-2">
                <img src={NotifIcon} alt="notification" className="h-7 w-7" />
                <h1>Notification</h1>
            </button>
            <button className="h-12 w-full justify-start items-center flex bg-white rounded-xl hover:bg-gray-100 cursor-pointer mb-2 gap-2" onClick={() => setMyButton(prev => !prev)}>
                <img src={userProfile?.profile} alt="profile" className="h-10 w-10 border-2 border-green-500 rounded-full object-cover cursor-pointer" />
                <h1>{userProfile?.lastname} {userProfile?.firstname}</h1>
            </button>


            <button className={`${myButton ? "" : "hidden"} h-12 w-full justify-start items-center flex bg-white rounded-xl hover:bg-gray-100 cursor-pointer mb-2 gap-2`} onClick={() => navigate("/Profile")}>
                <img src={userProfile?.profile} alt="profile" className="h-10 w-10 border-2 border-green-500 rounded-full object-cover cursor-pointer" />
                <h1>Profile</h1>
            </button>
            <button className={`${myButton ? "" : "hidden"} h-12 w-full justify-start items-center flex bg-white rounded-xl hover:bg-gray-100 cursor-pointer mb-2 gap-2`} onClick={handleLogout}>
                <img src={userProfile?.profile} alt="profile" className="h-10 w-10 border-2 border-green-500 rounded-full object-cover cursor-pointer" />
                <h1>Logout</h1>
            </button>
             
            </div>

            <div className={`bg-white h-screen px-2 border-r-2 border-gray-100 pt-10 transform transition-all duration-1000 linear
                           ${search ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <h1 className="font-nanum text-4xl font-bold mb-4">SEARCH</h1>
                <input className="bg-gray-100  outline-none h-12 w-90 rounded-full px-4 mb-4"
                       type="search" 
                       name="search"
                       id="search" 
                       placeholder="Search"
                />
                <h1 className="text-md">Recent</h1>
            </div>
            
                
           
            
        </aside>
    )
}
export default LeftSidebar