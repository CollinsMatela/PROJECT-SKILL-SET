import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import DashboardNav from "../Components/DashboardNav";
import EditProfileModal from "../Components/EditProfileModal";
import { useNavigate } from "react-router-dom";
import LeftSidebar from "../Components/LeftSidebar";
import Footer from "../Components/Footer";
import defualtProfile from "../Images/default_profile.png";
import ImageIcon from "../Images/image.png"
import PostCard from "../Components/PostCard";

const Profile = () =>{

    const {userProfile, postings, setPostings} =useContext(AuthContext);
    const navigate = useNavigate();

    const [showEditProfile, setEditProfile] = useState(false);

    const numberOfPost = postings.filter(posting => posting.accountId === userProfile.accountId).length;

    const handleEditProfile = () =>{
        alert("go to edit profile");
        setEditProfile(true);
        
    }
    const name = userProfile ? `${userProfile.firstname} ${userProfile.middlename} ${userProfile.lastname}` : "No name yet";
    const description = userProfile ? `${userProfile.bio}` : "No description yet";
    const availability = userProfile ? `${userProfile.availability}` : "No status";
    const location = userProfile ? `${userProfile.baranggay + ","} ${userProfile.city + ","} ${userProfile.province}` : "No location yet";
    const email = userProfile ? `${userProfile.email}` : 'No email';
    const contact = userProfile ? `${userProfile.contact}` : 'No contact';

    return(
        <main>
            <LeftSidebar/>
            <section className="bg-white h-screen w-full justify-start items-center flex flex-col px-20">
                 {/* <div className="h-3/4 flex flex-col gap-2 bg-blue-300"> */}

                 <div className="w-1/2 rounded-2xl flex justify-center items-center mt-10">
                     <img src={userProfile?.profile ? userProfile?.profile : defualtProfile} alt="Profile"  className="bg-white h-50 w-50 rounded-full border-4 border-green-300 object-cover"/>
                     <div className=" h-full p-5 justify-center items-start flex flex-col gap-2">
                        <h1 className="font-bold text-xl text-black">{name} {" "} 
                             <span className={`${availability}`? "text-green-500" : "text-gray-300"}>{availability}</span>
                        </h1>
                        <h1 className="text-md text-gray-500 gap-2">{location ? location : "No location"}{" • "} {email}{" • "} {contact ? contact : "No contact"}</h1>
                        <div className="flex gap-4">
                            <h1>{numberOfPost} post</h1> <h1>{userProfile?.followers} followers</h1> <h1>{userProfile?.ratings} ratings</h1>
                        </div>
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

                 <div className="h-10 w-200 border-b-2 border-gray-100 justify-center items-center flex">
                    <img src={ImageIcon} />
                 </div>
                 <div className="w-200 grid grid-cols-3 gap-1">
                            {postings.filter(p => p.accountId === userProfile.accountId && p.media).map((posting) => (
                            <div key={posting.postingId} className={`relative border-1 border-gray-100 h-80 w-full justify-center items-center flex ${!posting?.media ? 'bg-gray-200' : 'bg-white'} cursor-pointer overflow-hidden`}>

                                <img src={posting?.media.length >= 0 ? posting?.media : null} className={`${posting?.media.length !== 0 ? '' : 'hidden'} object-cover h-full w-full`}/>

                                <div className={`${posting?.media.length !== 0 ? 'bg-black hidden' : 'bg-gray-100'} p-4 w-full`}>
                                    <h1 className="text-black text-xs"># {posting?.text}</h1>
                                </div>

                                <div className={`inset-0 absolute opacity-0 hover:opacity-100 hover:bg-black/30 hover:backdrop-blur-md justify-center items-center flex`}>
                                       <h1 className="text-white text-sm p-2">{posting?.text}</h1>
                                </div>
                                
                                
                                
                                
                            </div>
                            ))}
                            
                            
                 </div>
                 
                 



                 {/* </div> */}
            </section>
            {showEditProfile && (<EditProfileModal onClose={()=> setEditProfile(false)}/>)}
            <Footer/>
        </main>
        
    )
}
export default Profile;