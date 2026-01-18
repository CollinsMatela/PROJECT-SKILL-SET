import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";

const DashboardNav = () =>{
    const [selectionMenu, setSelectionMenu] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile, setPostings} = useContext(AuthContext);

    const handleSelectionMenu = () =>{
          setSelectionMenu(prev => !prev);
    }
    const goToProfile = () =>{
          navigate("/Profile");
    }
    const goToDashboard = () =>{
          navigate("/Dashboard");
    }
    const handleLogout = () =>{
          navigate("/");
          setPostings([]);
          setUserProfile(null);
    }
     return(
      <>
      <nav className="justify-start items-start fixed flex flex-col w-full ">
        <div className=" relative bg-white px-20 h-15 w-full justify-between items-center flex border-b-2 border-green-500 mb-2">
                 <img src={userProfile} alt="profile" className="h-10 w-10 rounded-4xl bg-transparent border-2 border-green-500 object-cover cursor-pointer" onClick={goToDashboard}></img>
                 <div className="h-10 flex justify-center items-center cursor-pointer" onClick={handleSelectionMenu}>
                    <h1 className="text-2xl text-black text-xl font-nanum font-bold hover:bg-gray-200 rounded-md px-2">{userProfile ? `${userProfile.firstname} ${userProfile.lastname}` : "Guest"}</h1>
                 </div>
        </div>
            <div className={`${selectionMenu ? "" : "hidden"} absolute z-50 bg-white border-2 border-gray-100 rounded-md justify-center items-center flex flex-col p-1 gap-1 right-20 top-15`}>
                  <button className="bg-white h-6 w-40 hover:bg-gray-100 cursor-pointer text-gray-500 text-xs rounded-md" onClick={goToProfile}>Profile</button>
                  <button className="bg-white h-6 w-40 hover:bg-gray-100 cursor-pointer text-gray-500 text-xs rounded-md" onClick={handleLogout}>Logout</button>
            </div>
      </nav>
      
        
      </>
        
     )
}
export default DashboardNav;