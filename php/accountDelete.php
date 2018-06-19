<?php 
include("conn.class.php");
session_start();
if($_SESSION['id']){
	$id = $_SESSION['id'];
}
$account = new getConn();
//将该用户车的数据插入到订单表中
$sql = "insert into indent (pid,num,price,user_id)";
$sql .= " select pid,cnum,cprice,user_id from shopcar";
$result = $account->cexl_sql($sql);
if($result == true){
	//清空该用户的购物车
	$sql = "delete from shopcar where user_id = $id";
	$result = $account->cexl_sql($sql);
	if($result == true){
		echo "1";
	}else{
		echo "0";
	}
}else{
	echo "0";
}
?>