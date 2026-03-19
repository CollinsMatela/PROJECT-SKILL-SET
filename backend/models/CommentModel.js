import mongoose from 'mongoose'
const CommentModelScheme = new mongoose.Schema({
      commentId: {type: String},
      postingId: {type: String},
      accountId: {type: String},
      comment: {type: String}
    },
    {
      timestamps: true
    })

const CommentModel = mongoose.model("CommentModel", CommentModelScheme);
export default CommentModel;