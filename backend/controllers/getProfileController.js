import UserProfile from "../models/UserProfileModel.js";

export const getProfileController = async (req, res) =>{
       
      const {accountId} = req.params;

      try {
        const profile = await UserProfile.findOne({accountId});
        if(!profile) return res.json({message: "Profile not found"});

        res.json({message : "Profile found - get-profile successfully",
                  ProfileInformation : profile
        })
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
}