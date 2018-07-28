$(function(){
	var vallu=sessionStorage.getItem('vall');
	var vuu;
	$(".search-icon1").on("click",function(){
		var list1Search=$("#searchLeft").val();
		if(list1Search&&list1Search!=""){
			list(list1Search);
		}
	});
	console.log(vuu);
	if(vallu){
		list(vallu);
	}
		function list(vallu){
			console.log(vallu);
			$('#con').text(vallu);
	
		/*index.html开始*/
	       /*商品搜索开始*/
	    function formatterDateTime() {
	        var date=new Date()
	        var month=date.getMonth() + 1
	        var datetime = date.getFullYear()
	            + ""// "年"
	            + (month >= 10 ? month : "0"+ month)
	            + ""// "月"
	            + (date.getDate() < 10 ? "0" + date.getDate() : date
	                .getDate())
	            + ""
	            + (date.getHours() < 10 ? "0" + date.getHours() : date
	                .getHours())
	            + ""
	            + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
	                .getMinutes())
	            + ""
	            + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
	                .getSeconds());
	        return datetime;
	    }
	    var appid="71044";
	    var sec="43791a3aa8e14eeb9b10bb736b86a6a3";
	   	var keyword=vallu;
	   	var pageNum="";
	   	var malId="";
	    $.ajax({
	        type: 'post',
	        url: 'http://route.showapi.com/1615-1',
	        dataType: 'json',
	        data: {
	            "showapi_timestamp": formatterDateTime(),
	            "showapi_appid": appid, //这里需要改成自己的appid
	            "showapi_sign": sec,  //这里需要改成自己的应用的密钥secret
	            "keyWords":keyword,
	            "page":pageNum,
	            "mallId":malId
	        },
	
	        error: function(XmlHttpRequest, textStatus, errorThrown) {
	            alert("操作失败!");
	        },
	        success: function(result) {
	            console.log(result) //console变量在ie低版本下不能用
	            // alert(result.showapi_res_code)
	            var productData=result.showapi_res_body.shopList;
	            console.log(productData);
	                //使用baidu.template命名空间
	    			var bt=baidu.template;
	    			var data={"list":productData};
	    			 //最简使用方法
	    			var html=bt('part1',data);
	            document.getElementById('productsId').innerHTML=html;
	        }
	    });
	   }
    
       /*商品搜索结束*/
	/*index.html结束*/
})
