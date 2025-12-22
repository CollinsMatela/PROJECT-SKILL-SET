import ProfileModel from "../models/UserProfileModel.js"
import cloudinary from "../config/cloudinary.js"

export const editProfileController = async (req, res) =>{
    try {
        const {accountId, profile, lastname, firstname, middlename, bio, skills, links,
               availability, email, contact, baranggay, city, province} = req.body;
        
        const updates = {
                        accountId : accountId, 
                        lastname : lastname, 
                        firstname : firstname, 
                        middlename : middlename, 
                        bio : bio, 
                        skills : skills, 
                        links : links,
                        availability : availability, 
                        email : email, 
                        contact : contact, 
                        baranggay : baranggay, 
                        city : city, 
                        province : province
                        };

        if(profile && !profile.startsWith("http")){
            const uploadedResponse = await cloudinary.v2.uploader.upload(profile, {folder: "profiles"});
            updates.profile = uploadedResponse.secure_url;
        } 
        else if (profile && profile.startsWith("http")){
            updates.profile = profile; // goes to updates()
        }
        
        
        // Success
        const savedProfile = await ProfileModel.findOneAndUpdate({accountId},
                                                                 {$set:updates},
                                                                 {new:true, upsert:true});
 
        return res.status(201).json({ message : "Successfully update/registered profile information",
                                      ProfileInformation : savedProfile
        })

    } catch (error) {
        console.log("Cloudinary upload error:", error);
  return res.status(500).json({ message: "Image upload failed", error: error.message });
    }
}