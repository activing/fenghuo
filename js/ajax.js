// 封装一个ajax函数
// method发送方式
// url发送的路径
// data发送的的数据
// fnsuccess请求成功时dom操作函数
// function ajax(method,url,data,fnsuccess){
// 	//1创建一个ajax对象
// 	var xhr="";
// 	if(window.XMLHttpRequest){
// 		xhr=new XMLHttpRequest();
// 	}else{
// 		xhr= new ActiveXObject("Microsoft.XMLHttp");
// 	}
// 	//2发送的两种形式，用if区分并兼容
// 	xhr.open(method,url,true);
// 	if(method==='GET'&& data){
// 		url=url+'?'+data;
// 		xhr.open(method,url,true);
// 		xhr.send(null);
// 	}else{
// 		xhr.open(method,url,true);
// 		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
// 		xhr.send(data);
// 	}
// 	//3发送服务器请求和等待服务器响应
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState==4&&xhr.status==200){
// 			if(fnsuccess){
// 				var response=xhr.responseText;
// 				if(xhr.responseXML){
// 					response=responseXML;
// 				}
// 				fnsuccess(response);
// 			}
// 		}
// 	}
// }
// 
// 
// 获取元素id的函数
// function $(id){
// 	return document.getElementById(id);
// }
// // 创建异步对象函数
// function createXhr(){
// 	var xhr=null;
// 	if(window.XMLHttpRequest){
// 	 	var xhr=new XMLHttpRequest();
// 	}else{
// 		var xhr=new ActiveXObject("Microsoft.XMLHttp");
// 	}
// 	return xhr;		
// }
//封装一个ajax类
function ajax({method,url,data,dataType}){
	return new Promise(open=>{
		var xhr=null;
			if(window.XMLHttpRequest){
			 	xhr=new XMLHttpRequest();
			}else{
				xhr=new ActiveXObject("Microsoft.XMLHttp");
			}
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				if(dataType==="json"){
					open(JSON.parse(xhr.responseText));	
				}else{
					open(xhr.responseText);
				}
			}
		}
		if(method==="get"){
			url+="?"+data;
		}
		xhr.open(method,url,true);
		if(method==="get"){
			xhr.send(null);
		}else{
			xhr.send(data);
		}
	})
}
//调用ajax  加载头部
(function(){
	var link=document.createElement("link");
	link.rel="stylesheet";
	link.href="css/header.css";
	document.head.appendChild(link);
	ajax({
		method:"get",
		url:"header.html"

	}).then(html=>{
		document.getElementById("header").innerHTML=html;
	});
})();
