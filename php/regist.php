<?php 
session_start();
include("conn.class.php");
@$utel=$_REQUEST["utel"];
@$uadress=$_REQUEST["uadress"];
@$upwd=$_REQUEST["upwd"];
$regist=new getConn();
if($_SESSION['code']==$_REQUEST["ucode"]){
	$sql="insert into user_info (user_tel,user_email,user_pwd) values ('$utel','$uadress','$upwd')";
	$res=$regist->cexl_sql($sql);
	if($res==true){
		echo "ok";
	}else{
		echo "no";
	}
}
 ?>
