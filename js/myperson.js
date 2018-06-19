// (function(){
	//拿数据到我的个人中心	
function myperson(){
return new Promise(function(open){
	$.ajax({
		url:'../php/personName.php',
		success:function(res){
			var a = res;
			var htmlperson="";
			$("#head>.Head>img").attr("src",a.uphoto);
			$("#head>.H-right>h1").html(a.user_name);
			$("#mange>table>tbody>tr:nth-child(2)>td:last-child").html(a.user_email);
			$("#mange>table>tbody>tr:nth-child(3)>td:last-child").html(a.user_tel);
			htmlperson +=`
			<div class="person" id="person">
			<table>
				<tr>`;
			htmlperson +="<td>性别</td><td>"+(a.gender==1?"男":"女")+"</td>";
			htmlperson +=`</tr>
				<tr>
					<td>会员等级</td><td>100</td>
				</tr>
				<tr>
					<td>昵称</td><td>${a.user_name}</td>
				</tr>
				<tr>
					<td>个性签名</td><td>Likes a person needing the reason?</td>
				</tr>
				<tr>
					<td>收货地址</td><td>${a.uadress}</td>
				</tr>
			</table>
			</div>`;
			$("#person").html(htmlperson);
			open();	
		}
	})
});
}
myperson().then(function(){
// 更改我的个人中心 	
	var update=document.getElementById("update");
	update.onclick=function(){
		return new Promise(function(open){
			$.ajax({
				url:'../php/persaonUpdate.php',
				success:function(result){
					var html='';
					for(var b of result){
						html=`<div id="main">
							<p>昵称：<input type="text" value="${b.user_name}" id="username"></p>
							<p>收货地址：<input type="text" value="${b.uadress}" id="udress"></p>
							<p>性别：<input type="text" value="${b.gender}" id="sex"></p>
							<input type="button" value="保存" id="protect"/>
						</div>`;
					}
					$("#main").html(html);
					var	protect=document.getElementById("protect");
					console.log(protect)
					testprotect();
				}

			})
		})
	}
});
//保存修改后的用户信息
function testprotect(){
	var userName=document.getElementById("username");
	var uAdress=document.getElementById("udress");
	var sexs=document.getElementById("sex");
	protect.onclick=function(){
		var username=userName.value;
		var uadress=uAdress.value;
		var sex=sexs.value;
		$.ajax({
			url:'../php/protectUpdate.php',
			data:{username:username,uadress:uadress,sex:sex},
			success:function(res){
				if(res=="1"){
					location="../html/person.html";
				 }
			}
		})

	}
}
//更换头像
$("#head>.Head").click(function(e){
	e.stopPropagation();
	if($(".update_photo").is(":visible")){
		$(".update_photo").hide();
	}else{
		$(".update_photo").show();
	}
})
$("[data-update=uphoto]").click(function(e){
	e.stopPropagation();
	var photo = $("#uphoto");
	if(photo.val() == ""){
		alert("请选择图片");
	}
	//获取该图片的大小
	var a = photo[0].files[0].size;
	if(a>2000*1024){
		alert("图片太大不能上传");
		return;
	}
	if(a == "undefined"){
		alert("上传失败");
		return;
	}else{
		$("#form").submit();
		if(confirm("上传成功")){
			$(".update_photo").hide();
		}
	}
})
