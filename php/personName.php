<?php 
//拿出当前用户的所有数据,写入页面上
header("Content-type:application/json");
session_start();
if($_SESSION['id']){
	$uid=$_SESSION['id'];
}
include("conn.class.php");
$perName=new getConn();
$sql="select user_id,user_tel,user_email,uphoto,user_name,gender,uadress";
$sql .=" from user_info where user_id='$uid'";
$res=$perName->cexl_sql($sql);
$all=mysqli_fetch_assoc($res);
echo json_encode($all);
 ?>