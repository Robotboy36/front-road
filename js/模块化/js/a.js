
//模块一
// 参数名称不能改变
// require: 依赖接口
// exports: 对外接口
define(function(require, exports, module){
	
	//依赖模块
	// 如果地址是个模块， require方法将会返回该模块的对外接口
	var bExports = require( "./b.js" );
	
	function _print(){		
		console.log( "这是一个神奇的测试"+bExports.curPage );
	}
	
	//绑定到对外接口
	exports.print = _print;
});
