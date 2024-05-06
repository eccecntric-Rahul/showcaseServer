import mongoose from "mongoose";
const {Schema}= mongoose;

const skillSchema= new Schema({
    name: {
        type: String,
        trim: true,
        required: "skill name is required",
        unique:true,
    },
   image:{
       type:String,
       trim:true,
       required:'image is required',
   },
   category:{
       type:String,
       trim:true,
       default:'proficient'
   },
   quality:[String],
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
   goToLink:{
    type:String
   },
    
});

export default mongoose.model("skill",skillSchema);