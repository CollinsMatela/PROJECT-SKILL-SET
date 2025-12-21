import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const DashboardNav = () =>{
    const navigate = useNavigate();
    const {userProfile} = useContext(AuthContext);

    const handleProfile = () =>{
          alert("Go to profile");
          navigate("/Profile");
    }
     return(
        <nav className="fixed bg-white px-20 h-15 w-full justify-between items-center flex border-b-2 border-green-500">
                 <h1 className="text-green-500 font-nanum font-extrabold text-2xl">SKILL SETS+</h1>
                 <div className="h-10 flex justify-center items-center gap-2 cursor-pointer"
                      onClick={handleProfile}>
                    <img src={userProfile?.profile} alt="profile"
                         className="h-9 w-9 rounded-4xl bg-transparent border-2 border-green-500 object-cover"></img>
                    <h1 className="text-2xl text-black text-xl font-nanum font-bold mr-4 hover:bg-gray-200 rounded-4xl px-2">{userProfile ? `${userProfile.firstname} ${userProfile.lastname}` : "Guest"}</h1>
                 </div>
        </nav>
     )
}
export default DashboardNav;