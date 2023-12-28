<?php
include 'connection.php';

//validation part
$fullnameError = $emailError = $passError = "";//initialize all 

//check if method is post then execute
if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    if (empty($_POST["name"]))
    {
        $fullnameError = "Please enter your full name!";
        echo "<script>alert('$fullnameError');</script>";
        echo"<script>window.location.href=\"../index.html\";</script>"; //go back to homepage

    }
     // check if full name is alpha only
    elseif(!preg_match('/^[a-zA-Z][0-9a-zA-Z]{2,23}$/',$_POST["name"])) 
    {

        $fullnameError = "Only alpha characters for full name is allowed, please re-enter";
        echo "<script>alert('$fullnameError');</script>";
        echo"<script>window.location.href=\"../index.html\";</script>";
       
    }   
    elseif (empty($_POST["email"]))
    {
      $emailError = "Please enter your email!";
      echo "<script>alert('$emailError');</script>";
      echo"<script>window.location.href=\"../index.html\";</script>";
      
    }
    // check if e-mail address is in correct format
    elseif(!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL))
    {   
        $emailError = "Invalid email format, please re-enter";
        echo "<script>alert('$emailError');</script>";
        echo"<script>window.location.href=\"../index.html\";</script>";
    }
    elseif (empty($_POST["password"])) 
    {   
      $passError = "Plese enter your password!";
      echo "<script>alert('$passError');</script>";
      echo"<script>window.location.href=\"../index.html\";</script>";
      
    }
    // check if password is in correct format
    elseif(!preg_match("/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/", $_POST["password"]))
    {   
            $passError = "Minimum 8 characters, 1 digit, 1 uppercase letter,1 lowercase letter, 1 special character, Try again";
            echo "<script>alert('$passError');</script>";
            echo"<script>window.location.href=\"../index.html\";</script>";
    }
    else
    {
            $name=$_POST['name'];
            $role=$_POST['role'];
            $email=$_POST['email'];
            $password=$_POST['password'];
            $cpassword=$_POST['cpassword'];
            $pwdhash;
            if($password === $cpassword){

              $pwdhash =md5($password);
              $sql = "INSERT INTO user (user_email, user_password, user_name, user_role)
              VALUES ('$email', '$pwdhash','$name','$role')";
              
              if ($conn->query($sql) === TRUE) {
                $last_id = $conn->insert_id;
                $_SESSION["last"] = $last_id;
                echo "<script>alert(\"User created successfully!\");</script>";
                echo"<script>window.location.href=\"../index.html\";</script>";
              } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
              }
            }else{
              
              echo"<script>alert(\"Registration Unsuccessful!\");window.history.back(-1);</script>";
            }
    }

}



$conn->close();
?> 