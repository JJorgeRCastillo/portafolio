<?php

if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Error de argumentos!";
	return false;
   }
	
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// Create the email and send the message
$to = 'jjorge.rc93@gmail.com';
$email_subject = "Contacto de Página Web:  $name";
$email_body = "Has recibio un nuevo mensaje de tu página de contacto.\n\n"."Estos son los detalles:\n\nNombre: $name\n\nCorreo Electrónico: $email_address\n\nTeléfono: $phone\n\nMensaje:\n$message";
$headers = "De: kanh_2832@hotmail.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Para: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>
