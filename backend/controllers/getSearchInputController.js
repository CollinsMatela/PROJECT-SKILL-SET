import UserProfileModel from "../models/UserProfileModel.js";

const getSearchInputController = async (req, res) => {
      const {firstname, lastname} = req.query;

      console.log("Search query received:", firstname, lastname);

      if (!firstname && !lastname) {
          return res.status(400).json({message: "Empty search value."});
      }

      const filter = await UserProfileModel.find({
        $or: [
             {firstname : {$regex: firstname, $options: "i"}},
             {lastname : {$regex : lastname, $options: "i"}}
             ]
      });
      res.status(200).json({message: "Search results fetched successfully", 
                            users: filter});      
}
export default getSearchInputController;