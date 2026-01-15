import { nanoid } from "nanoid"; // unique short Id
import ProfileModel from "../models/UserProfileModel.js"

export const registrationController = async (req, res) => {
  try {
    // Data information from frontend
    const {Email ,Password ,Terms} = req.body;
    const uniqueId = nanoid();

    const existingEmail = await ProfileModel.findOne({email : Email})
    if(existingEmail){
      return res.status(400).json({message:"Email address is already existing."})
    }

    const inputUser = await ProfileModel.create({
      accountId: uniqueId,
      email: Email,
      password: Password,
      terms: Terms
      
    })

    res.status(201).json({ message: "Successfully registered", 
                           account: inputUser.accountId })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
};

