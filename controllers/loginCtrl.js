angular.module("user")
    .constant("loginUrl", "http://localhost:5800/user/login")
    .controller("loginCtrl", function($scope, loginUrl, $http, $location){ 
        $scope.login = function(user, pass){
            $http.post(loginUrl,{
                data:{
                    username: user,
                    password: pass
                }
            },{
                withCredentials:true
            }).then(function(data){
                // TODO THINGS

            }).error(function(error){
                $scope.loginError = error;
            })
            }
        })
