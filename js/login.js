/**
* 登录控制器
*/
var loginApp = angular.module('loginApp',[]);
loginApp.controller('loginCtrl',function($scope){

	//登录提交
	$scope.login = function(){		
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
		Common.Tools.Cookies.set('name',$scope.name);
		Common.Tools.Browser.go('index.html');
	};
});