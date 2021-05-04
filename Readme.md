# Secure Mail Server API Documentation :
## Table of contents :
- [Abstract](#abstract-)
- [Prerequisite](#prerequisite-)
- [Calling from a website](#calling-from-a-website-)
- [Calling from a NodeJS App](#caling-from-a-nodejs-app-)
- [Issues we are inviting contributors to fix](#issues-we-are-inviting-contributors-to-fix-)
- [Contributors](#contributors-)
- [Clone this Repository](#clone-this-repository-)

---

## Abstract :
- 24-7 free hosting is limited to static webpages and there has been no safe way yet to send emails from a static page. Well, Secure Mail Server is here to change the game !
- Secure Mail Server is a free, open-source and secure way to send emails using the Socket.io protocol.
- Secure Mail Server also lets you connect to it using various [other languages](#caling-from-a-nodejs-app-) to send mails so as to improve your language performance.

---

## Prerequisite :
- A **GMail** Account.
- Make sure your Gmail account allows less secure apps to access it. This allows our server to connect to your Gmail account and automate sending emails. Here is how to do it : [How to Allow Less Secure Apps in Google](https://hotter.io/docs/email-accounts/secure-app-gmail/).

---

## Calling from a website :
This is what secure-mail-server was built for, sending emails safely in a static website where no backend services are available.

Configure your website to run secure-mail-server in 2 steps :
- **Step 1** : Add this Socket.io link to your HTML page.
```JavaScript
<script src="https://secure-mail-server.herokuapp.com/socket.io/socket.io.js"></script>
```
- **Step 2** : Initialize the socket in your JS file.
```JavaScript
var socket = io("https://secure-mail-server.herokuapp.com/");
```

- **Step 3** : To send your mail to the server, use the **`socket.emit()`** method. This is similar to a HTTP request. **socket.emit()** method takes 2 arguements. The 1st arguement shall always be **"SendMail"** and the 2nd one is a JSON object as follows :

```JavaScript
var JSON_obj = { 
    from:"from@gmail.com" ,
    pwd:"yourpassword" , 
    to:"toReciever@gmail.com" , 
    sub:"subject of your email" , 
    body:"body of your email" 
}
socket.emit("SendMail", JSON_obj );
```

- To get the output back, use **`socket.on()`** method. It takes 2 arguements with the first one being **"Mail"** and the second one being a JS callback function whose arguement is a JSON Object (data).The data object consists of **`status`** ( the status of email - success / failure ).

```JavaScript
  socket.on("Mail", (data) => {
    console.log("Secure-Mail-Server replied");
    console.log("Mailer said "+JSON.stringify(data));
    console.log("\n");
    console.log("Mail status : "+String(data.status));
  });
```

The final JS code file looks something like :

```JavaScript
var socket = io("https://secure-mail-server.herokuapp.com/");

var JSON_obj = { 
    from:"from@gmail.com" ,
    pwd:"yourpassword" , 
    to:"toReciever@gmail.com" , 
    sub:"subject of your email" , 
    body:"body of your email" 
}
socket.emit("SendMail", JSON_obj );

socket.on("Mail", (data) => {
console.log("Secure-Mail-Server replied");
console.log("Mailer said "+JSON.stringify(data));
console.log("\n");
console.log("Mail status : "+String(data.status));
});
```

---

## Caling from a NodeJS App :

You can access secure-mail-server from any programming language as long as the language supports Socket.io Client. Some other languages are :
- Python
- NodeJS
- Java
- C++
- Swift
- Dart

For more info, check this out : [Socket.io Docs](https://socket.io/docs/v4/index.html)

This example will explain How to call secure-mail-server from a **NodeJS** server :

- **Installation** : Install **`Socket.io-client 2.3.0`** from npm.
```bash
npm install socket.io-client@2.3.0
```
> Other socket.io-client versions might have problems connecting to secure-mail-server.
- **Initialization** : Add the following lines to initialize your socket connection to secure-mail-server.
```JavaScript
const sio = require("socket.io-client")
const io = sio.connect("https://secure-mail-server.herokuapp.com/");
```

- **Emit event** : To send your mail to the server, use the **`socket.emit()`** method. This is similar to a HTTP request. **socket.emit()** method takes 2 arguements. The 1st arguement shall always be **"SendMail"** and the 2nd one is a JSON object as follows :

```JavaScript
var JSON_obj = { 
    from:"from@gmail.com" ,
    pwd:"yourpassword" , 
    to:"toReciever@gmail.com" , 
    sub:"subject of your email" , 
    body:"body of your email" 
}
io.emit("SendMail", JSON_obj );
```

- **Receive event** : To get the output back, use **`socket.on()`** method. It takes 2 arguements with the first one being **"Mail"** and the second one being a JS callback function whose arguement is a JSON Object (data).The data object consists of **`status`** ( the status of email - success / failure ).

```JavaScript
  io.on("Mail", (data) => {
    console.log("Secure-Mail-Server replied");
    console.log("Mailer said "+JSON.stringify(data));
    console.log("\n");
    console.log("Mail status : "+String(data.status));
  });
```
- **Final code** : Run your final code using NodeJS.

```JavaScript
// npm install Socket.io-client@2.3.0
const sio = require("socket.io-client")
const io = sio.connect("https://secure-mail-server.herokuapp.com/");

var JSON_obj = { 
    from:"from@gmail.com" ,
    pwd:"yourpassword" , 
    to:"toReciever@gmail.com" , 
    sub:"subject of your email" , 
    body:"body of your email" 
}
io.emit("SendMail", JSON_obj );

io.on("Mail", (data) => {
    console.log("Secure-Mail-Server replied");
    console.log("Mailer said "+JSON.stringify(data));
    console.log("\n");
    console.log("Mail status : "+String(data.status));
  });
```

---

## Issues we are inviting contributors to fix :
- Add the ability to send stylized HTML based emails. Currently secure-mail-server is only able to send text mails.
- Add documentation to access Secure-Mail-Server from [other languages](#caling-from-a-nodejs-app-) that support Socket.io-client.

---
## Contributors :
|  Sayad Pervez   |  Main Contributor & Founder of Secure Mail Server  | [Sayad Pervez - Github](https://github.com/SayadPervez/SayadPervez) |
|:---:|:---:|:---:|

---
## Clone this Repository :
- [Clone Github Repo](https://github.com/SayadPervez/secure-mail-server)