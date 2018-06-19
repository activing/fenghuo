<?php 
header("Content-type:application/json");
session_start();
if($_SESSION['id']){
	$id = $_SESSION['id'];
}
include("conn.class.php");
$showShop=new getConn();
$sql="select cname,cprice,cnum,cid from shopcar where user_id = $id";
$res=$showShop->cexl_sql($sql);
$all=mysqli_fetch_all($res,MYSQL_ASSOC);
echo json_encode($all);
 ?>