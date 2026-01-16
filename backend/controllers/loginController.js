import UserProfileModel from "../models/UserProfileModel.js"
import bcrypt from "bcrypt";

export const loginController = async (req, res) =>{

    try {
    
    const {email, password} = req.body;// Recieve the data from frontend
    
    const result = await UserProfileModel.findOne({email});// Check the email
    if(!result){
        return res.status(401).json({isEmail: "Invalid email address"})
    }
    
    if (password !== result.password) {// Match the user password and input password
      return res.status(401).json({ isPassword: "Invalid password" });
    }
   
    return res.status(200).json({
                                 message : "Successfully login", // Success login
                                 user: result
                                })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
    
}