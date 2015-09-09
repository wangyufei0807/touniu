define(function(require, exports, module){
	require("jquery");
    var layer = require("layer");
	$(function(){
		$("#tanchuang").click(function(event) {
            var ii = layer.load();
            //此处用setTimeout演示ajax的回调
            setTimeout(function(){
                layer.close(ii);
            }, 1000);
        });
	})
})