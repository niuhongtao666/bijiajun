//设置html的字体大小
(function(window){
	//获取页面宽度
	var winW =document.documentElement.clientWidth ||document.body.clientWidth;
	//根据页面宽度设置html字体大小
	document.documentElement.style.fontSize =winW / 3.75 + "px";
	//当页面大小发生改变,重新修正rem为新窗口尺寸的3.75分之一
	window.onresize =function(){
		document.documentElement.style.fontSize =(document.documentElement.clientWidth ||document.body.clientWidth) /3.75 + "px";
	}
})(window);