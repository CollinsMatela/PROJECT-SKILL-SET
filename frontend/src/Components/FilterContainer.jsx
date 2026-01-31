import { useContext, useMemo, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import FilterPostModal from "./FilterPostModal";
import Dashboard from "../Pages/Dashboard";

const FilterContainer = () =>{

    const {setPostings, postings} = useContext(AuthContext);

    const [filterBtn, setFilterBtn] = useState(false);
    const [showFilterPostModal, setFilterPostModal] = useState(false);
 

    const [town, setTown] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");

    const Refresher = () => {
        setTown("");
        setCity("");
        setProvince("");
        
    }
    const filteredPost = useMemo(() => {
        if (!postings) return [];

        const filtering =  postings.filter(p =>
            (!town || p.baranggay.toLowerCase() === town.toLowerCase()) &&
            (!city || p.city.toLowerCase() === city.toLowerCase()) &&
            (!province || p.province.toLowerCase() === province.toLowerCase())
        );

        return filtering;
    }, [postings, town, city, province]);

    const handleFilterClick = () => {
        if(!town && !city && !province) return alert("Please enter at least 1");
        setFilterPostModal(true);
        setFilterBtn(false);
    }


    return(
        <>
        {showFilterPostModal && (<FilterPostModal onClose={() => setFilterPostModal(false)}
                                                  filteredPostings={filteredPost}/>)}
        {/* {<Dashboard showFilterPostModal={showFilterPostModal}/>} */}

        <div className={`${filterBtn ? "gap-2" : "h-10"} w-full justify-start items-center flex flex-col mb-4 py-2 border-b-1 border-gray-100 transition-all duration-1000 ease-in-out`}>
            <div className="w-full justify-between items-center flex">
                  <h1 className="text-md text-gray-800 font-semibold">Today's pick</h1>
                  <h1 className=" text-xs cursor-pointer text-blue-500" onClick={() => setFilterBtn(prev => !prev)}>{ filterBtn ? "Filter ▾" : "Filter ▴"}</h1>
            </div>
                  
        <div className={`${filterBtn ? "h-auto" : "h-0"} w-full justify-center items-center flex gap-2 transition-all duration-3000`}>

             <div className="justify-center items-center flex flex-col flex-1">
                  <label htmlFor="Baranggay" className={`${filterBtn ? "" : "hidden"} w-full justify-start items-center flex text-sm text-gray-300 font-bold`}>Town</label>
                 <input type="text" name="Baranggay" id="Baranggay" placeholder="N/A"
                        className={`${filterBtn ? "" : "hidden"} outline-none border-1 h-8 w-full border-gray-100 rounded-md p-1 text-xs transition-all duration-1000 ease-in-out`}
                        value={town}
                        onChange={(e) => setTown(e.target.value)}
                        />
             </div>

             <div className="justify-center items-center flex flex-col flex-1">
                  <label htmlFor="Baranggay" className={`${filterBtn ? "" : "hidden"} w-full justify-start items-center flex text-sm text-gray-300 font-bold`}>City</label>
                 <input type="text" name="Baranggay" id="Baranggay" placeholder="N/A"
                        className={`${filterBtn ? "" : "hidden"} outline-none border-1 h-8 w-full border-gray-100 rounded-md p-1 text-xs transition-all duration-1000 ease-in-out`}
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />
             </div>

             <div className="justify-center items-center flex flex-col flex-1">
                 <label htmlFor="Baranggay" className={`${filterBtn ? "" : "hidden"} w-full justify-start items-center flex text-sm text-gray-300 font-bold`}>Province</label>
                 <input type="text" name="Baranggay" id="Baranggay" placeholder="N/A"
                        className={`${filterBtn ? "" : "hidden"} outline-none border-1 h-8 w-full border-gray-100 rounded-md p-1 text-xs transition-all duration-1000 ease-in-out`}
                        value={province}
                        onChange={(e) => setProvince(e.target.value)} />
             </div>

             
        </div>
        <button className={`${filterBtn ? "h-8 opacity-100" : "h-0 opacity-0"} bg-black w-full rounded-md text-white cursor-pointer text-lg font-nanum transition-all duration-2000 ease-in-out`}
                onClick={handleFilterClick}>
            Filter posts
        </button>
        </div>
        
        </>
    )
}
export default FilterContainer;