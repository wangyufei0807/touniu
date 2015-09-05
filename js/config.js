/**
 * 配置项
 */

var jpath = {};
jpath.jquery = 'lib/jquery/1.11.1/jquery';
jpath.kinmaxshow = 'lib/kinmaxshow/1.1/jquery.kinMaxShow-1.1.src.js';
jpath.tabs = 'lib/tabs/1.0/jquery.tabs.js';
jpath.superslide = 'lib/superslide/2.1.1/jquery.superslide.2.1.1.js';
jpath.jqueryslide = 'lib/jqueryslide/1.0/jq.Slide.js';
jpath.fancybox = 'lib/fancybox/1.3.4/jquery.fancybox-1.3.4.js';
jpath.validation = 'lib/validation/1.11.1/jquery.validate.js';

seajs.config({
	//别名配置
	alias:{
		'jquery':jpath.jquery,
		'kinmaxshow':jpath.kinmaxshow,
		'tabs':jpath.tabs,
		'superslide':jpath.superslide,
		'jqueryslide':jpath.jqueryslide,
		'fancybox':jpath.fancybox,
		'validation':jpath.validation
	}

});