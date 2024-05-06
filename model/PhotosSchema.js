import mongoose from "mongoose";
const {Schema}= mongoose;

const photosSchema= new Schema({
   image:{
       type:String,
       trim:true,
       required:'image is required',
   },  
   category:{
       type:String,
       required:true,
       default:'photos'
   }
});

export default mongoose.model("photo",photosSchema);