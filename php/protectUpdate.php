<?php 
// 保存我的个人中心的修改
session_start();
include("conn.class.php");
if($_SESSION['id']){
	$uid=$_SESSION['id'];
}
@$username=$_REQUEST["username"];
@$uadress=$_REQUEST["uadress"];
@$sex=$_REQUEST["sex"];
$proUp=new getConn();
$sql="update user_info set user_name='$username',uadress='$uadress',gender='$sex' where user_id='$uid'";
$res=$proUp->cexl_sql($sql);
if($res==true){
	echo "1";
}else{
	echo "0";
}
 ?>
