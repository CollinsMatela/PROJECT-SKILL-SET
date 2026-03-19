import CommentModel from "../models/CommentModel.js"
import { nanoid } from "nanoid";

const addCommentController = async (req, res) => {
      const {accountId, postingId, comment} = req.body;

      try {
        
        const addedComment = await CommentModel.create({
                commentId: "COM-" + nanoid(),
                postingId: postingId,
                accountId: accountId,
                comment: comment,
        })

        await res.status(200).json({message: comment + " - Successfully added",
                                    comment: addedComment
        })

      } catch (error) {
        res.status(500).json({message: "Add comment controller error"})
      }
}
export default addCommentController