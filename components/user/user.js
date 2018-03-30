angular.module("user",[])
    .constant("default_avatar_url", "http://localhost:5800/avatar/")
    .constant("default_avatar_size", 0)
    .factory("user", function(){
        return {

        };
    })
    .directive("userInfo", function(user){
        return {
            restrict: "E",
            templateUrl: "components/user/mainUser.html",
            scope: true,
            controller: function($scope,default_avatar_url,default_avatar_size){
                $scope.$on("loginM", function(event, msg){
                    $scope.user = msg;
                    $scope.login = msg["loginStatus"];
                    if (!$scope.user.avatar_url || $scope.user.avatar_url.length == 0){
                        $scope.user.avatar_url = default_avatar_url + $scope.user.username + "/" + default_avatar_size;
                    }
                });
                $scope.$on("udmans",function(event,msg){
                    $scope.user = msg;
                    $scope.login = msg["loginStatus"];
                    if (!$scope.user.avatar_url || $scope.user.avatar_url.length == 0){
                        $scope.user.avatar_url = default_avatar_url + $scope.user.username + "/" + default_avatar_size;
                    }
                })
            }
        }
    });