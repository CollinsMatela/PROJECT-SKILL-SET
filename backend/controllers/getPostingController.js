import UserPostingModel from "../models/UserPostingModel.js"
import UserLikeModel from "../models/UserLikeModel.js"

export const getPostingController = async (req, res) => {
       try {
       const accountId = req.query.accountId;
        const post = await UserPostingModel.find({isDeleted: false}).lean()
        const result = await Promise.all(
                                         post.map(async post => { const liked = await UserLikeModel.exists({postingId: post.postingId, accountId,}) 
                                                 return { ...post,
                                                          liked: Boolean(liked)
                                                        }
                                          }))
       res.json({message : "Successfully fetched postings", postings: result})
                                         
       } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
       }
}