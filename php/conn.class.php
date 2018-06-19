<?php 
class getConn{
	private $conn;
	private $host="localhost";
	// private $host = "10.226.44.166";
	private $user="root";
	// private $user = "mysql1805145d66";
	private $upwd="";
	// private $upwd = " 5d6L60f3f1";
	private $db="shopping";
	// private $db = "mysql1805145d66_db";
	//构造函数
	public function getConn(){
		$this->conn=mysqli_connect($this->host,$this->user,$this->upwd,$this->db,3306);
		mysqli_query($this->conn,"set names utf8");
	}
	//将数据写入数据库
	public function cexl_sql($sql){
		$res=mysqli_query($this->conn,$sql);
		return $res;
	}
}
 ?>
