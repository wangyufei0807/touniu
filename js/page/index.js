/*
* @description: 首页JS模块 
* @author: wyf  
* @email: 707366656@qq.com
* @time: 2015-08-29
*/

define(function(require, exports, module){

	require("jquery");
	require("kinmaxshow");
	

	//初始化方法
	function _init(){
		var li = $(".ui-direct").find('.list').find('li');
		removeMr(li,4);

		$("#kinMaxShow").kinMaxShow();
	}

	//去除margin-right
	function removeMr(elem,column){
		elem.each(function(index, el) {
			if (($(this).index()+1)% column == 0) {
				$(this).css("margin-right","0px");
			};		
		});
	}

	//倒计时
	function GetRTime() {
	    var nMS = lefttime * 1000 - runtimes * 1000;
	    if (nMS >= 0) {
	        var nD = Math.floor(nMS / (1000 * 60 * 60 * 24)) % 24;
	        var nH = Math.floor(nMS / (1000 * 60 * 60)) % 24;
	        var nM = Math.floor(nMS / (1000 * 60)) % 60;
	        var nS = Math.floor(nMS / 1000) % 60;
	        $('.day').html(nD);
	        $('.hour').html(nH);
	        $('.minute').html(nM);
	        $('.second').html(nS);
	        runtimes++;
	        setTimeout(GetRTime, 1000);
	    }
	}

	$(function(){
		_init();
	})

	exports.GetRTime = GetRTime;
})