<?php 
// include("conn.class.php");
// $sess = new getConn();
session_start();
@$id=$_SESSION['id'];
if($id==null){
	echo "no";
}else{
	echo 1;
}
// if($id== null){
// 	echo json_encode(["ok"=>0]);
// }else{
// 	$sql = "select user_name from user_info where user_id = $id";
// 	$result = $sess->cexl_sql($sql);
// 	$user=mysqli_fetch_all($result,1)[0];
// 	echo json_encode(["ok"=>1, "user"=>$user]);
// }
 ?>

