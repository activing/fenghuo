<?php 
// 启动session
session_start();
//设置请求头，输出图片格式
header("Content-type:image/jpeg");
//创建画图大小 /imagecreate(width,height);
$img=imagecreatetruecolor(60,28);
//给背景配颜色 imagecolorallocate(image,red,yellow,green);
//mt_rand();随机获取数
$color=imagecolorallocate($img,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255));
//字体颜色
$fontcolor=imagecolorallocate($img, 255,255,255);
//添加干扰线
for($i=0;$i<3;$i++){
	$color=imagecolorallocate($img,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255));
	//imageline画一条线段imageline(image,0,0,0,0,color);
	imageline($img,mt_rand(0,60),mt_rand(0,30),
	 mt_rand(0,60),mt_rand(0,30), $color);
}
//添加干扰点
for($i=0;$i<20;$i++){
	$color=imagecolorallocate($img,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255));
	//imagesetpixel画点imagesetpixel(image,0,0,color);
	imagesetpixel($img,mt_rand(0,60),mt_rand(0,60),$color);
}
//定义验证码
$str="0123456789";
$strlen=strlen($str);//$str字符长度
//初始化值,用于放4个数的验证码
$code="";
for($i=0;$i<4;$i++){
	$code .=$str[mt_rand(0,$strlen-1)];
}
//保存在session中
$_SESSION['code']=$code;
//把四个整数放到图片中
////imagestring(image,字体大小,left,top,字体颜色);
imagestring($img,30,mt_rand(0,15),mt_rand(0,15),$code,$fontcolor);
//给图像填充颜色
imagefill($img,0,0,$color);
//输出图像
imagejpeg($img);
//销毁图像
imagedestroy($img);
 ?>