import UserProfileModel from "../models/UserProfileModel.js"

const fetchAllUsersController = async (req, res) => {
      try {
        const users = await UserProfileModel.find({});
        if(users.length === 0) return await res.status(404).json({message: "MapSideBar - No Existing Users in database"})

        await res.status(200).json({message: "MapSideBar - User fetch sucessfully",
                                    users: users
        })
      } catch (error) {
        return await res.status(500).json({message: "MapSideBar - error fetching all the users"})
      }
}
export default fetchAllUsersController;