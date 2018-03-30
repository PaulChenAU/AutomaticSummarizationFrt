angular.module("mainM")
    .controller("mainCtrl", function($scope){
        $scope.$on("login", function(event, msg){
            $scope.ud = msg
            $scope.$broadcast("loginM",msg);
            $scope.usershow = true;
        })
        $scope.$on("udl", function(event,msg){
            $scope.$broadcast("udlans",$scope.ud)
        })
    });