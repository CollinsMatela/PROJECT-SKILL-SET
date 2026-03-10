import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import ReviewModal from "../Components/ReviewModal";

const MapSideBar = ({businessDetail, ListofReviews}) => {

    const navigate = useNavigate();
    const {userProfile, postings} = useContext(AuthContext);
    
    const [overview, setOverview] = useState(true);
    const [reviews, setReviews] = useState(false);
    const [about, setAbout] = useState(false);

    const [reviewModal, setReviewModal] = useState(false);

    const SelectedBusiness = ListofReviews.filter(b => b.businessId === businessDetail.businessId); // All business review

    const fiveStarBar = ListofReviews.filter(b => b.businessId === businessDetail.businessId && b.rating === 5);
    const fivePercentage =  (fiveStarBar.length / SelectedBusiness.length) * 100;
    const fourStarBar = ListofReviews.filter(b => b.businessId === businessDetail.businessId && b.rating === 4);
    const fourPercentage =  (fourStarBar.length / SelectedBusiness.length) * 100;
    const threeStarBar = ListofReviews.filter(b => b.businessId === businessDetail.businessId && b.rating === 3);
    const threePercentage =  (threeStarBar.length / SelectedBusiness.length) * 100;
    const twoStarBar = ListofReviews.filter(b => b.businessId === businessDetail.businessId && b.rating === 2);
    const twoPercentage =  (twoStarBar.length / SelectedBusiness.length) * 100;
    const oneStarBar = ListofReviews.filter(b => b.businessId === businessDetail.businessId && b.rating === 1);
    const onePercentage =  (oneStarBar.length / SelectedBusiness.length) * 100;
    

    const handleOverview = () => {
        setOverview(true);
        setReviews(false);
        setAbout(false);
    }
    const handleReviews = async () => {
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
        {reviewModal && (<ReviewModal onClose={() => setReviewModal(false)} businessDetail={businessDetail}/>)}
        <div className="absolute left-20 h-screen z-[900] h-100 w-100 bg-white justify-start items-start flex flex-col px-2">
            
                <div className="w-full justify-between items-center flex mt-10">
                    <div>
                        <h1 className="text-2xl font-bold">{businessDetail.businessName}</h1>
                        <h1 className="text-xs text-gray-500">Business Type: {businessDetail.businessType}</h1>
                    </div>
                    <div className="h-10 justify-center items-center flex gap-2">
                        <h1 className="text-lg font-bold text-black">{SelectedBusiness.length > 0 ?
                                                                        SelectedBusiness.reduce((sum, reviews) => sum + reviews.rating, 0) / SelectedBusiness.length
                                                                        : 
                                                                        "No Rating"
                                                                        }
                        </h1>
                        <h1 className="text-yellow-500 font-bold">★</h1>
                    </div>
                </div>

                <div className="w-full border-b-2 border-gray-100 justify-start items-start flex my-4 gap-2">
                    <button className={`${overview ? 'bg-black text-white' : 'bg-white text-black'} h-10 w-full text-xs px-4 py-2 rounded-md transition-all duration-300 ease-in-out cursor-pointer`} onClick={handleOverview}>Overview</button>
                    <button className={`${reviews ? 'bg-black text-white' : 'bg-white text-black'} h-10 w-full text-xs px-4 py-2 rounded-md transition-all duration-300 ease-in-out cursor-pointer`} onClick={handleReviews}>{`Reviews (${SelectedBusiness.length})`}</button>
                    <button className={`${about ? 'bg-black text-white' : 'bg-white text-black'} h-10 w-full text-xs px-4 py-2 rounded-md transition-all duration-300 ease-in-out cursor-pointer`} onClick={handleAbout}>{`Postings (${postings.filter(p => p.accountId === businessDetail.userId).length})`}</button>
                </div>

                {overview && (
                    <div className="w-full space-y-4 overflow-scroll">
                        <h1 className="font-bold text-sm">About Information</h1>
                        <div className="flex gap-2"><img src="none"/><h1 className="text-sm">{businessDetail.businessAddress}</h1></div>
                        <div className="flex gap-2"><img src="none"/><h1 className="text-sm">{businessDetail.email}</h1></div>
                        <div className="flex gap-2"><img src="none"/><h1 className="text-sm">{businessDetail.contact}</h1></div>

                        <div className="bg-white border-b-1 border-t-1 border-gray-300 justify-center items-center flex py-4">
                           <div className="flex-1 flex-col space-y-2">
                            <h1 className="font-bold text-sm">{`Review Summary (${SelectedBusiness.length})`}</h1>
                            <div className="gap-4 justify-center items-center flex">
                                <h1>5</h1>
                                <div className="bg-gray-100 h-2 w-full rounded-full">
                                    <div className={`bg-yellow-500 h-full rounded-md`} style={{width: `${fivePercentage}%`}}></div>
                                </div>
                            </div>
                            <div className="gap-4 justify-center items-center flex">
                                <h1>4</h1>
                                <div className="bg-gray-100 h-2 w-full rounded-full">
                                    <div className="bg-gray-100 h-2 w-full rounded-full">
                                    <div className={`bg-yellow-500 h-full rounded-md`} style={{width: `${fourPercentage}%`}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-4 justify-center items-center flex">
                                <h1>3</h1>
                                <div className="bg-gray-100 h-2 w-full rounded-full">
                                    <div className="bg-gray-100 h-2 w-full rounded-full">
                                    <div className={`bg-yellow-500 h-full rounded-md`} style={{width: `${threePercentage}%`}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-4 justify-center items-center flex">
                                <h1>2</h1>
                                <div className="bg-gray-100 h-2 w-full rounded-full">
                                    <div className="bg-gray-100 h-2 w-full rounded-full">
                                    <div className={`bg-yellow-500 h-full rounded-md`} style={{width: `${twoPercentage}%`}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-4 justify-center items-center flex">
                                <h1>1</h1>
                                <div className="bg-gray-100 h-2 w-full rounded-full">
                                    <div className="bg-gray-100 h-2 w-full rounded-full">
                                    <div className={`bg-yellow-500 h-full rounded-md`} style={{width: `${onePercentage}%`}}></div>
                                    </div>
                                </div>
                            </div>
                            
                           </div>
                           <div className="flex-1 justify-center items-center flex flex-col">
                            <h1 className="text-2xl font-bold">{SelectedBusiness.length > 0 ?
                                                                        SelectedBusiness.reduce((sum, reviews) => sum + reviews.rating, 0) / SelectedBusiness.length
                                                                        : 
                                                                        "No Rating"
                                                                }</h1>
                            <button className="bg-emerald-100 py-2 px-4 rounded-xl font-bold text-emerald-600 cursor-pointer hover:bg-emerald-200" onClick={() => setReviewModal(prev => !prev)}>Write a review</button>
                           </div>
                        </div>
                        <div>
                            <h1  className="font-bold text-sm mb-4">{`Postings (${postings.filter(p => p.accountId === businessDetail.userId).length})`}</h1>
                            {postings.filter(p => p.accountId === businessDetail.userId).map((posting) => (
                                   <div key={posting.postingId} className="h-100 w-full bg-gray-100 mb-2 justify-center items-center flex rounded-xl">
                                    {posting.media?.length > 0 ? 
                                    (<img src={posting.media[0]} alt="" className="h-full w-full object-cover" />)
                                    :
                                    (<div className="bg-white w-full justify-center items-center flex p-10"><h1>{posting.text || "Empty Caption"}</h1></div>)
                                
                                }
                                           
                                   </div>
                            ))}
                        </div>
                    </div>
                    
                )}
                
             
        </div>
        </>
    )
}

export default MapSideBar;