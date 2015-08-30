/*
* @description: 首页JS模块 
* @author: wyf  
* @email: 707366656@qq.com
* @time: 2015-08-29
*/

define(function(require, exports, module){

	require("jquery");

	//初始化方法
	function _init(){
		//$("#kinMaxShow").kinMaxShow();
		var li = $(".ui-direct").find('.list').find('li');
		removeMr(li,4);
	}

	//去除margin-right
	function removeMr(elem,column){
		elem.each(function(index, el) {
			if (($(this).index()+1)% column == 0) {
				$(this).css("margin-right","0px");
			};		
		});
	}


	$(function(){
		_init();
	})
})