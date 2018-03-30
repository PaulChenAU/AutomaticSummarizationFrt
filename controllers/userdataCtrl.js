angular.module("userdata", [])
    .constant("userdata_url", "http://localhost:5800/user/data")
    .controller("userdataCtrl", function($scope, $location, $http, userdata_url){
        function deepCopy(obj){
            if(typeof obj != 'object'){
                return obj;
            }
            var newobj = {};
            for ( var attr in obj) {
                newobj[attr] = deepCopy(obj[attr]);
            }
            return newobj;
        }

        $scope.load = function(){
            $scope.$emit("udl","");
        }
        $scope.$on("udlans", function(event, msg){

            var c_msg = deepCopy(msg);
            $scope.user = c_msg;
            $scope.login = c_msg["loginStatus"];
        })
        $scope.modifydata = function(user){
            $http.post(userdata_url,{
                data:{
                    user
                }
            },{
                withCredentials:true
            }).then(function(data){
                // TODO THINGS
                $scope.user = data.data.data;
                console.log($scope.user);
                $scope.user["loginStatus"] = true;
                $scope.$emit("udm", $scope.user);

            }).catch(function(error){
                $scope.changeError = error;
            })
            }

    })