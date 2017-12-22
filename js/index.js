/**
* 首页控制器
*/
//回调函数
var indexApp = angular.module('indexApp',['ngAnimate']);
var target = null;
indexApp.controller("indexCtrl",function($scope,$http){
	target = $scope;
	$scope.isHide = true;
	$http.jsonp("https://api.douban.com/v2/movie/top250?count=10&callback=backData")
		.success(function(response){			
			//$scope.movies = response.subjects;
		});
});
//异步回调函数
function backData(data){
	target.movies = data.subjects;
	target.isHide = false;
}