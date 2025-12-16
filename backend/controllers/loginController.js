import UserAccountModel from "../models/UserAccountModel.js"
import bcrypt from "bcrypt";

export const loginController = async (req, res) =>{

    try {
    
    const {email, password} = req.body;// Recieve the data from frontend
    
    const user = await UserAccountModel.findOne({email});// Check the email
    if(!user){
        return res.status(401).json({isEmail: "Invalid email address"})
    }
    
    if (password !== user.password) {// Match the user password and input password
      return res.status(401).json({ isPassword: "Invalid password" });
    }
   
    return res.status(200).json({
                                 message : "Successfully login", // Success login
                                 user:{
                                    isUser : true,
                                    accountId : user.accountId,
                                    email : user.email,
                                    firstname : user.firstname,
                                    middlename : user.middlename,
                                    lastname : user.lastname,
                                    contact : user.contact,
                                    profile : user.profile,
                                    description : user.description
                                 },
                                })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
    
}