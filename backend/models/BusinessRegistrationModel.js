import monggoose from "mongoose";

const BusinessRegistrationSchema = new monggoose.Schema({
   userId: { type: String, required: true },
   businessId : { type: String, required: true },
   lastname: { type: String, required: true },
   firstname: { type: String, required: true },
   middlename: { type: String, required: true },
   email: { type: String, required: true },
   contact: { type: String, required: true },
   validId: { type: String, required: true },
   businessName: { type: String, required: true },
   businessType: { type: String, required: true },
   businessAddress: { type: String, required: true },
   businessPermit: { type: String, required: true },
   latitude: { type: Number, required: true },
   longitude: { type: Number, required: true },
   status: { type: String, default: "Pending" },
   createdAt: { type: Date, default: Date.now },
});

const BusinessRegistrationModel = monggoose.model("BusinessRegistration", BusinessRegistrationSchema);
export default BusinessRegistrationModel;