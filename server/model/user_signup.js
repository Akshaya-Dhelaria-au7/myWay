const mongoose = require("mongoose")
const Schema = mongoose.Schema

const signupSchema = new Schema({
    First_Name:{
        type:String,
        required:true,
        min:5,
        max:256
    },    
    Last_Name:{
        type:String,
        required:true,
        min:5,
        max:256
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
        min:5,
        max:256
    },
    Category:{
        type:String,
        enum:["Student","Employer"],
        default:'Student'
    },
    Email_Verified:{
        type:Boolean
    },
    OTP:{type:Number}
},
    {
        versionKey:false
    }
)

const signup = mongoose.model('signup' , signupSchema, 'signup')

module.exports = signup;