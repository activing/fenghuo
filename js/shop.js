function getShop(page){
	// 从地址栏上拿到的数据是字符编码
	var sh = decodeURI(location.search.split("=")[1]);
	if(sh == "undefined"){
		sh=" ";
	}
	$.ajax({
		method:'post',
		data:{page:page,sh:sh},
		url:'../php/shop.php',
		success:function(result){
			var {allsize,allpage,data} = result;
			var html="";
			if(page==undefined) page=1;
			for(var i=0;i<data.length;i++){
				html+=`<div class="items">
				<div class="newshop">${data[i].snew}</div>
				<div class="photo">`;
				//大图循环
				for(var p of data[i].pic){
					html+=`<a href="shopDetails.html?pid=${p.pid}" class="showpic">
					<img src="${p.spic}" alt=""></a>`;
				}
				html+=`	</div>`;
				html+=`<div class="small">`;
				//小图循环
				for(var p of data[i].pic){
					html+=`<div class="smallPic">
					<img src="${p.spic}" alt="" width="40px" height="40px"></div>`;	
				}
				html+=`</div>
				<p>${data[i].sname}</p>
				<b>￥${data[i].sprice}</b>
				<div class="sh-info">
					<a href="javascript:addCollect(${data[i].sid})" class="sh-bike">
						<i></i>
						收藏
					</a>
					<span class="surplus">仅剩${data[i].snum}件</span>
					<a class="shop-car" id="shopcar" data-curent-sid="${data[i].sid}">
						<i></i>
						加入购物车
					</a>
				</div>
				</div>`;
			}
			$("#section").html(html);
			// 分页
			html+="<div class='fenye'>";
			//上一页
			var lastpage=""; lastpage=page<=1?1:page-1;
			html+="<a href='javascript:getShop("+lastpage+")' class='lastpage'>上一页</a>";
			for(var i=1;i<=allpage;i++){
				html+="<a "+(i==page?'class=showA':' ')+" href='javascript:getShop("+i+")'>"+i+"</a>";
			}
			//下一页
			var nextpage="";nextpage=page<allpage?page+1:allpage;
			html+="<a href='javascript:getShop("+nextpage+")' class='nextpage'>下一页</a>";
				html+=`<span>共${allpage}页 到</span>
				<div class="jump">
					<input type="text" size='2' id="tiao">
					<span>页</span>
					<input type='button' value='跳转' id="jump">
				</div>
			</div>`;
			$("#section").html(html);
			lastnext(page,allpage);
			//跳转
			jump.onclick=function(){
				var tiao=document.getElementById("tiao").value;
				tiao<=allpage?getShop(tiao):alert("没有这个页码");
			}
			//拼接显示总商品
			var headHtml="";
				headHtml+=`<div class="list-right" id="listRight">
					<span><b>共有<font color='red'>${allsize}</font>件商品</b></span>`;
					headHtml+="<a href='javascript:getShop("+lastpage+")' class='sh-pre'></a>";
					headHtml+=`<span>${result.page}/${allpage}</span>`;
					headHtml+="<a href='javascript:getShop("+nextpage+")' class='sh-next'></a>";
				headHtml+="</div>";
			$("#listRight").html(headHtml);
			//鼠标经过小图切换大图
			samll_big();
			
			//点击添加购物车
			$('.items>.sh-info').on('click','#shopcar',function(e){
				e.preventDefault();
				$.get("../php/check_dl.php",data=>{
					if(data==1){
						var uid = $(this).parent().parent().data('current-pid');
						var sid=$(this).attr("data-curent-sid");
						shopcar(uid,sid);
					}
					else{
						alert('您未登录，请先登录');
						location.href="Loginer.html?back="+location.href;
					}
				})
			})
		},
		error:function(){
			$("#section").html("抱歉，您搜索的商品不存在！")
				.css({
					"textAlign":"center",
					"fontSize":"30px",
					'paddingTop':'50px'
				});
		}
	})
	
}
//上一页和下一页
function lastnext(page,allpage){
	if(page==1){
		$("#section .fenye>a.lastpage").addClass("active");
	}
	else if(page+1>allpage){
		$("#section .fenye>a.nextpage").addClass("active");
	}
}
//鼠标经过小图切换大图
function samll_big(){
	var smalls=document.querySelectorAll("#section>.items>.small>div");
	var imgs=document.querySelectorAll("div.photo>a");
	for(var i=0;i<smalls.length;i++){
		(function(i){
			smalls[i].onmouseover=function(){
				$(imgs[i]).addClass('showpic').siblings().removeClass('showpic');
				$(this).parent().parent().
				   attr('data-current-pid',$(imgs[i]).attr('href').split('=')[1]);
			}
		})(i);
	}
	//鼠标经过小图，给当前小图附上红色边框，其余兄弟没有
	$("div.items>div.small>div.smallPic").on("mouseover","img",function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
}

// 封装一个添加购物车的函数
function shopcar(uid,sid){
	var uid = uid;
	var sid=sid;
	$.ajax({
		url:'../php/shopcar.php',
		data:{uid:uid,sid:sid},
		success:function(res){
			if(res==1){
				alert("你已经成功添加了购物车");
				window.location.reload();
			}else{
				alert("添加失败");
			}
		}
	})
}


