import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
},
phone:{
    type:String,
    required:true,
},
address:{
    type:String,
    required:true,
},
role:{
    type:Number,
    default:0
}



},{timestamps:true,collection:'objectve'})


export const User=new mongoose.model('user',Userschema)