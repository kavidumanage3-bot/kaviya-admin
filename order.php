<?php

$uid = $_POST['uid'];
$pack = $_POST['pack'];

$message = "/id $uid $pack";

$botToken = "8799375203:AAEbldBCM66UiShErsHzHxRO9nejgot7kO0";
$chatId = "-8799375203";

$url = "https://api.telegram.org/bot$botToken/sendMessage";

$data = [
'chat_id' => $chatId,
'text' => $message
];

$options = [
'http' => [
'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
'method'  => 'POST',
'content' => http_build_query($data),
],
];

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

echo "Order sent!";
?>
