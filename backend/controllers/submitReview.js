import UserReview from '../models/ReviewModel.js'
const submitReview = async (req, res) => {

      const {businessId, accountId, rating, reviewMessage} = req.body;

      try {
        const isExist = await UserReview.findOne({businessId: businessId, accountId: accountId});
        if(isExist){
            res.status(201).json({message: "User already been reviewed this business."})
            return;
        }

        const result = await UserReview.create({
                   businessId: businessId,
                   accountId: accountId,
                   rating: rating,
                   message: reviewMessage
        })
        res.status(201).json({message: "Successfully sent business review.", review: result})
      } catch (error) {
        res.status(500).json({message: error.message})
      }
}
export default submitReview;