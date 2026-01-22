import { UserFollowModel } from "../models/UserFollowModel.js"
import UserProfile from "../models/UserProfileModel.js";

export const followController = async (req, res) => {
       try {
        const {followerAccountId} = req.params;
        const {followingId} = req.body;

        const follower = await UserFollowModel.findOne({followerId: followerAccountId, followingId: followingId});

        if(follower){
            // Decrement followrs
            await UserProfile.findOneAndUpdate({accountId: followingId}, {$inc: {followers: -1}});
            await UserFollowModel.deleteOne({followerId: followerAccountId, followingId: followingId});
            console.log("Unfollowed successfully");

            res.status(200).json({message: "Unfollowed successfully"});
        } else {
            // Success and Increment followers
            await UserProfile.findOneAndUpdate({accountId: followingId}, {$inc: {followers: +1}});
            await UserFollowModel.create({followerId: followerAccountId, followingId: followingId});
            console.log("Followed successfully");

            res.status(200).json({message: "Followed successfully"});
        }
       } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" });
       }
}