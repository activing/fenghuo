<?php 
//接收到购物车列表传来的cid
include('conn.class.php');
@$cid=$_REQUEST['cid'];
$delShop=new getConn();
$sql="delete from shopcar where cid='$cid'";
$res=$delShop->cexl_sql($sql);
if($res==true){
	echo 1;
}else{
	echo 0;
}
 ?>
