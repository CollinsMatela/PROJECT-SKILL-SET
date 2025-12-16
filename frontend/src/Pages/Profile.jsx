import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import DashboardNav from "../Components/DashboardNav";
import { useNavigate } from "react-router-dom";

const Profile = () =>{
    const {userAccount} =useContext(AuthContext);
    const navigate = useNavigate();

    const handleEditProfile = () =>{
        console.log("go to edit profile");
        navigate("/edit-profile");
    }
    const name = userAccount.isUser ? `${userAccount.firstname} ${userAccount.middlename} ${userAccount.lastname}` : "Empty";
    const description = userAccount.description ? `${userAccount.description}` : "No description yet";
    return(
        <main>
            <DashboardNav/>
            <section className="bg-white h-screen w-full justify-center items-center flex px-20">
                 <div className="h-3/4 flex gap-2">

                 <div className="bg-white h-full w-100 rounded-2xl flex flex-col justify-start items-center p-5">
                     <img src="Profile" alt="Profile"  className="bg-white h-80 w-80 rounded-full border-2 border-gray-300 object-cover mb-4"/> 
                     <h1 className="font-bold text-2xl text-green-950">{name}</h1>
                     <h1 className="text-xl text-gray-500">Title</h1>
                     <h1 className="text-xl text-gray-500 mb-4">Location</h1>
                     <button className="bg-green-500 h-10 w-full rounded-md border-b-2 border-green-950 font-nanum text-white text-xl hover:bg-green-600 cursor-pointer"
                             onClick={handleEditProfile}>Edit Profile</button>
                 </div>

                 <div className="bg-white f-full flex flex-col p-5">
                     <label htmlFor="description">Description</label>
                     <div className="bg-white h-20 w-200 rounded-2xl border-2 border-gray-300 p-2 mb-2">
                        <h1>{description}</h1>
                     </div>

                   <label htmlFor="Skills">My Services</label>
                   <div className="bg-gray-100 h-20 w-200 p-2 mb-2">
                     
                   </div>

                   <label htmlFor="Skills">Portfolio</label>
                   <div className="bg-gray-100 h-20 w-200 p-2">
                     
                   </div>
                 </div>

                 



                 </div>
            </section>
        </main>
        
    )
}
export default Profile;