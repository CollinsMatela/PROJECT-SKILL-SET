import BusinessRegistrationModel from "../models/BusinessRegistrationModel.js";
const fetchBusinessRegistrationController = async (req, res) => {

    try {
        const registrations = await BusinessRegistrationModel.find();
        if(!registrations || registrations.length === 0){
            return res.status(404).json({message: "No business registration found"});
        }
        return res.status(200).json({message: "Business registration fetched successfully", 
                              registrations: registrations});
        
    } catch (error) {
        console.error("Error fetching business registration:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
export default fetchBusinessRegistrationController;