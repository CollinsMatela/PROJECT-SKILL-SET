import UserFollowModel from "../models/UserFollowModel.js"

export const whoFollowController = async (req, res) => {
    const { followerId, followingId } = req.body;
    try {
        const userFollow = await UserFollowModel.findOne({ followerId, followingId });
        if (userFollow) {
            res.status(200).json({ isFollowing: true });
        } else {
            res.status(200).json({ isFollowing: false });
        }
    } catch (error) {
        console.error("Error checking follow status:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}