import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import DashboardNav from "../Components/DashboardNav";
import EditProfileModal from "../Components/EditProfileModal";
import { useNavigate } from "react-router-dom";
import LoginModal from "../Components/LoginModal";

const Profile = () =>{
    const {userAccount, userProfile} =useContext(AuthContext);
    const navigate = useNavigate();

    const [showEditProfile, setEditProfile] = useState(false);

    const handleEditProfile = () =>{
        alert("go to edit profile");
        setEditProfile(true);
        
    }
    const name = userProfile ? `${userProfile.firstname} ${userProfile.middlename} ${userProfile.lastname}` : "No name yet";
    const description = userProfile ? `${userProfile.bio}` : "No description yet";
    const availability = userProfile ? `${userProfile.availability}` : "No status";
    const location = userProfile ? `${userProfile.baranggay} , ${userProfile.city} , ${userProfile.province}` : "No location yet";

    return(
        <main>
            <DashboardNav/>
            <section className="bg-white h-screen w-full justify-center items-center flex px-20">
                 <div className="h-3/4 flex gap-2">

                 <div className="bg-white h-full w-100 rounded-2xl flex flex-col justify-start items-center p-5">
                     <img src={userProfile.profile} alt="Profile"  className="bg-white h-80 w-80 rounded-full border-2 border-gray-300 object-cover mb-4"/> 
                     <h1 className="font-bold text-2xl text-black">{name}</h1>
                     <h1 className={`text-xl ${availability ? "text-green-500 font-bold" : "text-gray-500"}`}>{availability}</h1>
                     <h1 className="text-xl text-gray-500 mb-4">{location}</h1>
                     <button className="bg-green-500 h-10 w-full rounded-md border-b-2 border-green-950 font-nanum text-white text-xl hover:bg-green-600 cursor-pointer"
                             onClick={handleEditProfile}>Edit Profile</button>
                 </div>

                 <div className="bg-white f-full flex flex-col p-5">
                     <label htmlFor="description" className="mb-2">Bio</label>
                     <div className="bg-white h-20 w-200 rounded-2xl">
                        <h1 className="text-sm text-gray-500">{description}</h1>
                     </div>

                   <label htmlFor="Skills" className="mb-2">Services</label>
                   <div className="bg-white w-200 mb-2 grid grid-cols-3 gap-2">
                            {userProfile?.skills?.map((skill, index) => (
                            <div key={index} className="bg-gray-100 hover:bg-white border-2 border-gray-100 px-2 rounded-md justify-center items-center flex">
                                <h1 className="text-sm text-gray-500">{skill}</h1>
                            </div>
                            ))}
                        
                   </div>

                   <label htmlFor="Skills" className="mb-2">Social & Links</label>
                   <div className="bg-gray-100 w-200 p-2 rounded-xl justify-start items-start flex flex-col">
                        {userProfile.links.map((link, index) => (
                            <a href={link} key={index}><span className="text-sm text-gray-300 hover:text-blue-400">{link}</span></a>
                        ))}
                   </div>
                 </div>

                 



                 </div>
            </section>
            {showEditProfile && (<EditProfileModal onClose={()=> setEditProfile(false)}/>)}
        </main>
        
    )
}
export default Profile;