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

        $("#ok").click(function(event) {
            if ($(this).prop("checked")) {
                $("#subBtn").removeClass('ui-button-gray').addClass('ui-button-red');
                $("#subBtn").attr("type","submit");
            }else{
                $("#subBtn").removeClass('ui-button-red').addClass('ui-button-gray');
                $("#subBtn").attr("type","button");
            }
        });

        //表单验证
        $("#registerForm").validate({
            rules:{
                account:{
                    required:true,
                    rangelength:[6,16],
                    userIsMobile:true,
                    noEmail:true,
                    remote: {
                        type:"POST",
                        url:"Regedit_validateConfirmCode",
                        data:{
                            account: function() {
                                return true;
                            }
                        }
                    }
                },
                password:{
                    required:true,
                    rangelength:[6,20]
                },
                rePassword:{
                    required:true,
                    equalTo:"#password"
                },
                phone:{
                    required:true,
                    isMobile:true
                },
                phonecode:{
                    required:true
                },
                verify:{
                    required:true
                }
            },
            messages:{
                account:{
                    required:"用户名不能为空",
                    rangelength:"请输入6-16位字符，可以是字母、数字、下划线",
                    userIsMobile:"用户名不能为手机号",
                    noEmail:"用户名不能为邮箱",
                    remote:"用户名已经存在"
                },
                password:{
                    required:"密码不能为空",
                    rangelength:"密码长度只能在6-20位字符之间"
                },
                rePassword:{
                    required:"确认密码不能为空",
                    equalTo:"您输入的密码不一致"
                },
                phone:{
                    required:"手机号码不能为空",
                    isMobile:"手机号码格式不正确，请重新输入"
                },
                phonecode:{
                    required:"手机验证码不能为空"
                },
                verify:{
                    required:"验证码不能为空"
                }
            },
            errorPlacement: function (error, element) {
                error.appendTo(element.parent().find(".ipt-err"));
            }
        })
	})

    function time(a){
        if (time == 'undefined'){
            time = 60;
        }
            
        $("#hqyzm").html(time + "秒");

        time = time - 1;
        if (time >= 0)
        {
            setTimeout("fun_timedown", 1000);
        } else
        {
            $("#hqyzm").attr("disabled", "");
            $("#hqyzm").css({"color": "#FFF", "background-color": "#00afeb"});
            $("#hqyzm").html("获取短信验证码");

        }
    }
})