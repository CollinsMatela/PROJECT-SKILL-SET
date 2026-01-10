import cloudinary from "../config/cloudinary.js";
import { nanoid } from "nanoid";
import UserPostingModel from "../models/UserPostingModel.js"
import UserProfileModel from "../models/UserProfileModel.js"

export const postingController = async (req, res) =>{
       try {
        
              const {accountId, text, media} = req.body;
              
              const account_details = await UserProfileModel.findOne({accountId});

              const profile = account_details.profile;
              const lastname = account_details.lastname;
              const firstname = account_details.firstname;
              const middlename = account_details.middlename;
              const baranggay = account_details.baranggay;
              const city = account_details.city;
              const province = account_details.province;
              
              // let mediaUrls = [];
                     
              // if(Array.isArray(media)){
              //        for (const item of media){
              //               if (item.startsWith("http")) {
              //                      mediaUrls.push(item);
              //               } else {
              //               const uploadedResponse = await cloudinary.v2.uploader.upload(item, {folder: "media",});
              //               mediaUrls.push(uploadedResponse.secure_url);    
              //               }
              //        }
              // } else if (typeof media === "string"){
              //               if (media.startsWith("http")) {
              //                      mediaUrls.push(media);
              //               } else {
              //               const uploadedResponse = await cloudinary.v2.uploader.upload(media, {folder: "media",});
              //               mediaUrls.push(uploadedResponse.secure_url);    
              //               }
              // }

              const posting = await UserPostingModel.create({
                     postingId : `POST-${nanoid()}`,
                     accountId : accountId,
                     profile: profile,
                     lastname: lastname,
                     firstname: firstname,
                     middlename: middlename,
                     baranggay: baranggay,
                     city: city,
                     province: province,
                     text : text,
                     media : media,
                     likesCount : 0,
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