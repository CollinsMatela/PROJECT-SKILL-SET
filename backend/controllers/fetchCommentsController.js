import CommentModel from "../models/CommentModel.js"

const fetchCommentsController = async (req, res) => {
      const {PostingId} = req.params;

      try {
        if(!PostingId){
            await res.status(400).json({message: "Posting ID is empty"});
            return;
        }
        const comments = await CommentModel.find({postingId: PostingId})

        await res.status(200).json({message: "Successfully fetching",
                                    commentsList: comments
        });
      } catch (error) {
        await res.status(500).json({message: "fetching comments is error"});
      }
}
export default fetchCommentsController