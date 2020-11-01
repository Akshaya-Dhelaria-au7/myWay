const signupSchema = require('../model/user_signup')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {sendEmail,sendEmail2} = require('../utils/nodemailer')

const controller = {
    signup: async (req,res) => {
        let hashedPassword = bcrypt.hashSync(req.body.Password,10)
        const otp = Math.floor(100000 + Math.random() * 900000)
        let eachUser = new signupSchema({
            First_Name:req.body.First_Name,
            Last_Name:req.body.Last_Name,
            Email:req.body.Email,
            Password:hashedPassword,
            Category:req.body.Category,
            Email_Verified:false,
            OTP: otp
        })  
        const message = eachUser.OTP
    
        try {
            sendEmail({
                email:eachUser.Email,
                message
            })
        }catch (error) {
            res.status(500).json({
                message:"Couldn't send the email",
                errors:error.message
            })
        }
        await eachUser.save()
        .then((val)=>{
            res.status(201).json({
                message:`Please verify the otp which is sent to the given email address ${eachUser.Email}`,
                data:val
            })
        })
        .catch((err)=>{
            if(JSON.stringify(err.message).indexOf("E11000 duplicate key error collection")>-1){
                res.status(400).json({
                    error:"Email already exists!!!"
                })
            }
            else{
                console.log("Error while signing up the user ",JSON.stringify(err))
                    res.status(500).json({
                    message:"Error in creating user",
                    error:err.message
                })
            }
        })
    },

    verifyOtp: (req,res) => {
        signupSchema.findOne({
            OTP:req.body.OTP
        })
        .then((data) => {
            if(data == null){
                res.status(403).json({
                    message:"Please enter valid OTP"
                })
            }
            else{
                data.Email_Verified = true
                data.save()
                res.status(200).json({
                    message:"Email verified successfully",
                    data:data
                })
            }
        })
        .catch((err)=>{
            console.log("Error while verifying otp ",JSON.stringify(err))
            res.status(500).json({
                message:"Cannot verify otp",
                error:err.message
            })
        })
    },

    login: async (req,res) => {
        signupSchema.findOne({
            Email:req.body.Email
        })
        .then((data) => {
            if(data === null){
                res.status(401).json({
                    message:"Please check your email/password"
                })
            }
            else if(data.Email_Verified == true){
                let checkPassword = bcrypt.compareSync(req.body.Password,data.Password)
                if(checkPassword == true){
                    const token = jwt.sign({
                        user_id:data._id,
                        Email:data.Email
                    },"coding" , {
                        expiresIn:'24hr'
                    })
                    res.status(200).json({
                        message:"Successfully logged in",
                        tokenKey:token,
                        user_id:data._id,
                        data:data
                    })
                }
                else{
                    res.status(401).json({
                        message:"Invalid Password"
                    })
                }
            }
            else{
                res.status(403).json({
                    message:"Please verify your email"
                })
            }
        })
        .catch((err)=>{
            console.log("Error while login done by user ",JSON.stringify(err))
            res.status(500).json({
                message:"Cannot log in",
                error:err.message
            })
        })
    },

    forgetPassword : (req,res) => {
        signupSchema.findOne({Email:req.body.Email},(err,data) => {
            if(err){
                res.status(404).json({
                    message:"Error while finding the user",
                    error:err.message
                })
            }else{
                if(!data){
                    res.status(200).json({
                        message:"No email exists!!"
                    })
                }
                else{
                    function generateOtp(){
                        const otp = Math.floor(100000 + Math.random() * 900000)
                        return otp
                    }
                    data.OTP = ''
                    console.log(data)
                    const OTP = generateOtp()
                    data.OTP = OTP
                    data.save()
                    sendEmail2({
                        email:data.Email,
                        message:`OTP to reset password is ${OTP}`
                    })
                    res.status(200).json({
                        message:"OTP sent to reset the password!!"
                    })
                }
            }
        })
    },

    postEmailVerification : (req,res) => {
        const Email = req.body.Email

    },

    logout:(req,res)=>{
        // console.log("Logged out")
        res.status(200).json({
            message:"Successfully logged Out"
        })
    }
}

module.exports = controller;
