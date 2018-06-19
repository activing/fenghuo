<?php 
/*
添加购物车
 */
@$uid=$_REQUEST["uid"];// 物品的id
@$sid=$_REQUEST["sid"];
session_start();
$user_id=$_SESSION["id"];
// $uid=1;
// 连接数据库 
include("conn.class.php");
$shopcar=new getConn();
// if($uid!=null&&$sid!=null)
	//通过物品的id去数据库拿到该物品的数据
	$sql="select sid,sname,sprice,snum from shop where sid='$sid'";
	$res=$shopcar->cexl_sql($sql);
	$row=mysqli_fetch_row($res);
	
	//判断购物车是否有为空
	$sql="select cid from shopcar where cid='$uid'";
	$res=$shopcar->cexl_sql($sql);
	$all=mysqli_fetch_row($res);
	//如果购物车为空，或则没有该物品,就插入该物品数据
	if($all==null || $uid!=$all[0]){
		$sql="insert into shopcar (cid,cname,cprice,cnum,pid,user_id) values 
		($uid,'$row[1]','$row[2]',1,$uid,$user_id)";
		
	}else{
		// 如果购物车有该物品，就将该物品数量加一
		//先获取该物品的数量
		$sql="select cnum from shopcar where cid='$uid'";
		$res=$shopcar->cexl_sql($sql);
		$rowe=mysqli_fetch_row($res);
		$sum=$rowe[0]+1;
		$sql="update shopcar set cnum='$sum' where cid='$uid'";
	}
	$result=$shopcar->cexl_sql($sql);
	if($result==true){
		echo "1";
	}else{
		echo "0";
	}
 ?>
