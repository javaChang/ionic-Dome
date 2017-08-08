(function(){
	'use strict';

	angular
		.module('app')
		.controller('DetailCtrl', DetailCtrl);

	DetailCtrl.$inject = ['$scope', '$stateParams'];
	function DetailCtrl($scope, $stateParams) {
		var vm = this;
        
        vm.init = init; // 初始化函数

        // 调用初始化
        vm.init();
        
        /*
         * 初始化页面数据
         * Author:yujp
         * Date:2017-6-13
         */
        function init() {
            vm.txt = '我是测试的文本';
        }
	}
})();


