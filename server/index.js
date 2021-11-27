const dotenv = require('dotenv')
const express = require('express')
const app = express()
dotenv.config()
const PORT = process.env.PORT
const cors = require('cors')
const nodemailer = require('nodemailer')


app.use(cors())
app.use(express.json())

let transporter = nodemailer.createTransport({
    service: "Outlook365",
    host: "smtp.office365.com",
    port: "587",
    tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
    },
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
})

transporter.verify(function(err, success){
    if(err){
        console.log(err)
    } else {
        console.log("Server is ready to take our messages")
    }
})

app.get("/", (req,res) =>{
    res.json({message: "worked"})
})

app.post("/send", (req,res,next) => {
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message

    const mail = {
        from: name,
        sender: email,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: message
    }

    transporter.sendMail(mail, (err, data) => {
        if(err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})