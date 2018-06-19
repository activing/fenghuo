(()=>{
	// 火车链式展览
	var Scroll = function(main,img){
		this.main = main;
		this.img = img;
		this.width = 285;  //切换的位移
		this.moved = 0;	   //下标
		this.timer = null; //定时器
		this.l = this.img.children().length;
		var that = this;
		this.img.css("width",this.l*this.width);
		this.timer = setInterval(function(){
			that.move()
		},3000);	
		this.img.mouseenter(function(){
			clearInterval(that.timer);
			that.timer = null;
		})
		this.main.mouseleave(function(){
			that.timer = setInterval(function(){
				that.move()
			},3000);
		})
	}
	Scroll.prototype.move = function(){
		this.moved++;
		this.img.animate({
			left:-this.width*this.moved
	    },500,()=>{
		    if(this.moved>=this.l-3){
			    this.moved=0;
			this.img.css("left",-this.width*this.moved)	
		    }

	    });
	}
	//暴露带外部
	 window.Scroll = Scroll;
})();