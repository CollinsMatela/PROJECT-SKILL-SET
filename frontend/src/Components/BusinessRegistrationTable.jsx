import axios from "axios";
import ComfirmationModal from "./ComfirmationModal";
import BusinessDetailModal from "./BusinessDetailModal";
import { useState } from "react";
const BusinessRegistrationTable = ({businessRegistrations}) => {

    const [isApprovingConfirmation, setIsApprovingConfirmation] = useState(false);
    const [isRejectingConfirmation, setIsRejectingConfirmation] = useState(false);
    const [isBusinessDetail, setIsBusinessDetail] = useState(false);
    const [selectedBusinessId, setSelectedBusinessId] = useState("");

    const ViewSelectedBusiness = businessRegistrations.find(business => business.businessId === selectedBusinessId);

    const Approving = async (businessId) => {

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/approve-business-registration`, { businessId })
            console.log(res.data.message, res.data.updatedBusiness);
            
            
        } catch (error) {
            console.log("Error approving the business registration: ",error);
        }
    }
    const Rejecting = async (businessId) => {

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/reject-business-registration`, { businessId })
            console.log(res.data.message, res.data.updatedBusiness);
            
            
        } catch (error) {
            console.log("Error rejecting the business registration: ",error);
        }
    }

    return (
        
        <div className="h-100 border-b-1 border-gray-300 hide-scrollbar w-300 mt-10 justify-start items-center flex flex-col gap-2">
            {isApprovingConfirmation && (<ComfirmationModal 
                isOpen={isApprovingConfirmation}
                onClose={() => setIsApprovingConfirmation(false)}
                onConfirm={() => {
                    Approving(selectedBusinessId);
                    setIsApprovingConfirmation(false);
                }}
                title="Confirm Approval"
                message="Are you sure you want to approve this business registration?"
            />)}
            {isRejectingConfirmation && (<ComfirmationModal 
                isOpen={isRejectingConfirmation}
                onClose={() => setIsRejectingConfirmation(false)}
                onConfirm={() => {
                    Rejecting(selectedBusinessId);
                    setIsRejectingConfirmation(false);
                }}
                title="Confirm Rejection"
                message="Are you sure you want to reject this business registration?"
            />)}
            {isBusinessDetail && (<BusinessDetailModal onClose={() =>setIsBusinessDetail(false)} selectedBusiness={ViewSelectedBusiness}/>)}

                   <h1 className="w-full text-black font-bold">Business Registrations Table</h1>
                   <div className=" bg-black h-10 w-full justify-between items-center flex rounded-md">
                    <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Business ID</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Business Name</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Business Address</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Business Type</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Seller Name</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Email</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Contact</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Action</h1></div>
                   </div>
                   {businessRegistrations.filter(z => z.status !== "verified" && z.status !== "rejected").map((registration, index) => (
                    <div key={registration.businessId} className="border-1 border-b-4 border-black rounded-xl h-15 w-full justify-between items-center flex">
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{index + 1}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.businessName}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.businessAddress}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.businessType}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.firstname} {registration.lastname}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.email}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{registration.contact}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2 gap-2">
                        
                        <button className="bg-gray-300 h-8 w-8 hover:w-full transition-all duration-300 ease-in-out rounded-md cursor-pointer" onClick={() => {setSelectedBusinessId(registration.businessId); setIsBusinessDetail(true);}}></button>
                        <button className="bg-black h-8 w-8 hover:w-full transition-all duration-300 ease-in-out rounded-md cursor-pointer" 
                        onClick={() => {setSelectedBusinessId(registration.businessId); setIsRejectingConfirmation(true);}}>

                        </button>
                        <button className="bg-black h-8 w-8 hover:w-full transition-all duration-300 ease-in-out rounded-md cursor-pointer" 
                        onClick={() => {setSelectedBusinessId(registration.businessId); setIsApprovingConfirmation(true);}}
                        ></button>
                      </div>
                      
                    </div>
                   ))}
                   {businessRegistrations.filter(z => z.status === "pending").length === 0 && (
                    <div key="no-registrations" className="bg-gray-100 rounded-xl h-full w-full justify-center items-center flex">
                      <h1 className="text-xs text-gray-500">No business registrations to display</h1>
                    </div>
                   )}

            </div>
            
    )
}
export default BusinessRegistrationTable;