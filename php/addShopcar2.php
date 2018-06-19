<?php 
session_start();
@$user_id=$_SESSION["id"];
// $user_id=1;
//从前端拿到两个参数
@$count = $_REQUEST["count"];
// $count=2;
@$pid = $_REQUEST["pid"];
$reg = '/^[0-9]{1,}$/';
if(!preg_match($reg,$count)){
	die('{["code":-1,"msg":"数量参数有误！"]}');
}
include("conn.class.php");
$add = new getConn();
$sql = "select cid from shopcar where pid = $pid and user_id = 1";
$res = $add->cexl_sql($sql);
$row=mysqli_fetch_row($res);
//判断购物车是否有该商品
if($row==null){
	// 通过shoppic的pid找到sid
	$sql = "select sid from shoppic where pid=$pid";
	$res = $add->cexl_sql($sql);
	$row=mysqli_fetch_row($res);
	$sid=$row[0];
	// 通过sid找到该商品的名字和价格
	$sql = "select sname,sprice from shop where sid=$sid";
	$res = $add->cexl_sql($sql);
	$row=mysqli_fetch_row($res);

	//如果购物车没找该id就插入数据
	$sql = "insert into shopcar (cname,cprice,cnum,pid,cid,user_id)
	 values ('$row[0]','$row[1]','$count',$pid,null,$user_id)";
}else{
	$sql = "update shopcar set cnum = cnum+$count where pid = $pid";
}
$res = $add->cexl_sql($sql);
if($res==true){
	echo "1";
}else{
	echo "0";
}
 ?>

