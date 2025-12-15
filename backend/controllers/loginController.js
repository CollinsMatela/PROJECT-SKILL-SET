import  RegisterModel  from "../models/RegisterModel.js"
import bcrypt from "bcrypt";

export const loginController = async (req, res) =>{

    try {
    
    const {email, password} = req.body;// Recieve the data from frontend
    
    const user = await RegisterModel.findOne({email});// Check the email
    if(!user){
        return res.status(401).json({message: "Invalid email or password"})
    }
    
    if (password !== user.password) {// Match the user password and input password
      return res.status(401).json({ message: "Invalid email or password" });
    }
   
    return res.status(200).json({
                                 message : "Successfully login", // Success login
                                 user:{
                                    isUser : true,
                                    accountId : user.accountId,
                                    email : user.email,
                                 },
                                })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
    
}