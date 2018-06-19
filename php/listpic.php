<?php 
header("Content-type:application/json");
include("conn.class.php");
$listpic=new getConn();
$sql="select * from listpic";
$res=$listpic->cexl_sql($sql);
$all=mysqli_fetch_all($res,MYSQL_ASSOC);
echo json_encode($all);
 ?>