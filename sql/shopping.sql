-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-05-21 17:08:17
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopping`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `uname` varchar(32) DEFAULT NULL,
  `upwd` varchar(32) DEFAULT NULL,
  `uphoto` varchar(128) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `uname`, `upwd`, `uphoto`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', '../upload/1522939619533.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `board`
--

CREATE TABLE `board` (
  `bid` int(11) NOT NULL,
  `btitle` varchar(256) DEFAULT NULL,
  `burl` varchar(128) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `board`
--

INSERT INTO `board` (`bid`, `btitle`, `burl`) VALUES
(1, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(2, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(3, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(4, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(5, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(6, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(7, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(8, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(9, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(10, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(11, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(12, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(13, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(14, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(15, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(16, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(17, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(18, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(19, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(20, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(21, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(22, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(23, '春节大减价，每双鞋只要88,快来抢购吧！', ''),
(24, '春节大减价，每双鞋只要88,快来抢购吧！', '');

-- --------------------------------------------------------

--
-- 表的结构 `consult`
--

CREATE TABLE `consult` (
  `tid` int(11) NOT NULL,
  `tname` varchar(32) DEFAULT NULL,
  `tcontent` varchar(256) DEFAULT NULL,
  `ttime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `consult`
--

INSERT INTO `consult` (`tid`, `tname`, `tcontent`, `ttime`) VALUES
(1, '@笨小孩', '在吗\n				', '2018-05-14 22:07:08'),
(2, '@笨小孩', '你好，huahua\n				', '2018-05-14 22:07:21'),
(3, '@笨小孩', 'nihao			', '2018-05-14 22:09:00'),
(4, '@笨小孩', '何再宽				', '2018-05-14 22:09:59'),
(5, '@笨小孩', '我爱你				', '2018-05-14 22:11:07'),
(6, '@笨小孩', '花花，			', '2018-05-14 22:13:01'),
(7, '@笨小孩', '我爱你			', '2018-05-21 00:13:22'),
(8, '@笨小孩', '我真的爱你		', '2018-05-21 00:13:41'),
(9, '@笨小孩', '我爱你', '2018-05-21 00:19:20'),
(10, '@笨小孩', '55		', '2018-05-21 00:31:45'),
(11, '@笨小孩', 'hello', '2018-05-21 11:09:18'),
(12, 'huahua', 'hi', '2018-05-21 11:10:04');

-- --------------------------------------------------------

--
-- 表的结构 `indent`
--

