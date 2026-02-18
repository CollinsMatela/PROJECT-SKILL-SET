import ViewBusinessLocationMap from "./VIewBusinessLocationMap";
const BusinessDetailModal = ({ onClose, selectedBusiness }) => {
 return(
    <div className="absolute inset-0 justify-center items-center flex">
        <div className={`inset-0 fixed bg-black/80`} onClick={onClose}></div>
        <div className="relative z-10 bg-white h-3/4 w-3/4 rounded-xl p-4 justify-center items-center flex gap-4 overflow-scroll hide-scrollbar">
            
            <div className="h-full w-100 justify-start items-start flex flex-col gap-2">

                <div className="bg-black h-10 w-full rounded-xl p-2">
                    <h1 className="text-white font-bold">Business Details</h1>
                </div>

                <div className="w-full rounded-xl border border-b-4 border-black p-2">
                <h1 className="text-sm font-bold mb-2">Personal Details</h1>

                {/* Client */}
                <div className="w-full flex">
                    <h1 className="text-xs flex-1">Client:</h1>
                    <h1 className="text-xs flex-1 text-black">
                    {selectedBusiness
                        ? `${selectedBusiness?.firstname} ${selectedBusiness?.lastname}`
                        : "No Business Selected"}
                    </h1>
                </div>

                {/* Email */}
                <div className="w-full flex">
                    <h1 className="text-xs flex-1">Email:</h1>
                    <h1 className="text-xs flex-1 text-black">
                    {selectedBusiness?.email || "No Business Selected"}
                    </h1>
                </div>

                {/* Contact */}
                <div className="w-full flex">
                    <h1 className="text-xs flex-1">Contact:</h1>
                    <h1 className="text-xs flex-1 text-black">
                    {selectedBusiness?.contact || "No Business Selected"}
                    </h1>
                </div>
                </div>

                
                <div className="w-full rounded-xl border border-b-4 border-black p-2">
                <h1 className="text-sm font-bold mb-2">Business Information</h1>

                {/* Business ID */}
                <div className="w-full flex">
                    <h1 className="text-xs flex-1">Business ID:</h1>
                    <h1 className="text-xs flex-1 text-black">
                    {selectedBusiness?.businessId || "No Business Identification"}
                    </h1>
                </div>

                {/* Business Name */}
                <div className="w-full flex">
                    <h1 className="text-xs flex-1">Business Name:</h1>
                    <h1 className="text-xs flex-1 text-black">
                    {selectedBusiness?.businessName || "No Business Selected"}
                    </h1>
                </div>

                {/* Business Type */}
                <div className="w-full flex">
                    <h1 className="text-xs flex-1">Business Type:</h1>
                    <h1 className="text-xs flex-1 text-black">
                    {selectedBusiness?.businessType || "No Business Type"}
                    </h1>
                </div>

                {/* Business Address */}
                <div className="w-full flex">
                    <h1 className="text-xs flex-1">Business Address:</h1>
                    <h1 className="text-xs flex-1 text-black">
                    {selectedBusiness?.businessAddress || "No Business Address"}
                    </h1>
                </div>
                </div>


                <div className="w-full rounded-xl border border-b-4 border-black p-2">
                <h1 className="text-sm font-bold mb-2">Coordinates</h1>

                {/* Latitude */}
                <div className="w-full flex">
                    <h1 className="text-xs flex-1">Latitude:</h1>
                    <h1 className="text-xs flex-1 text-black">
                    {selectedBusiness?.latitude || "No Latitude"}
                    </h1>
                </div>

                {/* Longitude */}
                <div className="w-full flex">
                    <h1 className="text-xs flex-1">Longitude:</h1>
                    <h1 className="text-xs flex-1 text-black">
                    {selectedBusiness?.longitude || "No Longitude"}
                    </h1>
                </div>
                </div>

                
            </div>

            <div className="h-full w-full rounded-xl space-y-2">
                <div className="bg-black h-10 w-80 rounded-xl p-2">
                    <h1 className="text-white font-bold">Map Location</h1>
                </div>
                <div className="h-80 w-full rounded-xl  border-1 border-b-4 border-black p-2">
                    {/* <div className="w-full">Location</div> */}
                    <ViewBusinessLocationMap businessLocation={selectedBusiness} />
                </div>
                <div className="bg-black h-10 w-80 rounded-xl p-2">
                    <h1 className="text-white font-bold">Required Documents</h1>
                </div>
                <div className="w-full rounded-xl  border-1 border-b-4 border-black p-2 space-y-2 mb-4">
                    <div className="w-full">Business Permit</div>
                    <div><img src={selectedBusiness?.businessPermit || "No Document Image"} className="w-full h-full object-cover rounded-xl" /></div>
                    <div className="w-full">Valid ID</div>
                    <div><img src={selectedBusiness?.validId || "No Document Image"} className="w-full h-full object-cover rounded-xl" /></div>
                </div>
            </div>
                   
        </div>
    </div>
    
 )
}
export default BusinessDetailModal;