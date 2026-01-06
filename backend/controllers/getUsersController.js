import UserProfileModel from "../models/UserProfileModel.js";

export const getUsersController = async (req, res) => {

    try {
        const result = await UserProfileModel.find();
    return res.status(200).json({message: "Fetched all users",
                          users: result
    })
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
    
}