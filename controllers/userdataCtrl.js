angular.module("userdata", [])
    .controller("userdataCtrl", function($scope, $location){ 
        $scope.load = function(){
            $scope.$emit("udl","");
        }
        $scope.$on("udlans", function(event, msg){
            $scope.userdata = msg;
            $scope.login = msg["loginStatus"];
        }
        )

    })