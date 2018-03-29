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
                $scope.data = data.data.data;
                $scope.data["loginStatus"] = true;
                $scope.$emit("login", $scope.data);

            }).catch(function(error){
                $scope.loginError = error;
            })
            }
        })
