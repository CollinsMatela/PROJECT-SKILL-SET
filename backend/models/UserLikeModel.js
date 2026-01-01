import mongoose from "mongoose";

const userLikeSchema = mongoose.Schema({
      postingId : String,
      accountId : String,
      createdAt : String,
})

userLikeSchema.index({postingId: 1, userId: 1 }, { unique: true})

export default mongoose.model("LikeModel", userLikeSchema);