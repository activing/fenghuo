function shcar(){
	var table=document.getElementById("table");
	$.ajax({
		url:'../php/showShopcar.php',
		success:function(result){
			console.log(result)
			if(result==0){
				table.innerHTML=`<div style='width:320px;height:30px;margin:100px auto;font-size:30px'>
				购物车为空请
				<a href='Lookshop.html' style='font-size:30px'>返回商城</a></div>`;
			}else{
				var html='';
				var html1='';
				var total=0;
				var sum=0;
				for(var i=0;i<result.length;i++){
					html+=`<tr align="center">
						<td width="240px">${result[i].cid}</td>
						<td width="240px">
						<a href="shopDetails.html?pid=${result[i].pid}">
						${result[i].cname}</a>
						</td>
						<td width="240px">￥${result[i].cprice}</td>
						<td width="240px">
						<a href="javascript:jianShopcar(${result[i].cid})">-</a>
						<input type="text" size="3" style="width:20px" value="${result[i].cnum}" disabled>
						<a href="javascript:addShopcar(${result[i].cid})">+</a></td>
						<td width="240px"><a href="javascript:deShop(${result[i].cid})">
						<img src="../images/lajitong.png" alt="" id="deShop"></a>
						</td>
					</tr>`;
				sum+=parseInt(result[i].cnum);
				total +=parseInt(result[i].cnum)*parseInt(result[i].cprice);
				//在网页头部显示购物车件数
				$(".h-right>.myFire>h3>a>b").html(sum);
				$(".shopCar>h3>a>span").html("("+sum+")");
				}
				$("#mainShop").html(html);
				html1+=`<tr align="right">
							<td colspan="5" data-account="${sum}_${total.toFixed(2)}">
							共有${sum}件商品，需要支付${total.toFixed(2)}元</td>
						</tr>`;
				$("#mainPrice").html(html1);
			}
		}
	});
}
// 删除购物车物品
function deShop(cid){
	$.ajax({
		data:{cid:cid},
		url:'../php/delShop.php',
		success:function(res){
			console.log(res)
			if(res==1){
				if(confirm("确定删除物品编号="+cid+"吗?")){
					window.location.reload();
					shcar();
				}
			}
		}
	});
}
// 购物车数量加一
function addShopcar(cid){
	$.ajax({
		data:{cid:cid},
		url:'../php/addShopcar.php',
		success:function(res){
			if(res=="1"){
				shcar();
			}
		}
	})
}
// 购物车数量减一
function jianShopcar(cid){
	$.ajax({
		data:{cid:cid},
		url:'../php/jianShopcar.php',
		success:function(result){
			console.log(result)
			if(result==1){
				shcar();
			}
		}
	})
}
//结算
$("[data-car=account]").click(function(){
	var val = $("#mainPrice>tr>td").data("account");
	if(val == "undefined"){
		alert("购物车还没有商品");
	}else{
		var arr = val.split("_");
		var sum = arr[0];
		var total = arr[1];
		$(".account-window>.content")
		.html("恭喜用户，购买"+sum+"件商品成功，共支付"+total+"元,欢迎下次光临！");
		$("#account").show();
	}
})
//关闭结算按钮
$("#account-close").click(function(){
	$.ajax({
		url:"../php/accountDelete.php",
		success:function(data){
			if(data == "1"){
				$("#account").hide();
				window.location.reload();
				shcar();
			}else{
				alert("结算失败");
			}
		},
		error:function(){
			alert("网络故障，请检查");
		}
	})
	
})
