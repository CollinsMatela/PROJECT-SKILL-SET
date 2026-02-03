import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const MapSideBar = () => {

    const navigate = useNavigate();
    const {userProfile} = useContext(AuthContext);
    const handleGotoDashboard = () => {
          navigate(`/dashboard/${userProfile?.accountId}`)
    }
    return(
        <>
        <div className="absolute inset-0 z-[1000] h-15 w-full bg-white justify-start items-center flex px-20 ">
             <div className="bg-green-500 h-10 w-10 rounded-md justify-center items-center flex border-b-4 border-black hover:bg-green-600 cursor-pointer transition-all duration-300 ease-in hover:-translate-y-1"
                   onClick={handleGotoDashboard}>
                <h1 className="text-white font-nanum font-bold text-xl">SS+</h1>
             </div>
        </div>
        </>
    )
}

export default MapSideBar;