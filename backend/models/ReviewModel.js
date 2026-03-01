import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
      businessId: {type: String},
      accountId: {type: String},
      rating: {type: Number},
      message: {type: String},
      },
      {timestamps: true}
)

const UserReview = mongoose.model("ReviewModel", reviewSchema);
export default UserReview;

