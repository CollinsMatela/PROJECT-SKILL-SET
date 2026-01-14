import mongoose from "mongoose"

const UserProfileSchema = new mongoose.Schema({
    accountId : String, 
    profile : String, 
    lastname : String, 
    firstname : String, 
    middlename : String, 
    bio : String, 
    skills : [String], 
    links : [String],
    availability : String, 
    email : String, 
    contact : String, 
    baranggay : String, 
    city : String, 
    province : String,
    isOnline : Boolean,
    ratings : Number,
    followers : Number,
})
    

const UserProfile = mongoose.model("UserProfile",UserProfileSchema);
export default UserProfile;