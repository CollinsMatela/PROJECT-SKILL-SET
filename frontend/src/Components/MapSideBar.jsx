import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const MapSideBar = () => {

    const navigate = useNavigate();
    const {userProfile} = useContext(AuthContext);
    
    return(
        <>
        <div className="absolute right-10 mb-10 rounded-md z-[1000] h-100 w-80 bg-white justify-start items-center flex px-20 border-1 border-b-4 border-black">
             
        </div>
        </>
    )
}

export default MapSideBar;