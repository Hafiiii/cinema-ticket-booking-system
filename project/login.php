<?php
session_start();
include 'connection.php';
$email = $_POST['email'];
$pwd = $_POST['password'];
$sql = "SELECT * FROM user WHERE user_email='" . $email . "'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	// output data of each row
	while ($row = $result->fetch_assoc()) {

		if ($row["user_password"] === md5($pwd)) {
			$_SESSION['user_id'] = $row['user_id'];
			$_SESSION['user_name'] = $row['user_name'];
			$_SESSION['user_role'] = $row['user_role'];
			// _SESSION['user_image'] = isset($row['user_image'])?$row['user_image']:null;

			if($row["user_role"] == "admin"){
				echo "<script>alert(\"Login successful!\");window.location.href=\"admin_index.html\";</script>";
			}else {
				echo "<script>alert(\"Login successful!\");window.location.href=\"member_index.html\";</script>";
			}
		}
	}
} else {
	echo "<script>alert(\"Login unsuccessful!\");window.history.back(-1);</script>";;
}
$conn->close();
?>