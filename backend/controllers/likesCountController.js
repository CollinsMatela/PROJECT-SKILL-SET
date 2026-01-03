import UserLikeModel from "../models/UserLikeModel.js"

const likesCountController = async (req, res) => {
      
    try {
        const {postingId} = req.body;

        if(!postingId) return res.json({message: "No existing posting Id"});

        const total = await UserLikeModel.countDocument(postingId);

        res.status(200).json({message: "fetch likes count successfully",
                              counts: total
                            })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
      
}
export default likesCountController;