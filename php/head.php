<?php 
header("Content-type:application/json;charset=utf-8");
include("conn.class.php");
session_start();
if($_SESSION['id']){
	$id = $_SESSION['id'];
}
$header = new getConn();
$sql = "select cnum from shopcar where user_id = $id";
$result = $header->cexl_sql($sql);
$all = mysqli_fetch_all($result);
echo json_encode($all);
 ?>