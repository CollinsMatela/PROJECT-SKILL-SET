import UserPostingModel from "../models/UserPostingModel.js"
import UserLikeModel from "../models/UserLikeModel.js"

export const getPostingController = async (req, res) => {
  try {
    const accountId = req.query.accountId;

    if (!accountId) {
      return res.json({
        postings: [],
        message: "No user logged in"
      });
    }

    // Fetch posts
    const posts = await UserPostingModel.find({ isDeleted: false }).sort({ createdAt: -1 }).lean();

    // Fetch all likes for this user in one query
    const userLikes = await UserLikeModel.find({ accountId }).select("postingId");
    const likedPosts = new Set(userLikes.map(l => l.postingId));

    // Map posts to include liked
    const result = posts.map(post => ({
      ...post,
      liked: likedPosts.has(post.postingId),
    }));

    res.json({ message: "Successfully fetched postings", postings: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
