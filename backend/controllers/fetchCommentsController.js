import CommentModel from "../models/CommentModel.js"

const fetchCommentsController = async (req, res) => {

      try {
        const comments = await CommentModel.find({});

        console.log(comments.length);

        await res.status(200).json({message: "Successfully fetching",
                                    commentsList: comments
        
        });
        
      } catch (error) {
        await res.status(500).json({message: "fetching comments is error"});
      }
      
}
export default fetchCommentsController