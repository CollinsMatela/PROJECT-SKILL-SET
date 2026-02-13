import BusinessRegistrationModel from "../models/BusinessRegistrationModel.js";

const RejectingBusinessRegistrationController = async (req, res) => {
    const { businessId } = req.body;
    try {
        const filter = await BusinessRegistrationModel.findOne({businessId: businessId});
        if (!filter) {
            return res.status(404).json({ message: "Business registration not found." });
        }
        const updatedBusiness = await BusinessRegistrationModel.findOneAndUpdate({businessId: businessId}, { status: "rejected" }, { new: true }, {upsert: true});
        res.status(200).json({ message: "Business registration rejected successfully!", updatedBusiness: updatedBusiness });
    } catch (error) {
        console.log("Error rejecting the business registration: ", error);
        res.status(500).json({ message: "An error occurred while rejecting the business registration." });
    }
}
export default RejectingBusinessRegistrationController;