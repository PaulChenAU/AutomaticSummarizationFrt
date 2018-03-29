angular.module("mainM")
    .controller("mainCtrl", function($scope){
        $scope.$on("login", function(event, msg){
            $scope.$broadcast("loginM",msg);
            $scope.usershow = true;
        })
    });