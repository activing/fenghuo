// 注册页面
(function(){
	var obj = {
		reg : document.getElementById('reg'),
		checkbox : document.getElementById('checkbox'),
		uApwd : document.getElementById("uApwd"),
		upwd : document.getElementById("upwd"),
		pwdError : document.getElementById("pwdError"),
		tels : document.getElementById("utel"),
		utelError : document.getElementById("utelError"),
		uadress : document.getElementById("uadress"),
		adressError : document.getElementById("adressError"),
		one : document.getElementById("reg_error"),
		ucode :document.getElementById("ucode"),
		img : document.getElementById('img')
	}
	//单选框，选中时注册按钮才能提交
	obj.checkbox.onclick = function(){
		if(this.checked){
			obj.reg.style.opacity = 1;
			obj.reg.disabled = false;
		}else{
			obj.reg.style.opacity = 0.6;
			obj.reg.disabled = true;
		}
	}

// 验证两次密码是否一致
	function testPass(){
		uApwd=this.value || obj.uApwd.value;
		upwd = obj.upwd.value;
		if(upwd!="" && upwd==uApwd){
			obj.pwdError.innerHTML="<img src='../images/right.png'>";
		}else if(uApwd==""){
			obj.pwdError.innerHTML="<font color='red'>不能为空</font>";
			obj.reg.disabled = true;
		}
		else{
			obj.pwdError.innerHTML="<img src='../images/false.png'>";
			obj.reg.disabled = true;
		}
	}
	obj.uApwd.onblur = function blur_pwd(){
		testPass();
	}
//检测该手机号是否被注册过
	var register=true;
	utel.onblur = function (){
		var utel=obj.tels.value;
		var tel=/^1[3,5,7,8]\d{9}$/;
		if(utel!=""){
			$.ajax({
				url:'../php/check_utel.php',
				data:{utel:utel},
				success:function(result){
					if(result==1){
						obj.utelError.innerHTML="该手机号已被注册";
						register=false;
					}else if(tel.test(utel)){
						obj.utelError.innerHTML="<img src='../images/right.png'>";
						register=true;
					}else{
						obj.utelError.innerHTML="手机格式不对";
	　　　　			register=false;
					}
				}
			})
		}else{
			obj.utelError.innerHTML="手机号不为空";
			register=false;
		}
	}
	var isRegis = true;
	//验证注册邮箱格式是否正确
	function testUadress(){
		var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
		if(obj.uadress.value==="" || obj.uadress.value==null){
			obj.adressError.innerHTML="邮箱不为空";
			isRegis=false;
		}else if(reg.test(obj.uadress.value)){
			obj.adressError.innerHTML="<img src='../images/right.png'>";
			isRegis=true;
		}else{
			obj.adressError.innerHTML="邮箱格式不对";
			isRegis=false;
		}
	}
	obj.uadress.onblur=function(){
		// 邮箱的正则表达式
		testUadress()
	}
	//验证注册
	reg.onclick = function (){
		testUadress()
		testPass();
		var utel = obj.tels.value;
		var uadress = obj.uadress.value;
		var upwd = obj.upwd.value;
		var one = obj.one.innerHTML;
		var ucode = obj.ucode.value;
		if(utel =='' || utel ==null){
			alert('用户名不能为空');
			return;
		}
		if(register==true && isRegis==true){
			$.ajax({
				url:'../php/regist.php',
				data:{utel:utel,uadress:uadress,upwd:upwd,ucode:ucode},
				success:function(res){
					if(res=="ok"){
						location="../html/Loginer.html";
					}else{
						one="注册失败";
					}
				},
				error:function(){
				}
			})	
		}
	}
	// random() 方法可返回介于 0 ~ 1 之间的一个随机数。
	//  Math.random() 返回0.0 ~ 1.0 之间的一个伪随机数。
	 obj.img.onclick=function(){
	 	obj.img.src="../php/code.php?rnd" + Math.random();
	 }
	 icon_change.onclick=function(){
	 	obj.img.src="../php/code.php?rnd" + Math.random();
	 }
	 //给注册绑定键盘事件
	 obj.uApwd.onkeyup = function(e){
		if(e.keyCode==13){
			reg.onclick();
		}
	}
})();
