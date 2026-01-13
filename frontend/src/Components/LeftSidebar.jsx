import { useNavigate } from "react-router-dom";

import NotifIcon from "../Images/notification30.png"
import SearchIcon from "../Images/search30.png"
import MessageIcon from "../Images/message30.png"
import HomeIcon from "../Images/home30.png"
import ProfileIcon from "../Images/profile30.png"
import LogoutIcon from "../Images/logout30.png"
import SkillSetLogo from "../Images/skillsetlogo30.png"
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const LeftSidebar = () =>{
    const {userProfile} = useContext(AuthContext);

    const [myButton, setMyButton] = useState(false);
    const [search, setSearch] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [searchedUsers, setSearchedUsers] = useState([]);
    
    const fetchSearchedUsers = async (value) => {
        setSearchedUsers([]);
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/search?firstname=${value}&lastname=${value}`);
            setSearchedUsers(res.data.users)
            console.log(res.data.message, res.data.users);
        } catch (error) {
            console.error("Error fetching searched users:", error);
        }
    }
    

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
            <div className={`${search ? "w-20" : "w-80"} transform transition-all duration-1000 ease-out flex flex-col bg-white h-screen border-r-2 border-gray-200 pt-10 px-4`}>
               
               {search ? 
               <div className="bg-green-500 h-12 w-full rounded-md border-b-4 border-black justify-center items-center flex mb-2 cursor-pointer hover:bg-green-600">
                      <div className="h-5 w-5 justify-center items-center flex font-nanum font-bold text-white text-2xl">SS+</div>
               </div>
               :
               <h1 className="text-4xl font-nanum font-extrabold text-green-500 mb-2">SKILLSET</h1>
             }

            <button className="h-12 w-full justify-start items-start flex bg-white rounded-xl hover:bg-gray-100 cursor-pointer mb-2 p-2 gap-2"
                     onClick={handleHome}>
                <img src={HomeIcon} alt="home" className="h-7 w-7" />
                <h1>{search ? "" : "Home"}</h1>
            </button>
            <button className={`${search ? "bg-gray-100" : "bg-white"} h-12 w-full justify-start items-start flex  rounded-xl hover:bg-gray-100 cursor-pointer mb-2 p-2 gap-2`}
                    onClick={() => setSearch(prev => !prev)}>
                 <img src={SearchIcon} alt="search" className="h-7 w-7" />
                 <h1>{search ? "" : "Search"}</h1>
            </button>
            <button className="h-12 w-full justify-start items-start flex bg-white rounded-xl hover:bg-gray-100 cursor-pointer mb-2 p-2 gap-2">
                <img src={MessageIcon} alt="message" className="h-7 w-7" />
                <h1>{search ? "" : "Message"}</h1>
            </button>
            <button className="h-12 w-full justify-start items-start flex bg-white rounded-xl hover:bg-gray-100 cursor-pointer mb-2 p-2 gap-2">
                <img src={NotifIcon} alt="notification" className="h-7 w-7" />
                <h1>{search ? "" : "Notification"}</h1>
            </button>
            <button className="h-12 w-full justify-start items-center flex bg-white rounded-xl hover:bg-gray-100 cursor-pointer mb-2 gap-2 px-2" onClick={() => setMyButton(prev => !prev)}>
                <img src={userProfile?.profile} alt="profile" className="h-7 w-7 border-2 border-green-500 rounded-full object-cover cursor-pointer" />
                <h1>{search ? "" : `${userProfile?.lastname} ${userProfile?.firstname}`}</h1>
            </button>


            <button className={`${myButton ? "" : "hidden"} h-12 w-full justify-start items-center flex bg-white rounded-xl hover:bg-gray-100 cursor-pointer mb-2 gap-2 px-2`} onClick={() => navigate("/Profile")}>
                <img src={ProfileIcon} alt="profile" className="h-7 w-7" />
                <h1>{search ? "" : "Profile"}</h1>
            </button>
            <button className={`${myButton ? "" : "hidden"} h-12 w-full justify-start items-center flex bg-white rounded-xl hover:bg-gray-100 cursor-pointer mb-2 gap-2 px-2`} onClick={handleLogout}>
                <img src={LogoutIcon} alt="profile" className="h-7 w-7" />
                <h1>{search ? "" : "Logout"}</h1>
            </button>
             
            </div>

            <div className={`bg-white h-screen px-2 border-r-2 border-gray-100 pt-10 transform transition-all duration-500 linear
                           ${search ? "w-100 translate-x-0 opacity-100" : "w-0 -translate-x-full opacity-0 pointer-events-none"}`}>
                <h1 className="font-nanum text-4xl font-bold mb-4">SEARCH</h1>
                <input className="bg-gray-100  outline-none h-12 w-full rounded-full px-4 mb-4"
                       type="search" 
                       name="search"
                       id="search" 
                       placeholder="Search"
                       value={searchInput}
                       onChange={(e) => {setSearchInput(e.target.value), fetchSearchedUsers(e.target.value)}}
                />
                <h1 className="text-md">Recent</h1>
                {searchedUsers.map((user) => (
                    <div key={user?.accountId} className="h-15 w-full border-1 border-gray-100 rounded-md mb-2 justify-start items-center flex gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                        <div className="h-11 w-11 bg-green-500 justify-center items-center flex rounded-full">
                            <img src={user?.profile} className="h-10 w-10 object-cover rounded-full border-2 border-white" />
                        </div>
                    <div className="flex flex-col">
                        <h1 className="text-sm font-bold">{user?.firstname} {user?.lastname}</h1>
                        <h1 className="text-xs text-gray-500">{user?.baranggay}{" , "}{user?.city}{" , "}{user?.province}</h1>
                    </div>
                    
                    </div>
                ))}
            </div>
            
                
           
            
        </aside>
    )
}
export default LeftSidebar