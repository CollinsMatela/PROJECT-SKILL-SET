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

                <div className="w-full rounded-xl border-1 border-b-4 border-black p-2">
                <h1 className="text-sm font-bold mb-2">Personal Details</h1>
                <h1>Client: <span className="text-sm text-black p-4">{selectedBusiness?.firstname} {selectedBusiness?.lastname || "No Business Selected"}</span></h1>
                <h1>Email: <span className="text-sm text-black p-4">{selectedBusiness?.email || "No Business Selected"}</span></h1>
                <h1>Contact: <span className="text-sm text-black p-4">{selectedBusiness?.contact || "No Business Selected"}</span></h1>
                </div>
                
                <div className="w-full rounded-xl  border-1 border-b-4 border-black p-2">
                <h1 className="text-sm font-bold mb-2">Business Information</h1>
                <h1>Business Identification: <span className="text-sm text-black p-4">{selectedBusiness?.businessId || "No Business Identification"}</span></h1>
                <h1>Business Name: <span className="text-sm text-black p-4">{selectedBusiness?.businessName || "No Business Selected"}</span></h1>
                <h1>Business Type: <span className="text-sm text-black p-4">{selectedBusiness?.businessType || "No Business Type"}</span></h1>
                <h1>Business Address: <span className="text-sm text-black p-4">{selectedBusiness?.businessAddress || "No Business Address"}</span></h1>
                </div>

                <div className="w-full rounded-xl  border-1 border-b-4 border-black p-2">
                <h1 className="text-sm font-bold mb-2">Coordinates</h1>
                <h1>Latitude: <span className="text-sm text-black p-4">{selectedBusiness?.latitude || "No Latitude"}</span></h1>
                <h1>Longitude: <span className="text-sm text-black p-4">{selectedBusiness?.longitude || "No Longitude"}</span></h1>    
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