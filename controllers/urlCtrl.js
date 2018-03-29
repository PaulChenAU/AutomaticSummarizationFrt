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
        $scope.jumpPagerank = function(){
            console.log("to pagerank");
            console.log($scope.login);
            if($scope.login){
                $location.path("/pagerank")
            }
        }

    })