import { useContext, useEffect, useState } from "react";
import LeftSidebar from "../Components/LeftSidebar";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import BusinessRegistrationTable from "../Components/BusinessRegistrationTable";

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
            <h1 className="w-300 mt-10 mb-10 text-2xl">Overview</h1>
            <div className="h-20 w-300 justify-start items-center flex gap-2">
                 <div className="bg-white h-full w-50 rounded-md justify-center items-center flex flex-col border-2 border-gray-300">
                    <h1 className="text-xs text-gray-500">Registered Users</h1>
                    <h1 className="text-4xl">{userProfile?.length || 0}</h1>
                 </div>
                 <div className="bg-white h-full w-50 rounded-md justify-center items-center flex flex-col border-2 border-gray-300">
                    <h1 className="text-xs text-gray-500">Business Registrations</h1>
                    <h1 className="text-4xl">{businessRegistrations.length}</h1>
                 </div>
            </div>
            <BusinessRegistrationTable businessRegistrations={businessRegistrations}/>
            
        </section>
     )
}
export default Admin;