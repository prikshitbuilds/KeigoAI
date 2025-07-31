import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        lowercase:true,
        trim:true,
        unique:true,
        required:true
    },
    email:{
        type:String,
        lowercase:true,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    plan:{
        type:String,
        enum:["paid","free"],
        default:"free"
    },
    stripeCustomerId:{
        type:String,
        default:null
    }
},{timestamps:true})


export const User = mongoose.model('User',userSchema)