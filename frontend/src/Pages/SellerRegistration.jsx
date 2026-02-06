import LeftSidebar from "../Components/LeftSidebar";
import InputField from "../Components/InputField";
import ImageIcon from "../Images/image.png"
import { useContext, useRef, useState } from "react";
import LocationPicker from "../Components/LocationPicker";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const SellerRegistration = () => {

    const {userProfile} = useContext(AuthContext);
    const [locationPicker, setLocationPicker] = useState(false);

    const [lastname, setLastname] = useState(userProfile?.lastname || "")
    const [firstname, setFirstname] = useState(userProfile?.firstname || "")
    const [middlename, setMiddlename] = useState(userProfile?.middlename || "")
    const [email, setEmail] = useState(userProfile?.email || "")
    const [contact, setContact] = useState(userProfile?.contact || "")
    const [validId, setValidId] = useState("")
    const [fileName, setFileName] = useState("")

    const explorerFile = useRef(null);
    const showExplorerFile = () => {
          explorerFile.current.click();
    }

    const uploadValidID = async (e) => {
  const files = Array.from(e.target.files);
  if (files.length > 1) return alert("1 Valid Id only");

  try {
    const file = files[0];

    setFileName(file.name); // display the original file name immediately
    alert(file.name); // ✅ works immediately

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_media_upload");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dhgn8rvvn/image/upload",
      formData
    );

    setValidId(res.data.secure_url); // store the URL for backend
  } catch (error) {
    console.log("Error uploading file: ", error);
  }
};


    

    return(
        
        <section className="bg-white w-full justify-end items-start flex pb-10">
            <LeftSidebar/>

                  <div className="h-3/4 w-320 pt-10 px-5 space-y-4">
                  <div className="w-full rounded-xl border-2 border-gray-50 p-5 space-y-2">
                    <h1>Fill-out Identity Information</h1>
                    <div className="flex gap-2">
                        <InputField label="Lastname" type="text" name="text" placeholder="Enter Lastname" error="" value={lastname}/>
                        <InputField label="Firstname" type="text" name="text" placeholder="Enter Firstname" error="" value={firstname}/>
                        <InputField label="Middlename" type="text" name="text" placeholder="Enter Middlename" error="" value={middlename}/>
                    </div>
                    <div className="flex gap-2 pr-100">
                        <InputField label="Email" type="email" name="email" placeholder="Enter Email Address (e.g xxx.@gmail.com)" error="" value={email}/>
                        <InputField label="Contact No." type="text" name="contact" placeholder="Enter Contact Number" error="" value={contact}/>
                    </div>
                     <div className="justify-center items-end flex pr-100 gap-2">
                            {fileName && (<h1 className=" h-12 w-full justify-start items-center flex">Selected file: {fileName}</h1>)}
                            
                            
                            <button type="button" className="h-12 w-12 bg-gray-100 rounded-xl cursor-pointer justify-center items-center flex" onClick={showExplorerFile}>
                               <img src={ImageIcon} />
                            </button>
                            <input type="file" name="file" id="file" accept="image/*" ref={explorerFile} onChange={uploadValidID} hidden />
                    </div>
                    
                  </div>

                  <div className="w-full rounded-xl border-2 border-gray-50 p-5">
                    <h1>Fill-out Business Information</h1>
                    <div className="flex gap-2">
                        <InputField label="Business Name" type="text" name="Business Name" placeholder="Enter Business Name" error="" value="" onChange=""/>
                        <InputField label="Business Address" type="text" name="Business Address" placeholder="Enter Business Address" error="" value="" onChange=""/>

                        <div className="w-full flex flex-col">
                            <label htmlFor="Business Type" className="mb-1 font-semibold text-gray-300">Business Type</label>
                        <div className="bg-gray-100 h-12 w-full justify-center items-center flex rounded-xl p-2">
                            <select name="businessType" className="w-full h-full outline-none">
                            <option value="">Select business type</option>
                            <option value="food">Food</option>
                            <option value="service">Service</option>
                            <option value="retail">Retail</option>
                            </select>
                        </div>
                        </div>
                        
                    
                    </div>
                    <div className="flex gap-2">
                        
                    </div>
                    
                  </div>

                  <div className="w-full rounded-xl border-2 border-gray-50 p-5">
                    <h1>Fill-out Business Document </h1>
                    <div className="justify-center items-end flex gap-2 pr-100">
                        <InputField label="Business Permit" type="text" name="businessPermit" placeholder="Insert Business Permit" error="" value="" onChange=""/>
                        <button className="h-12 w-12 bg-gray-100 rounded-xl cursor-pointer justify-center items-center flex" onClick={showExplorerFile}>
                                <img src={ImageIcon} />
                        </button>
                        <input type="file" name="file" id="file" ref={explorerFile} hidden />
                    </div>
                 </div>

                 <div className="w-full rounded-xl border-2 border-gray-50 p-5">
                    <h1>Fill-out Location Details </h1>
                    <div className="justify-center items-start flex flex-col gap-2 pr-100">
                        <InputField label="Latitude" type="text" name="Latitude" placeholder="Enter Latitude" error="" value="" onChange=""/>
                        <InputField label="Longitude" type="text" name="Longitude" placeholder="Enter Longitude" error="" value="" onChange =""/>
                        <button className="h-12 bg-gray-100 rounded-xl cursor-pointer justify-center items-center flex px-2 gap-2 mt-2" onClick={() => setLocationPicker(prev => !prev)}>
                                <img src={ImageIcon} />
                                <h1>Click to find location</h1>
                        </button>
                        
                        {locationPicker && (<LocationPicker/>)}
                    </div>
                    
                   
                 </div>
                      <div className="justify-end items-end flex">
                        <button className="bg-blue-500 h-12 w-50 text-sm font-bold text-white rounded-xl cursor-pointer hover:bg-blue-600">SUBMIT</button>
                      </div>
                      
                  </div>

                  <div className="h-screen w-75 justify-start items-center flex flex-col gap-2 border-r-2 border-gray-100 pt-10 px-5">
                    <div className="h-10 w-full bg-gray-100 rounded-xl justify-center items-center flex text-gray-300 text-sm font-bold">Identity Information</div>
                    <div className="h-10 w-full bg-gray-100 rounded-xl justify-center items-center flex text-gray-300 text-sm font-bold">Business Information</div>
                    <div className="h-10 w-full bg-gray-100 rounded-xl justify-center items-center flex text-gray-300 text-sm font-bold">Business Documents</div>
                    <div className="h-10 w-full bg-gray-100 rounded-xl justify-center items-center flex text-gray-300 text-sm font-bold">Location Details</div>
                    <div className="h-10 w-full bg-gray-100 rounded-xl justify-center items-center flex text-gray-300 text-sm font-bold">Agreement & Rules</div>
                  </div>
        </section>
    )
}
export default SellerRegistration;