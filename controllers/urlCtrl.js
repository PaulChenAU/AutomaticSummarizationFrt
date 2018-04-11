angular.module("url",[])
    .controller("urlCtrl", function($scope, $location){ 
        var info = null;
        var login = false;
        $scope.info = info;
        $scope.login = login;
        $scope.$on("loginM", function(event, msg){
            $scope.url = msg;
            $scope.login = msg["loginStatus"];
        })
        $scope.jumpDeeplearning = function(){
            if($scope.login){
                $location.path("/deeplearning")
            }
        }
        $scope.jumpTextrank = function(){
            if($scope.login){
                $location.path("/textrank")
            }
        }
        $scope.jumpUserdata = function(){
            if($scope.login){
                $location.path("/userdata")
            }
        }
        $scope.jumpDiagram = function(){
            if($scope.login){
                $location.path("/diagram")
            }
        }

    })