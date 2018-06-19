$(()=>{
	//封装的jq的对象方法
	$.fn.extend({
		enter:function(fn){
			$(this).bind('keydown',function(event){
				var e = event || window.event;
				if(!e.ctrKey && e.keyCode == 13){
					if(typeof(fn)!='undefined'){
						fn.call(this);
						return false;//阻止原有的回车换行事件的冒泡执行
					}
				}
			})
			return this;
		}
	})

	$("#window").load("fixedWinow.html",function(){
		function pass(){
			$("button").click(function(){
				$(".right-hide .myHide").css("display","none");
			});
			$(".r-hide").mouseover(function(){
				$(".right-hide .myHide").css("display","block");
			});
			$(".right-hide").mouseleave(function(){
				$(".right-hide .myHide").css("display","none");
			});
		}
		pass();
//返回顶部
		function scroll(){
			$(function() {
			    $(window).scroll(function() {
			        if ($(window).scrollTop() >0)
			            $('.rig-head').show();
			        else
			            $('.rig-head').hide();
			    });
			    $('.rig-head').click(function() {
			        $('html, body').animate({scrollTop: 0}, 1000);
			    });
			});
		}
		scroll();
		//拖曳咨询框
		var bghead = document.getElementById('right-discuss');
	    var head = document.getElementById('dis-head');
	    startDrop(head,bghead);
	    function startDrop(current,move){
	        current.onmousedown = function(event) {
	            var event = event || window.event;
	            // clientX 设置或获取鼠标指针位置相对于窗口客户区域的 x 坐标
	            // move.offsetLeft 指 move 相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置，整型，单位像素
	            var x = event.clientX - move.offsetLeft - 0 ;
	            var y = event.clientY - move.offsetTop - 0 ;
	            document.onmousemove = function(event) {
	                var event = event || window.event;
	                move.style.left = event.clientX - x + "px";
	                move.style.top = event.clientY - y + "px";
	                window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

	            }
	            document.onmouseup = function() {
	                document.onmousemove = null;
	            }
	        }
	    }
	    //咨询框
	    $("a.rig-service").mouseover(function(){
	    	$("#right-discuss").show();
	    })
	    $('.right-service').mouseleave(function(){
	    	$('.right-service .right-discuss').hide();
	    })
	    $("#btnOver").click(function(){
	    	$("#right-discuss").hide();	
	    })
	    $('.closeWindow').click(function(){
	    	$("#btnOver").click();	
	    })
	    var text = $("#textarea");
	    $.ajax({
	    	url:'../php/check_dl.php',
			success:function(res){
				if(res == 1){
					$("#btnSend").click(function(){
				    	var textarea = text.val();
				    	$.ajax({
				    		url:"../php/consult.php",
				    		type:"GET",
				    		data:{tcontent:textarea},
				    		dataType:"json",
				    		success:function(data){
				    			consultData(data);
				    			//成功之后清除框中的值
				    			text.val('');
				    			
				    		},
				    		error:function(){
				    			alert("网络出错");
				    		}
				    	})
					})
				}
			}
	    })
	    text.enter(function(){
			$("#btnSend").click();
			this.value = '';
		})
	    function consultData(data){
	    	var html = "";
	    	for(var d of data){
	    		html +=`<ul>
				<li>${d.tname}：</li>
				<li>${d.tcontent}</li>
				<li>${d.ttime}</li>
			</ul>`;
	    	}
	    	$("#con-content").html(html);
	    }
	})
})

	