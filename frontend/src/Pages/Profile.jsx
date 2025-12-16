import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import DashboardNav from "../Components/DashboardNav";

const Profile = () =>{
    const {userAccount} =useContext(AuthContext);
    return(
        <main>
            <DashboardNav/>
            <section className="bg-white h-screen w-full justify-center items-center flex px-20">
                 <div className="bg-green-500 h-3/4 w-full flex">

                 <div className="bg-white h-full w-100 rounded-2xl border-2 border-gray-200 flex flex-col justify-start items-center p-5 gap-2">
                     <img src="" alt="Profile Picture"  className="bg-white h-80 w-80 rounded-full border-2 border-gray-300 object-cover"/>
                     <h1 className="font-bold text-2xl text-gray-800">{userAccount.firstname} {userAccount.middlename} {userAccount.lastname}</h1>
                     <h1 className="text-xl text-gray-500">{userAccount.email}</h1>
                     <button className="bg-green-500 h-10 w-full rounded-md border-b-2 border-black font-nanum text-white text-xl hover:bg-green-600 cursor-pointer">Edit Profile</button>
                 </div>

                 <div className="bg-white f-full flex flex-col p-5">
                     <label htmlFor="description">Description</label>
                     <div className="bg-white h-20 w-200 rounded-md border-2 border-gray-300 p-2">
                        <h1>{userAccount.description}</h1>
                     </div>
                 </div>
                 </div>
            </section>
        </main>
        
    )
}
export default Profile;