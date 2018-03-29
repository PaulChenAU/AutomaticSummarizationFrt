angular.module("mainM")
    .controller("mainCtrl", function($scope){
        $scope.$on("login", function(event, msg){
            console.log(event);
            console.log(msg);
            $scope.$broadcast("loginM",msg);
        })
    });