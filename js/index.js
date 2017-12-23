/**
* 首页控制器
*/
//回调函数
var indexApp = angular.module('indexApp',['ngRoute'])	
	.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/',{ templateUrl:'home.html',controller:'homeCtrl'})
		.when('/login',{ templateUrl:'login.html',controller:"LoginController"})
		.when('/register',{ templateUrl:'register.html',controller:"RegisterController"})
		.otherwise({
			redirectTo:'/'
		});
}]);

var target = null;
indexApp.controller("homeCtrl",function($scope,$http){
	target = $scope;
	$scope.isHide = true;
	$http.jsonp("https://api.douban.com/v2/movie/top250?count=10&callback=backData").then(function successCallback(response){
		//debugger
	},function errorCallback(error){
		//debugger
	});
});

//催泪电影控制器
indexApp.controller("otherCtrl",function($scope,$rootScope){
	$rootScope.cuileimovies = ["海豚湾 The Cove","小鞋子","偷自行车的人 Ladri di biciclette","完美的世界 A Perfect World"];
});

//异步回调函数
function backData(data){
	target.movies = data.subjects;
	target.isHide = false;
}

indexApp.controller('LoginController',function($scope){
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

indexApp.controller('RegisterController',function($scope){
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