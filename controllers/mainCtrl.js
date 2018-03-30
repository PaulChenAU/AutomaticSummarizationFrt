angular.module("mainM")
    .controller("mainCtrl", function($scope){
        $scope.$on("login", function(event, msg){
            $scope.user = msg
            $scope.$broadcast("loginM",msg);
            $scope.usershow = true;
        })
        $scope.$on("udl", function(event,msg){
            $scope.$broadcast("udlans",$scope.user);
        })
        $scope.$on("udm", function(event,msg){
            $scope.$broadcast("udmans", msg);
        })
    });