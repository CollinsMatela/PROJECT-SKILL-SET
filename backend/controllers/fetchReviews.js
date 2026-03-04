import ReviewModal from "../models/ReviewModel.js"
const fetchReviews = async (req, res) =>{

      try {

        const reviews = await ReviewModal.find();
        if(!reviews.length){
          return res.status(400).json({message: 'No existing businessId'});
        }
        
        await res.status(200).json({
            message: "Successfully fetch the businessId",
            reviews: reviews
        })
        
      } catch (error) {
        return res.status(500).json({message: 'Error fetching in fetch reviews'});
      }
}
export default fetchReviews;