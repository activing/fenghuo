<?php 
session_start();
include("conn.class.php");
@$tcontent = $_REQUEST["tcontent"];
$consult = new getConn();
if($_SESSION['id']){
	$uid=$_SESSION['id'];
}
if($uid == null){
	echo '{"code":-1,"msg":"请登录"}';
}else{
	$sql = "select user_name from user_info where user_id = $uid";
	$res = $consult->cexl_sql($sql);
	$row = mysqli_fetch_row($res);
	$tname = $row[0];

	$sql = "insert into consult (tid,tname,tcontent,ttime)";
	$sql .= " values (null,'$tname','$tcontent',now())";
	$result = $consult->cexl_sql($sql);
	if($result == false){
		die('{"code":-1,"msg":"发送失败"}');
	}else{
		//算总数
		$sql = "select count(tid) from consult";
		$res = $consult->cexl_sql($sql);
		$row = mysqli_fetch_row($res);
		//当总记录数大于5，就输出最后的5条
		if($row[0]>5){
			$offset = $row[0]-5;
			$sql = "select tid,tname,tcontent,ttime from consult";
			$sql .= " limit $offset,5";
		}else{
			$sql = "select tid,tname,tcontent,ttime from consult";
		}
		$result = $consult->cexl_sql($sql);
		$all = mysqli_fetch_all($result,MYSQLI_ASSOC);
		echo json_encode($all);
	}
}
 ?>
