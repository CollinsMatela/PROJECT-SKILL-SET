import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const MapSideBar = ({businessName, businessType, businessRating}) => {

    const navigate = useNavigate();
    const {userProfile} = useContext(AuthContext);
    
    const [overview, setOverview] = useState(true);
    const [reviews, setReviews] = useState(false);
    const [about, setAbout] = useState(false);

    const handleOverview = () => {
        setOverview(true);
        setReviews(false);
        setAbout(false);
    }
    const handleReviews = () => {
        setOverview(false);
        setReviews(true);
        setAbout(false);
    }
    const handleAbout = () => {
        setOverview(false);
        setReviews(false);
        setAbout(true);
    }
    
    
    return(
        <>
        <div className="absolute left-20 h-screen z-[1000] h-100 w-100 bg-white justify-start items-start flex flex-col px-2">
            
                <h1 className="text-2xl font-bold mb-4 mt-10">DETAILS</h1>
                <input type="text" className="h-12 w-full bg-gray-200 rounded-xl text-gray-500 p-2 mb-4" placeholder="Search Business"/>
                <div className="w-full justify-between items-center flex">
                    <div>
                        <h1 className="text-2xl font-bold">{businessName}</h1>
                        <h1 className="text-xs text-gray-500">Business Type: {businessType}</h1>
                    </div>
                    <div className="h-10 w-10 justify-center items-center flex">
                        <h1 className="text-xl font-bold text-black">{businessRating} <span className="text-yellow-500">★</span></h1>
                    </div>
                </div>

                <div className="w-full border-b-2 border-gray-100 justify-start items-start flex my-4 gap-2">
                    <button className={`${overview ? 'bg-black text-white' : 'bg-white text-black'} h-10 w-full text-xs px-4 py-2 rounded-md transition-all duration-300 ease-in-out cursor-pointer`} onClick={handleOverview}>Overview</button>
                    <button className={`${reviews ? 'bg-black text-white' : 'bg-white text-black'} h-10 w-full text-xs px-4 py-2 rounded-md transition-all duration-300 ease-in-out cursor-pointer`} onClick={handleReviews}>Reviews</button>
                    <button className={`${about ? 'bg-black text-white' : 'bg-white text-black'} h-10 w-full text-xs px-4 py-2 rounded-md transition-all duration-300 ease-in-out cursor-pointer`} onClick={handleAbout}>About</button>
                </div>
                
             
        </div>
        </>
    )
}

export default MapSideBar;