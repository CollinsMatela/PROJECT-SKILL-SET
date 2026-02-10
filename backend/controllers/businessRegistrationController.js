import BusinessRegistrationModel from "../models/BusinessRegistrationModel.js";
import { nanoid } from "nanoid";
const BusinessRegistrationController = async (req, res) =>{

    const { userId, lastname, firstname, middlename, email, contact, validId, businessName, businessType, businessAddress, businessPermit, latitude, longitude } = req.body;
    const businessId = "BID-" + nanoid(); // Generate a unique business ID

    try {
        
        const business = await BusinessRegistrationModel.create({
            userId: userId,
            businessId: businessId,
            lastname: lastname,
            firstname: firstname,
            middlename: middlename,
            email: email,
            contact: contact,
            validId: validId,
            businessName: businessName,
            businessType: businessType,
            businessAddress: businessAddress,
            businessPermit: businessPermit,
            latitude: latitude,
            longitude: longitude
        })
        res.status(201).json({ message: "Business registration submitted successfully",  business: business });
    } catch (error) {
        console.log("Error submitting business registration: ", error);
        res.status(500).json({ error: "Failed to submit business registration" });
    }
}
export default BusinessRegistrationController;