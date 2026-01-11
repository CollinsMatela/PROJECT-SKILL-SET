import axios from "axios"
import { useEffect, useState } from "react"
import Footer from "./Footer"


const RightSideBar = () =>{

    const [users, setUsers] = useState([])

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

 return(
        <aside className="flex-1 justify-center items-center flex flex-col p-2 pt-10">
            <div className="flex flex-col">
                <h1 className="text-sm mb-2">Suggested for you!</h1>
            
            {users.map((user) => (           
                    <div key={user?.accountId} className="border-1 border-gray-100  rounded-2xl w-80 flex justify-between items-center mb-2 gap-2 p-2">
                        <div className="flex gap-2">
                        {/* Image */}
                        <div className="bg-green-500 h-11 w-11 rounded-full justify-center items-center flex">
                            <img src={user?.profile} alt="profile" className="object-cover h-10 w-10 rounded-full border-2 border-white" />
                        </div>
                        {/* Name */}
                        <div className="flex flex-col">
                            <h1 className="font-bold text-sm cursor-pointer hover:underline" onClick={() => alert(user?.accountId)}>{user?.lastname} {user?.firstname}</h1>
                            <h1 className="text-xs text-gray-500">Suggested for you</h1>
                        </div>
                        </div>
                        
                        {/* Follow button */}
                        <div>
                            <button className="h-10 w-10 cursor-pointer text-xs text-green-500">View</button>
                        </div>
                    </div>
            ))}
            <Footer/>
            </div>
            
        </aside>
        
    )
}
export default RightSideBar