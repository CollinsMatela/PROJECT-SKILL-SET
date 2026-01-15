import mongoose from "mongoose"

const UserProfileSchema = new mongoose.Schema({
    accountId : {type: String, default: ""}, 
    profile : {type: String, default: ""},
    lastname : {type: String, default: ""},
    firstname : {type: String, default: ""}, 
    middlename : {type: String, default: ""},
    age: {type: Number, default: ""},
    birthdate : {type: Date, default: ""},
    gender : {type: String, default: ""},
    bio : {type: String, default: ""}, 
    skills : {type: [String], default: []}, 
    links : {type: [String], default: []},
    availability : {type: String, default: ""}, 
    email : {type: String, default: ""},
    password : {type: String, default: ""},
    contact : {type: String, default: ""}, 
    baranggay : {type: String, default: ""}, 
    city : {type: String, default: ""}, 
    province : {type: String, default: ""},
    isOnline : {type: Boolean, default: false},
    ratings : {type: Number, default: 0},
    followers : {type: Number, default: 0},
    terms : {type: Boolean, default: false}
})
    

const UserProfile = mongoose.model("UserProfile",UserProfileSchema);
export default UserProfile;