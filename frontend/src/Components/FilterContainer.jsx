import { useState } from "react";

const FilterContainer = () =>{

    const [filterBtn, setFilterBtn] = useState(false);

    return(
        <>
        <div className={`${filterBtn ? "gap-2" : ""} w-full justify-center items-center flex flex-col mb-4 py-2 border-b-1 border-gray-100 transition-all duration-1000 ease-in-out`}>
            <div className="w-full justify-between items-center flex">
                  <h1 className="text-md text-gray-800 font-semibold">Today's pick</h1>
                  <h1 className=" text-xs cursor-pointer text-blue-500" onClick={() => setFilterBtn(prev => !prev)}>{ filterBtn ? "Filter ▾" : "Filter ▴"}</h1>
            </div>
                  
        <div className={`${filterBtn ? "" : "h-0"} w-full justify-center items-center flex gap-2 transition-all duration-1000 ease-in-out`}>

             <div className="justify-center items-center flex flex-col flex-1">
                  <label htmlFor="Baranggay" className={`${filterBtn ? "" : "hidden"} w-full justify-start items-center flex text-sm text-gray-300 font-bold`}>Town</label>
                 <input type="text" name="Baranggay" id="Baranggay" placeholder="N/A"
                        className={`${filterBtn ? "" : "hidden"} outline-none border-1 h-8 w-full border-gray-100 rounded-md p-1 text-xs transition-all duration-1000 ease-in-out`} />
             </div>

             <div className="justify-center items-center flex flex-col flex-1">
                  <label htmlFor="Baranggay" className={`${filterBtn ? "" : "hidden"} w-full justify-start items-center flex text-sm text-gray-300 font-bold`}>City</label>
                 <input type="text" name="Baranggay" id="Baranggay" placeholder="N/A"
                        className={`${filterBtn ? "" : "hidden"} outline-none border-1 h-8 w-full border-gray-100 rounded-md p-1 text-xs transition-all duration-1000 ease-in-out`} />
             </div>

             <div className="justify-center items-center flex flex-col flex-1">
                 <label htmlFor="Baranggay" className={`${filterBtn ? "" : "hidden"} w-full justify-start items-center flex text-sm text-gray-300 font-bold`}>Province</label>
                 <input type="text" name="Baranggay" id="Baranggay" placeholder="N/A"
                        className={`${filterBtn ? "" : "hidden"} outline-none border-1 h-8 w-full border-gray-100 rounded-md p-1 text-xs transition-all duration-1000 ease-in-out`} />
             </div>

             
        </div>
        <button className={`${filterBtn ? "h-8" : "h-0"} bg-black w-full rounded-md text-white cursor-pointer text-lg font-nanum transition-all duration-1000 ease-in-out`}>
            Filter posts
        </button>
        </div>
        
        </>
    )
}
export default FilterContainer;