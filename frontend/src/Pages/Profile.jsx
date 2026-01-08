import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import DashboardNav from "../Components/DashboardNav";
import EditProfileModal from "../Components/EditProfileModal";
import { useNavigate } from "react-router-dom";
import LeftSidebar from "../Components/LeftSidebar";
import Footer from "../Components/Footer";

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
    const email = userProfile ? `${userProfile.email}` : 'No email';
    const contact = userProfile ? `${userProfile.contact}` : 'No contact';

    return(
        <main>
            <LeftSidebar/>
            <section className="bg-white h-screen w-full justify-center items-center flex px-20">
                 <div className="h-3/4 flex flex-col gap-2">

                 <div className="w-full rounded-2xl flex justify-start items-center">
                     <img src={userProfile?.profile} alt="Profile"  className="bg-white h-50 w-50 rounded-full border-4 border-green-300 object-cover"/>
                     <div className=" h-full w-full p-5">
                        <h1 className="font-bold text-xl text-black">{name} {" "} 
                             <span className={`${availability}`? "text-green-500" : "text-gray-300"}>{availability}</span>
                        </h1>
                        <h1 className="text-md text-gray-500 mb-4 gap-2">{location}{" • "} {email}{" • "} {contact}</h1>
                        <button className="bg-green-500 h-8 w-25 rounded-md border-b-2 border-green-950 font-nanum text-white text-md hover:bg-green-600 cursor-pointer"
                                onClick={handleEditProfile}>Edit Profile
                        </button>
                     </div>
                     
                 </div>

                 <div className="bg-white f-full flex flex-col p-5">
                     <label htmlFor="description" className="mb-2">Bio —</label>
                     <div className="bg-white w-200 mb-2">
                        <h1 className="text-sm text-gray-500">{description}</h1>
                     </div> 

                   <label htmlFor="Skills" className="mb-2">Services —</label>
                   <div className="bg-white w-200 mb-2 grid grid-cols-3 gap-2">
                            {userProfile?.skills?.map((skill, index) => (
                            <div key={index} className="bg-gray-100 hover:bg-white border-2 border-gray-100 px-2 rounded-md justify-center items-center flex">
                                <h1 className="text-sm text-gray-500">{skill}</h1>
                            </div>
                            ))}
                        
                   </div>

                   <label htmlFor="Skills" className="mb-2">Social & Links —</label>
                   <div className="w-200 justify-start items-start flex flex-col">
                        {userProfile?.links.map((link, index) => (
                            <a href={`https://${link}`} key={index}><span className="text-sm text-gray-400 hover:text-green-500 hover:underline">{link}</span></a>
                        ))}
                   </div>
                 </div>

                 



                 </div>
            </section>
            {showEditProfile && (<EditProfileModal onClose={()=> setEditProfile(false)}/>)}
            <Footer/>
        </main>
        
    )
}
export default Profile;