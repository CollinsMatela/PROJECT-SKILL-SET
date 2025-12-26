import { useState, useRef, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import handleEditProfile from "../Services/handleEditProfile";
import Loading from "./Loading"

const EditProfileModal = ({onClose}) =>{

      const [loading, setLoading] = useState(false);

      const {userAccount, userProfile, setUserProfile} = useContext(AuthContext);

      const [profile, setProfile] = useState(userProfile?.profile || "");
      const [lastname, setLastname] = useState(userProfile?.lastname || "");
      const [firstname, setFirstname] = useState(userProfile?.firstname || "");
      const [middlename, setMiddlename] = useState(userProfile?.middlename || "");
      const [bio, setBio] = useState(userProfile?.bio || "");
      const [availability, setAvailability] = useState(userProfile?.availability || "");
      const [email, setEmail] = useState(userProfile?.email || "");
      const [contact, setContact] = useState(userProfile?.contact || "");
      const [baranggay, setBaranggay] = useState(userProfile?.baranggay || "");
      const [city, setCity] = useState(userProfile?.city || "");
      const [province, setProvince] = useState(userProfile?.province || "");

      // Profile Function
      const [previewProfile, setPreviewProfile] = useState("");
      const filePicker = useRef(null);
      const showFileExplorer = () =>{
            filePicker.current.click();
      }
      const handleUploadProfile = (e) =>{
            const picture =  e.target.files[0];
            if(!picture) return;

            const reader = new FileReader();
            reader.readAsDataURL(picture);// convert to base64
            reader.onloadend = () => {
                  setPreviewProfile(reader.result); // for preview
                  setProfile(reader.result); // send this base64 to backend
            };
      }
      // Add skills Function
      const [skills, setSkills] = useState(userProfile?.skills || []);
      const [skillInput, setSkillInput] = useState("");
      const handleAddSkills = (e) =>{
            if(!skillInput) return;
            setSkills(prev => [...prev, skillInput]);

            if(userProfile?.skills){
               setUserProfile(prev => ({...prev, 
                                     skills: [...(prev.skills), skillInput]
                                    }))   
            }
            setSkillInput("");
      }
      // Add profile links
      const [links, setLinks] = useState(userProfile?.links || []);
      const [inputLinks, setInputLinks] = useState("");
      const handleProfileLink = () => {
            if(!inputLinks) return;
            setLinks(prev => [...prev, inputLinks]);

            if(userProfile?.links){
                  setUserProfile(prev => ({...prev,
                                  links: [...(prev.links), inputLinks]            
                  }))
            }
            setInputLinks("");
      }
      // Save data function
      const SaveProfileData = async () =>{
            try {
                  setLoading(true);
                 const ProfileInformations = {
                   accountId: userAccount.accountId,
                   profile: profile,
                   lastname: lastname,
                   firstname: firstname,
                   middlename: middlename,
                   bio: bio,
                   skills: skills,
                   links: links,
                   availability: availability,
                   email: email,
                   contact: contact,
                   baranggay: baranggay,
                   city: city,
                   province: province
                   }
                  const res = await handleEditProfile(ProfileInformations);
                  console.log(res.data.message);
                  console.log(res.data.ProfileInformation.accountId);
                  setUserProfile(prev => ({...prev, 
                                           ...res.data.ProfileInformation}))
                  setLoading(false);
                  onClose();
            } catch (error) {
                  console.log(error)
            }   
      }

      return(
      <div className="fixed inset-0 z-50  h-screen w-full justify-center items-center flex">
            {loading && <Loading/>}
           <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div> {/* backdrop */}
            <div className="relative bg-white w-250 p-10 rounded-xl flex flex-col gap-6">
                  <h1 className="text-md">FILL YOUR PROFILE</h1>
                  <div className="justify-between items-end flex">
                     
                        <img src={previewProfile ? previewProfile : userProfile?.profile} alt="profile" className="bg-gray-100 h-25 w-25 object-cover"/>
                        
                        <button className="bg-gray-100 h-10 w-40 border-1 border-gray-300 rounded-md p-2 text-gray-500 text-sm hover:bg-gray-200 cursor-pointer"
                                onClick={showFileExplorer}>
                              — Upload Profile
                        </button>
                        {/* THIS is what opens the file explorer */}
                        <input
                        type="file"
                        ref={filePicker}
                        accept="image/*"
                        onChange={handleUploadProfile}
                        hidden
                        />
                  </div>
                  
                  <div className="justify-between items-center flex gap-2">
                        <input type="text" className="bg-gray-100 h-10 w-full outline-none rounded-md p-4" placeholder="Enter Lastname" 
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}/>
                        <input type="text" className="bg-gray-100 h-10 w-full outline-none rounded-md p-4" placeholder="Enter Firstname" 
                        value={firstname}
                        onChange = {(e) => setFirstname(e.target.value)}/>
                        <input type="text" className="bg-gray-100 h-10 w-full outline-none rounded-md p-4" placeholder="Enter Middlename" 
                        value={middlename}
                        onChange = {(e)=>setMiddlename(e.target.value)}/>                  
                  </div>
                  <div>
                        <textarea className="w-full p-2 outline-none border-2 border-gray-100"
                                  name="bio" id="bio" placeholder="Enter you bio"
                                  value={bio}
                                  onChange = {(e) => setBio(e.target.value)}
                        ></textarea>
                  </div>
                  <div className="justify-center items-center flex flex-col gap-2">
                        <div className="justify-center w-full items-center flex gap-2">
                              <input type="text" className="bg-gray-100 h-10 w-full outline-none rounded-md p-4" placeholder="Display your skills"
                              value={skillInput}
                              onChange={(e)=>{setSkillInput(e.target.value)}}
                              />
                              <button className="bg-gray-100 h-10 w-50 border-1 border-gray-300 rounded-md p-2 text-gray-500 text-sm hover:bg-gray-200 cursor-pointer"
                              onClick={handleAddSkills}>— Add Skill</button>
                        </div>
                        <div className="justify-center items-start w-full overflow-hidden">
                              <ul className="justify-start items-center flex gap-2">
                              {userProfile?.skills ?  
                                    userProfile?.skills.map((skill, index) => (
                                    <li 
                                    key={index} 
                                    className="bg-blue-100 border-1 border-blue-400 text-blue-400 px-4 rounded-md hover:bg-red-100 hover:border-red-400 hover:text-red-400 cursor-pointer text-sm font-medium uppercase"
                                    onClick={() => { 
                                          setSkills(prev => prev.filter(z => z !== skill)); 
                                          setUserProfile(prev => ({...prev, skills: prev.skills.filter(z => z !== skill)}));
                                    }}
                                    >
                                    <h1>{skill}</h1>
                                    </li>
                                    ))
                                    : 
                                    skills.map((skill, index) => (
                                          <li 
                                          key={index} 
                                          className="bg-blue-100 border-1 border-blue-400 text-blue-400 px-4 rounded-md hover:bg-red-100 hover:border-red-400 hover:text-red-400 cursor-pointer text-sm font-medium uppercase"
                                          onClick={() => { 
                                                setSkills(prev => prev.filter(z => z !== skill)); 
                                          }}
                                          >
                                          <h1>{skill}</h1>
                                          </li>
                                    ))
                              }
                              </ul>
                              </div>

                        
                  </div>
                  <div className="justify-center items-center flex flex-col gap-2">
                        <div className="justify-center w-full items-center flex gap-2">
                              <input type="text" className="bg-gray-100 h-10 w-full outline-none rounded-md p-4" placeholder="Display your profile"
                              value={inputLinks}
                              onChange={(e) => {setInputLinks(e.target.value)}}/>
                              <button className="bg-gray-100 h-10 w-50 border-1 border-gray-300 rounded-md p-2 text-gray-500 text-sm hover:bg-gray-200 cursor-pointer"
                              onClick={handleProfileLink}>— Add Link</button>
                        </div>
                        <div className="justify-center items-start w-full overflow-hidden">
                              <ul className="justify-start items-center flex gap-2">
                                    {userProfile?.links ?
                                    userProfile?.links.map((link, index) => (
                                     <li key={index} className="bg-blue-100 border-1 border-blue-400 text-blue-400 px-4 rounded-md hover:bg-red-100 hover:border-red-400 hover:text-red-400 cursor-pointer text-sm font-medium uppercase"
                                     onClick={() => {setLinks(prev => prev.filter(z => z !== link));
                                                     setUserProfile(prev => ({...prev, links: prev.links.filter(z => z !== link)}))
                                     }}>
                                          <h1>{link}</h1>
                                    </li>
                                    ))
                                    :
                                    links.map((link, index) => (
                                     <li key={index} className="bg-blue-100 border-1 border-blue-400 text-blue-400 px-4 rounded-md hover:bg-red-100 hover:border-red-400 hover:text-red-400 cursor-pointer text-sm font-medium uppercase"
                                     onClick={() => setLinks(prev => prev.filter(z => z ==! link))}>
                                          <h1>{link}</h1>
                                    </li>
                                    ))
                                    }
                              </ul>
                              
                        </div>
                        
                  </div>
                  <div>
                        <select className="bg-white h-10 w-full outline-none border-2 border-gray-100 rounded-md"
                        value={availability}
                        onChange={(e) => {setAvailability(e.target.value)}}
                               name="availability" id="availability">
                              <option value={""}>Select Availability</option>
                              <option value={"Active"}>Active</option>
                              <option value={"Inactive"}>Inactive</option>
                        </select>
                  </div>
                  <div className="justify-start items-start flex gap-2">
                        <input type="text" className="bg-gray-100 h-10 w-75 outline-none rounded-md p-4" placeholder="Enter Email Address" 
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}/>
                        <input type="text" className="bg-gray-100 h-10 w-75 outline-none rounded-md p-4" placeholder="Enter Contact No."
                        value={contact}
                        onChange={(e) => {setContact(e.target.value)}}/>
                  </div>
                  <div className="justify-between items-center flex gap-2">
                        <input type="text" className="bg-gray-100 h-10 w-full outline-none rounded-md p-4" placeholder="Enter Baranggay"
                        value={baranggay}
                        onChange={(e) => {setBaranggay(e.target.value)}}/>
                        <input type="text" className="bg-gray-100 h-10 w-full outline-none rounded-md p-4" placeholder="Enter City/Municipality"
                        value={city}
                        onChange={(e) => {setCity(e.target.value)}}/>
                        <input type="text" className="bg-gray-100 h-10 w-full outline-none rounded-md p-4" placeholder="Enter Province"
                        value={province}
                        onChange={(e) => {setProvince(e.target.value)}}/>    
                  </div>
                  <button className="bg-green-500 h-15 w-full w-50 border-b-2 border-black rounded-md p-2 text-white hover:bg-green-600 cursor-pointer font-nanum text-2xl"
                          onClick={SaveProfileData}>— Save</button>

            </div>
      </div>
      
      );
}
export default EditProfileModal;