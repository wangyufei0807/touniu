/*
* @description: 认证JS模块 
* @author: wyf  
* @email: 707366656@qq.com
* @time: 2015-09-6
*/
define(function(require, exports, module){
	require("jquery");
    require("validation");

	$(function(){

        //表单验证
        $("#authForm").validate({
            rules:{
                name:{
                    required:true
                },
                idcar:{
                    required:true
                }
            },
            messages:{
                name:{
                    required:"姓名不能为空"
                },
                idcar:{
                    required:"身份证号码不能为空"
                }
            },
            errorPlacement: function (error, element) {
                error.appendTo(element.parent().find(".ipt-err"));
            }
        })

	})

    var i = 10; 
    var intervalid; 
    intervalid = setInterval(fun, 1000);
     
    function fun() { 
        if (i == 0) { 
            window.location.href = "http://www.baidu.com"; 
            clearInterval(intervalid); 
        } 
        $("#jumpTo").html(i);
        i--;
    } 
})