import LeftSidebar from "../Components/LeftSidebar";
import InputField from "../Components/InputField";
const SellerRegistration = () => {

    return(
        
        <section className="bg-white h-screen w-full justify-end items-start flex">
            <LeftSidebar/>

                  <div className="h-3/4 w-320 pt-10 px-5 space-y-4">
                  <div className="w-full rounded-xl border-2 border-gray-50 p-5">
                    <h1>Fill-out Identity Information</h1>
                    <div className="flex gap-2">
                        <InputField label="Lastname" type="text" name="text" placeholder="Enter Lastname" error="" value="" onChange=""/>
                        <InputField label="Firstname" type="text" name="text" placeholder="Enter Firstname" error="" value="" onChange=""/>
                        <InputField label="Middlename" type="text" name="text" placeholder="Enter Middlename" error="" value="" onChange=""/>
                    </div>
                    <div className="flex gap-2">
                        <InputField label="email" type="email" name="email" placeholder="Enter Email Address (e.g xxx.@gmail.com)" error="" value="" onChange=""/>
                        <InputField label="Contact No." type="text" name="contact" placeholder="Enter Contact Number" error="" value="" onChange=""/>
                        <InputField label="Valid ID" type="file" name="validId" placeholder="Insert valid ID" error="" value="" onChange=""/>
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
                     
                  </div>

                  <div className="h-screen w-80 justify-start items-center flex flex-col gap-2 border-r-2 border-gray-100 pt-10 px-5">
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