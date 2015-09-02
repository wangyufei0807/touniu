/**
 * 配置项
 */

var jpath = {};
jpath.jquery = 'lib/jquery/1.11.1/jquery';
jpath.kinmaxshow = 'lib/kinmaxshow/1.1/jquery.kinMaxShow-1.1.src.js';

seajs.config({
	//别名配置
	alias:{
		'jquery':jpath.jquery,
		'kinmaxshow':jpath.kinmaxshow
	}

});