CREATE TABLE `indent` (
  `did` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `indent`
--

INSERT INTO `indent` (`did`, `pid`, `user_id`, `num`, `price`) VALUES
(12, 8, 1, 5, '99.00');

-- --------------------------------------------------------

--
-- 表的结构 `listpic`
--

CREATE TABLE `listpic` (
  `lpid` int(11) NOT NULL,
  `lpurl` varchar(128) DEFAULT NULL,
  `lpname` varchar(256) DEFAULT NULL,
  `lpcontent` varchar(256) DEFAULT NULL,
  `lpnum` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `listpic`
--

INSERT INTO `listpic` (`lpid`, `lpurl`, `lpname`, `lpcontent`, `lpnum`) VALUES
(1, '../images/listpic/20.jpg', '复古风休闲鞋[特惠]两双低至5折', '请赶快来抢购吧！', '月销量过万'),
(2, '../images/listpic/21.jpg', '耐穿耐磨[特惠]两双低至5折', '请赶快来抢购吧！', '月销量过万'),
(3, '../images/listpic/22.jpg', '现代风休闲鞋[特惠]两双低至5折', '请赶快来抢购吧！', '月销量过万');

-- --------------------------------------------------------

--
-- 表的结构 `louc`
--

CREATE TABLE `louc` (
  `oid` int(11) NOT NULL,
  `osm` varchar(128) DEFAULT NULL,
  `omd` varchar(128) DEFAULT NULL,
  `olg` varchar(128) DEFAULT NULL,
  `ourl` varchar(128) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `louc`
--

INSERT INTO `louc` (`oid`, `osm`, `omd`, `olg`, `ourl`) VALUES
(1, '../images/louc/101.jpg', '../images/louc/102.jpg', '../images/louc/103.jpg', NULL),
(2, '../images/louc/201.jpg', '../images/louc/202.jpg', '../images/louc/203.jpg', NULL),
(3, '../images/louc/301.jpg', '../images/louc/302.jpg', '../images/louc/303.jpg', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `lunbo`
--

CREATE TABLE `lunbo` (
  `lid` int(11) NOT NULL,
  `lpic` varchar(128) DEFAULT NULL,
  `lurl` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `lunbo`
--

INSERT INTO `lunbo` (`lid`, `lpic`, `lurl`) VALUES
(1, '../images/lunbo/10.jpg', ''),
(2, '../images/lunbo/11.jpg', ''),
(3, '../images/lunbo/12.jpg', ''),
(4, '../images/lunbo/13.jpg', ''),
(5, '../images/lunbo/14.jpg', '');

-- --------------------------------------------------------

--
-- 表的结构 `shop`
--

CREATE TABLE `shop` (
  `sid` int(10) NOT NULL,
  `snew` char(8) DEFAULT NULL,
  `sname` varchar(32) DEFAULT NULL,
  `stitle` varchar(128) DEFAULT NULL,
  `sprice` decimal(10,2) DEFAULT NULL,
  `snum` char(8) DEFAULT NULL,
  `sadress` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `shop`
--

INSERT INTO `shop` (`sid`, `snew`, `sname`, `stitle`, `sprice`, `snum`, `sadress`) VALUES
(26, '新品', '都市休闲鞋01', '烽火', '99.00', '100', '广州'),
(27, '新品', '都市休闲鞋02', '烽火', '99.00', '100', '广州'),
(28, '新品', '都市休闲鞋03', '烽火', '99.00', '100', '广州'),
(29, '新品', '都市休闲鞋04', '烽火', '99.00', '100', '广州'),
(30, '新品', '都市休闲鞋05', '烽火', '99.00', '100', '广州'),
(31, '新品', '都市休闲鞋06', '烽火', '99.00', '100', '广州'),
(32, '新品', '都市休闲鞋07', '烽火', '99.00', '100', '广州'),
(33, '新品', '都市休闲鞋08', '烽火', '99.00', '100', '广州'),
(34, '', '都市休闲鞋09', '烽火', '199.00', '100', '广州'),
(35, '', '都市休闲鞋10', '烽火', '169.00', '100', '广州'),
(36, '', '都市休闲鞋11', '烽火', '149.00', '100', '广州'),
(37, '', '都市休闲鞋12', '烽火', '69.00', '100', '广州'),
(38, '', '都市休闲鞋13', '烽火', '89.00', '100', '广州'),
(39, '', '都市休闲鞋14', '烽火', '99.00', '100', '广州'),
(40, '', '都市休闲鞋15', '烽火', '129.00', '100', '广州'),
(41, '', '都市休闲鞋16', '烽火', '129.00', '100', '广州'),
(42, '', '春季休闲鞋17', '烽火', '199.00', '100', '广州'),
(43, '', '春季休闲鞋18', '烽火', '169.00', '100', '广州'),
(44, '', '春季休闲鞋19', '烽火', '149.00', '100', '广州'),
(45, '', '春季休闲鞋20', '烽火', '69.00', '100', '广州'),
(46, '', '春季休闲鞋21', '烽火', '89.00', '100', '广州'),
(47, '', '春季休闲鞋22', '烽火', '99.00', '100', '广州'),
(48, '', '春季休闲鞋23', '烽火', '129.00', '100', '广州'),
(49, '', '春季休闲鞋24', '烽火', '129.00', '100', '广州');

-- --------------------------------------------------------

--
-- 表的结构 `shopcar`
--

CREATE TABLE `shopcar` (
  `cname` varchar(64) DEFAULT NULL,
  `cprice` decimal(10,2) DEFAULT NULL,
  `cnum` int(11) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `cid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `shoppic`
--

CREATE TABLE `shoppic` (
  `pid` int(10) NOT NULL,
  `sid` int(10) DEFAULT NULL,
  `spic` varchar(128) DEFAULT NULL,
  `stitle` varchar(256) DEFAULT NULL,
  `spcolor` varchar(128) DEFAULT NULL,
  `spbrand` varchar(32) DEFAULT NULL,
  `spnumbers` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `shoppic`
--

INSERT INTO `shoppic` (`pid`, `sid`, `spic`, `stitle`, `spcolor`, `spbrand`, `spnumbers`) VALUES
(1, 26, '../images/image/01.jpg', '烽火 都市休闲鞋1231515156', '深蓝色', '烽火', 1231515156),
(2, 26, '../images/image/02.jpg', '烽火 都市休闲鞋5464894561', '深灰黑', '烽火', 1000000000),
(3, 26, '../images/image/03.jpg', '烽火 都市休闲鞋1231515157', '深蓝色', '烽火', 1231515157),
(4, 26, '../images/image/04.jpg', '烽火 都市休闲鞋1231515158', '黑色', '烽火', 1231515158),
(5, 26, '../images/image/05.jpg', '烽火 都市休闲鞋1231515120', '全黑色', '烽火', 1231515120),
(6, 27, '../images/image/06.jpg', '烽火 都市休闲鞋1231515159', '灰黑加白', '烽火', 1231515159),
(7, 27, '../images/image/07.jpg', '烽火 都市休闲鞋1231515222', '黑色', '烽火', 1231515222),
(8, 27, '../images/image/08.jpg', '烽火 都市休闲鞋1231515160', '深灰', '烽火', 1231515160),
(9, 28, '../images/image/09.jpg', '烽火 都市休闲鞋1231515161', '深灰黑', '烽火', 1231515161),
(10, 28, '../images/image/10.jpg', '烽火 都市休闲鞋1231515162', '深蓝灰', '烽火', 1231515162),
(11, 28, '../images/image/11.jpg', '烽火 都市休闲鞋1231515163', '深黑', '烽火', 1231515163),
(12, 29, '../images/image/12.jpg', '烽火 都市休闲鞋1231515164', '玫瑰红', '烽火', 1231515164),
(13, 29, '../images/image/13.jpg', '烽火 都市休闲鞋1231515165', '深灰黑', '烽火', 1231515165),
(14, 29, '../images/image/14.jpg', '烽火 都市休闲鞋1231515166', '深灰', '烽火', 1231515166),
(15, 30, '../images/image/15.jpg', '烽火 都市休闲鞋1231515167', '深蓝', '烽火', 1231515167),
(16, 30, '../images/image/16.jpg', '烽火 都市休闲鞋1231515168', '浅蓝', '烽火', 1231515168),
(17, 31, '../images/image/17.jpg', '烽火 都市休闲鞋1231515169', '棕黑', '烽火', 1231515169),
(18, 31, '../images/image/18.jpg', '烽火 都市休闲鞋1231515170', '浅灰', '烽火', 1231515170),
(19, 31, '../images/image/19.jpg', '烽火 都市休闲鞋1231515171', '深灰黑', '烽火', 1231515171),
(20, 31, '../images/image/20.jpg', '烽火 都市休闲鞋1231515172', '灰黑相间', '烽火', 1231515172),
(21, 32, '../images/image/21.jpg', '烽火 都市休闲鞋1231515173', '灰蓝', '烽火', 1231515173),
(22, 32, '../images/image/22.jpg', '烽火 都市休闲鞋1231515174', '深灰黑', '烽火', 1231515174),
(23, 32, '../images/image/23.jpg', '烽火 都市休闲鞋1231515175', '黑红', '烽火', 1231515175),
(24, 33, '../images/image/24.jpg', '烽火 都市休闲鞋1231515176', '黑红', '烽火', 1231515176),
(25, 33, '../images/image/25.jpg', '烽火 都市休闲鞋1231515177', '蓝灰', '烽火', 1231515177),
(26, 33, '../images/image/26.jpg', '烽火 都市休闲鞋1231515178', '深灰', '烽火', 1231515178),
(27, 34, '../images/image/27.jpg', '烽火 都市休闲鞋1231515179', '黑色', '烽火', 1231515179),
(28, 34, '../images/image/28.jpg', '烽火 都市休闲鞋1231515180', '米白灰', '烽火', 1231515180),
(29, 34, '../images/image/29.jpg', '烽火 都市休闲鞋1231515181', '白色', '烽火', 1231515181),
(30, 34, '../images/image/30.jpg', '烽火 都市休闲鞋1231515182', '深黑', '烽火', 1231515182),
(31, 34, '../images/image/31.jpg', '烽火 都市休闲鞋1231515183', '黑色', '烽火', 1231515183),
(32, 35, '../images/image/32.jpg', '烽火 都市休闲鞋1231515184', '粉红黑', '烽火', 1231515184),
(33, 35, '../images/image/33.jpg', '烽火 都市休闲鞋1231515185', '浅灰', '烽火', 1231515185),
(34, 35, '../images/image/34.jpg', '烽火 都市休闲鞋1231515186', '白色', '烽火', 1231515186),
(35, 36, '../images/image/35.jpg', '烽火 都市休闲鞋1231515187', '黑色', '烽火', 1231515187),
(36, 36, '../images/image/36.jpg', '烽火 都市休闲鞋1231515188', '深灰黑', '烽火', 1231515188),
(37, 37, '../images/image/37.jpg', '烽火 都市休闲鞋1231515189', '深灰黑', '烽火', 1231515189),
(38, 37, '../images/image/38.jpg', '烽火 都市休闲鞋1231515190', '深黑', '烽火', 1231515190),
(39, 37, '../images/image/39.jpg', '烽火 都市休闲鞋1231515191', '黑红', '烽火', 1231515191),
(40, 37, '../images/image/40.jpg', '烽火 都市休闲鞋1231515192', '红色', '烽火', 1231515192),
(41, 38, '../images/image/41.jpg', '烽火 都市休闲鞋1231515193', '浅蓝', '烽火', 1231515193),
(42, 39, '../images/image/42.jpg', '烽火 都市休闲鞋1231515194', '灰黑', '烽火', 1231515194),
(43, 40, '../images/image/43.jpg', '烽火 都市休闲鞋1231515195', '深灰黑', '烽火', 1231515195),
(44, 40, '../images/image/44.jpg', '烽火 都市休闲鞋1231515196', '灰黑相间', '烽火', 1231515196),
(45, 41, '../images/image/45.jpg', '烽火 都市休闲鞋1231515197', '深灰黑', '烽火', 1231515197),
(46, 41, '../images/image/46.jpg', '烽火 都市休闲鞋1231515198', '浅灰黑', '烽火', 1231515198),
(47, 41, '../images/image/47.jpg', '烽火 都市休闲鞋1231515199', '灰白', '烽火', 1231515199),
(48, 42, '../images/image/48.jpg', '烽火 都市休闲鞋1231515200', '黑色', '烽火', 1231515200),
(49, 42, '../images/image/49.jpg', '烽火 都市休闲鞋1231515201', '深黑', '烽火', 1231515201),
(50, 42, '../images/image/50.jpg', '烽火 都市休闲鞋1231515202', '黑色', '烽火', 1231515202),
(51, 43, '../images/image/51.jpg', '烽火 都市休闲鞋1231515203', '黑色', '烽火', 1231515203),
(52, 43, '../images/image/52.jpg', '烽火 都市休闲鞋1231515204', '红色', '烽火', 1231515204),
(53, 43, '../images/image/53.jpg', '烽火 都市休闲鞋1231515205', '黑色', '烽火', 1231515205),
(54, 43, '../images/image/54.jpg', '烽火 都市休闲鞋1231515206', '黑色', '烽火', 1231515206),
(55, 44, '../images/image/55.jpg', '烽火 都市休闲鞋1231515207', '红色', '烽火', 1231515207),
(56, 44, '../images/image/56.jpg', '烽火 都市休闲鞋1231515208', '红色', '烽火', 1231515208),
(57, 44, '../images/image/57.jpg', '烽火 都市休闲鞋1231515209', '灰黑色', '烽火', 1231515209),
(58, 45, '../images/image/58.jpg', '烽火 都市休闲鞋1231515210', '灰黑色', '烽火', 1231515210),
(59, 45, '../images/image/59.jpg', '烽火 都市休闲鞋1231515211', '绿黑色', '烽火', 1231515211),
(60, 45, '../images/image/60.jpg', '烽火 都市休闲鞋1231515212', '浅灰', '烽火', 1231515212),
(61, 46, '../images/image/61.jpg', '烽火 都市休闲鞋1231515213', '蓝色', '烽火', 1231515213),
(62, 46, '../images/image/62.jpg', '烽火 都市休闲鞋1231515214', '红黑色', '烽火', 1231515214),
(63, 46, '../images/image/63.jpg', '烽火 都市休闲鞋1231515215', '黑白色', '烽火', 1231515215),
(64, 46, '../images/image/64.jpg', '烽火 都市休闲鞋1231515216', '红黑色', '烽火', 1231515216),
(65, 46, '../images/image/65.jpg', '烽火 都市休闲鞋1231515217', '红黑色', '烽火', 1231515217),
(66, 47, '../images/image/66.jpg', '烽火 都市休闲鞋1231515218', '黑色', '烽火', 1231515218),
(67, 47, '../images/image/67.jpg', '烽火 都市休闲鞋1231515219', '红黑色', '烽火', 1231515219),
(68, 48, '../images/image/68.jpg', '烽火 都市休闲鞋1231515220', '灰黑色', '烽火', 1231515220),
(69, 48, '../images/image/69.jpg', '烽火 都市休闲鞋1231515221', '红黑色', '烽火', 1231515221),
(70, 48, '../images/image/70.jpg', '烽火 都市休闲鞋1231515222', '黑色', '烽火', 1231515222),
(71, 49, '../images/image/71.jpg', '烽火 都市休闲鞋1231515223', '红色', '烽火', 1231515223),
(72, 49, '../images/image/72.jpg', '烽火 都市休闲鞋1231515224', '灰黑色', '烽火', 1231515224),
(73, 49, '../images/image/73.jpg', '烽火 都市休闲鞋1231515225', '蓝灰色', '烽火', 1231515225);

-- --------------------------------------------------------

--
-- 表的结构 `user_info`
--

CREATE TABLE `user_info` (
  `user_id` int(10) NOT NULL,
  `user_tel` varchar(16) DEFAULT NULL,
  `user_email` varchar(64) DEFAULT NULL,
  `user_pwd` varchar(32) DEFAULT NULL,
  `uphoto` varchar(128) DEFAULT NULL,
  `user_name` varchar(32) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL,
  `uadress` varchar(256) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user_info`
--

INSERT INTO `user_info` (`user_id`, `user_tel`, `user_email`, `user_pwd`, `uphoto`, `user_name`, `gender`, `uadress`) VALUES
(1, '13535247132', '997498641@qq.com', '123456', '../upload/1526827964406.jpg', '@笨小孩', 1, '广东工贸职业技术学院'),
(2, '13624586251', '235684567@136.com', '123456', NULL, '赵丽颖', 0, '广州'),
(3, '13624586261', '235684567@136.com', '123456', NULL, '迪丽热巴', 0, '广州'),
(4, '13624586262', '235684567@136.com', '123456', NULL, '杨幂', 0, '广州'),
(5, '13644586262', '235684567@136.com', '123456', NULL, '刘亦菲', 0, '广州'),
(6, '13644586862', '235684567@136.com', '123456', NULL, '张曼玉', 0, '广州'),
(7, '13644586266', '235684567@136.com', '123456', NULL, '王祖贤', 0, '广州'),
(8, '13644586962', '235684567@136.com', '123456', NULL, '林青霞', 0, '广州'),
(9, '13666586262', '235684567@136.com', '123456', NULL, '张敏', 0, '广州'),
(10, '13844586262', '235684567@136.com', '123456', NULL, '李嘉欣', 0, '广州'),
(11, '13644589262', '235684567@136.com', '123456', NULL, '钟楚红', 0, '广州'),
(12, '13644586292', '235684567@136.com', '123456', NULL, '周星驰', 1, '广州'),
(13, '13684586262', '235684567@136.com', '123456', NULL, '周润发', 1, '广州'),
(14, '13698586262', '235684567@136.com', '123456', NULL, '李小龙', 1, '广州'),
(15, '13898586262', '235684567@136.com', '123456', NULL, '狄龙', 1, '广州'),
(16, '13456586262', '235684567@136.com', '123456', NULL, '姜大卫', 1, '广州'),
(17, '13644586222', '235684567@136.com', '123456', NULL, '刘亦菲', 0, '广州'),
(18, '13640086862', '235684567@136.com', '123456', NULL, '张曼玉', 0, '广州'),
(19, '13644586922', '235684567@136.com', '123456', NULL, '刘亦菲', 0, '广州'),
(20, '13888888888', '235684567@136.com', '123456', NULL, '刘德华', 1, '广州'),
(21, '19999999999', '235684567@136.com', '123456', NULL, '张学友', 1, '广州'),
(22, '14444444444', '235684567@136.com', '123456', NULL, '谢霆锋', 1, '广州'),
(23, '16666688888', '235684567@136.com', '123456', NULL, '吴尊', 1, '广州'),
(24, '15657746546', '235684567@136.com', '123456', NULL, '胡歌', 1, '广州'),
(25, '19755787876', '235684567@136.com', '123456', NULL, '张国荣', 1, '广州'),
(26, '13888888999', '235684567@136.com', '123456', NULL, '马云', 1, '广州'),
(27, '19999977999', '235684567@136.com', '123456', NULL, '马化腾', 1, '广州'),
(28, '14455544444', '235684567@136.com', '123456', NULL, '雷军', 1, '广州'),
(29, '16666636788', '235684567@136.com', '123456', NULL, '李彦宏', 1, '广州'),
(30, '13657446556', '235684567@136.com', '123456', NULL, '刘强东', 1, '广州'),
(31, '19978787776', '235684567@136.com', '123456', NULL, '任正非', 1, '广州'),
(32, '19999975489', '235684567@136.com', '123456', NULL, '张三', 1, '广州'),
(33, '14425682894', '235684567@136.com', '123456', NULL, '李四', 1, '广州'),
(34, '16658020720', '235684567@136.com', '123456', NULL, '钱五', 1, '广州'),
(35, '15820598985', '235684567@136.com', '123456', NULL, '孙六', 1, '广州'),
(36, '19589202766', '235684567@136.com', '123456', NULL, '赵七', 1, '广州'),
(37, '18888888888', '88888888@qq.com', '1314520', '../upload/1526872370701.jpg', 'huahua', 0, '汕头');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `board`
--
ALTER TABLE `board`
  ADD PRIMARY KEY (`bid`);

--
-- Indexes for table `consult`
--
ALTER TABLE `consult`
  ADD PRIMARY KEY (`tid`);

--
-- Indexes for table `indent`
--
ALTER TABLE `indent`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `listpic`
--
ALTER TABLE `listpic`
  ADD PRIMARY KEY (`lpid`);

--
-- Indexes for table `louc`
--
ALTER TABLE `louc`
  ADD PRIMARY KEY (`oid`);

--
-- Indexes for table `lunbo`
--
ALTER TABLE `lunbo`
  ADD PRIMARY KEY (`lid`);

--
-- Indexes for table `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `shopcar`
--
ALTER TABLE `shopcar`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `shoppic`
--
ALTER TABLE `shoppic`
  ADD PRIMARY KEY (`pid`),
  ADD KEY `sid` (`sid`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_tel` (`user_tel`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `board`
--
ALTER TABLE `board`
  MODIFY `bid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- 使用表AUTO_INCREMENT `consult`
--
ALTER TABLE `consult`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- 使用表AUTO_INCREMENT `indent`
--
ALTER TABLE `indent`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- 使用表AUTO_INCREMENT `listpic`
--
ALTER TABLE `listpic`
  MODIFY `lpid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `louc`
--
ALTER TABLE `louc`
  MODIFY `oid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `lunbo`
--
ALTER TABLE `lunbo`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- 使用表AUTO_INCREMENT `shop`
--
ALTER TABLE `shop`
  MODIFY `sid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
--
-- 使用表AUTO_INCREMENT `shopcar`
--
ALTER TABLE `shopcar`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT;
--
-- 使用表AUTO_INCREMENT `shoppic`
--
ALTER TABLE `shoppic`
  MODIFY `pid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
--
-- 使用表AUTO_INCREMENT `user_info`
--
ALTER TABLE `user_info`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
