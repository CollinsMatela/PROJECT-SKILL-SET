import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const ReviewModal = ({onClose, businessDetail}) => {
    const {userProfile} = useContext(AuthContext);
    const [oneStar, setOneStar] = useState(false);
    const [twoStar, setTwoStar] = useState(false);
    const [threeStar, setThreeStar] = useState(false);
    const [fourStar, setFourStar] = useState(false);
    const [fiveStar, setFiveStar] = useState(false);

    const OneStarHandler = () => {
          setOneStar(true);
          setTwoStar(false)
          setThreeStar(false)
          setFourStar(false)
          setFiveStar(false)
    }
    const TwoStarHandler = () => {
          setOneStar(true);
          setTwoStar(true)
          setThreeStar(false)
          setFourStar(false)
          setFiveStar(false)
    }
    const ThreeStarHandler = () => {
          setOneStar(true);
          setTwoStar(true)
          setThreeStar(true)
          setFourStar(false)
          setFiveStar(false)
    }
    const FourStarHandler = () => {
          setOneStar(true);
          setTwoStar(true)
          setThreeStar(true)
          setFourStar(true)
          setFiveStar(false)
    }
    const FiveStarHandler = () => {
          setOneStar(true);
          setTwoStar(true)
          setThreeStar(true)
          setFourStar(true)
          setFiveStar(true)
    }
     return(
        <section className="fixed inset-0 z-[9999] justify-center items-center flex flex-col">
            <div className="absolute inset-0 bg-black/80" onClick={onClose}></div>
            <div className="relative bg-white w-[500px] rounded-xl p-4 space-y-4">

                <div className="justify-center items-center flex h-10">
                    <h1 className="font-bold text-lg">{businessDetail.businessName}</h1>
                </div>
                <div className="justify-center items-center flex gap-2">
                    <img src={userProfile?.profile} className="h-12 w-12 rounded-full"/>
                    <div className="flex flex-col h-full w-full">
                        <h1 className="font-bold text-lg">{userProfile?.lastname} {userProfile?.firstname}</h1>
                        <h1 className="text-xs text-gray-500">Your review will be posted publicly.</h1>
                    </div>
                </div>
                <div className="justify-between items-center flex w-full">
                    <h1 className="text-lg">Rating</h1>
                    <div className=" justify-center items-center flex">
                        <h1 className={`text-6xl ${oneStar ? "text-yellow-500" : "text-gray-300"}`} onClick={() => OneStarHandler()}>{oneStar ? "★" : "☆"}</h1>
                        <h1 className={`text-6xl ${twoStar ? "text-yellow-500" : "text-gray-300"}`} onClick={() => TwoStarHandler()}>{twoStar ? "★" : "☆"}</h1>
                        <h1 className={`text-6xl ${threeStar ? "text-yellow-500" : "text-gray-300"}`} onClick={() => ThreeStarHandler()}>{threeStar ? "★" : "☆"}</h1>
                        <h1 className={`text-6xl ${fourStar ? "text-yellow-500" : "text-gray-300"}`} onClick={() => FourStarHandler()}>{fourStar ? "★" : "☆"}</h1>
                        <h1 className={`text-6xl ${fiveStar ? "text-yellow-500" : "text-gray-300"}`} onClick={() => FiveStarHandler()}>{fiveStar ? "★" : "☆"}</h1>
                    </div>
                    
                </div>
                <textarea className={"bg-white border-1 border-black w-full h-20 rounded-xl p-2"} name="review" id="review" placeholder="Share your personal review in this business"></textarea>
                <button className="bg-black text-sm h-12 w-full rounded-xl text-white font-bold cursor-pointer">Submit</button>
            </div>
        </section>
     )
}
export default ReviewModal;