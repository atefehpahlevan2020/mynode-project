const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'efaf8e3bcab9f0',
        pass: '774f64a4fb282c',
    }
})

 module.exports = transporter;