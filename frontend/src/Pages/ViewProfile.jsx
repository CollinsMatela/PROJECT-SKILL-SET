import axios from "axios";
import Footer from "../Components/Footer";
import LeftSidebar from "../Components/LeftSidebar";
import ProfilePostCards from "../Components/ProfilePostCards";
import defaultProfile from "../Images/default_profile.png"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
const ViewProfile = () => {
    const { accountId } = useParams();
    const {postings} = useContext(AuthContext)
    const [selectedUser, setSelectedUser] = useState(null);
    const countOfPosting = postings.filter(p => p.accountId === accountId).length;
    

        const fetchProfile = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/view-Profile/${accountId}`);
                console.log("ViewProfile:", res.data.ProfileInformation);
                setSelectedUser(res.data.ProfileInformation);
            } catch (error) {
                console.log(error)
            }
        }

        useEffect(() => {
            fetchProfile();
        }, [accountId]);

    return(

        
     <main>
            <LeftSidebar/>
            <section className="bg-white w-full justify-center items-center flex flex-col p-10">
                 

                 <div className="w-1/2 rounded-2xl flex justify-center items-center mb-4">
                     <img src={selectedUser?.profile ? selectedUser?.profile : defaultProfile} className="bg-white h-50 w-50 rounded-full border-4 border-black-500 object-cover"/>
                     <div className=" h-full p-5 gap-2 flex flex-col">
                        <h1 className="font-bold text-xl text-black">{selectedUser?.lastname} {selectedUser?.firstname} {selectedUser?.middlename} {" "}</h1>
                        <h1 className="text-md text-gray-500 gap-2">{selectedUser?.baranggay}{" , "}{selectedUser?.city}{" , "}{selectedUser?.province}{" • "} {selectedUser?.email}{" • "} {selectedUser?.contact}</h1>
                        <h1 className="flex gap-4"><h1>{countOfPosting + " post"}</h1><h1>{selectedUser?.followers + " followers"}</h1><h1>{selectedUser?.ratings + " ratings"}</h1></h1>
                        <button className="bg-black w-full h-8 rounded-md cursor-pointer">
                    <h1 className="text-white font-nanum text-lg font-bold">Follow</h1>
                 </button>
                     </div>
                </div>

                 

                 <div className="bg-white f-full flex flex-col p-5">
                     <label htmlFor="description" className="mb-2">Bio —</label>
                     <div className="bg-white w-200 mb-2">
                        <h1 className="text-sm text-gray-500">{selectedUser?.bio}</h1>
                     </div> 

                   <label htmlFor="Skills" className="mb-2">Services —</label>
                   <div className="bg-white w-200 mb-2 grid grid-cols-3 gap-2">
                            {selectedUser?.skills?.map((skill, index) => (
                            <div key={index} className="bg-gray-100 hover:bg-white border-2 border-gray-100 px-2 rounded-md justify-center items-center flex">
                                <h1 className="text-sm text-gray-500">{skill}</h1>
                            </div>
                            ))}
                        
                   </div>

                   <label htmlFor="Skills" className="mb-2">Social & Links —</label>
                   <div className="w-200 justify-start items-start flex flex-col">
                        {selectedUser?.links.map((link, index) => (
                            <a href={`https://${link}`} key={index}><span className="text-sm text-gray-400 hover:text-green-500 hover:underline">{link}</span></a>
                        ))}
                   </div>
                 </div>

                 



                 
                 <ProfilePostCards accountId={accountId}/>
            </section>
            <Footer/>
        </main>
    );
}
export default ViewProfile;