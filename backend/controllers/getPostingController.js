import UserPostingModel from "../models/UserPostingModel.js"

export const getPostingController = async (req, res) => {
       console.log("/GET?POSTING");
       try {
       const allPosting = await UserPostingModel.find();
       res.status(200).json({
                                message: "Successfully fetch postings",
                                posting: allPosting
          })
       
       } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
       }
}