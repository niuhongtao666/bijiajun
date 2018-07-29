$(function(){
	var vallu=sessionStorage.getItem('vall');
	var pageNum;
	if(vallu){
		pageNum="1";
		list(vallu,pageNum,"");
	};
	var malId="";
	$(".search-icon1").on("click",function(){
		var list1Search=$("#searchLeft").val();
		sessionStorage.setItem('vall',list1Search); // 存入一个值
		window.location.reload();
//		if(list1Search&&list1Search!=""){
//			pageNum=1;
//			list(list1Search,pageNum,"");
//		}
	});
	function list(vallu,pageNum,malId){
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
		            if(result.showapi_res_body.ret_code==0){
		            		 var productData=result.showapi_res_body.shopList;
		            		 console.log(productData);
		                //使用baidu.template命名空间
		    				 var bt=baidu.template;
		    				 var data={"list":productData};
		    			  	//最简使用方法
		    				 var html=bt('part1',data);
		            		 document.getElementById('productsId').innerHTML=html;
		            };
		           
		        }
	    		});
	   }
    
       /*商品搜索结束*/
	/*上拉刷新开始*/
	$('.ll').dropload({
        scrollArea : window,
        loadDownFn : function(me){
		    function formatterDateTime1() {
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
            pageNum++;
            var appid1="71044";
		    var sec1="43791a3aa8e14eeb9b10bb736b86a6a3";
		   	var keyword1=$('#con').text();
		    console.log(keyword1);
		    console.log(pageNum);
            // 拼接HTML
            var result = '';
            $.ajax({
                 type: 'post',
		        url: 'http://route.showapi.com/1615-1',
		        dataType: 'json',
		        data: {
		            "showapi_timestamp": formatterDateTime1(),
		            "showapi_appid": appid1, //这里需要改成自己的appid
		            "showapi_sign": sec1,  //这里需要改成自己的应用的密钥secret
		            "keyWords":keyword1,
		            "page":pageNum,
		            "mallId":malId
		        },
                success: function(data){
                		console.log(data);
                		if(data.showapi_res_body.ret_code==0){
	                		var dataArr=data.showapi_res_body.shopList;
		                var arrLen=data.showapi_res_body.shopList.length;
		                if(arrLen){
	                      for(var i=0; i<arrLen; i++){
	                          result += ' <li class="product">'
				                          +'<a href='+dataArr[i].shopAddr+'>'
												+'<div class="left">'
													+'<img src="'+dataArr[i].shopImg+'" alt="商品图片" />'
												+'</div>'
												+'<div class="right">'
													+'<div class="p1">'+dataArr[i].shopTitle+'</div>'
													+'<div class="p2">'+dataArr[i].shopPrice+'</div>'
													+'<div class="p3">'+dataArr[i].shopType+'</div>'
												+'</div>'
											+'</a>'
										+'</li>';
	                      		}
	//                  // 如果没有数据
		                  }else{
	//                      // 锁定
		                      me.lock();
	//                      // 无数据
		                      me.noData();
		                  }
	//                  // 为了测试，延迟1秒加载
	                  setTimeout(function(){
	//                      // 插入数据到页面，放到最后面
	                      $('#productsId').append(result);
	                      // 每次数据插入，必须重置
	                      me.resetload();
	                  },1000);
                		}
                },
                error: function(xhr, type){
                    alert('Ajax error!');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
        }
    });
	/*上拉刷新结束*/
	/*index.html结束*/
	$('#con2').on('click',function(event){
		event.stopPropagation();
		$('.shai').css('display','block');
//		$('.ss').css('display','none');
	})
	$(document).click(function(){
		$('.shai').css('display','none');
	});
	$('.seLi1').on('click',function(event){
		event.stopPropagation();
		mall();
		$('.ss').css('display','block');
	});

	/*商城获取开始*/
	function mall(){
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
 		var appid2="71044";
		var sec2="43791a3aa8e14eeb9b10bb736b86a6a3";
		$.ajax({
		    type: 'post',
		    url: 'http://route.showapi.com/1615-3',
		    dataType: 'json',
		    data: {
		        "showapi_timestamp": formatterDateTime(),
		        "showapi_appid":appid2, //这里需要改成自己的appid
		        "showapi_sign":sec2,  //这里需要改成自己的应用的密钥secret
		
		    },
		
		    error: function(XmlHttpRequest, textStatus, errorThrown) {
		        alert("操作失败!");
		    },
		    success: function(result) {
		        console.log(result) //console变量在ie低版本下不能用
		        if(result.showapi_res_body.ret_code==0){
		            		 var productData1=result.showapi_res_body.result;
		            		 console.log(productData1);
		                //使用baidu.template命名空间
		    				 var bt1=baidu.template;
		    				 var data1={"list1":productData1};
		    			  	//最简使用方法
		    				 var html1=bt1('part2',data1);
		            		 document.getElementById('ss').innerHTML=html1;
		            };
		    }
		});
	}
	/*商城获取结束*/
	$('body').on('click','.ss1',function(){
		console.log($(this));
		console.log($(this).innerText);
	})
})
