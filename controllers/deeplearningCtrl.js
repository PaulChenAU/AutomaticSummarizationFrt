angular.module("summary")
    .constant("getSummaryUrl", "http://localhost:5800/deeplearning/summary")
    .constant("summaryHistoryUrl", "http://localhost:5800/deeplearning/history")
    .controller("deeplearningCtrl", function($scope, $http, getSummaryUrl, summaryHistoryUrl){

        $http.get(summaryHistoryUrl, { withCredentials: true })
            .then(function(data){
                
                $scope.history = data.data.data.history;

            }).catch(function(error){
                $scope.historyError = error;
            });

        $scope.load = function(){
           $scope.$emit("dl","");
        };
        $scope.$on("dlans", function(event, msg){
            $scope.user = msg;
        });

        $scope.getSummary = function(document){
            $scope.user.document = document;
            $http.post(getSummaryUrl,{
                data:{
                    data: $scope.user
                }
            },{
                withCredentials:true
            }).then(function(data){
                // TODO THINGS
            
                $scope.data = data.data.data;

            }).catch(function(error){
                $scope.deeplearningError = error;
            })
        }

    })