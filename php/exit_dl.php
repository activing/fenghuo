<?php 
session_start();
if($_SESSION['id']){
	unset($_SESSION['id']);
	echo "ok";
}
 ?>
