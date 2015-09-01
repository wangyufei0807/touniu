define(function(require, exports, module){
	require("jquery");

	$(function(){
		//网站导航下拉子菜单
        $("#subnav").mouseenter(function () {
            $(this).children(".dropdown").addClass("cur");
            $(this).children(".sublist").show();
        })
        $("#subnav").mouseleave(function () {
            $(this).children(".dropdown").removeClass("cur");
            $(this).children(".sublist").hide();
        })
	})
})