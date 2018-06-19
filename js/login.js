// 自调函数(function(){内容})()
// 登录
$(()=>{
	var phone=document.getElementById("phone");
	var pwd = document.getElementById("pwd");
	//用户名失去焦点事件
	phone.onblur = function(){
		var p = phone.value;
		if(p=='' || p==null){
			alert('用户名不为空');
			return;
		}
	}
	mybtn.onclick=function(){
		var phone1=phone.value;
		var pwd=document.getElementById("pwd").value;
		if(phone1=="" && pwd==""){
			alert("用户名和密码不能为空");
			return false;
		}
		$.ajax({
			url:'../php/login.php',
			data:{phone:phone1,pwd:pwd},
			success:function(res){
				var search=location.search;
				//如果地址栏上有参数
				if(search!==""){
					var i=search.indexOf("=");
					// 跳回到上一步历史记录
					location.href=search.slice(i+1);
				}else{
					// 否则默认是主页
					location="index.html";
				}
			}
		})
	}
	// 验证登录名称是否合法
	phone.onchange=function(){
		//邮箱的正则表达式
		var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
		// 手机的正则表达式
		var tel=/^1\d{10}$/;
		var phoneError=document.getElementById('phoneError');
	　　if(reg.test(phone.value) || tel.test(phone.value)){ 
			phoneError.innerHTML="<img src='../images/right.png'>";
	　　　　return true;
	　　}else{
	　　　　//正则验证不通过，格式不对
	　　　　phoneError.innerHTML="<img src='../images/false.png'>";
	　　　　return false;
	　　}
	}
	// 给登录按扭绑定键盘事件
	pwd.onkeyup = function(e){
		if(e.keyCode==13){
			mybtn.onclick();
		}
	}
})
	