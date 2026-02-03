import axios from "axios"
import { useEffect, useState } from "react"
import ViewProfile from "../Pages/ViewProfile"
import defualtProfile from "../Images/default_profile.png"
import { useNavigate } from "react-router-dom"
import Footer from "./Footer"
import SellerRegistration from "../Pages/SellerRegistration"


const RightSideBar = () =>{

    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const fetchAllUser = async () => {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/fetchUsers`);
                console.log(res.data.message, res.data.users);
                setUsers(res.data.users);
            }
            fetchAllUser();
        } catch (error) {
            console.log(error)
        }
    },[])

    const handleUserClick = (accountId) => {
        navigate(`/view-profile/${accountId}`);
    }
    const handleSellerRegistration = () =>{
        navigate('/seller-registration');
    }

 return(
        <aside className="flex-1 justify-center items-center flex flex-col p-2 pt-10">

            <div className="bg-gray-100 w-80 rounded-2xl p-2 mb-8 justify-end items-center flex">
                <div className="bg-white h-10 w-10 rounded-xl hover:w-30 transition-all duration-300 ease-in-out cursor-pointer justify-center items-center flex"
                     onClick={handleSellerRegistration}>
                  
                </div>
            </div>

            <div className="flex flex-col">
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-sm mb-2 font-medium">Suggested for you!</h1>
                    <h1 className="text-xs mb-2 text-blue-500 cursor-pointer">See all</h1>
                </div>
                
            
            {users.map((user) => (           
                    <div key={user?.accountId} className="border-1 border-gray-100  rounded-2xl w-80 flex justify-between items-center mb-2 gap-2 p-2">
                        <div className="flex gap-2">
                        {/* Image */}
                        
                            <img src={user?.profile ? user?.profile : defualtProfile} alt="profile" className="object-cover h-10 w-10 rounded-full cursor-pointer" onClick={() => handleUserClick(user?.accountId)} />
                        
                        {/* Name */}
                        <div className="flex flex-col">
                            <h1 className="font-bold text-sm cursor-pointer hover:underline" onClick={() => handleUserClick(user?.accountId)}>{user?.lastname} {user?.firstname}</h1>
                            <h1 className="text-xs text-gray-500">Suggested for you</h1>
                        </div>
                        </div>
                        
                        {/* Follow button */}
                        <div>
                            <button className="h-10 w-10 cursor-pointer text-xs text-gray-500">View</button>
                        </div>
                    </div>
            ))}
            <Footer/>
            </div>
            
        </aside>
        
    )
}
export default RightSideBar