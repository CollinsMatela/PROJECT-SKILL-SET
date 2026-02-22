import { useContext, useEffect, useState } from "react";
import LeftSidebar from "../Components/LeftSidebar";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import BusinessRegistrationTable from "../Components/BusinessRegistrationTable";
import UserTable from "../Components/UserTable";


const Admin = () => {
     const {userProfile} = useContext(AuthContext);
     const [businessRegistrations, setBusinessRegistrations] = useState([]);
     const [users, setUsers] = useState([]);

     const fetchBusinessRegistrations = async () => {
              try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/fetch-seller-registration`);
                console.log(res.data.message, res.data.registrations);
                setBusinessRegistrations(res.data.registrations);
              } catch (error) {
                console.log(error);
              }
        }
      const fetchAllUsers = async () => {
         try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/fetchUsers`);
            setUsers(res.data.users);
            console.log(res.data.message, res.data.users);
         } catch (error) {
            console.log(error);
         }
      }

     useEffect(() => {        
        fetchBusinessRegistrations();
        fetchAllUsers();
      }, [userProfile?.accountId]);

     return(
        <section className="w-full justify-start items-center flex flex-col p-10">
            <LeftSidebar/>
            <h1 className="w-300 mb-10 text-2xl">Overview</h1>
            <div className="h-20 w-300 justify-start items-center flex gap-2">
                 <div className="bg-white h-full w-50 rounded-xl justify-center items-center flex flex-col border-1 border-b-4 border-black">
                    <h1 className="text-xs text-gray-500">Registered Users</h1>
                    <h1 className="text-4xl">{users?.length || 0}</h1>
                 </div>
                 <div className="bg-white h-full w-50 rounded-xl justify-center items-center flex flex-col border-1 border-b-4 border-black">
                    <h1 className="text-xs text-gray-500">Registered Business</h1>
                    <h1 className="text-4xl">{businessRegistrations.filter(z => z.status === "verified").length}</h1>
                 </div>
                 <div className="bg-white h-full w-50 rounded-xl justify-center items-center flex flex-col border-1 border-b-4 border-black">
                    <h1 className="text-xs text-gray-500">Pending Business Registrations</h1>
                    <h1 className="text-4xl">{businessRegistrations.filter(z => z.status === "pending").length}</h1>
                 </div>
            </div>
            <UserTable users={users}/>
            <BusinessRegistrationTable businessRegistrations={businessRegistrations}/>
            
            
        </section>
     )
}
export default Admin;