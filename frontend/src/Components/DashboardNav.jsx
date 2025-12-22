import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const DashboardNav = () =>{
    const navigate = useNavigate();
    const {userProfile} = useContext(AuthContext);

    const goToProfile = () =>{
          navigate("/Profile");
    }
    const goToDashboard = () =>{
          navigate("/Dashboard");
    }
     return(
        <nav className="fixed bg-white px-20 h-15 w-full justify-between items-center flex border-b-2 border-green-500">
                 <img src={userProfile?.profile} alt="profile" className="h-10 w-10 rounded-4xl bg-transparent border-2 border-green-500 object-cover cursor-pointer" onClick={goToDashboard}></img>
                 <div className="h-10 flex justify-center items-center cursor-pointer" onClick={goToProfile}>
                    <h1 className="text-2xl text-black text-xl font-nanum font-bold mr-4 hover:bg-gray-200 rounded-md px-2">{userProfile ? `${userProfile.firstname} ${userProfile.lastname}` : "Guest"}</h1>
                 </div>
        </nav>
     )
}
export default DashboardNav;