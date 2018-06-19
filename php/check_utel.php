<?php 
include("conn.class.php");
$check=new getConn();
@$utel=$_REQUEST["utel"];
$sql="select * from user_info where user_tel='$utel'";
$res=$check->cexl_sql($sql);
$row=mysqli_fetch_row($res);
if($row==null){
	echo "0";//0不存在该手机号，可以注册
}else{
	echo "1";//该手机号被注册
}
 ?>
