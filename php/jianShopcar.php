<?php 
include("conn.class.php");
@$cid=$_REQUEST["cid"];
$jh=new getConn();

$sql="select cnum from shopcar where cid='$cid'";
$res=$jh->cexl_sql($sql);
$row=mysqli_fetch_row($res);
if($row[0]>1){
	$jian=$row[0]-1;
}
$sql="update shopcar set cnum='$jian' where cid='$cid'";
$result=$jh->cexl_sql($sql);

if($result==true){
	echo "1";
}else{
	echo "0";
}
 ?>

