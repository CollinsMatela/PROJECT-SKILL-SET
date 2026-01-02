import LikeModel from "../models/UserLikeModel.js"

export const LikeController = async (req, res) => {

    try {
         const {postingId} = req.params;
         const {accountId} = req.body;

         if(!accountId){ return res.json({message: "It requires account Id"})}

          const existingLike = await LikeModel.findOne({ postingId, accountId });

          if(existingLike){
            await LikeModel.deleteOne({_id: existingLike._id})
            const likeCounts = await LikeModel.countDocuments({ postingId });
            return res.status(200).json({liked: false, message: "Post unliked", countsOfLike: likeCounts - 1})
          }

          const likeCounts = await LikeModel.countDocuments({ postingId });
          await LikeModel.create({postingId, accountId, likeCounts });
          res.status(200).json({liked: true, message: "Post liked", countsOfLike: likeCounts + 1})

    } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Server error" });
    }
   

}