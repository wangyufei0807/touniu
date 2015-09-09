/*
* @description: 注册JS模块 
* @author: wyf  
* @email: 707366656@qq.com
* @time: 2015-08-29
*/
define(function(require, exports, module){
	require("jquery");
    require("validation");

	$(function(){

        //表单验证
        $("#findPwdForm1").validate({
            rules:{
                account:{
                    required:true
                },
                verify:{
                    required:true
                }
            },
            messages:{
                account:{
                    required:"用户名不能为空"
                },
                verify:{
                    required:"验证码不能为空"
                }
            },
            errorPlacement: function (error, element) {
                error.appendTo(element.parent().find(".ipt-err"));
            }
        })

        //表单验证2
        $("#findPwdForm2").validate({
            rules:{
                phonecode:{
                    required:true
                }
            },
            messages:{
                phonecode:{
                    required:"短信验证码不能为空"
                }
            },
            errorPlacement: function (error, element) {
                error.appendTo(element.parent().find(".ipt-err"));
            }
        })

        //表单验证3
        $("#findPwdForm3").validate({
            rules:{
                password:{
                    required:true,
                    rangelength:[6,20]
                },
                rePassword:{
                    required:true,
                    equalTo:"#password"
                }
            },
            messages:{
                password:{
                    required:"密码不能为空",
                    rangelength:"密码长度只能在6-20位字符之间"
                },
                rePassword:{
                    required:"确认密码不能为空",
                    equalTo:"您输入的密码不一致"
                }
            },
            errorPlacement: function (error, element) {
                error.appendTo(element.parent().find(".ipt-err"));
            }
        })
	})
    
    /*

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
    */
})