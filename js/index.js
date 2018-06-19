$(()=>{
	//检测IE浏览器，如果是IE，转404
	// var userAgent = window.navigator.userAgent; 
	// console.log(userAgent)
	//  if (userAgent.indexOf("MSIE") > -1 
	//  	|| userAgent.indexOf('Trident') > -1){
	//  	window.location.href = '404.html';
	//  }
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器  
    var isIE = userAgent.indexOf("compatible") > -1 
    && userAgent.indexOf("MSIE") > -1 && !isOpera;
    if(isIE){
    	window.location.href = '404.html';
    }
	//轮播
	function a(){
		//创建一个数组用来存放图片
		var arr=new Array();
		$.ajax({
			url:"../php/lunbo.php",
			success:function(data){
				for(var j=0;j<data.length;j++){
					arr[j]=data[j].lpic;
				}
			}
		})
		// 存放时间
		var s=3000;
		// 初始化图片
		var i=0;
		var list=document.getElementById('list');
		var Img=document.getElementById("Img")
		function changeTime(){
			if(i<arr.length-1){
				i++;
			}else{
				i=0;
			}
			Img.src=arr[i];
			Focus();
		}
		//定时器
		var timer=setInterval(changeTime,s);
		// 鼠标经过，清除定时器
		list.onmouseover=function(){
			clearInterval(timer);
			timer=null;
		}
		// 鼠标离开，开启定时器
		list.onmouseleave=function(){
			timer=setInterval(changeTime,s);
		}
		// 按钮切换上下页
		var i=0;
		var pre=document.getElementById("pre");
		var next=document.getElementById("next");
		pre.onclick=function(){
			changeTime();
		}

		next.onclick=function(){
			if(i>0){
				i--;
			}else{
				i=arr.length-1;
			}
			Img.src=arr[i];
			Focus();
		}
		// 焦点切换
		var spot=document.getElementsByClassName("spot");
		for(var j=0,len=spot.length;j<len;j++){
			spot[j].onclick=function(){
				i=this.dataset.index;
				Img.src=arr[i];
				Focus();
			}
		}
		//函数封装焦点颜色
		function Focus(){
			var act=document.getElementsByClassName("active")[0];
			act.className='spot';
			spot[i].className="spot active";
		}
	}
	a()
	//调用
	new Scroll($(".imgsScorll"),$(".imgs"));
})
$(()=>{
// 	// 广告
	function guangGao(){
		$.ajax({
			url:"../php/board.php",
			success:function(res){
				var {one,two,three} = res;
				var html="";
				for(var o of one){
					html+=`<li><a href="#">${o.btitle}</a></li>`;
				}$("#ntlist>ul.first").html(html);

				var html1="";
				for(var t of two){
					html1+=`<li><a href="#">${t.btitle}</a></li>`;	
				}$("#ntlist>ul.two").html(html1);

				var html2="";
				for(var th of three){
					html2+=`<li><a href="#">${th.btitle}</a></li>`;
				}$("#ntlist>ul.three").html(html2);

				//公告切换
				var $ntlist =$('#ntlist');
				var myleft=0;
				function move(offset){
					myleft+=offset;
					if(myleft<-640){
						myleft=0;
					}else if(myleft>0){
						myleft=-640;
					}
					$ntlist.css("left",myleft);
				}
				$("#btnPre").click(function(){
					move(-320);
				})
				$("#btnNext").click(function(){
					move(320);
				})
			}
		})
	}
	guangGao()
});
// 楼层信息获取
$(()=>{
	$.ajax({
		url:"../php/louceng.php",
		type:"GET",
		success:function(data){
			var {all,all1} =data;
			var html1="";
			var html2="";
			var html3="";
			for(var i=0;i<all.length;i++){
				if(i<6){
					html1+=`<li>
					<a href="shopDetails.html?lid=${all[i].pid}"><img src="${all[i].spic}" alt=""></a>
					<a href="">${all[i].stitle}</a>
					</li>`;
				
				}else if(i>=6  && i<12){
					html2+=`<li>
					<a href="shopDetails.html?lid=${all[i].pid}"><img src="${all[i].spic}" alt=""></a>
					<a href="">${all[i].stitle}</a>
				</li>`;
				}else{
					html3+=`<li>
					<a href="shopDetails.html?lid=${all[i].pid}"><img src="${all[i].spic}" alt=""></a>
					<a href="">${all[i].stitle}</a>
				</li>`;
				}
			}
			$("#f1>.floor_content>.floor_right").html(html1);
			$("#f2>.floor_content>.floor_right").html(html2);
			$("#f3>.floor_content>.floor_right").html(html3);
			var html = "";
			for(var i = 0;i<all1.length;i++){
				if(i==0){
					$("#f1>.floor_content>.floor_left>a.left_img>img").attr("src",all1[i].osm);
					$("#f1>.floor_content>.floor_left>a.left_bottom_img>img").attr("src",all1[i].omd);
					$("#f1>.floor_content>.floor_center>a>img").attr("src",all1[i].olg);
				}
				else if(i==1){
					$("#f2>.floor_content>.floor_left>a.left_img>img").attr("src",all1[i].osm);
					$("#f2>.floor_content>.floor_left>a.left_bottom_img>img").attr("src",all1[i].omd);
					$("#f2>.floor_content>.floor_center>a>img").attr("src",all1[i].olg);
				}
				else{
					$("#f3>.floor_content>.floor_left>a.left_img>img").attr("src",all1[i].osm);
					$("#f3>.floor_content>.floor_left>a.left_bottom_img>img").attr("src",all1[i].omd);
					$("#f3>.floor_content>.floor_center>a>img").attr("src",all1[i].olg);
				}
			}
		}
	})
})
//楼层滚动
$(()=>{
	$(window).scroll(function(){
		var scrollTop=
		document.body.scrollTop||document.documentElement.scrollTop;
		var $f1top=$("#f1").offset().top;
		if($f1top<=scrollTop+innerHeight/2){
			$("#floor_window").show()
		}else{
			$("#floor_window").hide();
		}
		//楼层显色
		$(".floor").each((i,f)=>{
			var $f=$(f);
			var offsetTop=$f.offset().top;
			if(offsetTop<=scrollTop+innerHeight/2){
				$("#floor_window>ul").children(":eq("+i+")")
				.children(":first").addClass("hover")
					.parent().siblings().children().removeClass("hover");
					
			}
		})
		//点击楼层滑动
		$("#floor_window>ul>li").click(function(e){
			e.preventDefault();
			var $li=$(this);
			var i=$li.index();
			var offsetTop=$(".floor:eq("+i+")").offset().top;
			$("html, body").stop(true).animate({
				scrollTop:offsetTop
			},500);

		})					
	})
	
})

