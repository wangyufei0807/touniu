define(function(require, exports, module){
	require("jquery");

	$(function(){
		//网站导航下拉子菜单
        $("#subnav").mouseenter(function () {
            $(this).addClass("subitem");
            $(this).children(".sublist").show();
        })
        $("#subnav").mouseleave(function () {
            $(this).removeClass("subitem");
            $(this).children(".sublist").hide();
        })

        //用户登录后下拉菜单
        $("#j-usernavdown").mouseover(function () {
            $(this).addClass("cur");
            $(this).children(".user-menu").show();
        })
        $("#j-usernavdown").mouseout(function () {
            $(this).removeClass("cur");
            $(this).children(".user-menu").hide();
        })
	})
})