import mongoose from "mongoose";
const {Schema}= mongoose;

const experienceSchema= new Schema({
    name: {
        type: String,
        required: "name is required",
        trim: true,
    },
    designation:{
        type:String,
        required: "designation is required",
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
        required: "location are required",
    },
    duration:{
        type: String,
        trim: true,
        required: "duration are required",
    },
    matched:{
        type:String,
        trim:true,
        default:'98'
    },
    liked:{
     type:Boolean,
     default:false,
    },
    orderId:{
        type:Number,
        required:true,
    },
    bgColor:{
        type:String,
    },
    image:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        default:"Full Time"
    },
    goToLink:{
        type:String,
    }
});


export default mongoose.model("experience",experienceSchema);