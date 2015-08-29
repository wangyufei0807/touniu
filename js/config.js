/**
 * 配置项
 */

var jpath = {};
jpath.jquery = 'lib/jquery/1.11.1/jquery-1.11.1.min';
jpath.kinmaxshow = 'lib/kinmaxshow/1.1/jquery.kinMaxShow-1.1.min.js';

seajs.config({

	//别名配置
	alias:{
		'jquery':jpath.jquery,
		'kinmaxshow':jpath.kinmaxshow
	}

});