import mongoose from "mongoose";
const {Schema}= mongoose;

const reviewSchema= new Schema({
    guestName: {
        type: String,
        required: "name is required",
        trim: true,
    },
    comment: {
        type: String,
        trim: true,
    }, 
    email:{
        type:String,
        trim:true,
        unique:true,
        required: true,
    },
    like:{
        type:Boolean,
        default:true
    }   
});


export default mongoose.model("review",reviewSchema);