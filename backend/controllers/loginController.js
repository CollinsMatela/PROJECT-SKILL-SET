import  RegisterModel  from "../models/RegisterModel.js"
import bcrypt from "bcrypt";

export const loginController = async (req, res) =>{

    try {
    // Recieve the data from frontend
    const {email, password} = req.body;
    // Check the email
    const user = await RegisterModel.findOne({email});
    if(!user){
        return res.status(401).json({message: "Invalid email or password"})
    }
    // Match the user password and input password
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(401).json({message: "Invalid email or password"})
    }
    // Success login
    return res.status(200).json({message : "Successfully login",
                                 accountId : user.accountId
                                })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
    
}