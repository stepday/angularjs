/**
* 注册控制器
*/
var registerApp = angular.module('regApp',[]);
registerApp.controller('regCtrl',function($scope){
	//注册提交
	$scope.register = function(){		
		if(!$scope.uname)
		{
			alert('请输入用户名称');
			return;
		}
		if(!$scope.pwd)
		{
			alert("请输入密码");
			return;
		}
		if($scope.pwd != $scope.repwd)
		{
			alert("两次密码输入不一致");
			return;
		}
		Common.Tools.Browser.go('login.html');
	};
});