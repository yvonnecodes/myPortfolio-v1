<?php
if (isset(S_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['name'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

$mailTo = "customersupport@vonniecodes.com";
$headers = "From: ".$mailFrom;
$txt = "You have received an e-mail from ".$name".\n\n".$message;

mail($mailTo, $subject, $txt, $headers);
header("Location: index.html?mailsend");

}
?>
