<?php 
header("Content-type:application/json; charset=utf-8");
/*
获取所有的商品信息
并且分页显示
 */
include("conn.class.php");
$shop = new getConn();
//从前端拿到查询的条件
@$sh = $_REQUEST["sh"];
//定义每页行数
$pagesize=8;
//初始化页码
$page=1;
if(!empty($_GET['page'])){
	$page=$_GET['page'];
}else{
	$page=1;
}
$di=($page-1)*$pagesize;
if($sh != null){
	$sql="select * from shop";
	$shs=explode(" ",$sh);
	for($i=0;$i<count($shs);$i++){
		$shs[$i]=" sname like '%$shs[$i]%' ";
	}
	$sql.=" where ".implode(" and ",$shs)." limit $di,$pagesize ";
	$sqlcount = 
	"select count(sid) from shop where ".implode(" and ",$shs);

}else{
	$sql="select * from shop limit $di,$pagesize";
	$sqlcount = "select count(sid) from shop";
}
//获取商品shop表的总数据
$rescount=$shop->cexl_sql($sqlcount);
$rowsize=mysqli_fetch_row($rescount);
$allsize=$rowsize[0];

//获取总页数
$allpage=ceil($allsize/$pagesize);

$res=$shop->cexl_sql($sql);
$arr=mysqli_fetch_all($res,MYSQL_ASSOC);

$arrpic = [];
$str ="{";
$str .='"allsize":"'.$allsize.'",';
$str .='"allpage":"'.$allpage.'",';
$str .='"page":"'.$page.'",';
$str .= '"data":[';
for($i=0; $i<count($arr); $i++) {
	$str.="{";
	$str.='"sid":"'.$arr[$i]['sid'].'",';
	$str.='"snew":"'.$arr[$i]['snew'].'",';
	$str.='"sname":"'.$arr[$i]['sname'].'",';
	$str.='"stitle":"'.$arr[$i]['stitle'].'",';
	$str.='"sprice":"'.$arr[$i]['sprice'].'",';
	$str.='"snum":"'.$arr[$i]['snum'].'",';
	$str.='"sadress":"'.$arr[$i]['sadress'].'",';
	
	$sid=$arr[$i]["sid"];
	$sql="select * from shopPic where sid='$sid'";
	$res=$shop->cexl_sql($sql);
	$arrpic=mysqli_fetch_all($res,MYSQL_ASSOC);

	$str.='"pic":[';
	if(count($arrpic) < 1) {
		$str.='"';
	}
	for($j=0; $j<count($arrpic); $j++) {
		$str.="{";
		$str.='"pid":"'.$arrpic[$j]['pid'].'",';
		$str.='"sid":"'.$arrpic[$j]['sid'].'",';
		$str.='"spic":"'.$arrpic[$j]['spic'].'"';
		$str.="},";
	}
	$str = substr($str,0,strlen($str)-1);
	$str.=']';
	$str.="},";
}
$str = substr($str,0,strlen($str)-1);
$str.="]}";
echo $str;
 ?>