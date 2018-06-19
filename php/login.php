<?php 
session_start();
include("conn.class.php");
@$phone=$_REQUEST['phone'];
@$pwd=$_REQUEST['pwd'];
$login=new getConn();
//下面的1是手机第一位数字以1开头，{9}手机号码除第一位外，其他重复10次
if(preg_match('/^1([0-9]{9})/',$phone)){
	$sql="select * from user_info where user_tel='$phone' and user_pwd='$pwd'";
}else{
	$sql="select * from user_info where user_email='$phone' and user_pwd='$pwd'";
}
$res=$login->cexl_sql($sql);
$row=mysqli_fetch_row($res);
// 拿他的id遍历$row数组
if($row!=false){
	//拿用户id保存在session中
	$_SESSION['id']=$row[0];
	echo "ok";
}else{
	echo "no";
}
 ?>
