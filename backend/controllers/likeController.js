import UserPostingModel from "../models/UserPostingModel.js"
import UserLikeModel from "../models/UserLikeModel.js"

export const LikeController = async (req, res) => {

     const { postingId } = req.params;
     const {accountId} = req.body; // or req.body.accountId

     if (!postingId || !accountId) {
    return res.status(400).json({ message: "Missing data" });
  }

  const existingLike = await UserLikeModel.findOne({ postingId, accountId });

  if (existingLike) {
    // UNLIKE
    await UserLikeModel.deleteOne({ postingId, accountId });

    await UserPostingModel.updateOne(
      { postingId },
      { $inc: { likesCount: -1 } }
    );
  } else {
    // LIKE
    await UserLikeModel.create({ postingId, accountId });

    await UserPostingModel.updateOne(
      { postingId },
      { $inc: { likesCount: 1 } }
    );
  }

  const post = await UserPostingModel.findOne({ postingId });

  res.json({
    liked: !existingLike,
    likesCount: post.likesCount,
  });
}