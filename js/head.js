$(()=>{
	$("#head").load("head.html",function(){
		$(".myFire").bind({
		  focus:function(){$(".myFire").slideToggle();},
		  mouseover:function(){$(".myFire ul").css("display","block");},  
		  mouseleave:function(){$(".myFire ul").css("display","none");}  
		});
		$(".myFire h3 a").mouseover(function(){
			$(".myFire h3 a b").css("display","none");
		});
		$("dd").mouseleave(function(){
			$("dd b").css("display","block");
		});
		$(".myPhone").bind({
		  focus:function(){$(".myPhone").slideToggle();},
		  mouseover:function(){$(".myPhone ul").css("display","block");},  
		  mouseleave:function(){$(".myPhone ul").css("display","none");}  
		});
		// 检测是否已登录
		function check_login(){
			var showDl=document.getElementById("showDl");
			$.ajax({
				url:'../php/check_dl.php',
				success:function(res){
					if(res ==1){
						showDl.innerHTML="您好，欢迎光临烽火官方商城";
					}else{
						showDl.innerHTML="请您登录";
					}
				}
			})
		}
		check_login();
		//退出系统
		//事件的侦听，一个id触发两次事件
		var exit_dl =document.getElementById("exit_dl");
		exit_dl.addEventListener("click",function(){
			return window.confirm("确定退出系统吗?");
			window.location.reload();
		});
		exit_dl.addEventListener("click",function(e){
			e.preventDefault();
			$.ajax({
				url:'../php/exit_dl.php',
				success:function (result) {
					if (result == "ok") {
						check_login()
					}
				}
			})
		})
		//搜索框
		var search=location.search;
		//判断地址栏中是否存在“sh=”
		if(search.indexOf("sh=")!=-1){
			// decodeURI()对编码后url进行解码
			// 有的话从地址栏中取得值重新写入搜索框中
			$(".search-box>form>input").val(decodeURI(search.split("=")[1]));
		}
		$("#search-btn").click(function(e){
			//阻止button这个默认事件
			e.preventDefault();
			//trim()去除两边的空字符串
			var $sh=$(".search-box>form>input").val().trim();
			location.href="LookShop.html?sh="+$sh;
		})
		// 单击登录时，获取当前的地址
		$("#showDl").click(function(e){
			e.preventDefault();
			location.href="Loginer.html?back="+location.href;
		})
		//发送ajax请求，到head.php拿到购物车的数量,填写到我的烽火
		$.get("../php/check_dl.php",data=>{
			if(data==1){
				$.ajax({
					url:"../php/head.php",
					type:"GET",
					success:function(data){
						var sum = 0;
						for(var i=0;i<data.length;i++){
							sum += parseInt(data[i][0]);
						}
						$(".h-right>.myFire>h3>a>b").html(sum);
						$(".shopCar>h3>a>span").html("("+sum+")");
					}
				})
			}
		})
		
		//导航 楼层滚动
		//拿到绝对路径
		var h = location.href;
		var h1 = h.split("/"); //从地址栏上获取当前页面的文件名
		var i = h.indexOf("/m");
		var h2 = h.substring(i+1);
		$(".main-nav>li:gt(1)>a").click(function(e){
			e.preventDefault();
			if(h1[h1.length-1]=="index.html"||h2=="myfirstitem/html/"){
				var offsetTop;
				var s;
				if($(this).text()=="儿童"){
					offsetTop = 2279;
					s = 2000;
				}
				if($(this).text()=="运动表现"){
					offsetTop = 1639;
					s = 1500;
				}
				if($(this).text()=="运动生活"){
					offsetTop = 999;
					s = 1000;
				}
				$("html, body").stop(true).animate({
						scrollTop:offsetTop
				},s);
			}
		})
	})
	
})
