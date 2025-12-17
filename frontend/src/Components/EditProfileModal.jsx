

const EditProfileModal = ({onClose}) =>{
      return(
      <div className="fixed inset-0 z-50  h-screen w-full justify-center items-center flex">
           <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div> {/* backdrop */}
            <div className="relative bg-white w-250 p-10 rounded-xl flex flex-col gap-6">
                  <h1 className="font-nanum text-xl">Edit your profile</h1>
                  <div className="justify-between items-end flex">
                        <img src="profile" alt="profile" className="bg-gray-100 h-25 w-25"/>
                        <button className="bg-green-500 h-12 w-40 border-b-2 border-black rounded-md p-2 text-white hover:bg-green-600 cursor-pointer">
                              — Upload Profile</button>
                  </div>
                  <div className="justify-between items-center flex gap-2">
                        <input type="text" className="bg-gray-100 h-12 w-full outline-none rounded-md p-4" placeholder="Enter Lastname"/>
                        <input type="text" className="bg-gray-100 h-12 w-full outline-none rounded-md p-4" placeholder="Enter Firstname"/>
                        <input type="text" className="bg-gray-100 h-12 w-full outline-none rounded-md p-4" placeholder="Enter Middlename"/>                  
                  </div>
                  <div>
                        <textarea className="w-full p-4 outline-none border-2 border-gray-100"
                                  name="bio" id="bio" placeholder="Enter you bio"></textarea>
                  </div>
                  <div className="justify-center items-center flex gap-2">
                        <input type="text" className="bg-gray-100 h-12 w-full outline-none rounded-md p-4" placeholder="Display your skills"/>
                        <button className="bg-green-500 h-12 w-50 border-b-2 border-black rounded-md p-2 text-white hover:bg-green-600 cursor-pointer">— Add Skills</button>
                  </div>
                  <div className="justify-center items-center flex gap-2">
                        <input type="text" className="bg-gray-100 h-12 w-full outline-none rounded-md p-4" placeholder="Display your profile"/>
                        <button className="bg-green-500 h-12 w-50 border-b-2 border-black rounded-md p-2 text-white hover:bg-green-600 cursor-pointer">— Add Link</button>
                  </div>
                  <div>
                        <select className="bg-white h-12 w-full outline-none border-2 border-gray-100 rounded-md"
                               name="availability" id="availability">
                              <option>Active</option>
                              <option>Busy</option>
                              <option>Inactive</option>
                        </select>
                  </div>
                  <div className="justify-start items-start flex gap-2">
                        <input type="text" className="bg-gray-100 h-12 w-75 outline-none rounded-md p-4" placeholder="Enter Email Address"/>
                        <input type="text" className="bg-gray-100 h-12 w-75 outline-none rounded-md p-4" placeholder="Enter Contact No."/>
                  </div>
                  <div className="justify-between items-center flex gap-2">
                        <input type="text" className="bg-gray-100 h-12 w-full outline-none rounded-md p-4" placeholder="Enter Baranggay"/>
                        <input type="text" className="bg-gray-100 h-12 w-full outline-none rounded-md p-4" placeholder="Enter City/Municipality"/>
                        <input type="text" className="bg-gray-100 h-12 w-full outline-none rounded-md p-4" placeholder="Enter Province"/>    
                  </div>
                  <button className="bg-green-500 h-15 w-full w-50 border-b-2 border-black rounded-md p-2 text-white hover:bg-green-600 cursor-pointer font-nanum text-2xl">— Save</button>

            </div>
      </div>
      
      );
}
export default EditProfileModal;