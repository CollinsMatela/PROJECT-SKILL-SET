import ProfileModel from "../models/UserProfileModel.js"
import cloudinary from "../config/cloudinary.js"

export const editProfileController = async (req, res) =>{
    try {
        const {accountId, profile, lastname, firstname, middlename, bio, skills, links,
               availability, email, contact, baranggay, city, province} = req.body;

        

        const uploadedResponse = await cloudinary.v2.uploader.upload(profile);
        
        // Success
        const createProfile = await ProfileModel.create({
                accountId : accountId, 
                profile : uploadedResponse.secure_url, 
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
        })
        return res.status(201).json({ message : "Successfully registered profile information",
                                      ProfileInformation : {
                                                    isUserProfile : true,
                                                    accountId : createProfile.accountId, 
                                                    profile : createProfile.profile, 
                                                    lastname : createProfile.lastname, 
                                                    firstname : createProfile.firstname, 
                                                    middlename : createProfile.middlename, 
                                                    bio : createProfile.bio, 
                                                    skills : createProfile.skills, 
                                                    links : createProfile.links,
                                                    availability : createProfile.availability, 
                                                    email : createProfile.email, 
                                                    contact : createProfile.contact, 
                                                    baranggay : createProfile.baranggay, 
                                                    city : createProfile.city, 
                                                    province : createProfile.province
                                      }
        })

    } catch (error) {
        console.log("Cloudinary upload error:", error);
  return res.status(500).json({ message: "Image upload failed", error: error.message });
    }
}