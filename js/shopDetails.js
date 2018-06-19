$(()=>{
	// 获取地址栏上pid的值
	var pid=location.search.split("=")[1];
	if(pid!=null)
		$.ajax({
			url:"../php/shopDetails.php",
			data:{pid:pid},
			success:function(res){
				// 对拿回来的对象进行解构
				var {shopPic,shop} = res;
				var $lg=$("div.detail_content>div.details_lg");
				$(".details_main>.details_wrap>p>span").html(shop[1]+"&nbsp;"+shopPic[6]);
				$(".detail_content>.details_md>img").attr("src",shopPic[2]);
				$(".detail_content>.details_right>.dname").html(shopPic[3])
				$(".detail_content>.details_right>.dprice>span").html(shop[0]);
				$(".detail_content>.details_right>.dprice>b.bprice").html(shop[0]);
				$(".detail_content>.details_right>.scolor>b").html(shopPic[4]);
				$lg.css("backgroundImage","url("+shopPic[2]+")");
				//商品详情
				$('.shopColor').html(shopPic[4]);
				var shopName = $('.shopName');
				shopName.html(shopPic[3]);
				shopName.attr('title',shopPic[3]);
				$('.shopPrice').html(shop[0]);
				$('.shopSize').html(shopPic[6]);

				var $over=$(".detail_content>.details_over");
				var $mask=$(".detail_content.>div.mask");
				// 鼠标进入图片覆盖层，遮罩层出来
				$over.mouseenter(function(){
					$mask.css("display","block");
					$lg.css("display","block");
				})
				// 鼠标离开图片覆盖层，遮罩层隐藏
				$over.mouseleave(function(){
					$mask.css("display","none");
					$lg.css("display","none")
				})
				// 鼠标移动，遮罩层跟着移动
				var size=150;
				//left top初始化值
				var yd=50;
				// 放大镜效果
				$over.mousemove(function(e){
					var left=e.offsetX-size/2+yd;
					var top=e.offsetY-size/2+yd;
					if(left<=50) left=50;
					else if(left>350) left=350;
					if(top<50) top=50;
					else if(top>350) top=350;
					$mask.css("left",left);
					$mask.css("top",top);
					$lg.css("backgroundPosition",-4/5*left+"px "+(-4/5*top)+"px")
				})
			},
		})
		$("div.details_right>div.dbuy").on("click","a",function(e){
			e.preventDefault();
			var $btn=$(this);
			// 获取到input
			var $input=$btn.siblings("input");
			var n=parseInt($input.val());
			if($btn.html()=="+")
				n++;
			else if(n>1)
				n--;
			// 加减完后重新写回到input的value里
			$input.val(n);
		})
		// 加入购物车
		$("#btn_cart").click(function(e){
			// e.preventDefault();
			$.get("../php/check_dl.php",data=>{
				if(data==1){
					var count = $("div.details_right>div.dbuy>input").val();
					var pid = location.search.split("=")[1];
					$.ajax({
						url:"../php/addShopcar2.php",
						data:{count:count,pid:pid},
						type:"GET",
						success:function(data){
							if(data==1){
								alert("添加购物车成功");
								window.location.reload();
							}
						},
						error:function(){
							alert("网络故障请检查！");
						}
					})
				}else{
					alert('您未登录，请先登录');
					location.href="Loginer.html?back="+location.href;
				}
				
			})
			
		})
		//点击及码数，添加样式
		$('#proSize').on('click','li',function(){
			$(this).addClass('current').siblings().removeClass('current');
		}) 
		
})