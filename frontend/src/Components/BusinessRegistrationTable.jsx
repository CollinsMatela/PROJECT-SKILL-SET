import axios from "axios";
const BusinessRegistrationTable = ({businessRegistrations}) => {

    const Approving = async (businessId) => {
        console.log("Approving business with ID:", businessId);
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/approve-business-registration`, { businessId })
            console.log(res.data.message, res.data.updatedBusiness);
            alert("Business registration approved successfully!");
            
        } catch (error) {
            console.log("Error approving the business registration: ",error);
        }
    }

    return (
        <div className="h-100 hide-scrollbar w-300 mt-10 justify-start items-center flex flex-col gap-2">
                   <h1 className="w-full text-gray-300 font-bold">Business Registrations Table</h1>
                   <div className=" bg-gray-200 h-10 w-full justify-between items-center flex rounded-md">
                    <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Business ID</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Business Name</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Business Address</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Business Type</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Seller Name</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Email</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Contact</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">Action</h1></div>
                   </div>
                   {businessRegistrations.map((registration) => (
                    <div key={registration.businessId} className="border-2 border-gray-100 rounded-xl h-15 w-full justify-between items-center flex">
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.businessId}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.businessName}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.businessAddress}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.businessType}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.firstname} {registration.lastname}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.email}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.contact}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2 gap-2">
                        <button className="bg-gray-200 h-8 w-8 rounded-md cursor-pointer"></button>
                        <button className="bg-gray-200 h-8 w-8 rounded-md cursor-pointer"></button>
                        <button className="bg-green-500 h-8 w-8 rounded-md cursor-pointer" onClick={() => Approving(registration.businessId)}></button>
                      </div>
                      
                    </div>
                   ))}

            </div>
    )
}
export default BusinessRegistrationTable;