import mongoose from "mongoose";

const UserPostingSchema = new mongoose.Schema({
      postingId: String,
      accountId: String,
      profile: String,
      lastname: String,
      firstname: String,
      middlename: String,
      baranggay: String,
      city: String,
      province: String,
      text: String,
      media: [String],
      likes: Number,
      comments: Number,
      isEdited: Boolean,
      isDeleted: Boolean,
},
{timestamps : true}
)
const UserPosting = mongoose.model("UserPosting",UserPostingSchema);
export default UserPosting