import mongoose from "mongoose"

const registerSchema = new mongoose.Schema(
    {
        accountId : String,
        lastname : String,
        firstname : String,
        middlename : String,
        email : String,
        password : String,
        terms : Boolean
    }
)

const RegisterModel = mongoose.model("RegisterModel",registerSchema)
export default RegisterModel