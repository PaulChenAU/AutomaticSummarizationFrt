angular.module("user",[])
    .factory("user", function(){
        return {

        };
    })
    .directive("userInfo", function(user){
        return {
            restrict: "E",
            templateUrl: "components/user/mainUser.html",
            controller: function($scope){

            }
        }
    });