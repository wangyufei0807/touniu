/*
* @description: 登录JS模块 
* @author: wyf  
* @email: 707366656@qq.com
* @time: 2015-08-29
*/
define(function(require, exports, module){
	require("jquery");
    require("validation");

	$(function(){
        
        //表单验证
        $("#loginForm").validate({
            rules:{
                account:"required",
                password:"required"
            },
            messages:{
                account:"用户名不能为空",
                password:"密码不能为空"
            },
            errorPlacement: function (error, element) {
                error.appendTo(element.parent().find(".ipt-err"));
            }
        })
	})
})