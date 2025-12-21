import { useContext, useEffect } from "react"
import DashboardNav from "../Components/DashboardNav"
import { AuthContext } from "../Context/AuthContext"
import axios from "axios"

const Dashboard = () =>{

      const {userAccount, setUserProfile} = useContext(AuthContext);

      useEffect(() => {
      if (!userAccount?.accountId) return
      alert(userAccount.accountId);

      const fetchProfile = async () => {
            try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/${userAccount.accountId}`);
            console.log(res.data.message);
            console.log(res.data.ProfileInformation);
            setUserProfile(res.data.ProfileInformation);
            } catch (error) {
             console.error(error.response?.data?.message || error.message);
            } 
      }
      fetchProfile();
      },[userAccount])
      
      return(
      <>
      <main>
        <DashboardNav/>
        <section className="bg-white h-500 w-full flex flex-col justify-start items-center px-20">
          
          <div className="bg-green-100 h-100 w-full justify-center items-center flex flex-col">
            <h1 className="font-bold text-2xl text-gray-900">Welcome back! 🎉</h1>
            <h1 className="font-bold text-2xl text-gray-900">Ready to share your skills or find someone awesome today?</h1>
          </div>
                
            
           
        </section>
      </main>
      </>
      )
}
export default Dashboard