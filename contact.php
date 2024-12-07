<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Display the submitted information (for testing purposes)
    echo "<h2>Thank you, $name!</h2>";
    echo "<p>Your message has been sent.</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Subject:</strong> $subject</p>";
    echo "<p><strong>Message:</strong> $message</p>";

   $conn =  mysqli_connect("localhost", "root","root","cseweb");
   if($conn->connect_error){
    echo "<p>Connection failed</p>";
    die("connection failed");
   }
   echo "connect successfully";
   
    // Here you can add code to send an email or save the data in a database
}
?>