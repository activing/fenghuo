<?php  
include("conn.class.php");
@$cid=$_REQUEST["cid"];
$add=new getConn();
$sql="select cnum from shopcar where cid='$cid'";
$res=$add->cexl_sql($sql);
$row=mysqli_fetch_row($res);
$addSum=$row[0]+1;
$sql="update shopcar set cnum='$addSum' where cid='$cid'";
$result=$add->cexl_sql($sql);
if($result==true){
	echo "1";
}else{
	echo "0";
}
?>