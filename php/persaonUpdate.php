<?php 
//拿出昵称,收货地址和性别
session_start();
header("Content-type:application/json");
include("conn.class.php");
if($_SESSION['id']){
	$uid=$_SESSION['id'];
}
$perUpdate=new getConn();
$sql="select user_name,gender,uadress from user_info where user_id='$uid'";
$res=$perUpdate->cexl_sql($sql);
$all=mysqli_fetch_all($res,MYSQL_ASSOC);
echo json_encode($all);
 ?>