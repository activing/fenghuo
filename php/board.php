<?php 
header("Content-type:application/json");
include("conn.class.php");
$board=new getConn();
$b=9;
$str=[];
$sql="select * from board where bid<'$b'";
$res=$board->cexl_sql($sql);
$str["one"]=mysqli_fetch_all($res,1);

$sql="select * from board where bid>='$b' and bid<'17'";
$res=$board->cexl_sql($sql);
$str["two"]=mysqli_fetch_all($res,1);

$sql="select * from board where bid>='17'";
$res=$board->cexl_sql($sql);
$str["three"]=mysqli_fetch_all($res,1);
echo json_encode($str);

 ?>