import cloudinary from "../config/cloudinary.js";
import UserPostingModel from "../models/UserPostingModel.js"

export const postingController = async (req, res) =>{
       try {
        
              const {accountId, text, media} = req.body;
              
              let mediaUrls = [];
                     
              if(Array.isArray(media)){
                     for (item in media){
                            if (item.startsWith("http")) {
                                   mediaUrls.push(media);
                            } else {
                            const uploadedResponse = await cloudinary.v2.uploader.upload(media, {folder: "media",});
                            mediaUrls.push(uploadedResponse.secure_url);    
                            }
                     }
              } else if (typeof media === "string"){
                            if (item.startsWith("http")) {
                                   mediaUrls.push(media);
                            } else {
                            const uploadedResponse = await cloudinary.v2.uploader.upload(media, {folder: "media",});
                            mediaUrls.push(uploadedResponse.secure_url);    
                            }
              }

              const posting = await UserPostingModel.create({
                     accountId : accountId,
                     text : text,
                     media : media,
                     likes : 0,
                     comments : 0,
                     isEdited : false,
                     isDeleted : false,
              }) 

              res.status(200).json({message : "successfully posting",
                                    postingInformation : posting})
       } catch (error) {
               console.log(error);
               res.json({message : "unsuccessful posting!"})
       }
}