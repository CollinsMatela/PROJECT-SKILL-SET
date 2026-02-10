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

    const [businessName, setBusinessName] = useState("");
    const [businessAddress, setBusinessAddress] = useState("");
    const [businessType, setBusinessType] = useState("");
    const [businessPermit, setBusinessPermit] = useState("")
    const [fileNameBusinessPermit, setFileNameBusinessPermit] = useState("")
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const explorerFileValidId = useRef(null);
    const explorerFileDocument = useRef(null);
    const showExplorerFile = () => {
            explorerFileValidId.current.click();
    }
    const showExplorerFileBusinessPermit = () => {
            explorerFileDocument.current.click();
    }

    const uploadBusinessPermit = async (e) => {
        const files = Array.from(e.target.files);
        if (!files.length) return;
        if (files.length > 1) return alert("Upload Business Permit"); 

        try {
          const file = files[0];

          setFileNameBusinessPermit(file.name); // display the original file name immediately

          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "unsigned_media_upload");

          const res = await axios.post(
            "https://api.cloudinary.com/v1_1/dhgn8rvvn/image/upload",
            formData
          );

          setBusinessPermit(res.data.secure_url); // store the URL for backend
          
        } catch (error) {
          console.log("Error uploading file: ", error);
        }
    };

    const uploadValidID = async (e) => {
        const files = Array.from(e.target.files);
        if (!files.length) return;
        if (files.length > 1) return alert("1 Valid Id only"); 

        try {
          const file = files[0];

          setFileName(file.name); // display the original file name immediately

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
    
    const SubmitSellerRegistration = async () => {
      try {
           const BusinessData = {
            userId: userProfile?.accountId,
            lastname: lastname,
            firstname: firstname,
            middlename: middlename,
            email: email,
            contact: contact,
            validId: validId,
            businessName: businessName,
            businessAddress: businessAddress,
            businessType: businessType,
            businessPermit: businessPermit,
            latitude: latitude,
            longitude: longitude
           }
           console.log("Business Data:", BusinessData);
           const res = await axios.post(`${import.meta.env.VITE_API_URL}/business-registration`, BusinessData);
           console.log("Response from server:", res.data.business);
           alert("Business registration submitted successfully");

      } catch (error) {
        console.log("Error submitting seller registration: ", error);
      }
    }


    

    return(
        
        <section className="bg-white w-full justify-end items-start flex pb-10">
            <LeftSidebar/>

                  <div className="h-3/4 w-320 pt-10 px-5 space-y-4">
                  <div className="w-full rounded-xl border-2 border-gray-50 p-5 space-y-2">
                    <h1>Fill-out Identity Information</h1>
                    <div className="flex gap-2">
                        <InputField label="Lastname" type="text" name="lastname" placeholder="Enter Lastname" error="" value={lastname} onchange={(e) => setLastname(e.target.value)} readOnly/>
                        <InputField label="Firstname" type="text" name="firstname" placeholder="Enter Firstname" error="" value={firstname} onchange={(e) => setFirstname(e.target.value)} readOnly/>
                        <InputField label="Middlename" type="text" name="middlename" placeholder="Enter Middlename" error="" value={middlename} onchange={(e) => setMiddlename(e.target.value)} readOnly/>
                    </div>
                    <div className="flex gap-2 pr-100">
                        <InputField label="Email" type="email" name="email" placeholder="Enter Email Address (e.g xxx.@gmail.com)" error="" value={email} onchange={(e) => setEmail(e.target.value)} readOnly/>
                        <InputField label="Contact No." type="text" name="contact" placeholder="Enter Contact Number" error="" value={contact} onchange={(e) => setContact(e.target.value)} readOnly/>
                    </div>

                     <div className="justify-center items-end flex pr-100 gap-2">
                     <div className=" h-12 w-full items-start justify-center flex flex-col"><h1 className="font-semibold text-gray-300">{`Valid ID:`}</h1> <span className="text-blue-400">{fileName || "N/A"}</span></div>
                            <button type="button" className="h-12 w-12 bg-gray-100 rounded-xl cursor-pointer justify-center items-center flex" 
                                    onClick={showExplorerFile}>
                               <img src={ImageIcon} />
                            </button>
                            <input
                              type="file"
                              accept="image/*"
                              ref={explorerFileValidId}
                              onChange={uploadValidID}
                              hidden
                            />
                    </div>
                    
                  </div>

                  <div className="w-full rounded-xl border-2 border-gray-50 p-5">
                    <h1>Fill-out Business Information</h1>
                    <div className="flex gap-2">
                        <InputField label="Business Name" type="text" name="Business Name" placeholder="Enter Business Name" error="" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                        <InputField label="Business Address" type="text" name="Business Address" placeholder="Enter Business Address" error="" value={businessAddress} onChange={(e) => setBusinessAddress(e.target.value)} />

                        <div className="w-full flex flex-col">
                            <label htmlFor="Business Type" className="mb-1 font-semibold text-gray-300">Business Type</label>
                        <div className="bg-gray-100 h-12 w-full justify-center items-center flex rounded-xl p-2">
                            <select name="businessType" className="w-full h-full outline-none" onChange={(e) => setBusinessType(e.target.value)} value={businessType}>
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
                        <div className=" h-12 w-full items-start justify-center flex flex-col"><h1 className="font-semibold text-gray-300">{`Business Permit:`}</h1> <span className="text-blue-400">{ fileNameBusinessPermit || "N/A"}</span></div>
                        <button className="h-12 w-12 bg-gray-100 rounded-xl cursor-pointer justify-center items-center flex" onClick={showExplorerFileBusinessPermit}>
                                <img src={ImageIcon} />
                        </button>
                        <input type="file" name="file" id="file" ref={explorerFileDocument} onChange={uploadBusinessPermit} hidden />
                    </div>
                 </div>

                 <div className="w-full rounded-xl border-2 border-gray-50 p-5">
                    <h1>Fill-out Location Details </h1>
                    <div className="justify-center items-start flex flex-col gap-2 pr-100">
                        <InputField label="Latitude" type="text" name="Latitude" placeholder="Enter Latitude" error="" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
                        <InputField label="Longitude" type="text" name="Longitude" placeholder="Enter Longitude" error="" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
                        <button className="h-12 bg-gray-100 rounded-xl cursor-pointer justify-center items-center flex px-2 gap-2 mt-2" onClick={() => setLocationPicker(prev => !prev)}>
                                <img src={ImageIcon} />
                                <h1>Click to find location</h1>
                        </button>
                        
                        {locationPicker && (<LocationPicker/>)}
                    </div>
                    
                   
                 </div>
                      <div className="justify-end items-end flex">
                        <button className="bg-blue-500 h-12 w-50 text-sm font-bold text-white rounded-xl cursor-pointer hover:bg-blue-600"
                        onClick={SubmitSellerRegistration}>SUBMIT</button>
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