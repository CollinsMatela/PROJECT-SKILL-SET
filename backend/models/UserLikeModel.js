import mongoose from "mongoose";

const userLikeSchema = mongoose.Schema({
      postingId : String,
      accountId : String,
})

userLikeSchema.index({postingId: 1, accountId: 1 }, { unique: true})

export default mongoose.model("userLike", userLikeSchema);