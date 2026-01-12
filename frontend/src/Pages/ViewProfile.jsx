import axios from "axios";
import Footer from "../Components/Footer";
import LeftSidebar from "../Components/LeftSidebar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ViewProfile = () => {
    const { accountId } = useParams();
    const [selectedUser, setSelectedUser] = useState(null);
    

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
            <section className="bg-white h-screen w-full justify-center items-center flex px-20">
                 <div className="h-3/4 flex flex-col gap-2">

                 <div className="w-full rounded-2xl flex justify-start items-center">
                     <img src={selectedUser?.profile} alt="Profile"  className="bg-white h-50 w-50 rounded-full border-4 border-green-300 object-cover"/>
                     <div className=" h-full w-full p-5">
                        <h1 className="font-bold text-xl text-black">{selectedUser?.lastname} {selectedUser?.firstname} {selectedUser?.middlename} {" "} 
                             <span className={`${selectedUser?.availability}`? "text-green-500" : "text-gray-300"}>{selectedUser?.availability}</span>
                        </h1>
                        <h1 className="text-md text-gray-500 mb-4 gap-2">{selectedUser?.baranggay}{" , "}{selectedUser?.city}{" , "}{selectedUser?.province}{" • "} {selectedUser?.email}{" • "} {selectedUser?.contact}</h1>
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

                 



                 </div>
            </section>
            <Footer/>
        </main>
    );
}
export default ViewProfile;