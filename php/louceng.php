<?php 
header("Content-type:application/json");
include("conn.class.php");
$louceng=new getConn();
//获取楼层右边商品
$sql="select pid,spic,stitle from shoppic limit 0,18";
$res=$louceng->cexl_sql($sql);
$all=mysqli_fetch_all($res,1);

// 获取楼层中的图片信息
$sql = "select osm,omd,olg from louc";
$res = $louceng->cexl_sql($sql);
$all1 = mysqli_fetch_all($res,1);
$output = ["all"=>$all,"all1"=>$all1];

echo json_encode($output);
 ?>