-- ´´½¨Êý¾Ý¿â
create database shopping charset utf8;
-- 管理员表
create table admin(
	uname varchar(16) not null primary key,
	upwd varchar(16) not null,
	uphoto varchar(128)
)default charset=utf8;

-- 用户信息表
create table user_info(
	user_id  int(10) primary key auto_increment,
	user_tel varchar(16)  unique,
	user_email varchar(64),
	user_pwd varchar(32),
	uphoto varchar(128),
	user_name varchar(32),
	gender int(11),
	uadress varchar(256)
)default charset=utf8;

-- 商品表
create table shop(
	sid int(10) primary key auto_increment,
	snew char(8),
	sname varchar(32),
	stitle varchar(128),
	sprice decimal(10,2),
	snum char(8),
	sadress varchar(128)
)default charset=utf8;
-- 商品详情表
create table shopPic(
	pid int(10) primary key auto_increment,
	sid int(10),
	spic varchar(128),
	stitle varchar(256),
	spcolor varchar(128),
	spbrand varchar(32),
	spnumbers int
	foreign key(sid) references shop(sid)
)default charset=utf8;
-- 商品详情表
create table shopDetails(
	Did int primary key auto_increment,
	Dname varchar(256),
	Dnumber int,
	Dsize varchar(128),
	Dcolor varchar(64),
	Dstyle varchar(32)
)default charset=utf8;

-- 购物车表
create table shopCar(
	cid int(10) primary key,
	cname varchar(64),
	cprice decimal(10,2),
	cnum int,
	pid int,
	user_id int(10) 
)default charset=utf8;

-- 订单表
create table indent(
	did int primary key auto_increment,
	pid int,
	user_id int(10)
)default charset=utf8;

-- 轮播图
create table lunbo(
	lid int primary key auto_increment,
	lpic varchar(128),
	lurl varchar(128)
)default charset=utf8;
-- 主页展示图
create table listpic(
	lpid int primary key auto_increment,
	lpurl varchar(128),
	lpname varchar(256),
	lpcontent varchar(256),
	lpnum varchar(128)
)default charset=utf8;
-- 公告栏
create table board(
	bid int primary key auto_increment,
	btitle varchar(256),
	burl varchar(128)
)default charset=utf8;

-- 楼层滚动
create table louc(
	oid int primary key auto_increment,
	osm varchar(128),
	omd varchar(128),
	olg varchar(128),
	ourl varchar(128)
)default charset=utf8;

-- 咨询
create table consult(
	tid int primary key auto_increment,
	tname varchar(32),
	tcontent varchar(256),
	ttime dateTime
)default charset=utf8;