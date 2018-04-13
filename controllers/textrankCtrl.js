angular.module("summary")
    .constant("textranksummaryUrl", "http://localhost:5800/textrank/summary")
    .constant("textranksummaryhistoryUrl", "http://localhost:5800/textrank/history")
    .controller("textrankCtrl", function($scope, $http, textranksummaryUrl, textranksummaryhistoryUrl){

        $scope.load = function(){
           $scope.$emit("dl","");
        };
        $scope.$on("dlans", function(event, msg){
            $scope.user = msg;
        });

        $scope.getSummary = function(document){
            
            $scope.user.document = document;
            $http.post(textranksummaryUrl,{
                data:{
                    data: $scope.user
                }
            },{
                withCredentials:true
            }).then(function(data){
                // TODO THINGS
            
                $scope.res = data.data.data;
                $scope.summary = data.data.data.summary;

            }).catch(function(error){
                $scope.textrankError = error;
            })
        }

    })