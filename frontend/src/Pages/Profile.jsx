import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import DashboardNav from "../Components/DashboardNav";
import EditProfileModal from "../Components/EditProfileModal";
import { useNavigate } from "react-router-dom";
import LeftSidebar from "../Components/LeftSidebar";
import Footer from "../Components/Footer";
import defualtProfile from "../Images/default_profile.png";
import ImageIcon from "../Images/image.png"
import PostCard from "../Components/PostCard";
import ProfilePostCards from "../Components/ProfilePostCards";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () =>{

    const {accountId} = useParams();

    const {userProfile, postings, setPostings} =useContext(AuthContext);
    const navigate = useNavigate();

    const [showEditProfile, setEditProfile] = useState(false);

    const numberOfPost = postings.filter(posting => posting.accountId === userProfile.accountId).length;

    const handleEditProfile = () =>{
        setEditProfile(true);
    }
    const handleSellerRegistration = () =>{
        navigate(`/seller-registration/${userProfile?.accountId}`);
    }
    const name = userProfile ? `${userProfile.firstname} ${userProfile.lastname}` : "User";
    const description = userProfile ? `${userProfile.bio}` : "No description yet";
    const availability = userProfile ? `${userProfile.availability}` : "No status";
    const location = userProfile ? `${userProfile.baranggay + ","} ${userProfile.city + ","} ${userProfile.province}` : "No location yet";
    const email = userProfile ? `${userProfile.email}` : 'No email';
    const contact = userProfile ? `${userProfile.contact}` : 'No contact';

    const [listOfRegistration, setListOfRegistration] = useState([]);
    const filterVerified = listOfRegistration.find(r => r.userId === userProfile.accountId && r.status === "verified");
    const filterPending = listOfRegistration.find(r => r.userId === userProfile.accountId && r.status === "pending");

    useEffect(() => {
    const fetchBusinessRegistration = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/fetch-seller-registration`);
            console.log(res.data.message, res.data.registrations);
            setListOfRegistration(res.data.registrations);
        } catch (error) {
            console.error("Error fetching business registration:", error);
        }
    };
    fetchBusinessRegistration();
    }, [userProfile?.accountId]);

    return(
        <main>
            <LeftSidebar/>
            <section className="bg-white h-min-screen w-full justify-start items-center flex flex-col p-10">

                 <div className="w-1/2 rounded-2xl flex justify-center items-center">
                     <img src={userProfile?.profile ? userProfile?.profile : defualtProfile} alt="Profile"  className="bg-white h-50 w-50 rounded-full object-cover"/>
                     <div className=" h-full p-5 justify-center items-start flex flex-col gap-2">
                        <h1 className="font-bold text-xl text-black">{name}</h1>
                        <h1 className="text-md text-gray-500 gap-2">{location ? location : "No location"}{" • "} {email}{" • "} {contact ? contact : "No contact"}</h1>
                        <div className="flex gap-4">
                            <h1>{numberOfPost} post</h1> <h1>{userProfile?.followers} followers</h1> <h1>{userProfile?.ratings} ratings</h1>
                        </div>
                        <div className="w-full flex gap-2">
                            <button className="bg-black h-8 w-full rounded-md font-nanum text-white text-lg cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out"
                                    onClick={handleEditProfile}>Edit Profile
                            </button>
                            <button disabled={filterVerified || filterPending} className={`${filterVerified || filterPending ? "cursor-not-allowed border-gray-300 text-gray-300" : "cursor-pointer border-black text-black"} bg-white border-1 border-b-4 h-8 w-30 rounded-md font-nanum text-lg hover:-translate-y-1 transition-all duration-300 ease-in-out`}
                                    onClick={handleSellerRegistration}>{filterPending ? "Pending" : filterVerified ? "Verified" : "Business"}
                            </button>
                        </div>
                        
                     </div>
                     
                 </div>

                 <div className={`${filterPending ? "" : "hidden"} border-1 border-b-4 border-gray-300 w-200 justify-center items-center flex rounded-xl p-2 gap-2 mt-4`}>
                    <div className="border-2 border-b-0 border-r-0 border-gray-300 h-5 w-5 rounded-4xl animate-spin"></div>
                      <h1 className="text-gray-300 text-sm">Status: Pending please wait for approval of your business registration.</h1>
                 </div>

                 <div className="bg-white f-full flex flex-col p-5">
                     <label htmlFor="description" className={`mb-2`}>Bio —</label>
                     <div className="bg-white w-200 mb-2">
                        <h1 className="text-sm text-gray-500">{userProfile?.bio ? userProfile?.bio : "No bio available"}</h1>
                     </div> 

                   <label htmlFor="Skills" className={`mb-2`}>Services —</label>
                   <div className="bg-white w-200 mb-2 grid grid-cols-3 gap-2">
                            {userProfile?.skills.length !== 0 ? 

                            userProfile?.skills?.map((skill, index) => (
                            <div key={index} className="bg-gray-100 hover:bg-white border-2 border-gray-100 px-2 rounded-md justify-center items-center flex">
                                <h1 className="text-sm text-gray-500">{skill}</h1>
                            </div>))
                             
                            : 
                            <div className="text-sm text-gray-500">No services listed</div>
                            }
                        
                   </div>

                   <label htmlFor="Skills" className="mb-2">Social & Links —</label>
                   <div className="w-200 justify-start items-start flex flex-col">
                        {userProfile?.links.length !== 0 ?
                    userProfile?.links.map((link, index) => (
                            <a href={`https://${link}`} key={index}><span className="text-sm text-gray-400 hover:text-green-500 hover:underline">{link}</span></a>
                        ))    
                    :
                    <div className="text-sm text-gray-500">No links available</div>
                    }
                   </div>
                 </div>
                 <ProfilePostCards accountId={accountId}/>

            </section>
            {showEditProfile && (<EditProfileModal onClose={()=> setEditProfile(false)}/>)}
            <Footer/>
        </main>
        
    )
}
export default Profile;