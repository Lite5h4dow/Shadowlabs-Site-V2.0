<?php
/**
 * This example shows how to handle a simple contact form.
 */
$msg = '';
//Don't run this unless we're handling a form submission
if (array_key_exists('email', $_POST)) {
  date_default_timezone_set('Etc/UTC');
  require '../assets/phpmailer/PHPMailerAutoload.php';
  //Create a new PHPMailer instance
  $mail = new PHPMailer;
  //Tell PHPMailer to use SMTP - requires a local mail server
  //Faster and safer than using mail()
  $mail->isSMTP();
  $mail->Host = 'localhost';
  $mail->Port = 25;
  //Use a fixed address in your own domain as the from address
  //**DO NOT** use the submitter's address here as it will be forgery
  //and will cause your messages to fail SPF checks
  $mail->setFrom('webmaster@shadowlabs.studio', 'Contact Form');
  //Send the message to yourself, or whoever should receive contact for submissions
  $mail->addAddress('tony@shadowlabs.studio', 'Tony Daughma');
  //Put the submitter's address in a reply-to header
  //This will fail if the address provided is invalid,
  //in which case we should ignore the whole request
  if ($mail->addReplyTo($_POST['email'], $_POST['firstName'])) {
    $mail->Subject = 'PHPMailer contact form';
    //Keep it simple - don't use HTML
    $mail->isHTML(false);
    //Build a simple message body
    $mail->Body = <<<EOT
      Email: {$_POST['email']}
      Name: {$_POST['firstName']}
      Message: {$_POST['body']}
    EOT;
  }
}
?>
