<?php

session_start();
include 'connection.php';

if(isset($_POST['edit']))
{
    $name=$_POST['name'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $cpassword=$_POST['cpassword'];

    $select = "SELECT * FROM user WHERE user_email='" . $email . "'";
    $sql = mysqli_query($conn, $select);
    $row = mysqli_fetch_assoc($sql);
    

    $res= $row['email'];
    if($res === $email)
    {
        $update = "update user set name='$name', password='$password' where email='$email'";
        $sql2=mysqli_query($conn,$update);

    if($sql2)
        { 
            //Successful
            header('location:member_index.html');
        }
        else
        {
            //sorry your profile is not update
            header('location:member_profile.html');
        }
     }
     else
     {
         //sorry your email is not match
         header('location:member_profile.html');
     }
  }
 ?> 