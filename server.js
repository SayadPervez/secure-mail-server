var app = require('express')();
var express = require('express');
var path = require('path');
const fs=require('fs');
var nodemailer = require('nodemailer');
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static("./views"));

function mailer__(from="",pwd="",to="",sub="",cont="",sid){
            var transporter = nodemailer.createTransport({
            /*service: 'gmail',*/
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: from,
                pass: pwd
            },tls: {
                rejectUnauthorized: false
            }
            });

            var mailOptions = {
            from: from,
            to: to,
            subject: sub,
            text: cont
            };

            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              io.to(sid).emit("Mail",{status:"failure",err:error});
            } else {
                if(info.response.includes('OK') && info.response.includes('250'))
                    io.to(sid).emit("Mail",{status:"success"});
                else
                    io.to(sid).emit("Mail",{status:"failure"});
            }
            });
}


io.on('connection', (socket) => {
  socket.on("Hi",(x)=>{
    var status="success";
    io.to(socket.id).emit("Hello",{status:status});
  });
  socket.on("SendMail",(x)=>{
    var ans=mailer__(x.from,x.pwd,x.to,x.sub,x.body,socket.id);
  });

});

http.listen(process.env.PORT||3000, () => {;
});
