<?php 
header("Content-type:application/json");
include("conn.class.php");
$lunbo=new getConn();
$sql="select lpic from lunbo";
$res=$lunbo->cexl_sql($sql);
$all=mysqli_fetch_all($res,MYSQL_ASSOC);
echo json_encode($all);
 ?>