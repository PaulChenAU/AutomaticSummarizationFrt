angular.module("summary")
    .constant("textranksummaryUrl", "http://localhost:5800/textrank/summary")
    .constant("textranksummaryhistoryUrl", "http://localhost:5800/textrank/history")
    .controller("textrankCtrl", function($scope, $http, textranksummaryUrl, textranksummaryhistoryUrl){

        $http.get(textranksummaryhistoryUrl, { withCredentials: true })
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
                let record = {
                    "document": document,
                    "summary": $scope.summary
                }
                $scope.history.push(record);

            }).catch(function(error){
                $scope.textrankError = error;
            })
        }

    })