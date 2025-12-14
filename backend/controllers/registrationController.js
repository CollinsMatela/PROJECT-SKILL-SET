import { nanoid } from "nanoid"; // unique short Id
import RegisterModel from "../models/RegisterModel.js"

export const registrationController = async (req, res) => {
  try {
    // Data information from frontend
    const {Lastname, Firstname ,Middlename ,Email ,Password ,Terms} = req.body;
    const uniqueId = nanoid();

    const existingEmail = await RegisterModel.findOne({email : Email})
    if(existingEmail){
      return res.status("").json({message:"Email address is already existing."})
    }

    const inputUser = await RegisterModel.create({
      accountId: uniqueId,
      lastname: Lastname,
      firstname: Firstname,
      middlename: Middlename,
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

