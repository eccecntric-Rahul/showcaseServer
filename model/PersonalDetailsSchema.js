import mongoose from "mongoose";
const {Schema}= mongoose;

const detailsSchema= new Schema({
    name: {
        type: String,
        required: "name is required",
        trim: true,
    },
    designation: {
        type: String,
        trim: true,
        required:'training is required',
    },
    linkedIn:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
    },
    github:{
        type:String,
        trim:true,
    },
    phoneNo:{
        type:String,
        trim:true,
    },
    website:{
        type:String,
        trim:true,
    },
    bannerImage:[String],
    profilePicture:{
        type:String,
    },

    activities:[String]
});


export default mongoose.model("details",detailsSchema);