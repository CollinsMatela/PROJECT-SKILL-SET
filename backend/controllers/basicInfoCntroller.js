import ProfileModel from "../models/UserProfileModel.js"
const basicInfoController = async (req, res) => {
    const {accountId, lastname, firstname, middlename, birthdate, gender} = req.body;
    try {
        const result = await ProfileModel.findOneAndUpdate({accountId: accountId},
                                            {lastname: lastname, 
                                             firstname: firstname, 
                                             middlename: middlename, 
                                             birthdate: birthdate, 
                                             gender: gender}               
        );
        res.status(200).json({message: "Basic information saved successfully.",
                              user : result
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}
export default basicInfoController;