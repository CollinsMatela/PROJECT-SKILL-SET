import mongoose from "mongoose";

const UserPostingSchema = new mongoose.Schema({
      accountId: String,
      text: String,
      media: [String],
      likes: Number,
      comments: Number,
      isEdited: Boolean,
      isDeleted: Boolean,
},
{timestamps : true}
)
const UserPosting = mongoose.model("UserPostingModel",UserPostingSchema);
export default UserPosting