import BusinessRegistrationModel from "../models/BusinessRegistrationModel.js";

const ApprovingBusinessRegistrationController = async (req, res) => {
      const { businessId } = req.body;

      try {
        const filter = await BusinessRegistrationModel.findOne({ businessId });
        if (!filter) {
            return res.status(404).json({ message: "Business registration not found" });
        }
        const update = await BusinessRegistrationModel.findOneAndUpdate({ businessId: businessId }, { status: "verified" }, { new: true }, { upsert: true });
        res.status(200).json({ message: "Business registration approved", updatedBusiness: update });
        
      } catch (error) {
        res.status(500).json({ message: "Error approving business registration", error: error.message });
      }
}
export default ApprovingBusinessRegistrationController;