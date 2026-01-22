import monggoose from "mongoose";

const UserFollowSchema = new monggoose.Schema({
    followerId: { type: String, required: true },
    followingId: { type: String, required: true },
}, { timestamps: true });

export const UserFollowModel = monggoose.model("UserFollowModel", UserFollowSchema);