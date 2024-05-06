import mongoose from "mongoose";
const {Schema}= mongoose;

const profileSchema= new Schema({
    name: {
        type: String,
        trim: true,
        required: "profile name is required",
        unique:true,
    },
   image:{
       type:String,
       trim:true,
       required:'image is required',
   }    
});

export default mongoose.model("profile",profileSchema);