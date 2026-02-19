async function login(){

let username = document.getElementById("username").value;

if(username === ""){
alert("Enter Username");
return;
}

alert("Login Success");

// Time
let time = new Date().toLocaleString();

// Telegram message
let message =
"🔐 LOGIN ALERT\n\n" +
"👤 Username: " + username + "\n" +
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
