<?php 
header("Content-type:application/json");
include("conn.class.php");
$details=new getConn();
@$pid=$_REQUEST["pid"];
$arr=[];
if($pid!=null){
	$sql="select * from shopPic where pid=$pid";
	$res=$details->cexl_sql($sql);
	$row=mysqli_fetch_row($res);
	$arr["shopPic"]=$row;

	$sid=$row[1];
	$sql="select sprice,sname from shop where sid=$sid";
	$result=$details->cexl_sql($sql);
	$row=mysqli_fetch_row($result);
	$arr["shop"]=$row;
	echo json_encode($arr);
}
 ?>
