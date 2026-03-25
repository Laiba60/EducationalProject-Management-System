import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { type } from "os";
const userSchema = new mongoose.Schema({
    name:{
        type:String,    
        required:[true,"Please enter your name"],
        trim:true,
        maxLength:[50,"Name cannot exceed 30 characters"],

    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
       loawcase:true,
       validate:[validator.isEmail,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],       
        select:false,
        minLength:[8,"Passwords must be at least 8 characters long"],
    },
    role:{
        type:String,
        default:"student",
        enum:["student","teacher","admin"], 
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,

    department:{  
    type:String,  
    trim:true,  
    default:"null"
},
 expertise:{  
    type:[String],  
    trim:true,  
    default:"null"
},
 maxStudent:{  
    type:Number,   
    default:10,
    min:[1,"Max student must be at least 1"],
},
assignedStudents:{  
    type:moongoose.Schema.Types.ObjectId,   
    role:"User",
    min:[1,"Max student must be at least 1"],
},
supervisor:{  
    type:moongoose.Schema.Types.ObjectId,   
    role:"User",
    default:null
},
project:{  
    type:moongoose.Schema.Types.ObjectId,   
    role:"User",
    default:null
},
     
})