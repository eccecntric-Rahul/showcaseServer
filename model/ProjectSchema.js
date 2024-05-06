import mongoose from "mongoose";
const {Schema}= mongoose;

const projectSchema= new Schema({
    name: {
        type: String,
        required: "name is required",
        trim: true,
        
    },
    description: {
        type: String,
        trim: true,
        required:"description is required",
    }, 
    projectLink:{
        type:String,
        trim:true,
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
    quality:[String], 
});


export default mongoose.model("project",projectSchema);