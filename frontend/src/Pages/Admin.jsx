import { useContext, useEffect, useState } from "react";
import LeftSidebar from "../Components/LeftSidebar";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const Admin = () => {
     const {userProfile} = useContext(AuthContext);
     const [businessRegistrations, setBusinessRegistrations] = useState([]);

     useEffect(() => {
        document.title = "Skillset (Admin Control)";
        const fetchBusinessRegistrations = async () => {
              try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/fetch-seller-registration`);
                console.log(res.data.message, res.data.registrations);
                setBusinessRegistrations(res.data.registrations);
              } catch (error) {
                console.log(error);
              }
        }
        fetchBusinessRegistrations();
      }, [userProfile?.accountId]);

     return(
        <section className=" h-screen w-full justify-start items-center flex flex-col">
            <LeftSidebar/>
            <div className="h-50 w-2/4 mt-10 justify-center items-center flex gap-2">
                 <div className="bg-white h-full w-50 rounded-md justify-center items-center flex flex-col">
                    <h1>No. of Users</h1>
                    <h1>{userProfile?.length || 0}</h1>
                 </div>
                 <div className="bg-white h-full w-50 rounded-md justify-center items-center flex flex-col">
                    <h1>Business Registrations</h1>
                    <h1>{businessRegistrations.length}</h1>
                 </div>
            </div>
            <div className="h-100 overflow-scroll w-300 mt-10 justify-start items-center flex flex-col gap-2">
                   <h1 className="w-full text-gray-300 font-bold">Business Registrations Table</h1>
                   <div className=" bg-gray-200 h-10 w-full justify-between items-center flex rounded-md">
                    <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Business ID</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Business Name</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Business Address</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Business Type</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Seller Name</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Email</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Contact</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Action</h1></div>
                   </div>
                   {businessRegistrations.map((registration) => (
                    <div key={registration._id} className="border-2 border-gray-100 rounded-xl h-15 w-full justify-between items-center flex">
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.businessId}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.businessName}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.businessAddress}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.businessType}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.firstname} {registration.lastname}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.email}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.contact}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2 gap-2">
                        <button className="bg-gray-200 h-5 w-5"></button>
                        <button className="bg-gray-200 h-5 w-5"></button>
                        <button className="bg-gray-200 h-5 w-5"></button>
                      </div>
                      
                    </div>
                   ))}

            </div>
        </section>
     )
}
export default Admin;