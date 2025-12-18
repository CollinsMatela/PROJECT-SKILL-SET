import { useState, useRef, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import handleEditProfile from "../Services/handleEditProfile";

const EditProfileModal = ({onClose}) =>{

      const {userAccount} = useContext(AuthContext);

      const [profile, setProfile] = useState("");
      const [lastname, setLastname] = useState(userAccount.lastname);
      const [firstname, setFirstname] = useState(userAccount.firstname);
      const [middlename, setMiddlename] = useState(userAccount.middlename);
      const [bio, setBio] = useState("");
      const [availability, setAvailability] = useState("");
      const [email, setEmail] = useState(userAccount.email);
      const [contact, setContact] = useState("");
      const [baranggay, setBaranggay] = useState("");
      const [city, setCity] = useState("");
      const [province, setProvince] = useState("");

      // Profile Function
      const filePicker = useRef(null);
      const showFileExplorer = () =>{
            filePicker.current.click();
      }
      const handleUploadProfile = (e) =>{
            const picture =  e.target.files[0];
            if(!picture) return;

            const previewUrl = URL.createObjectURL(picture); //it convert the image
            setProfile(previewUrl);
      }
      // Add skills Function
      const [skills, setSkills] = useState([]);
      const [skillInput, setSkillInput] = useState("");
      const handleAddSkills = (e) =>{
            if(!skillInput) return;
            setSkills(prev => [...prev, skillInput]);
            setSkillInput("");
      }
      // Add profile links
      const [links, setLinks] = useState([]);
      const [inputLinks, setInputLinks] = useState("");
      const handleProfileLink = () => {
            if(!inputLinks) return;
            setLinks(prev => [...prev, inputLinks]);
            setInputLinks("");
      }
      // Save data function
      const SaveProfileData = async () =>{
            try {
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
                   email: contact,
                   contact: contact,
                   baranggay: baranggay,
                   city: city,
                   province: province
                   }
                  const res = await handleEditProfile(ProfileInformations); 
            } catch (error) {
                  console.log(error)
            }   
      }

      return(
      <div className="fixed inset-0 z-50  h-screen w-full justify-center items-center flex">
           <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div> {/* backdrop */}
            <div className="relative bg-white w-250 p-10 rounded-xl flex flex-col gap-6">
                  <h1 className="font-nanum text-xl">FILL YOUR PROFILE</h1>
                  <div className="justify-between items-end flex">
                        <img src={profile} alt="profile" className="bg-gray-100 h-25 w-25 object-cover"/>
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
                              {skills.map((skill, index) => (
                                    <li key={index} className="bg-green-500 px-4 border-b-1 border-black rounded-full">
                                          <h1 className="text-white text-sm font-medium uppercase">{skill}</h1>
                                    </li>
                              ))}
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
                                    {links.map((link, index) => (
                                     <li key={index} className="bg-green-500 px-4 border-b-1 border-black rounded-full">
                                          <h1 className="text-white text-sm font-medium uppercase">{link}</h1>
                                    </li>
                                    ))}
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
                        onChange={(e) => {setProfile(e.target.value)}}/>    
                  </div>
                  <button className="bg-green-500 h-15 w-full w-50 border-b-2 border-black rounded-md p-2 text-white hover:bg-green-600 cursor-pointer font-nanum text-2xl"
                          onClick={SaveProfileData}>— Save</button>

            </div>
      </div>
      
      );
}
export default EditProfileModal;