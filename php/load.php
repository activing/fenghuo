<?php
// @$id = 1;
session_start();
if($_SESSION['id']){
	$id = $_SESSION['id'];
}
    //获取上传文件信息（上传文件/上传文件大小/上传文件类型)
//    1,获取文件的名称
$mypic = $_FILES["mypic"]["name"];
//    2,获取上传文件大小  单位字节
$picSize = $_FILES["mypic"]["size"]/1024;
//    3,判断文件是否过大，如果上传文件超过512kb 禁止上传
if($picSize > 2000){
   die('{"code":-1,"msg":"图片过大，不允许上传"}');
}
//    4,创建新文件名
$ext = strstr($mypic,".");//拆分文件名获得  .后面
$file  = "../upload/".time().rand(1,999).$ext;
//    5,将临时文件移动到指定到upload目录并修改文件名
move_uploaded_file($_FILES["mypic"]["tmp_name"],$file);
//更换图片路径
include("conn.class.php");
$uphoto = new getConn();
$sql = "update user_info set uphoto = '$file' where user_id = $id";
$result = $uphoto->cexl_sql($sql);
if($result == true){
	header("Location:../html/person.html");
}else{
	header("Location:../html/person.html");
}
?>