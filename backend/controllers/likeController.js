import LikeModel from "../models/UserLikeModel.js"

export const LikeController = async (req, res) => {

    try {
         const {postingId} = req.params;
         const {accountId} = req.body;

         if(!accountId){ return res.json({message: "It requires account Id"})}

          const existingLike = await LikeModel.findOne({ postingId, userId });

          if(existingLike){
            await LikeModel.deleteOne({_id: existingLike._id})
            return res.status(200).json({liked: false, message: "Post unliked"})
          }

          await LikeModel.create({postingId, accountId});
          res.status(200).json({liked: false, message: "Post liked"})

    } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Server error" });
    }
   

}