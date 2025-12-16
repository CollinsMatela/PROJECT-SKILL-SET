import mongoose from "mongoose"

const userAccountSchema = new mongoose.Schema(
    {
        accountId : String,
        lastname : String,
        firstname : String,
        middlename : String,
        email : String,
        password : String,
        contact : String,
        profile : String,
        description : String,
        terms : Boolean
    }
)

const UserAccount = mongoose.model("UserAccount",userAccountSchema)
export default UserAccount