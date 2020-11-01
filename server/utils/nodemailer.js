const nodemailer = require('nodemailer')
var array = []

const sendEmail = async (options) => {
    let transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.email,
            pass:process.env.password
        }
    })

    let mail_options = {
        from:'"My Way" <codinghunt9@gmail.com>',
        to: options.email,
        subject:'Welcome to My Way',
        html:
        `<div>
            <h3><strong>Welcome to My way<strong></h3>
            <br>
            <p>Please use the below OTP to sign in to My Way</p>
            <p><strong>${options.message}</strong></p>
            <br>
            <p>Regards,</p>
            <p>Team My Way</p>
        </div>
        `
    }

    await transport.sendMail(mail_options)
    console.log("Mail sent to :" , options.email)
}

const sendEmail2 = async (options) => {
    let transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.email,
            pass:process.env.password
        }
    })

    let mail_options_to_reset_password = {
        from:'"My Way" <codinghunt9@gmail.com>',
        to: options.email,
        subject:'Welcome to My Way',
        html:
        `<div>
            <p><strong>${options.message}</strong></p>
            <br>
            <p>Regards,</p>
            <p>Team My Way</p>
        </div>
        `
    }

    await transport.sendMail(mail_options_to_reset_password)
    console.log("Mail sent to :" , options.email)
}

module.exports = {sendEmail,sendEmail2};